import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/timeline.css'

function Timeline() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  const events = [
    { year: '2024', title: 'THE BEGINNING', desc: 'A single decision changes everything' },
    { year: '2025', title: 'THE EXPANSION', desc: 'Territory grows, enemies multiply' },
    { year: '2026', title: 'THE RECKONING', desc: 'All debts must be paid' }
  ]

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
        duration: 1,
        ease: 'power3.out'
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="timeline" id="timeline">
      <h2 className="timeline-title">THE PATH</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {events.map((event, index) => (
          <div 
            key={index}
            ref={el => itemsRef.current[index] = el}
            className="timeline-item"
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-desc">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
