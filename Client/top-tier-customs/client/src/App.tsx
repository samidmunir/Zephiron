import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductPage from "./pages/products/ProductPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServicePage from "./pages/services/ServicePage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import Protected from "./layout/Protected";
import EditProductPage from "./pages/admin/EditProductPage";
import ManageProductsPage from "./pages/admin/ManageProductsPage";
import CreateProductPage from "./pages/admin/CreateProductPage";
import CartDrawer from "./components/cart/CartDrawer";
import TestimonialsPage from "./pages/TestimonialsPage";
import ManageServicesPage from "./pages/admin/ManageServicesPage";
import EditServicePage from "./pages/admin/EditServicePage";
import CreateServicePage from "./pages/admin/CreateServicePage";
import ManageOrdersPage from "./pages/admin/ManageOrdersPage";
import EditOrderPage from "./pages/admin/EditOrderPage";
import CheckoutPage from "./pages/orders/CheckoutPage";
import AvailableBookingsPage from "./pages/bookings/AvailableBookingsPage";
import ManageBookingsPage from "./pages/admin/ManageBookingsPage";
import CreateAvailableBookingPage from "./pages/admin/CreateAvailableBookingPage";
import EditAvailableBookingPage from "./pages/admin/EditAvailableBookingPage";
import BookingPage from "./pages/bookings/BookingPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicePage />} />

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

        <Route path="/admin/services" element={<ManageServicesPage />} />
        <Route
          path="/admin/services/edit/:id"
          element={
            <Protected>
              <EditServicePage />
            </Protected>
          }
        />
        <Route
          path="/admin/services/create"
          element={
            <Protected>
              <CreateServicePage />
            </Protected>
          }
        />

        <Route path="/admin/orders" element={<ManageOrdersPage />} />
        <Route
          path="/admin/orders/edit/:id"
          element={
            <Protected>
              <EditOrderPage />
            </Protected>
          }
        />

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
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route
          path="/store/checkout"
          element={
            <Protected>
              <CheckoutPage />
            </Protected>
          }
        />
        <Route path="/available-bookings" element={<AvailableBookingsPage />} />
        <Route path="/admin/bookings" element={<ManageBookingsPage />} />
        <Route
          path="/admin/available-bookings/create"
          element={<CreateAvailableBookingPage />}
        />
        <Route
          path="/admin/available-bookings/edit/:id"
          element={<EditAvailableBookingPage />}
        />
        <Route path="/booking-new/:id" element={<BookingPage />} />
      </Routes>
      <CartDrawer />
    </Layout>
  );
};

export default App;
