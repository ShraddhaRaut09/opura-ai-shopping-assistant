import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CompareProducts from "./pages/CompareProducts";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/compare"
          element={<CompareProducts />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;