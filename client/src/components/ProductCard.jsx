import { useCompare } from "../context/CompareContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCompare } = useCompare();
  const { addToWishlist } = useWishlist();
  

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        width: "250px",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{product.name}</h3>

        <p style={{ color: "#666" }}>
          {product.category}
        </p>

        <h4>₹{product.price}</h4>

        <p style={{ color: "green" }}>
          {product.discount}% OFF
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCompare(product);
          }}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#5B6CFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add To Compare
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToWishlist(product);
          }}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#ff4d6d",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add To Wishlist
        </button>
      </div>
    </div>
  );
}