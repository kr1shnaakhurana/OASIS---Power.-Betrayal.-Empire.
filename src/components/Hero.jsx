import { useLayoutEffect, useRef, forwardRef } from 'react'
import gsap from 'gsap'
import '../styles/hero.css'

const Hero = forwardRef((props, ref) => {
  const heroRef = useRef(null)
  const brandRef = useRef(null)
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)

  // Temporarily disabled for debugging
  /*
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Brand label animation
      if (brandRef.current) {
        gsap.from(brandRef.current, {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2
        })
      }

      // Headline animation
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5
        })
      }

      // Subtext animation
      if (subtextRef.current) {
        gsap.from(subtextRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          delay: 0.8
        })
      }

      // CTA buttons animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          delay: 1.1
        })
      }

      // Scroll indicator animation
      if (scrollRef.current) {
        gsap.from(scrollRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
          delay: 1.4
        })

        // Bounce animation
        gsap.to(scrollRef.current, {
          y: 10,
          duration: 1.5,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          delay: 2
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])
  */

  return (
    <section ref={heroRef} className="hero" id="home">
      {/* Video Background */}
      <video
        ref={ref}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/assets/hero-trailer.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 ref={brandRef} className="hero-brand">OASIS</h1>
        <h2 ref={headlineRef} className="hero-headline">POWER. LOYALTY. BLOOD.</h2>
        <p ref={subtextRef} className="hero-subtext">
          In a city ruled by shadows, loyalty is currency and betrayal is survival.
        </p>
        <div ref={ctaRef} className="hero-cta">
          <button className="btn-primary">ENTER THE EMPIRE</button>
          <button className="btn-secondary">WATCH TRAILER</button>
        </div>
        <div ref={scrollRef} className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
