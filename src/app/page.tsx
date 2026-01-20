'use client';
import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact-section";
import ExperienceSection from "@/components/home/experience-section";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";
import ResumeSection from "@/components/home/resume-section";
import SkillsSection from "@/components/home/skills-section";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const sections = [
  { id: 'about', component: <AboutSection /> },
  { id: 'skills', component: <SkillsSection /> },
  { id: 'projects', component: <ProjectsSection /> },
  { id: 'experience', component: <ExperienceSection /> },
  { id: 'resume', component: <ResumeSection /> },
  { id: 'contact', component: <ContactSection /> },
];

export default function HomePage() {
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground section-gradient">
      <main className="flex-1 container mx-auto px-4 md:px-8">
        <HeroSection />

        {sections.map((section, index) => (
          <MotionCard 
            key={section.id}
            id={section.id}
            className="my-16 md:my-24 p-6 md:p-10 glassmorphic-card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            {section.component}
          </MotionCard>
        ))}
      </main>

      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VIJAY SHUKLA. All rights reserved. Built with Next.js and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
