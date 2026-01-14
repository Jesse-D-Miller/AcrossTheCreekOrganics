import useCart from "../context/useCart";
import { Link } from "react-router-dom";

function Order() {
  const { cart, removeFromCart, clearCart, incrementItem, decrementItem } =
    useCart();

  return (
    <div className="order-page">
      <h2>Your Selected Items</h2>
      {cart.length === 0 ? (
        <p>
          There is nothing in your order request yet.{" "}
          <Link to="/">Shop now!</Link>
        </p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {cart.map((item) => (
            <li key={item.id}>
              <div className="left-section">
                <span style={{ fontWeight: "bold" }}>{item.name}</span>
              </div>
              <div className="right-section">
                {item.quantity === 1 ? (
                  <button onClick={() => removeFromCart(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#EA3323"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => decrementItem(item.id)}>-</button>
                )}
                <span> {item.quantity}</span>
                <button onClick={() => incrementItem(item.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>
        <Link to="/details">
          <button
            className="checkout-button"
            disabled={cart.length === 0}
            style={
              cart.length === 0
                ? {
                    backgroundColor: "#cccccc",
                    color: "var(--secondary-black)",
                  }
                : {}
            }
          >
            Next: Contact Details
          </button>
        </Link>
        {/* <button
          onClick={clearCart}
          style={{ marginLeft: "1rem" }}
          disabled={cart.length === 0}
        >
          Clear Cart
        </button> */}
      </div>
    </div>
  );
}

export default Order;
