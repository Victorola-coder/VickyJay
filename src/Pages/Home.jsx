import {
  Hero,
  Navbar,
  Footer,
  SEO,
  Projects,
  Services,
  Contact,
  Skills,
} from '../components';

function Home() {
  return (
    <>
      <SEO
        title='Victor'
        description='I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.'
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
