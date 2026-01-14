import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Details({ setUserDetails }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isValid = form.name.trim() && form.email.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setUserDetails(form);
      navigate("/confirm-order");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="user-order-details">
      <h2>Details</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <note style={{ fontSize: "0.75rem", margin: "0", textAlign: "left" }}>
          * Required fields
        </note>
        <div>
          <label htmlFor="name">Name: *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={60}
            pattern="[\w .\-']{2,60}"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email: *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={100}
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="number">Phone Number:</label>
          <input
            type="tel"
            id="number"
            name="phone"
            maxLength={30}
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            maxLength={500}
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" disabled={!isValid}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Details;
