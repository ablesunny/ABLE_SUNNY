import React from 'react';
import { ArrowRight, Mail, Compass, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import portraitImg from '../assets/images/profile/able-sunny-portrait.jpg';

export default function Hero({ onExploreProjects, onOpenContact, onOpenAbout }) {
  return (
    <div className="hero-panel">
      {/* ── Left: Identity Block ── */}
      <div className="hero-identity">
        <div className="hero-avatar-row">
          <div className="hero-avatar-frame">
            <img
              src={portraitImg}
              alt="Able Sunny"
              className="hero-avatar-img"
              loading="eager"
            />
            <span className="avatar-status-ring" aria-hidden="true" />
          </div>
          <div className="hero-name-block">
            <h1 className="hero-name">Able Sunny<span className="accent-dot">.</span></h1>
            <div className="hero-role-line">
              <Terminal size={12} className="role-icon" />
              <span>Full-Stack Developer</span>
              <span className="role-divider">·</span>
              <MapPin size={11} className="role-icon" />
              <span>Kerala, India</span>
            </div>
          </div>
        </div>

        <p className="hero-statement">
          Building resilient web platforms, data architectures & intelligent software.
        </p>

        <p className="hero-supporting">
          Passionate full-stack developer experienced in React, Next.js, TypeScript, Node.js, and SQL. Dedicated to solving complex problems with clean code, robust performance safeguards, and human-centered design.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn-primary-solid" onClick={onExploreProjects}>
            <span>Explore Work</span>
            <span className="btn-badge">4</span>
            <ArrowRight size={14} />
          </button>
          <button type="button" className="btn-outline" onClick={onOpenContact}>
            <Mail size={14} />
            <span>Contact</span>
          </button>
          <button type="button" className="btn-ghost" onClick={onOpenAbout}>
            <Compass size={14} />
            <span>About</span>
          </button>
        </div>
      </div>

      {/* ── Right: Quick Intel Cards ── */}
      <div className="hero-stats-strip">
        <div className="stat-card">
          <span className="stat-label">EDUCATION</span>
          <span className="stat-value">TechMinds (MERN+AI)</span>
          <span className="stat-sub">BCA · Don Bosco College</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">CORE STACK</span>
          <span className="stat-value">Next.js · TypeScript · PostgreSQL</span>
          <span className="stat-sub">React · Node.js · Prisma · AI</span>
        </div>
        <div className="stat-card accent-card">
          <span className="stat-label">STATUS</span>
          <span className="stat-value">Available for Hire</span>
          <span className="stat-sub">Open to full-time & freelance</span>
        </div>
      </div>
    </div>
  );
}
