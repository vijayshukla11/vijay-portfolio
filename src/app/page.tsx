'use client';
import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact-section";
import ExperienceSection from "@/components/home/experience-section";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";
import ResumeSection from "@/components/home/resume-section";
import SkillsSection from "@/components/home/skills-section";
import { motion } from 'framer-motion';
import WhyWorkWithMeSection from "@/components/home/why-work-with-me-section";
import StrengthsSection from "@/components/home/strengths-section";
import HowIWorkSection from "@/components/home/how-i-work-section";
import ArticlesSection from "@/components/home/articles-section";

const sections = [
  { id: 'about', component: <AboutSection />, title: "About Me" },
  { id: 'why', component: <WhyWorkWithMeSection />, title: "Why Work With Me?" },
  { id: 'strengths', component: <StrengthsSection />, title: "My Approach" },
  { id: 'how-i-work', component: <HowIWorkSection />, title: "How I Work" },
  { id: 'skills', component: <SkillsSection />, title: "Core Capabilities" },
  { id: 'projects', component: <ProjectsSection />, title: "Projects & Case Studies" },
  { id: 'articles', component: <ArticlesSection />, title: "Insights & Articles" },
  { id: 'experience', component: <ExperienceSection />, title: "Work Experience" },
  { id: 'resume', component: <ResumeSection />, title: "Resume Highlights" },
  { id: 'contact', component: <ContactSection />, title: "Get In Touch" },
];

export default function HomePage() {
  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container mx-auto px-4 md:px-6">
        <HeroSection />

        {sections.map((section) => (
          <motion.section 
            key={section.id}
            id={section.id}
            className="py-16 md:py-20"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            {section.component}
          </motion.section>
        ))}
      </main>

      <footer className="border-t border-border/20 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VIJAY SHUKLA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
