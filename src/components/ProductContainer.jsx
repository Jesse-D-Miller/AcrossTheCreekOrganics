import potatoData from "../data/potatoes.js";
import Product from "./Product.jsx";

function ProductContainer() {
  return (
    <div className="product-container">
      {potatoData.map((potato) => (
        <Product
          key={potato.name}
          name={potato.name}
          description={potato.description}
          image={potato.image}
        />
      ))}
    </div>
  );
}

export default ProductContainer;
