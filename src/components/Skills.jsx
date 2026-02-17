import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C++', 'JavaScript', 'SQL']
    },
    {
      category: 'Frontend Development',
      skills: ['React.js',  'JavaScript']
    },
    {
      category: 'Backend & Databases',
      skills: ['Springboot', 'SQL', 'REST APIs', 'System Design']
    },
    {
      category: 'Data Science & AI',
      skills: ['Machine Learning', 'Generative AI', 'Data Analytics']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git & GitHub','Docker',]
    },
    {
      category: 'Specializations',
      skills: ['Full Stack Development', 'AI Integration', 'Data Analysis', 'Problem Solving']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
