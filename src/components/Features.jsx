import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/sections.css'

gsap.registerPlugin(ScrollTrigger)

function Features() {
  const sectionRef = useRef(null)
  const preTitleRef = useRef(null)
  const titleRef = useRef(null)
  const dividerRef = useRef(null)
  const cardsRef = useRef([])

  const features = [
    { 
      number: '01',
      title: 'Dynamic Territory Control',
      description: 'Expand your empire block by block. Control the streets and dominate rival factions in real-time power shifts.'
    },
    { 
      number: '02',
      title: 'Alliance & Betrayal System',
      description: 'Trust is fragile. Form alliances, negotiate deals, or break them when power demands sacrifice.'
    },
    { 
      number: '03',
      title: 'Strategic Crime Operations',
      description: 'Plan heists, control supply chains, and manipulate underground markets.'
    },
    { 
      number: '04',
      title: 'Reputation & Influence Engine',
      description: 'Your decisions shape how the city sees you. Fear, respect, or loyalty — choose your legacy.'
    }
  ]

  // Temporarily disabled for debugging
  /*
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      if (preTitleRef.current) {
        gsap.from(preTitleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out'
        })
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2
        })
      }

      if (dividerRef.current) {
        gsap.from(dividerRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          scaleX: 0,
          transformOrigin: 'center',
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4
        })
      }

      // Card stagger animation
      const validCards = cardsRef.current.filter(card => card !== null)
      if (validCards.length > 0) {
        gsap.from(validCards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 60,
          stagger: 0.25,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6
        })
      }
    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])
  */

  return (
    <section ref={sectionRef} className="features">
      <div className="features-container">
        <div className="features-header">
          <p ref={preTitleRef} className="features-pre-title">THE SYSTEM</p>
          <h2 ref={titleRef} className="features-title">GAMEPLAY FEATURES</h2>
          <div ref={dividerRef} className="features-divider"></div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="feature-card"
            >
              <span className="feature-number">{feature.number}</span>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
