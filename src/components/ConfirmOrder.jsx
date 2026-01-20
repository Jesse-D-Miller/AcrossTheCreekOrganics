import useCart from "../context/useCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function ConfirmOrder({ userDetails }) {
  const [sending, setSending] = useState(false);

  const { cart, clearCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length <= 0) {
      // If cart is empty, redirect to home page
      navigate("/");
    }
  }, [cart]);

  const handleConfirm = async () => {
    if (sending) return;
    setSending(true);

    try {
      const res = await fetch("/api/sendOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetails, cart }),
      });

      if (!res.ok) {
        throw new Error("Failed to send order");
      }

      clearCart();
      navigate("/confirmation");
    } catch (err) {
      console.error(err);
      alert("Something went wrong sending your order. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="confirm-order-page">
      <h2>Confirm Request</h2>
      <p>Please confirm your order request details below:</p>
      <div className="user-details-summary">
        <p>
          <strong>Name:</strong> {userDetails.name}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p>
          <strong>Phone:</strong> {userDetails.phone}
        </p>
        <p>
          <strong>Country:</strong> {userDetails.country}
        </p>
        {(userDetails.country === "Canada" ||
          userDetails.country === "United States") && (
          <p>
            <strong>Province/State:</strong> {userDetails.province}
          </p>
        )}
        <p>
          <strong>Address 1:</strong> {userDetails.address1}
        </p>
        {userDetails.address2 && (
          <p>
            <strong>Address 2:</strong> {userDetails.address2}
          </p>
        )}
        <p>
          <strong>Postal Code:</strong> {userDetails.postalCode}
        </p>
        <p>
          <strong>Message:</strong> {userDetails.message}
        </p>
      </div>
      <div className="order-detail-summary">
        {cart.map((item) => (
          <div key={item.id} className="order-item-summary">
            <span style={{ fontWeight: "bold" }}>{item.name}</span>
            <span>{item.quantity}</span>
          </div>
        ))}
      </div>
      <button onClick={handleConfirm} disabled={sending || cart.length === 0}>
        {sending ? "Sending..." : "Send Request"}
      </button>
    </div>
  );
}

export default ConfirmOrder;
