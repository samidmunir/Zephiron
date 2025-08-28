import Primary from "./layouts/Primary";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Primary>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Primary>
  );
};

export default App;
