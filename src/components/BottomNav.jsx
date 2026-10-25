import React, { useState, useEffect } from 'react';
import { Mail, Clock, MapPin, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function BottomNav({ onOpenModal }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="site-telemetry-v3" aria-label="System Telemetry & Quick Links">
      {/* ── Left: Location & Live Clock ── */}
      <div className="telemetry-col-left">
        <div className="telemetry-pill">
          <MapPin size={11} color="var(--accent)" />
          <span>KERALA, INDIA</span>
        </div>
        <div className="telemetry-pill">
          <Clock size={11} color="var(--accent)" />
          <span className="telemetry-ist-text">IST {currentTime || 'LIVE'}</span>
        </div>
      </div>

      {/* ── Center: Core Skills Marquee / Chips ── */}
      <div className="telemetry-col-center">
        <div className="quick-intel-strip">
          <button
            type="button"
            className="intel-chip"
            onClick={() => onOpenModal('skills')}
          >
            STACK: MERN + SQL + AI
          </button>
          <span className="intel-divider">/</span>
          <button
            type="button"
            className="intel-chip"
            onClick={() => onOpenModal('education')}
          >
            CREDENTIALS: TECHMINDS + BCA
          </button>
          <span className="intel-divider">/</span>
          <button
            type="button"
            className="intel-chip accent-chip"
            onClick={() => onOpenModal('contact')}
          >
            AVAILABLE FOR HIRE
          </button>
        </div>
      </div>

      {/* ── Right: Direct Email & GitHub ── */}
      <div className="telemetry-col-right">
        <button
          type="button"
          className="telemetry-email-btn"
          onClick={() => onOpenModal('contact')}
          title="Direct Email Contact"
        >
          <Mail size={12} />
          <span>{PERSONAL_INFO.email}</span>
        </button>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="telemetry-github-icon"
          title="GitHub Profile"
          aria-label="GitHub"
        >
          <GithubIcon size={13} />
        </a>
      </div>
    </footer>
  );
}
