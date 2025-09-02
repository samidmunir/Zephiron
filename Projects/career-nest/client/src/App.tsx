import Primary from "./layouts/Primary";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import UserProtected from "./layouts/UserProtected";
import Track from "./pages/Track";
import Update from "./pages/Update";

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
        <Route
          path="/application-store/track"
          element={
            <UserProtected>
              <Track />
            </UserProtected>
          }
        />
        <Route
          path="/application-store/edit/:id"
          element={
            <UserProtected>
              <Update />
            </UserProtected>
          }
        />
      </Routes>
    </Primary>
  );
};

export default App;
