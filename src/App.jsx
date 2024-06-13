import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Test from "./pages/test";
import { useEffect } from "react";
import scroll from "./animation/scroll";

const App = () => {
  // ==== scroll no work sha imma try it later
  useEffect(() => {
    scroll();
  }, []);

  return (
    <main className={`transition-all duration-300`}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </main>
  );
};

export default App;

/*
VickyJay Builds the Web!
*/
