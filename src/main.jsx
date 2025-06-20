import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartContext.jsx";
import App from "./App.jsx";
import "./index.css";
import "./fonts/fonts.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
