import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi! I'm a Computer Engineer from Thapar Institute of Engineering & Technology with a strong foundation in software development and data science. 
              I'm passionate about integrating artificial intelligence into real-world applications and creating innovative solutions.
            </p>
            <p>
              Currently, I'm a Software Developer at Verizon Communications, where I apply my skills in full-stack web development and system design. 
              I have hands-on experience with React, Python, SQL, and modern web frameworks. Beyond web development, 
              I'm deeply interested in machine learning, generative AI, and data analytics.
            </p>
            <p>
              I'm detail-oriented, collaborative, and constantly exploring new technologies to enhance efficiency and solve complex problems. 
              Let's connect and build something impactful together!
            </p>
          </div>
          <div className="about-image-placeholder">
            <img 
              src="/profile.jpg" 
              alt="Panav Prasoon Awasthi" 
              className="profile-image"
              onLoad={(e) => {if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'none'}}
              onError={(e) => {e.target.style.display = 'none'; if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'flex'}}
            />
            <div className="placeholder" id="imagePlaceholder">
              📸 Profile Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
