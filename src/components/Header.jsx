import { useState } from 'react'
import './Header.css'

function Header({ setActiveSection, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (section) => {
    setActiveSection(section)
    setMenuOpen(false)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Panav Prasoon Awasthi</h1>
        </div>
        <button 
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </button>
          <button 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
