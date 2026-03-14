import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import CTAButton from './components/CTAButton/CTAButton'
import Home from './views/Home/Home'
import Services from './views/Services/Services'
import About from './views/About/About'
import Contact from './views/Contact/Contact'

import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">DevTable</Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <CTAButton onClick={() => navigate('/services')}>Get Started</CTAButton>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>DevTable</h3>
              <p>Leading the digital transformation revolution</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>devtable276@gmail.com</p>
              <p>+52 1 33 3393 1845</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 DevTable. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
