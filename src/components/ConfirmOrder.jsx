import useCart from "../context/useCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ConfirmOrder({ userDetails }) {
  const [sending, setSending] = useState(false);

  const { cart, clearCart } = useCart();

  const navigate = useNavigate();

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
      <h2>Confirm Order</h2>
      <p>Please confirm your order details below:</p>
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
      <button onClick={handleConfirm} disabled={sending || cart.length === 0}>{sending ? "Sending..." : "Send Request"}</button>
    </div>
  );
}

export default ConfirmOrder;
