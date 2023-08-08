import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}/>
      <Route index path="*" element={<ErrorPage />}/>
    </Routes>
  );
};

export default App;
