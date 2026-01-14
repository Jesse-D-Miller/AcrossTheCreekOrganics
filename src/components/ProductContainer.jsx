import potatoData from "../data/potatoes.js";
import Product from "./Product.jsx";
import { Link } from "react-router-dom";

function ProductContainer() {
  return (
    <>
      <div className="order-preamble">
        <p>
          <strong>About Ordering: </strong>
          This website allows you to submit an order request. Availability is
          confirmed after we review each request. We’ll follow up with
          confirmation, pricing, and shipping details.
        </p>
      </div>
      <div className="product-container">
        {potatoData.map((potato) => (
          <Link
            to={`/${potato.id}`}
            style={{ textDecoration: "none" }}
            key={potato.id}
          >
            <Product
              key={potato.name}
              name={potato.name}
              description={potato.description}
              image={potato.image[0]}
              potatoId={potato.id}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductContainer;
