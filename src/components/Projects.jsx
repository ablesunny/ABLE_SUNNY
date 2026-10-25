import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    num: '01',
    name: 'SELLEX',
    desc: 'Multi-store e-commerce platform with seller/store management, role-based access, analytics dashboards and order workflows.',
    tags: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Zustand', 'Recharts'],
  },
  {
    num: '02',
    name: 'LUMINA',
    desc: 'Production e-commerce platform with Stripe payments, inventory management, AI-powered product discovery and admin workflows.',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe'],
  },
  {
    num: '03',
    name: 'TRUTHGRAPH',
    desc: 'Source ingestion and information analysis platform with URL normalization, content hashing, metadata extraction and structured logging.',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    num: '04',
    name: 'VISIONTRACK',
    desc: 'AI-powered visual analysis application for image understanding and OCR with modular architecture and accessibility features.',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'AI/OCR'],
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="projects-header">
        <h2 className="projects-title">Selected Work</h2>
        <span className="mono">{PROJECTS.length} Projects</span>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(project => (
          <div key={project.num} className="project-card">
            <div className="project-card-header">
              <span className="project-num">{project.num}</span>
              <ArrowUpRight className="project-arrow" />
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
