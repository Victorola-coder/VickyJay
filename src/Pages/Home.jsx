import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Skills from "../components/skills&&experience/skills";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
