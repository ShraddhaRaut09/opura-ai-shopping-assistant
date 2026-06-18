import Sidebar from "../components/Sidebar";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } =
    useWishlist();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f3f3",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1
          style={{
            color: "#5B6CFF",
            marginBottom: "20px",
          }}
        >
          ❤️ Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
            }}
          >
            No products added to wishlist.
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {wishlist.map((product) => (
              <div key={product.id}>
                <ProductCard
                  product={product}
                  onClick={() => {}}
                />

                <button
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                  style={{
                    background: "#ff4d6d",
                    color: "#fff",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    margin: "10px",
                  }}
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}