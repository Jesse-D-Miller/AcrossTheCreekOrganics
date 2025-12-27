import potatoData from "../data/potatoes.js";
import Product from "./Product.jsx";
import { Link } from "react-router-dom";

function ProductContainer() {
  return (
    <div className="product-container">
      {potatoData.map((potato) => (
        <Link to={`/${potato.id}`} style={{ textDecoration: 'none' }} key={potato.id}>
          <Product
            key={potato.name}
            name={potato.name}
            description={potato.description}
            image={potato.image}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductContainer;
