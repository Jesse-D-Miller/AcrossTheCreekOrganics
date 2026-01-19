import { useState } from "react";

function ContactForm() {
  const [sending, setSending] = useState(false);
  const [emailMatch, setEmailMatch] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const form = e.target;
    const email = form.email.value.trim();
    const emailConfirm = form.emailConfirm.value.trim();

    if (email !== emailConfirm) {
      alert("Email addresses do not match. Please check and try again.");
      setEmailMatch(false);
      return;
    } else {
      setEmailMatch(true);
    }

    setSending(true);

    const formData = {
      name: form.name.value.trim(),
      email,
      phone: form.number.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch("/api/sendContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      alert("Thanks for your message. We’ll get back to you shortly.");
      form.reset();
    } catch {
      alert("Something went wrong sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-form-page">
      <h2>Contact Us</h2>
      <p>Use the form below to get in touch with us.</p>
      <p>
        For general questions, availability inquiries, or additional
        information, send us a message and we’ll respond as soon as we can.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <note style={{ fontSize: "0.75rem", margin: "0", textAlign: "left" }}>
          * Required fields
        </note>
        <div>
          <label htmlFor="name">Name: *</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">Email: *</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="emailConfirm">Confirm Email: *</label>
          <input
            type="email"
            id="emailConfirm"
            name="emailConfirm"
            required
            style={{ color: emailMatch ? undefined : 'red' }}
          />
        </div>

        <div>
          <label htmlFor="number">Phone Number:</label>
          <input type="tel" id="number" name="number" />
        </div>

        <div>
          <label htmlFor="message">Message: *</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit">{sending ? "Sending..." : "Send Message"}</button>
      </form>
    </div>
  );
}

export default ContactForm;
