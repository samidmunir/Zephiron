// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme.tsx";
import { AuthProvider } from "./contexts/Auth.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </ThemeProvider>
  // </StrictMode>
);
