import React from 'react';
import { Mail, FileText, MapPin, Award, Heart } from 'lucide-react';
import Modal from './Modal';
import { PERSONAL_INFO, ADDITIONAL_INFO } from '../data/portfolioData';

export default function AboutModal({ isOpen, onClose, onOpenContact }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      pretitle="PROFILE & BACKGROUND"
      title={PERSONAL_INFO.name}
      subtitle={`${PERSONAL_INFO.role} · ${PERSONAL_INFO.location}`}
      footer={
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={13} color="var(--text-tertiary)" />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
              Kerala, India
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.78rem' }}
              onClick={() => {
                onClose();
                onOpenContact();
              }}
            >
              <Mail size={13} />
              <span>Contact Directly</span>
            </button>
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '8px 14px', fontSize: '0.78rem' }}
            >
              <FileText size={13} />
              <span>Download CV</span>
            </a>
          </div>
        </>
      }
    >
      <div>
        <h4 className="modal-section-title">PROFESSIONAL SUMMARY</h4>
        <p className="modal-paragraph">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      <div>
        <h4 className="modal-section-title">AREAS OF FOCUS & ENGINEERING INTERESTS</h4>
        <div className="feature-bullet-list">
          <div className="feature-bullet-item">
            <span className="bullet-dot" />
            <span><strong>Full-Stack Architecture:</strong> Building scalable client-server applications with React, Next.js, Node.js, and TypeScript.</span>
          </div>
          <div className="feature-bullet-item">
            <span className="bullet-dot" />
            <span><strong>Data Systems & Reliability:</strong> Designing normalized PostgreSQL/MySQL schemas, Prisma ORM queries, and transactional safeguards.</span>
          </div>
          <div className="feature-bullet-item">
            <span className="bullet-dot" />
            <span><strong>Intelligent Web Systems:</strong> Integrating LLMs, OCR pipelines, and AI APIs into productive user-facing workflows.</span>
          </div>
          <div className="feature-bullet-item">
            <span className="bullet-dot" />
            <span><strong>Commerce & Transactions:</strong> Developing multi-tenant merchant portals, webhook processing, and Stripe PaymentIntent integrations.</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={{ background: 'var(--surface-secondary)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
          <h4 className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={13} color="var(--accent)" />
            <span>CORE STRENGTHS</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {ADDITIONAL_INFO.strengths.map((str) => (
              <span key={str} className="tech-tag-chip" style={{ fontSize: '0.7rem' }}>
                {str}
              </span>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface-secondary)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
          <h4 className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Heart size={13} color="var(--accent)" />
            <span>ACTIVITIES & DISCIPLINES</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {ADDITIONAL_INFO.activities.map((act) => (
              <div key={act.title} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{act.title}</strong> — {act.desc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
