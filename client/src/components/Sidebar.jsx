import { Link } from "react-router-dom";
import { useCompare } from "../context/CompareContext";
import { useWishlist } from "../context/WishlistContext";

export default function Sidebar() {
  const { compareItems } = useCompare();
  const { wishlist } = useWishlist();

  return (
    <div
      style={{
        width: "260px",
        background: "#ffffff",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h2
        style={{
          color: "#5B6CFF",
          marginBottom: "40px",
        }}
      >
        Opura AI
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            padding: "12px",
            borderRadius: "8px",
            background: "#f5f5f5",
          }}
        >
          🏠 Home
        </Link>

        <Link
          to="/compare"
          style={{
            textDecoration: "none",
            color: "#333",
            padding: "12px",
            borderRadius: "8px",
            background: "#f5f5f5",
          }}
        >
          ⚖ Compare ({compareItems.length})
        </Link>

        <Link
  to="/wishlist"
  style={{
    textDecoration: "none",
    color: "#333",
    padding: "12px",
    borderRadius: "8px",
    background: "#f5f5f5",
  }}
>
  ❤️ Wishlist ({wishlist.length})
</Link>
      </nav>

      <div
        style={{
          marginTop: "40px",
          padding: "15px",
          background: "#eef2ff",
          borderRadius: "10px",
        }}
      >
        <h4>Selected</h4>

        <p>
          {compareItems.length} / 3 products
        </p>
      </div>

      <Link
  to="/wishlist"
  style={{
    textDecoration: "none",
    color: "#333",
    marginTop: "20px",
    padding: "15px",
    background: "#eef2ff",
    borderRadius: "10px",
    display: "block",
  }}
>
  ❤️ Wishlist ({wishlist.length})
</Link>
    </div>
  );
}