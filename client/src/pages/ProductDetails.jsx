import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>Product Details</h1>

      <p>Product ID: {id}</p>

      <div
        style={{
          marginTop: "20px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Sample Product</h2>

        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
          alt="product"
          style={{
            width: "300px",
            borderRadius: "10px",
          }}
        />

        <h3>₹3800</h3>

        <p>
          Engineered for long-distance runners who demand
          performance and comfort.
        </p>

        <h4>Sizes</h4>

        <div>
          <button>6 UK</button>
          <button>7 UK</button>
          <button>8 UK</button>
          <button>9 UK</button>
        </div>

        <h4>Colors</h4>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid #ccc",
            }}
          />

          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: "#ff4500",
            }}
          />

          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: "#808080",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <button
            style={{
              marginRight: "10px",
            }}
          >
            🛒 Add To Cart
          </button>

          <button>
            ⚖ Add To Compare
          </button>
        </div>
      </div>
    </div>
  );
}