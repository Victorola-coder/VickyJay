import { useEffect } from "react";
import { Scroll } from "./animation";
import { Routes, Route } from "react-router-dom";
import { Home, NotFound, Spotify, Test, Changelog } from "./pages";

const App = () => {
  // ==== scroll no work sha imma try it later
  useEffect(() => {
    const cleanup = Scroll();
    return cleanup;
  }, []);

  return (
    <main className={`transition-all duration-300`}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/changelog" element={<Changelog />} />
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
