import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Experience,
  Skills,
  SEO,
} from "../components";

function Home() {
  return (
    <>
      <SEO
        title="Victor"
        description="I enjoy building fullstack solutions, from backend systems to frontend experiences, with solid foundations, scalability, and excellent user experiences."
      />
      <main className="max-w-[1440px] mx-auto">
        <Navbar />
        <Hero />
        <Services />
        <Experience />
        <Projects />
        {/* <Skills /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
