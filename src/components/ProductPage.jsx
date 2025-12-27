import { useParams } from "react-router-dom";
import potatoData from "../data/potatoes.js";

function ProductPage() {
  const { id } = useParams();
  const potato = potatoData.find((p) => String(p.id) === id);

  if (!potato) return <div>Potato not found</div>;

  return (
    <div className="product-page">
      <h2>{potato.name}</h2>
      <h3>Certified Organic Seed Potato</h3>
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
      <div className="image-gallery">
      {potato.image.map((imgSrc, index) => (
        <img key={index} src={imgSrc} alt={`${potato.name} ${index + 1}`} />
      ))}
      </div>
    </div>
  );
}

export default ProductPage;
