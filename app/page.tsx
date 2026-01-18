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
    <div className='relative text-white min-h-screen'>
      <div className='fixed inset-0 bg-black -z-20' />
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <main className='relative z-10'>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Page