import Primary from "./layouts/Primary";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Protected from "./layouts/Protected";
import Track from "./pages/Track";

const App = () => {
  return (
    <Primary>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/applications-store/track"
          element={
            <Protected>
              <Track />
            </Protected>
          }
        />
        <Route path="/featured" element={<h1>Featured</h1>} />
        <Route path="/community" element={<h1>Community</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Primary>
  );
};

export default App;
