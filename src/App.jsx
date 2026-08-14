import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skill from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
