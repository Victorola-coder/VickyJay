import { useEffect } from "react";
import { Home, NotFound, Test } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // ==== scroll no work sha imma try it later
  useEffect(() => {
    scroll();
  }, []);

  return (
    <main className={`transition-all duration-300`}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
        <Route index path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;

/*
VickyJay Builds the Web!
*/
