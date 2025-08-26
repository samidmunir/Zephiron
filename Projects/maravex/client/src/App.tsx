import Primary from "./layouts/Primary";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Primary>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
      </Routes>
    </Primary>
  );
};

export default App;
