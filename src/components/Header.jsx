import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'projects', label: 'Projects', count: '4' },
  { id: 'skills', label: 'Tech Stack', count: null },
  { id: 'about', label: 'Profile', count: null },
  { id: 'education', label: 'Journey', count: null },
  { id: 'contact', label: 'Contact', count: null },
];

export default function Header({ onOpenModal, activeModal }) {
  return (
    <header className="site-header-v3" aria-label="Main Navigation">
      {/* ── Left: Brand ── */}
      <div className="header-brand-block">
        <button 
          type="button" 
          className="brand-monogram" 
          onClick={() => onOpenModal('about')}
          aria-label="About Able Sunny"
        >
          <span>AS</span>
        </button>

        <div className="brand-titles">
          <div className="brand-name-row">
            <span className="brand-full-name">{PERSONAL_INFO.name}</span>
            <span className="live-status-chip">
              <span className="live-pulse"></span>
              AVAILABLE
            </span>
          </div>
          <span className="brand-sub-title">Full-Stack Developer · Kerala, India</span>
        </div>
      </div>

      {/* ── Center: Floating Nav Pills ── */}
      <nav className="header-nav-pills" aria-label="Sections">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-pill-item ${activeModal === item.id ? 'active' : ''}`}
            onClick={() => onOpenModal(item.id)}
          >
            <span>{item.label}</span>
            {item.count && <span className="pill-counter">{item.count}</span>}
          </button>
        ))}
      </nav>

      {/* ── Right: Action Buttons ── */}
      <div className="header-actions-group">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn-secondary"
          aria-label="GitHub Profile"
          title="github.com/ablesunny"
        >
          <GithubIcon size={14} />
          <span>GitHub</span>
          <ArrowUpRight size={12} className="arrow-hover" />
        </a>

        <a
          href={PERSONAL_INFO.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn-primary"
          aria-label="Resume PDF"
          title="Download CV"
        >
          <FileText size={14} />
          <span>Resume</span>
          <span className="pdf-tag">PDF</span>
        </a>
      </div>
    </header>
  );
}
