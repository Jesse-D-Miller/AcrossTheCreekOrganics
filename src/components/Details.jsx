import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Details({ setUserDetails }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
    country: "Canada",
    province: "",
    address1: "",
    address2: "",
    postalCode: "",
    message: "",
  });
    // Province/state options for Canada and US
    const provinceOptions = {
      Canada: [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon"
      ],
      "United States": [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    };
  const [emailMatch, setEmailMatch] = useState(true);

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
    if (form.email !== form.emailConfirm) {
      setEmailMatch(false);
      alert("Email addresses do not match. Please check and try again.");
      return;
    }
    setEmailMatch(true);
    if (isValid) {
      setUserDetails(form);
      navigate("/confirm-order");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="user-order-details">
      <p>Please provide your contact information below:</p>
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
          <label htmlFor="emailConfirm">Confirm Email: *</label>
          <input
            type="email"
            id="emailConfirm"
            name="emailConfirm"
            required
            maxLength={100}
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            value={form.emailConfirm}
            onChange={handleChange}
            style={{ color: emailMatch ? undefined : 'red' }}
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
          <label htmlFor="country">Country: *</label>
          <select
            id="country"
            name="country"
            required
            value={form.country}
            onChange={handleChange}
          >
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {(form.country === "Canada" || form.country === "United States") && (
          <div>
            <label htmlFor="province">Province/State: *</label>
            <select
              id="province"
              name="province"
              required
              value={form.province}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              {provinceOptions[form.country].map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="address1">Address Line 1: *</label>
          <input
            type="text"
            id="address1"
            name="address1"
            required
            maxLength={100}
            value={form.address1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address2">Address Line 2:</label>
          <input
            type="text"
            id="address2"
            name="address2"
            maxLength={100}
            value={form.address2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code: *</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            required
            maxLength={20}
            value={form.postalCode}
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
          Next: Review Request
        </button>
      </form>
    </div>
  );
}

export default Details;
