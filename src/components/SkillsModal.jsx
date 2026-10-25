import React from 'react';
import Modal from './Modal';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function SkillsModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      pretitle="CAPABILITIES & STACK"
      title="Technical Skills"
      subtitle="Comprehensive tools, frameworks, databases, and deployment platforms from verified project experience."
    >
      <div className="skills-category-grid">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.name} className="skill-category-card">
            <h4 className="skill-category-name">{cat.name}</h4>
            <div className="tech-tag-cloud">
              {cat.skills.map((skill) => (
                <span key={skill} className="tech-tag-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
