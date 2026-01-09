import useCart from "../context/useCart";
import { Link } from "react-router-dom";

function Order() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="order-page">
      <h2>Your Order</h2>
      <p>This is where you can review and manage your order.</p>
    </div>
  );
}

export default Order;