import React from 'react';
import { featuredProjects } from '../../data/projects';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="FEATURED INITIATIVES"
          heading="Finance Transformation, Automation & AI Innovation"
          subheading="Pioneering real-world financial architectures: from Generative AI KPI tracking and automated invoice reconciliation to multi-system forecasting pipelines."
          align="center"
        />

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
