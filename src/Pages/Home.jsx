import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Skills from "../components/skillls&&experience/skills";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
    </main>
  );
}

export default Home;
