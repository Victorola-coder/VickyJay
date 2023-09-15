import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Test from "./Pages/test";
import { useEffect } from "react";
import Scroll from "./animation/scroll";

const App = () => {
  useEffect(() => {
    Scroll();
  }, []);

  return (
    <main className={`transition-all duration-300`}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </main>
  );
};

export default App;

/*VickyJay Builds the Web!*/
