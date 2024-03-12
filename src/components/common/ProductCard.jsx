import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
        height: "400px",
      }}
    >
      <img
        src={product.image}
        style={{ width: "100%", height: 200, objectFit: "cover" }}
      />
      <h2>{product.title}</h2>
      <Link to={`/detalle/${product.id}`}>Ver detalle</Link>
    </div>
  );
};
