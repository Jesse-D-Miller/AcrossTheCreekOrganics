function ContactForm() {
  return (
    <div className="contact-form-page">
      <h2>Contact Us</h2>
      <p>
        Please fill out the form below.
      </p>
      <p>We will respond as soon as possible with our current Certified Organic Seed Potato availability.</p>
      <p>Once your order is confirmed, we will provide an invoice and shipping details.</p>

      <form className="contact-form" action="" method="get">
        <note style={{fontSize: "0.75rem", margin: "0", textAlign: "left"}}>* Required fields</note>
        <div>
          <label htmlFor="name">Name: *</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">Email: *</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="number">Phone Number:</label>
          <input type="tel" id="number" name="number" />
        </div>

        <div>
          <label htmlFor="message">Message: *</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
