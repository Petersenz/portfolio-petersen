import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'

const Page = () => {
  return (
    <div className='relative bg-black text-white min-h-screen'>
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page