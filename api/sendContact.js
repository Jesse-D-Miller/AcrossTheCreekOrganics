import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const RATE_LIMIT = 10; // max requests
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const ipHits = new Map();

const ALLOWED_ORIGIN =
  process.env.FRONTEND_ORIGIN ||
  "https://acrossthecreekorganics.jesse-miller.com";

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
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Vary", "Origin");

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  // Rate limiting by IP
  const ip = getClientIp(req);
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, start: now };

  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }

  entry.count += 1;
  ipHits.set(ip, entry);
  
  if (entry.count >= RATE_LIMIT) {
    return res.status(429).json({ error: "Too many requests" });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    const safeName = cleanText(name, 80);
    const safeEmail = cleanEmail(email, 200);
    const safePhone = cleanText(phone, 40);
    const safeMessage = cleanText(message, 2000);

    if (!safeName || !safeEmail || !safeMessage) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required" });
    }

    const text = `
New contact form submission:

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone || "N/A"}
Message:
${safeMessage}
`.trim();

    const msg = {
      to: process.env.ORDER_RECEIVER_EMAIL, // business owner email
      from: process.env.FROM_EMAIL, // verified sender (domain)
      replyTo: safeEmail, // reply to customer
      subject: `[Contact Form] ${safeName}`,
      text,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
