import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/story.css'

function StorySection({ title, text, index }) {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    gsap.from(content, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: 'power3.out'
    })

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -100,
      ease: 'none'
    })
  }, [])

  return (
    <section ref={sectionRef} className="story-section" id="story">
      <div ref={contentRef} className="story-content">
        <h2 className="story-title">{title}</h2>
        <p className="story-text">{text}</p>
      </div>
    </section>
  )
}

export default StorySection
