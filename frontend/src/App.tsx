
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import CreativePursuits from './components/sections/CreativePursuits';

import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ParticlesBackground />
      <div className="container">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <CreativePursuits />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
