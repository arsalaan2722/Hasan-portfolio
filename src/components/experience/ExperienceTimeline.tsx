import React from 'react';
import { experienceList } from '../../data/experience';
import { SectionHeader } from '../common/SectionHeader';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="CAREER JOURNEY"
          heading="18+ Years of Financial Leadership & Transformation"
          subheading="A career spanning Accounts Receivable, end-to-end US finance operations, global process migrations, team leadership, and finance process improvement."
          align="center"
        />

        <div className="relative mt-12">
          {experienceList.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
