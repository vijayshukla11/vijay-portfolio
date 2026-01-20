'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateBio } from '@/ai/flows/generate-bio';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function PortfolioPage() {
  const [notes, setNotes] = useState('');
  const [generatedBio, setGeneratedBio] = useState(
    "I'm a passionate software developer with a knack for creating elegant solutions in a fast-paced environment. I specialize in full-stack development and I'm always looking for new challenges to tackle."
  );
  const [isLoading, setIsLoading] = useState(false);

  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));

  const handleGenerateBio = async () => {
    setIsLoading(true);
    setGeneratedBio('');
    try {
      const result = await generateBio({ notes });
      setGeneratedBio(result.bio);
    } catch (error) {
      console.error('Failed to generate bio:', error);
      setGeneratedBio('Failed to generate a bio. Please try again.');
    }
    setIsLoading(false);
  };

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
              <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">John Doe</h1>
              <p className="text-muted-foreground">Software Developer</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="text-muted-foreground">{generatedBio}</p>
              <div className="space-y-4">
                <Label htmlFor="notes">Generate a new bio with AI</Label>
                 <Textarea
                  id="notes"
                  placeholder="e.g., 5 years of experience in React, loves building beautiful UIs, skilled in Node.js and Python..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button onClick={handleGenerateBio} disabled={isLoading}>
                  {isLoading ? 'Generating...' : 'Generate AI Bio'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-muted rounded-lg">
          <h2 className="mb-10 text-center text-3xl font-bold">My Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((project, index) => (
              <Card key={project.id}>
                <CardHeader>
                  <Image
                    src={project.imageUrl}
                    alt={`Project ${index + 1}`}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                     data-ai-hint={project.imageHint}
                  />
                  <CardTitle className="pt-4">Project {index + 1}</CardTitle>
                  <CardDescription>A brief description of the project goes here. What it does, the tech used, and your role.</CardDescription>
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
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'Genkit', 'Figma'].map(skill => (
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
            <a href="#" className="text-muted-foreground hover:text-primary"><Mail className="h-8 w-8" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Github className="h-8 w-8" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-8 w-8" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-8 w-8" /></a>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
