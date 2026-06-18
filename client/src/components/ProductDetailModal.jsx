export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "700px",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            border: "none",
            background: "red",
            color: "#fff",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          X
        </button>

        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
          }}
        />

        <h2>{product.name}</h2>

        <h3>₹{product.price}</h3>

        <p>{product.description}</p>

        <h4>Sizes</h4>

        <div>
          {product.sizes.map((size) => (
            <button
              key={size}
              style={{ margin: "5px" }}
            >
              {size}
            </button>
          ))}
        </div>

        <h4>Colors</h4>

        <div style={{ display: "flex" }}>
          {product.colors.map((color) => (
            <div
              key={color}
              style={{
                width: "25px",
                height: "25px",
                background: color,
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}