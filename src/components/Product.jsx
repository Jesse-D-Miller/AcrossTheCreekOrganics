function Product({ name, description }) {
  return (
    <div className="product">
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  );
}

export default Product;
