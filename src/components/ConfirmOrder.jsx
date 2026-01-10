import useCart from "../context/useCart";
import { useNavigate } from "react-router-dom";

function ConfirmOrder({ userDetails }) {
  const { cart, clearCart } = useCart();

  const navigate = useNavigate();

  const handleConfirm = async () => {
    await fetch("/api/sendOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userDetails, cart }),
    });

    clearCart();
    navigate("/confirmation");
  };

  return (
    <div className="confirm-order-page">
      <h2>Confirm Order</h2>
      <p>please confirm your order details below:</p>
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
      <button onClick={handleConfirm}>Confirm Order</button>
    </div>
  );
}

export default ConfirmOrder;
