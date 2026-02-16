import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Article Summarizer',
      description: 'An intelligent article summarization tool that helps users quickly get key insights from lengthy articles. Improved reading efficiency and enabled better content curation.',
      tags: ['React', 'Vite', 'Redux Toolkit', 'RapidAPI'],
      link: 'https://github.com/panavprasoon/Ai_summarizer',
      demo: 'https://github.com/panavprasoon/Ai_summarizer'
    },
    {
      id: 2,
      title: 'Neuro-Nav Chair',
      description: 'An innovative brain-computer interface project that leverages real-time EEG signals to predict user intentions for movement. The system translates brainwave patterns into actionable commands like Forward, Backward, and Stop.',
      tags: ['EEG', 'Signal Processing', 'Neural Networks', 'Python'],
      link: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Full Stack Web Applications',
      description: 'Multiple full-stack projects built with React, Springboot, and modern web technologies. Experience in building responsive, scalable, and user-friendly applications.',
      tags: ['React', 'JavaScript', 'Springboot', 'HTML/CSS'],
      link: 'https://github.com/panavprasoon',
      demo: 'https://github.com/panavprasoon'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">View Code</a>
                <a href={project.demo} className="project-link">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
