import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
import HireMe from './Hireme'; 

const App = () => {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  return (
    <div>
      <Navbar onHireMeClick={() => setIsHireMeOpen(true)} />
      <Home onHireMeClick={() => setIsHireMeOpen(true)} />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />

      <HireMe isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
    </div>
  );
};

export default App;
