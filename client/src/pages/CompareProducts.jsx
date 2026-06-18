import Sidebar from "../components/Sidebar";
import CompareTable from "../components/CompareTable";
import { useCompare } from "../context/CompareContext";

export default function CompareProducts() {
  const { compareItems } = useCompare();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1>Compare Products</h1>

        {compareItems.length === 0 ? (
          <p>No products selected for comparison.</p>
        ) : (
          <CompareTable products={compareItems} />
        )}
      </div>
    </div>
  );
}