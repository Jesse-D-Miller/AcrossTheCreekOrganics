import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { userDetails, cart } = req.body;

    // Basic validation
    const name = userDetails?.name?.trim();
    const email = userDetails?.email?.trim();
    if (!name || !email || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const orderItems = cart
      .map((item) => `- ${item.name} x${item.quantity}${item.notes ? ` (${item.notes})` : ""}`)
      .join("\n");

    const text = `
New order inquiry

Customer:
Name: ${name}
Email: ${email}
Phone: ${userDetails?.phone || "N/A"}

Message:
${userDetails?.message || "N/A"}

Items:
${orderItems}
`.trim();

    const msg = {
      to: process.env.ORDER_RECEIVER_EMAIL,   // business owner email
      from: process.env.FROM_EMAIL,           // verified sender (domain)
      replyTo: email,                         // reply to customer
      subject: `New order inquiry from ${name}`,
      text,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SendGrid error:", err?.response?.body || err);
    return res.status(500).json({ error: "Failed to send order email" });
  }
}

