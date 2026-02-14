import '../styles/footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/icon.png" alt="OASIS" className="footer-icon" />
            <h3 className="footer-title">OASIS</h3>
            <p className="footer-tagline">Power. Loyalty. Blood.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Game</h4>
              <a href="#story">Story</a>
              <a href="#characters">Characters</a>
              <a href="#features">Features</a>
              <a href="#download">Download</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Community</h4>
              <a href="#discord">Discord</a>
              <a href="#twitter">Twitter</a>
              <a href="#reddit">Reddit</a>
              <a href="#youtube">YouTube</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} OASIS. All rights reserved.
          </p>
          <p className="footer-legal">
            Built for those who rule the shadows.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
