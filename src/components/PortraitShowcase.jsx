import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import portraitImg from '../assets/images/profile/able-sunny-portrait.jpg';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function PortraitShowcase({ onOpenAbout }) {
  return (
    <section className="portrait-showcase-column" aria-label="Portrait Feature">
      <div className="editorial-portrait-card">
        {/* Corner Crosshairs */}
        <span className="portrait-corner top-left">+</span>
        <span className="portrait-corner top-right">+</span>
        <span className="portrait-corner bottom-left">+</span>
        <span className="portrait-corner bottom-right">+</span>

        {/* Top Header Tag inside portrait */}
        <div className="portrait-top-tag">
          <span className="portrait-tag-pill">PORTRAIT // 2026</span>
          <span className="portrait-status-dot">
            <span className="dot-inner"></span>
            ACTIVE
          </span>
        </div>

        {/* Main Photograph */}
        <div className="portrait-image-wrapper">
          <img
            src={portraitImg}
            alt="Able Sunny, Full-Stack Developer"
            className="portrait-feature-image"
            loading="eager"
          />
        </div>

        {/* Bottom HUD Bar */}
        <div className="portrait-bottom-hud">
          <div className="hud-identity">
            <span className="hud-name">{PERSONAL_INFO.name}</span>
            <span className="hud-location">
              <MapPin size={10} color="var(--accent)" />
              Iritty, Kannur, Kerala
            </span>
          </div>

          <button
            type="button"
            className="hud-bio-trigger"
            onClick={onOpenAbout}
            aria-label="View Able Sunny's full biography"
          >
            <span>ABOUT</span>
            <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
