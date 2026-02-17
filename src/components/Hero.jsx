import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Software Developer<br />AI/ML & Data Science<br />Building Scalable Applications</h1>
        <p className="hero-description">
          Passionate about building innovative solutions using cutting-edge technologies and AI to solve real-world problems
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  )
}

export default Hero
