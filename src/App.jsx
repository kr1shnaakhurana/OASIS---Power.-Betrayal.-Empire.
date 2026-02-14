import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StoryPreview from './components/StoryPreview'
import SceneShowcase from './components/SceneShowcase'
import Characters from './components/Characters'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroVideoRef = useRef(null)

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <Navbar videoRef={heroVideoRef} />
      <Hero ref={heroVideoRef} />
      <StoryPreview />
      <SceneShowcase />
      <Characters />
      <Features />
      <CTA />
      <Footer />
    </>
  )
}

export default App
