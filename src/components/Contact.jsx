import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = { 'form-name': 'contact', ...formData }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(payload)
    })
      .then(() => {
        alert("Thanks! for your interest in Panav Awasthi")
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      })
      .catch((error) => {
        console.error(error)
        alert('Oops! There was a problem submitting your form. Please try again later.')
      })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:panavprasoonawasthi@gmail.com">panavprasoonawasthi@gmail.com</a></p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
            <div className="info-item">
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://github.com/panavprasoon" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/panavprasoonawasthi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://coursera.org/share/4efdfbe588c4618899ba02f30d166c0c" target="_blank" rel="noopener noreferrer">Certifications</a>
              </div>
            </div>
          </div>
          
          <form name="contact" method="POST" data-netlify="true" className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            {submitted && (
              <div className="success-message">
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
