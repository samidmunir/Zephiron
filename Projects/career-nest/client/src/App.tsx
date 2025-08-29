import Primary from "./layouts/Primary";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import UserProtected from "./layouts/UserProtected";

const App = () => {
  return (
    <Primary>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <UserProtected>
              <Dashboard />
            </UserProtected>
          }
        />
      </Routes>
    </Primary>
  );
};

export default App;
