import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductPage from "./pages/products/ProductPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import Protected from "./layout/Protected";
import EditProductPage from "./pages/admin/EditProductPage";
import ManageProductsPage from "./pages/admin/ManageProductsPage";
import CreateProductPage from "./pages/admin/CreateProductPage";
import CartDrawer from "./components/cart/CartDrawer";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/admin/products" element={<ManageProductsPage />} />
        <Route
          path="/admin/products/edit/:id"
          element={
            <Protected>
              <EditProductPage />
            </Protected>
          }
        />
        <Route path="/admin/products/create" element={<CreateProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <AdminDashboardPage />
            </Protected>
          }
        />
      </Routes>
      <CartDrawer />
    </Layout>
  );
};

export default App;
