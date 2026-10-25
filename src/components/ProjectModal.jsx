import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import Modal from './Modal';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      pretitle={`PROJECT ${project.number} // ${project.category}`}
      title={project.name}
      subtitle={project.tagline}
      footer={
        <>
          <div className="tech-tag-cloud">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag-chip">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 14px', fontSize: '0.78rem' }}
          >
            <GithubIcon size={14} />
            <span>GitHub Repository</span>
            <ArrowUpRight size={12} />
          </a>
        </>
      }
    >
      <div>
        <h4 className="modal-section-title">SYSTEM OVERVIEW</h4>
        <p className="modal-paragraph">{project.overview}</p>
      </div>

      <div>
        <h4 className="modal-section-title">CORE CAPABILITIES & VERIFIED FEATURES</h4>
        <div className="feature-bullet-list">
          {project.keyFeatures.map((feature, idx) => (
            <div key={idx} className="feature-bullet-item">
              <span className="bullet-dot" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="modal-section-title">TECHNICAL ARCHITECTURE</h4>
        <div className="feature-bullet-list">
          {project.technicalHighlights.map((highlight, idx) => (
            <div key={idx} className="feature-bullet-item">
              <CheckCircle2 size={14} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
