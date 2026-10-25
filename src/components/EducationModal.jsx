import React from 'react';
import Modal from './Modal';
import { EDUCATION } from '../data/portfolioData';

export default function EducationModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      pretitle="ACADEMIC BACKGROUND"
      title="Education & Credentials"
      subtitle="Formal computer science degrees, professional full-stack training, and academic foundations."
    >
      <div className="timeline-container">
        {EDUCATION.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-node" />
            <div className="timeline-header">
              <h4 className="timeline-degree">{item.degree}</h4>
              <span className="timeline-period">{item.period}</span>
            </div>
            <div className="timeline-institution">
              {item.institution} · {item.location} {item.status && <strong style={{ color: 'var(--text-primary)' }}>({item.status})</strong>}
            </div>
            <p className="timeline-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
}
