import { useEffect } from "react";
import useCart from "../context/useCart";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const { cart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length <= 0) {
      // If cart is empty, redirect to home page
      navigate("/");
    }
  }, [cart]);

  return (
    <div className="confirmation-page">
      <h2>Your order has been placed successfully!</h2>
      <p>Thank you for choosing Across The Creek Organics!</p>
      <p>
        We will get back to you shortly with final order details, product
        availability, and shipping information.
      </p>
    </div>
  );
}

export default Confirmation;
