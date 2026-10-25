import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Modal from './Modal';
import { PROJECTS } from '../data/portfolioData';

export default function AllProjectsModal({ isOpen, onClose, onSelectProject }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      pretitle="ENGINEERING CATALOGUE"
      title="Featured Projects"
      subtitle="Comprehensive overview of full-stack platforms, architectures, and systems built by Able Sunny."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            style={{
              background: 'var(--surface-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '14px',
              cursor: 'pointer',
              transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
            }}
            onClick={() => {
              onClose();
              onSelectProject(project);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-focus)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)' }}>
                  {project.number}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', background: 'var(--surface-tertiary)', padding: '2px 6px', borderRadius: '4px' }}>
                  {project.tags[0]}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                {project.name}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '10px' }}>
                {project.summary}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-tertiary)' }}>
                    #{tag}
                  </span>
                ))}
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500 }}>
                <span>Inspect</span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
