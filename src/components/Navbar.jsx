import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import '../styles/navbar.css'

function Navbar({ videoRef }) {
  const navRef = useRef(null)
  const waveBarsRef = useRef([])
  const [isMuted, setIsMuted] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    
    // Animate menu overlay
    if (!isMenuOpen) {
      gsap.set('.mobile-menu-overlay', { display: 'flex' })
      gsap.to('.mobile-menu-overlay', {
        opacity: 1,
        duration: 0.4,
        ease: 'power3.inOut'
      })
    } else {
      gsap.to('.mobile-menu-overlay', {
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set('.mobile-menu-overlay', { display: 'none' })
        }
      })
    }
  }

  const toggleSound = () => {
    if (!videoRef?.current) return

    const video = videoRef.current
    const newMutedState = !isMuted

    if (newMutedState) {
      // Fade out
      gsap.to(video, {
        volume: 0,
        duration: 0.4,
        onComplete: () => {
          video.muted = true
          setIsMuted(true)
          // Stop wave animation
          gsap.killTweensOf(waveBarsRef.current)
        }
      })
    } else {
      // Fade in
      video.muted = false
      video.volume = 0
      gsap.to(video, {
        volume: 0.8,
        duration: 0.6,
        onComplete: () => {
          setIsMuted(false)
          // Start wave animation
          startWaveAnimation()
        }
      })
    }
  }

  const startWaveAnimation = () => {
    const validBars = waveBarsRef.current.filter(bar => bar !== null)
    if (validBars.length === 0) return

    validBars.forEach((bar, index) => {
      const heights = index === 0 ? [0.5, 1, 0.6] : index === 1 ? [0.8, 1, 0.7] : [0.6, 1, 0.5]
      
      gsap.to(bar, {
        scaleY: heights,
        duration: 0.6 + (index * 0.1),
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        transformOrigin: 'bottom center'
      })
    })
  }

  const handleMenuLinkClick = () => {
    toggleMenu()
  }

  return (
    <>
      <nav ref={navRef} className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src="/assets/icon.png" alt="OASIS" className="logo-icon" />
            <span>OASIS</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-right">
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#story">Story</a>
              <a href="#characters">Characters</a>
              <a href="#download">Download</a>
            </div>
            <button 
              className="sound-toggle-nav"
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? (
                <svg className="sound-icon-nav" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="22" y1="9" x2="16" y2="15" />
                  <line x1="16" y1="9" x2="22" y2="15" />
                </svg>
              ) : (
                <div className="sound-waves-nav">
                  <div ref={el => waveBarsRef.current[0] = el} className="wave-bar-nav"></div>
                  <div ref={el => waveBarsRef.current[1] = el} className="wave-bar-nav"></div>
                  <div ref={el => waveBarsRef.current[2] = el} className="wave-bar-nav"></div>
                </div>
              )}
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="mobile-icons">
            <button 
              className={`nav-icon-mobile ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="nav-line"></span>
              <span className="nav-line"></span>
              <span className="nav-line"></span>
            </button>
            <button 
              className="sound-toggle-mobile"
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="22" y1="9" x2="16" y2="15" />
                  <line x1="16" y1="9" x2="22" y2="15" />
                </svg>
              ) : (
                <div className="sound-waves-mobile">
                  <div ref={el => waveBarsRef.current[0] = el} className="wave-bar-mobile"></div>
                  <div ref={el => waveBarsRef.current[1] = el} className="wave-bar-mobile"></div>
                  <div ref={el => waveBarsRef.current[2] = el} className="wave-bar-mobile"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu-overlay">
        <div className="mobile-menu-content">
          <a href="#home" onClick={handleMenuLinkClick}>Home</a>
          <a href="#story" onClick={handleMenuLinkClick}>Story</a>
          <a href="#characters" onClick={handleMenuLinkClick}>Characters</a>
          <a href="#download" onClick={handleMenuLinkClick}>Download</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
