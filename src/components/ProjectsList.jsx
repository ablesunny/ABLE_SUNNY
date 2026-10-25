import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsList({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const filtered = PROJECTS.filter((p) => {
    if (filter === 'COMMERCE') return p.tags.includes('Stripe') || p.tags.includes('Zustand');
    if (filter === 'DATA') return p.id === 'truthgraph' || p.tags.includes('PostgreSQL');
    if (filter === 'AI') return p.id === 'visiontrack' || p.tags.includes('AI/OCR');
    return true;
  });

  return (
    <section className="projects-showcase-column" aria-label="Engineered Systems">
      {/* ── Header with Category Switcher ── */}
      <div className="projects-panel-header">
        <div className="panel-title-group">
          <Layers size={13} color="var(--accent)" />
          <span className="panel-title-text">ENGINEERED WORK</span>
          <span className="panel-count-badge">04</span>
        </div>

        <div className="panel-filter-tabs">
          {['ALL', 'COMMERCE', 'DATA', 'AI'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Project Cards Stack ── */}
      <div className="projects-cards-stack">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="project-item-card"
            onClick={() => onSelectProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectProject(project);
              }
            }}
            aria-label={`Inspect ${project.name}`}
          >
            <div className="card-top-line">
              <span className="card-index-mono">{project.number}</span>
              <span className="card-title-strong">{project.name}</span>
              <span className="card-category-tag">{project.tags[0]}</span>
              <ArrowUpRight size={13} className="card-arrow-icon" />
            </div>

            <p className="card-tagline-text">{project.tagline}</p>

            <div className="card-tech-ribbon">
              {project.tags.slice(0, 4).map((tech) => (
                <span key={tech} className="micro-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Panel Footer ── */}
      <div className="projects-panel-footer">
        <span className="footer-status-text">
          ALL 4 SYSTEMS FULLY VERIFIED IN REPOSITORY
        </span>
      </div>
    </section>
  );
}
