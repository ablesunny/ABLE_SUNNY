import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon } from './Icons';
import Modal from './Modal';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      pretitle="GET IN TOUCH"
      title="Contact & Availability"
      subtitle="Currently open to full-stack engineering roles, contract projects, and technical collaborations."
      footer={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
            REPLY WINDOW // WITHIN 24 HOURS
          </span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            <Send size={13} />
            <span>Send Direct Email</span>
          </a>
        </div>
      }
    >
      <div>
        <p className="modal-paragraph" style={{ marginBottom: '16px' }}>
          Feel free to reach out directly via email, phone, or GitHub. Whether you have an engineering opening, a product consultation, or want to review my code, I welcome your message.
        </p>

        <div className="contact-grid">
          {/* Email Card */}
          <div className="contact-card">
            <span className="contact-card-label">EMAIL ADDRESS</span>
            <div className="contact-card-val">
              <span style={{ fontSize: '0.85rem' }}>{PERSONAL_INFO.email}</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
              <button
                type="button"
                className="btn-secondary"
                style={{ padding: '5px 10px', fontSize: '0.72rem' }}
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <>
                    <Check size={12} color="#10B981" />
                    <span style={{ color: '#10B981' }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-secondary"
                style={{ padding: '5px 10px', fontSize: '0.72rem' }}
              >
                <Mail size={12} />
                <span>Open Mail</span>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <span className="contact-card-label">PHONE NUMBER</span>
            <div className="contact-card-val">
              <span>{PERSONAL_INFO.phoneFormatted}</span>
            </div>
            <div style={{ marginTop: '6px' }}>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="btn-secondary"
                style={{ padding: '5px 10px', fontSize: '0.72rem', display: 'inline-flex' }}
              >
                <Phone size={12} />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <span className="contact-card-label">CURRENT LOCATION</span>
            <div className="contact-card-val">
              <span style={{ fontSize: '0.88rem' }}>{PERSONAL_INFO.location}</span>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>
              Available for on-site, hybrid, or remote commitments worldwide.
            </span>
          </div>

          {/* GitHub Card */}
          <div className="contact-card">
            <span className="contact-card-label">CODE REPOSITORY</span>
            <div className="contact-card-val">
              <span>github.com/ablesunny</span>
            </div>
            <div style={{ marginTop: '6px' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '5px 10px', fontSize: '0.72rem', display: 'inline-flex' }}
              >
                <GithubIcon size={12} />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
