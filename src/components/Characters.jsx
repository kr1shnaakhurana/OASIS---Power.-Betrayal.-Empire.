import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/characters.css'

gsap.registerPlugin(ScrollTrigger)

function Characters() {
  const sectionRef = useRef(null)
  const preTitleRef = useRef(null)
  const titleRef = useRef(null)
  const dividerRef = useRef(null)
  const cardsRef = useRef([])

  const characters = [
    { 
      name: 'THE BOSS', 
      role: 'Architect of Empires',
      description: 'Built an empire from whispers and shadows. Every move calculated, every decision final.'
    },
    { 
      name: 'THE ENFORCER', 
      role: 'Shadow Executioner',
      description: 'Loyalty forged in blood. When diplomacy fails, the enforcer speaks in silence.'
    },
    { 
      name: 'THE STRATEGIST', 
      role: 'Master of Chaos',
      description: 'Three steps ahead. Sees the board while others see the pieces.'
    }
  ]

  // Temporarily disabled animations for debugging
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

      // Card stagger animation - filter out null refs
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
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6
        })
      }
    }, sectionRef)

    // Refresh ScrollTrigger after mount
    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])
  */

  return (
    <section ref={sectionRef} className="characters" id="characters">
      <div className="characters-container">
        <div className="characters-header">
          <p ref={preTitleRef} className="characters-pre-title">THE EMPIRE</p>
          <h2 ref={titleRef} className="characters-title">KEY FIGURES</h2>
          <div ref={dividerRef} className="characters-divider"></div>
        </div>
        <div className="characters-grid">
          {characters.map((char, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="character-card"
            >
              <div className="character-image"></div>
              <div className="character-info">
                <h3 className="character-name">{char.name}</h3>
                <p className="character-role">{char.role}</p>
                <p className="character-description">{char.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Characters
