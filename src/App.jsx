import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
