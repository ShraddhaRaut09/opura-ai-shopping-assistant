import { useParams } from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <div style={{ padding: "40px" }}>
        Product not found
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "400px",
            borderRadius: "12px",
          }}
        />

        <div>
          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p>⭐ {product.rating}</p>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Discount:</strong>{" "}
            {product.discount}% OFF
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>{product.description}</p>

          <p>
            <strong>Features:</strong>
          </p>

          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <p>
            <strong>Sizes:</strong>
          </p>

          <p>{product.sizes.join(", ")}</p>

          <p>
            <strong>Colors:</strong>
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {product.colors.map((color) => (
              <div
                key={color}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: color,
                  border: "1px solid #ccc",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}