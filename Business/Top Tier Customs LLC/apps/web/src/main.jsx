import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme";
import { CartProvider } from "./contexts/Cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
