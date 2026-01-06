import useCart from "../context/useCart";
import { useState } from "react";

function Product({ name, description, image }) {
  return (
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

      {/* image overlay, dark
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)",
          zIndex: 1,
          borderRadius: "2px",
        }}
      /> */}
    </div>
  );
}

export default Product;
