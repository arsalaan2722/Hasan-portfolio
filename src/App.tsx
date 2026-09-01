import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ResumeModal } from './components/common/ResumeModal';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';

function AnimatedRoutes({ onOpenResume }: { onOpenResume: () => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="min-h-[calc(100vh-200px)]"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage onOpenResume={onOpenResume} />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage onOpenResume={onOpenResume} />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage onOpenResume={onOpenResume} />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-navy-900 text-text-primary overflow-x-hidden selection:bg-emerald-500/25 selection:text-emerald-300 flex flex-col justify-between">
        {/* Scroll To Top on Route Change */}
        <ScrollToTop />

        {/* Global Executive Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Sticky Executive Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Area with Page Transitions */}
        <main className="flex-grow">
          <AnimatedRoutes onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Executive Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
