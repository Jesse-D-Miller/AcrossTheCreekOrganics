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

  const { addToCart } = useCart();


  if (!potato) return <div>Potato not found</div>;

  function handleAddToCart(quantity) {
    const qty = quantities[quantity.id];
    if (qty > 0) {
      const item = {
        id: `${potato.id}-${quantity.id}`,
        name: `${potato.name} - ${quantity.label}`,
        quantity: qty,
      };
      addToCart(item);
      setQuantities((prev) => ({ ...prev, [quantity.id]: 0 }));
    }
  }

  return (
    <div className="product-page">
      <h2>{potato.name}</h2>
      <h3>Certified Organic Seed Potato</h3>

      <div className="product-gallery">
        <img src={potato.image[1]} alt={`${potato.name}`} />

        {potato.salesQuantities.map((quantity) => (
          <div className="cart-actions" key={quantity.id}>
            <div className="details">{quantity.label}</div>
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
            <div className="add-to-cart">
              <button className="add-to-cart-button" onClick={() => handleAddToCart(quantity)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <h4>Characteristics:</h4>
      <p>Maturity: {potato.maturity}</p>
      <p>Tubers: {potato.tubers}</p>
      <p>Yield: {potato.yield}</p>
      <p>Use: {potato.use}</p>
      <h4>Disease Information:</h4>
      <ul>
        <li>Field resistant: {potato.diseaseInfo["Field resistant"]}</li>
        <li>Resistant: {potato.diseaseInfo.Resistant}</li>
        <li>
          Moderately resistant: {potato.diseaseInfo["Moderately resistant"]}
        </li>
        <li>Susceptible: {potato.diseaseInfo.Susceptible}</li>
        <li>Highly Susceptible: {potato.diseaseInfo["Highly Susceptible"]}</li>
      </ul>
      <p>{potato.description}</p>
    </div>
  );
}

export default ProductPage;
