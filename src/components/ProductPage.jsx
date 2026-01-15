import { useParams } from "react-router-dom";
import potatoData from "../data/potatoes.js";
import useCart from "../context/useCart";
import { useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const potato = potatoData.find((p) => String(p.id) === id);
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    potato.salesQuantities.forEach((q) => {
      initial[q.id] = 0;
    });
    return initial;
  });
  const [rowConfirmations, setRowConfirmations] = useState({});

  const { addToCart } = useCart();

  if (!potato) return <div>Potato not found</div>;


  function handleAddAllToCart() {
    const itemsToAdd = potato.salesQuantities
      .filter((quantity) => quantities[quantity.id] > 0)
      .map((quantity) => ({
        id: `${potato.id}-${quantity.id}`,
        name: `${potato.name} - ${quantity.label}`,
        quantity: quantities[quantity.id],
        qid: quantity.id,
      }));
    if (itemsToAdd.length > 0) {
      itemsToAdd.forEach((item) => addToCart(item));
      // Show confirmation per row
      const confirmations = {};
      itemsToAdd.forEach((item) => {
        confirmations[item.qid] = true;
      });
      setRowConfirmations(confirmations);
      setTimeout(() => {
        setRowConfirmations({});
      }, 2000);
      // Reset all toggles to zero
      setQuantities(() => {
        const reset = {};
        potato.salesQuantities.forEach((q) => {
          reset[q.id] = 0;
        });
        return reset;
      });
    }
  }

  return (
    <div className="product-page">
      <h2>{potato.name}</h2>
      <h3>Certified Organic Seed Potatoes</h3>

      <div className="product-gallery">
        <img src={potato.image[1]} alt={`${potato.name}`} />
        <div className="order-card">
          <h4>Select Quantities</h4>
          {potato.salesQuantities.map((quantity) => (
            <div className="cart-actions" key={quantity.id} style={{ position: 'relative' }}>
              <div className="details">{quantity.label}</div>
              <div className="cart-buttons">
                <div className="actions">
                  <button
                    className="decrement-button"
                    onClick={() =>
                      setQuantities((q) => ({
                        ...q,
                        [quantity.id]: Math.max(0, q[quantity.id] - 1),
                      }))
                    }
                  >
                    -
                  </button>
                  <span className="quantity-display">
                    {quantities[quantity.id]}
                  </span>
                  <button
                    className="increment-button"
                    onClick={() =>
                      setQuantities((q) => ({
                        ...q,
                        [quantity.id]: q[quantity.id] + 1,
                      }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              {rowConfirmations[quantity.id] && (
                <div className="add-cart-confirmation">
                  Added to Request!
                </div>
              )}
            </div>
          ))}
          <button
            className="add-all-to-cart"
            onClick={handleAddAllToCart}
          >
            Add to Request
          </button>
        </div>
      </div>
      <h4>Characteristics:</h4>
      <p><strong>Maturity:</strong> {potato.maturity}</p>
      <p><strong>Tubers:</strong> {potato.tubers}</p>
      <p><strong>Yield:</strong> {potato.yield}</p>
      <p><strong>Use:</strong> {potato.use}</p>
      <h4>Disease Information:</h4>
      <ul>
        <li><strong>Field resistant:</strong> {potato.diseaseInfo["Field resistant"]}</li>
        <li><strong>Resistant:</strong> {potato.diseaseInfo.Resistant}</li>
        <li>
          <strong>Moderately resistant:</strong> {potato.diseaseInfo["Moderately resistant"]}
        </li>
        <li><strong>Susceptible:</strong> {potato.diseaseInfo.Susceptible}</li>
        <li><strong>Highly Susceptible:</strong> {potato.diseaseInfo["Highly Susceptible"]}</li>
      </ul>
      <p style={{ borderTop: "var(--secondary-black) 1px solid", borderBottom: "var(--secondary-black) 1px solid", padding: "1rem 0" }}><strong>Description:</strong> {potato.description}</p>
    </div>
  );
}

export default ProductPage;
