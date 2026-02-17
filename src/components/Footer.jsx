import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>If I take long to get back to you<br/>Feel Free to use LinkedIn</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
