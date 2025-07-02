import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
