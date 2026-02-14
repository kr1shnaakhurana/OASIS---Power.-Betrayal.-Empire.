import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/sections.css'

gsap.registerPlugin(ScrollTrigger)

function StoryPreview() {
  const sectionRef = useRef(null)
  const preTitleRef = useRef(null)
  const dividerRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pre-title animation
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

      // Divider animation
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
        delay: 0.3
      })

      // Text word stagger animation
      const words = textRef.current.querySelectorAll('.word')
      gsap.from(words, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        stagger: 0.03,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const text = "In the neon-lit streets of OASIS, power is the only law. Build your empire from the shadows, forge alliances in blood, and watch loyalty crumble under ambition. Every choice echoes. Every betrayal demands a price."
  
  return (
    <section ref={sectionRef} className="story-preview" id="story">
      <div className="story-preview-container">
        <div className="story-preview-content">
          <h3 ref={preTitleRef} className="story-pre-title">THE WORLD OF OASIS</h3>
          <div ref={dividerRef} className="story-divider"></div>
          <p ref={textRef} className="story-preview-text">
            {text.split(' ').map((word, i) => (
              <span key={i} className="word">{word} </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default StoryPreview
