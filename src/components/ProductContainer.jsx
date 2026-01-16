import potatoData from "../data/potatoes.js";
import Product from "./Product.jsx";
import { Link } from "react-router-dom";

function ProductContainer() {
  return (
    <>
      <div className="order-preamble">
        <p>
          <strong>About Ordering: </strong>
          We do not process online payments through this website. Instead,
          please use the site to submit an order request directly to us. We will
          contact you shortly to confirm availability, pricing, and payment
          options. If you have any questions, please reach out via our{" "}
          <Link to="/contact">Contact Page</Link>.
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
