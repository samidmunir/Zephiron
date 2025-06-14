import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Protected from "./layout/Protected";
import DashboardPage from "./pages/DashboardPage";
import EditProfilePage from "./pages/EditProfilePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashboardPage />
            </Protected>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Protected>
              <EditProfilePage />
            </Protected>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
