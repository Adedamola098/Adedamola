import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Pricing from './Pricing'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
