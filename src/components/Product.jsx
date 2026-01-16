import { Link } from "react-router-dom";

function Product({ name, description, image, potatoId }) {
  return (
    <Link to={`/${potatoId}`} style={{ textDecoration: "none"}} key={potatoId}>
      <div className="product">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div
          className="product-content"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
