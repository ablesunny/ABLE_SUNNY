const SKILLS = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js',
  'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL',
  'Firebase', 'Prisma', 'Git', 'GitHub', 'Stripe', 'OpenAI API',
  'Testing', 'Vercel', 'Netlify', 'Render',
]

const EDUCATION = [
  {
    title: 'AI-Powered Full Stack Web Development (MERN + SQL + AI)',
    school: 'TechMinds, InfoPark Phase 1, Kakkanad, Kochi',
    meta: '2026 – Present',
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    school: 'Don Bosco Arts and Science College, Kannur University',
    meta: '2023 – 2026',
  },
  {
    title: 'Higher Secondary — Computer Science',
    school: "St. Mary's Higher Secondary School, Edoor",
    meta: '82%',
  },
  {
    title: 'SSLC',
    school: 'St. Thomas High School, Karikkottakari',
    meta: '95%',
  },
]

export default function BottomGrid() {
  return (
    <div className="bottom-grid" id="skills">
      {/* Skills */}
      <div className="bottom-card">
        <h3 className="bottom-card-title">Technical Skills</h3>
        <div className="skills-list">
          {SKILLS.map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bottom-card">
        <h3 className="bottom-card-title">Education</h3>
        <div className="edu-list">
          {EDUCATION.map(edu => (
            <div key={edu.title} className="edu-item">
              <p className="edu-title">{edu.title}</p>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-meta">{edu.meta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages, Strengths, Activities */}
      <div className="bottom-card">
        <h3 className="bottom-card-title">More About Me</h3>

        <div className="info-group">
          <p className="info-group-title">Languages</p>
          <p className="info-group-content">English, Malayalam, Hindi, Tamil (Basic)</p>
        </div>

        <div className="info-group">
          <p className="info-group-title">Strengths</p>
          <p className="info-group-content">
            Fast Learner · Strong Work Ethic · Self-Motivated · Creative Thinking · Time Management
          </p>
        </div>

        <div className="info-group">
          <p className="info-group-title">Activities</p>
          <p className="info-group-content">
            MMA Athlete · Sub-District Football Player
          </p>
        </div>
      </div>
    </div>
  )
}
