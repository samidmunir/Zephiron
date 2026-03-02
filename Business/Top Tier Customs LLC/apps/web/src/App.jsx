import Main from "./layouts/Main";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import CustomerProtected from "./layouts/CustomerProtected";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<CustomerProtected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Main>
  );
};

export default App;
