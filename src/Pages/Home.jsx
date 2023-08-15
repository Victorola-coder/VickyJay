import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills&&experience/skills";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
    </main>
  );
}

export default Home;
