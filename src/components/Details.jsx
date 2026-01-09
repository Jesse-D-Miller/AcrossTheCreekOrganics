import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="user-order-details">
      <h2>Details</h2>
      <form className="contact-form" action="" method="get">
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
          <label htmlFor="number">Phone Number:</label>
          <input type="tel" id="number" name="number" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <Link to="/confirm-order">
          <button type="submit">Next</button>
        </Link>
      </form>
    </div>
  );
}

export default Details;
