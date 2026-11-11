import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Experience,
  SEO,
} from "../components";

function Home() {
  return (
    <>
      <SEO
        title="Victor"
        description="I enjoy building fullstack solutions, from backend systems to frontend experiences, with solid foundations, scalability, and excellent user experiences."
      />
      <Navbar />
      <main className="mx-auto max-w-[1440px] overflow-x-clip">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
