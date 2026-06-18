import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import api from "../services/api";
import ProductDetailModal from "../components/ProductDetailModal";

export default function Home() {
  const [reply, setReply] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSearch = async (query) => {
    try {
      const response = await api.post("/chat", {
        message: query,
      });

      setReply(response.data.data.aiReply);
      setProducts(response.data.data.products);
    } catch (error) {
      console.error(error);
    }
  };

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
          }}
        >
          Hello Opura
        </h1>

        <p>How can I help you today?</p>

        <SearchBar onSearch={handleSearch} />

        {reply && (
          <div
            style={{
              marginTop: "30px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <strong>AI:</strong> {reply}
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
    onClick={setSelectedProduct}
  />
))}

        </div>
        <ProductDetailModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
/>
      </div>
    </div>
  );
}