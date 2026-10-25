import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsList from './components/ProjectsList';
import BottomNav from './components/BottomNav';
import ProjectModal from './components/ProjectModal';
import AllProjectsModal from './components/AllProjectsModal';
import AboutModal from './components/AboutModal';
import SkillsModal from './components/SkillsModal';
import EducationModal from './components/EducationModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setSelectedProject(null);
    setActiveModal(modalName);
  };

  const handleCloseModals = () => {
    setActiveModal(null);
    setSelectedProject(null);
  };

  const handleSelectProject = (project) => {
    setActiveModal(null);
    setSelectedProject(project);
  };

  return (
    <div className="portfolio-viewport-root">
      {/* ── TOP HEADER ── */}
      <Header
        onOpenModal={handleOpenModal}
        activeModal={activeModal}
      />

      {/* ── MAIN CONTENT: Hero + Bento Projects ── */}
      <main className="frontpage-stage">
        <motion.section
          className="stage-hero-row"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero
            onExploreProjects={() => handleOpenModal('projects')}
            onOpenContact={() => handleOpenModal('contact')}
            onOpenAbout={() => handleOpenModal('about')}
          />
        </motion.section>

        <motion.section
          className="stage-projects-row"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectsList onSelectProject={handleSelectProject} />
        </motion.section>
      </main>

      {/* ── BOTTOM DOCK ── */}
      <BottomNav onOpenModal={handleOpenModal} />

      {/* ── MODALS ── */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseModals}
      />
      <AllProjectsModal
        isOpen={activeModal === 'projects'}
        onClose={handleCloseModals}
        onSelectProject={handleSelectProject}
      />
      <AboutModal
        isOpen={activeModal === 'about'}
        onClose={handleCloseModals}
        onOpenContact={() => handleOpenModal('contact')}
      />
      <SkillsModal
        isOpen={activeModal === 'skills'}
        onClose={handleCloseModals}
      />
      <EducationModal
        isOpen={activeModal === 'education'}
        onClose={handleCloseModals}
      />
      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={handleCloseModals}
      />
    </div>
  );
}
