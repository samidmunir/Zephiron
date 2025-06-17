import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/Theme.tsx";
import { AuthProvider } from "./context/Auth.tsx";
import { CartProvider } from "./context/Cart.tsx";
import CartDrawer from "./components/CartDrawer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <CartDrawer />
            <App />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
