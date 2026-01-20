import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';

export default function PortfolioPage() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  const projectDetails = [
    { id: 'project-1', title: 'Inventory Variance Dashboard', description: 'Built outlet-wise variance summary reports with top variance SKUs and trend view to improve decision speed for audits.' },
    { id: 'project-2', title: 'Low Stock Alert System', description: 'Created Min/Max reorder sheet and conditional formatting alert system to reduce emergency purchases and improve availability.' },
    { id: 'project-3', title: 'Wastage & Return-Day Tracker', description: 'Designed expiry risk & return due report for action planning, controlling dead stock and improving returns management.' },
    { id: 'project-4', title: 'Vendor Price Comparison Sheet', description: 'Built vendor rate comparison view with weekly summaries to support purchase planning and vendor negotiation decisions.' },
  ];

  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));

  const projects = projectDetails.map(detail => {
    const image = projectImages.find(p => p.id === detail.id);
    return { ...detail, ...image };
  }).filter(p => p.imageUrl);

  const skills = ['Advanced Excel', 'Power Query', 'Dashboarding & Reporting', 'Inventory & Ops Analytics', 'E-commerce KPIs', 'SQL', 'Google Sheets', 'Rista POS'];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="#" className="font-bold">My Portfolio</a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">Projects</a>
            <a href="#skills" className="text-muted-foreground transition-colors hover:text-foreground">Skills</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
              <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">VIJAY SHUKLA</h1>
              <p className="text-muted-foreground text-center">Data Analyst | Operations & Inventory Analytics | E-commerce & Quick Commerce Reporting</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="text-muted-foreground">Data-driven professional with strong hands-on experience in inventory operations, e-commerce management, and reporting. Skilled in Advanced Excel, MIS reporting, data cleaning, and dashboard creation to solve business problems like stock variance, shrinkage control, wastage reduction, outlet performance tracking, and availability improvement. Strong operational understanding with ability to convert raw data into actionable insights for leadership decision-making.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-muted rounded-lg">
          <h2 className="mb-10 text-center text-3xl font-bold">My Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title!}
                      width={600}
                      height={400}
                      className="rounded-t-lg object-cover"
                       data-ai-hint={project.imageHint}
                    />
                  )}
                  <CardTitle className="pt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32">
          <h2 className="mb-10 text-center text-3xl font-bold">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map(skill => (
              <div key={skill} className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-muted rounded-lg">
          <h2 className="mb-4 text-center text-3xl font-bold">Get In Touch</h2>
          <p className="mb-8 text-center text-muted-foreground">I'm currently open to new opportunities. Feel free to reach out!</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:yourmail@email.com" className="text-muted-foreground hover:text-primary"><Mail className="h-8 w-8" /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin className="h-8 w-8" /></a>
            <a href="https://yourlink.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Globe className="h-8 w-8" /></a>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VIJAY SHUKLA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
