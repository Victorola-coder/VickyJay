import { useEffect } from "react";
import { Home, NotFound, Spotify, Test } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Scroll } from "./animation";

const App = () => {
  // ==== scroll no work sha imma try it later
  useEffect(() => {
    Scroll();
  }, []);

  return (
    <main className={`transition-all duration-300`}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route index path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;

/*
VickyJay Builds the Web!
*/
