import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Panav Prasoon Awasthi. All rights reserved.</p>
          <p>Built with React + Vite | Software Developer | Innovator</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
