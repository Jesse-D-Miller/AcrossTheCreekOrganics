import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// in-memory rate limiter (for serverless, resets on cold start)
const RATE_LIMIT = 5; // max requests
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const ipHits = new Map();

// makes it so that only requests from the frontend origin are allowed
const ALLOWED_ORIGIN =
  process.env.FRONTEND_ORIGIN ||
  "https://acrossthecreekorganics.jesse-miller.com";

//text sanitization functions
function cleanText(value, maxLen = 500) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F]/g, "") // strip control chars
    .trim()
    .slice(0, maxLen);
}

function cleanEmail(value, maxLen = 200) {
  const email = cleanText(value, maxLen).toLowerCase();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return emailRegex.test(email) ? email : "";
}

function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.length) return xff.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

export default async function handler(req, res) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  // Rate limiting by IP
  const ip = getClientIp(req);
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, start: now };

  if (now - entry.start > WINDOW_MS) {
    // Reset window
    entry.count = 0;
    entry.start = now;
  }

  entry.count++;
  ipHits.set(ip, entry);
  if (entry.count > RATE_LIMIT) {
    return res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
  }

  try {
    const { userDetails, cart } = req.body || {};


    const name = cleanText(userDetails?.name, 80);
    const email = cleanEmail(userDetails?.email);
    const phone = cleanText(userDetails?.phone, 40);
    const message = cleanText(userDetails?.message, 1000);
    const country = cleanText(userDetails?.country, 40);
    const province = cleanText(userDetails?.province, 40);
    const address1 = cleanText(userDetails?.address1, 100);
    const address2 = cleanText(userDetails?.address2, 100);
    const postalCode = cleanText(userDetails?.postalCode, 20);

    if (!name || !email || !address1 || !country || !postalCode || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    // Sanitize cart items
    const safeCart = cart
      .map((item) => {
        const itemName = cleanText(item?.name, 100);
        const qtyRaw = Number(item?.quantity);
        const quantity = Number.isFinite(qtyRaw)
          ? Math.max(1, Math.min(999, qtyRaw))
          : 1;
        const notes = cleanText(item?.notes, 200);
        return itemName ? { name: itemName, quantity, notes } : null;
      })
      .filter(Boolean);

    if (safeCart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const orderItems = safeCart
      .map(
        (item) =>
          `- ${item.name} x${item.quantity}${
            item.notes ? ` (${item.notes})` : ""
          }`
      )
      .join("\n");

    const text = `
  New order inquiry

  Customer:
  Name: ${name}
  Email: ${email}
  Phone: ${phone || "N/A"}

  --------------------------------------------

  Country: ${country}
  ${country === "Canada" || country === "United States" ? `Province/State: ${province || "N/A"}\n` : ""}Address 1: ${address1}
  Address 2: ${address2 || "N/A"}
  Postal Code: ${postalCode}

  --------------------------------------------

  Message:
  ${message || "N/A"}

  --------------------------------------------

  Items:
  ${orderItems}
  `.trim();

    const msg = {
      to: process.env.ORDER_RECEIVER_EMAIL, // business owner email
      from: process.env.FROM_EMAIL, // verified sender (domain)
      replyTo: email, // reply to customer
      subject: `[Order Inquiry] ${name}`,
      text,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SendGrid error:", err?.response?.body || err);
    return res.status(500).json({ error: "Failed to send order email" });
  }
}
