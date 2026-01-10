import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { userDetails, cart } = req.body;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Construct the email content
  const orderItems = cart
    .map((item) => `${item.name} x${item.quantity}`)
    .join("\n");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ORDER_RECEIVER_EMAIL,
    subject: "New Order Received From Website",
    text: `
    Name: ${userDetails.name}
    Email: ${userDetails.email}
    Phone: ${userDetails.phone || "N/A"}
    Message: ${userDetails.message || "N/A"}

    Order Details:
    ${orderItems}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Order sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send order", error });
  }
}
