import Main from "./layouts/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" index element={<h1></h1>} />
      </Routes>
    </Main>
  );
};

export default App;
