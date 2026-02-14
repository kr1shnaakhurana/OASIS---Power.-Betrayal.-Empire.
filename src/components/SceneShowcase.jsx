import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/sections.css'

gsap.registerPlugin(ScrollTrigger)

function SceneShowcase() {
  const sectionRef = useRef(null)
  const scenesRef = useRef([])

  const scenes = [
    {
      title: 'THE RISE',
      subtitle: 'From shadows to dominance.',
      description: 'You start as nothing. A whisper in dark alleys. But ambition burns hotter than fear.',
      align: 'left'
    },
    {
      title: 'THE BROTHERHOOD',
      subtitle: 'Trust built in blood.',
      description: 'Alliances are forged under dim lights and silent oaths.',
      align: 'right'
    },
    {
      title: 'THE WAR',
      subtitle: 'Empire against empire.',
      description: 'When loyalty fractures, the streets answer in fire.',
      align: 'left'
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      scenesRef.current.forEach((scene, index) => {
        if (!scene) return
        
        const isLeft = index % 2 === 0
        const image = scene.querySelector('.scene-image')
        const content = scene.querySelector('.scene-content')
        
        // Image animation
        gsap.from(image, {
          scrollTrigger: {
            trigger: scene,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          x: isLeft ? -80 : 80,
          duration: 1.2,
          ease: 'power3.out'
        })

        // Text animation
        const textElements = content.querySelectorAll('.scene-subtitle, .scene-title, .scene-description')
        gsap.from(textElements, {
          scrollTrigger: {
            trigger: scene,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          x: isLeft ? 60 : -60,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="scene-showcase">
      <div className="scene-showcase-container">
        {scenes.map((scene, index) => (
          <div 
            key={index}
            ref={el => scenesRef.current[index] = el}
            className={`scene-block scene-${scene.align}`}
          >
            <div className="scene-image"></div>
            <div className="scene-content">
              <p className="scene-subtitle">{scene.subtitle}</p>
              <h2 className="scene-title">{scene.title}</h2>
              <p className="scene-description">{scene.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SceneShowcase
