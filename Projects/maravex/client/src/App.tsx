import Primary from "./layouts/Primary";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Primary>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/auth" element={<h1>Auth Page</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
      </Routes>
    </Primary>
  );
};

export default App;
