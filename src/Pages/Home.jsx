import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Experience from "../components/skills&&experience/experience";
import Skills from "../components/skills&&experience/skills";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Experience />
    </main>
  );
}

export default Home;
