import SEO from "../components/Seo";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Services from "../components/services";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <SEO
        title="Victor"
        description="I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences."
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
