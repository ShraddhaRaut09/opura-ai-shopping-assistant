import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CompareProvider } from "./context/CompareContext";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <CompareProvider>
        <App />
      </CompareProvider>
    </WishlistProvider>
  </React.StrictMode>
);