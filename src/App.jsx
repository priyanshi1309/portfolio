import React,{ useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import About from './sections/About'
import Hero from './sections/Hero'
import FOG from 'vanta/src/vanta.fog'
import VantaClouds from './components/VantaClouds'
const App = () => {
  // useEffect(()=> {
  //   FOG({
  //     el: "#home",
  // mouseControls: true,
  // touchControls: true,
  // gyroControls: false,
  // minHeight: 200.00,
  // minWidth: 200.00,
  // highlightColor: 0xaba284,
  // midtoneColor: 0xb6a6a3,
  // lowlightColor: 0x2b1983
  //   })
  // }, [])
  return (
    <main id='home'>
      <VantaClouds>
      <Hero />
      <Projects />
      <About />
      <Contact />
      </VantaClouds>
    </main>
  )
}

export default App