'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from '../ui/input';
import { ArrowUpRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

    const filteredProjects = projects
        .filter(project => activeFilter === 'All' || project.tags.includes(activeFilter))
        .filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );

    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    Real-world data analytics projects showcasing technical expertise and problem-solving.
                </p>
            </div>

            <div className="mb-8 space-y-4 max-w-3xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects by name, description, or tech..."
                        className="pl-9 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {allTags.map(tag => (
                        <Button
                            key={tag}
                            variant={activeFilter === tag ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveFilter(tag)}
                            className={cn(
                                "rounded-full transition-all text-xs h-7",
                                activeFilter === tag && "bg-gradient-to-r from-primary to-purple-400 text-primary-foreground border-transparent"
                            )}
                        >
                            {tag}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => {
                    const projectImage = PlaceHolderImages.find(p => p.id === project.imageUrl);
                    return (
                        <Card key={project.id} className="flex flex-col bg-card/60 border-border/20 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                            {projectImage && (
                                <CardHeader className="p-0">
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={projectImage.imageUrl}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            data-ai-hint={projectImage.imageHint}
                                        />
                                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </CardHeader>
                            )}
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                                <CardDescription className="text-muted-foreground text-sm mb-4 flex-grow">
                                    {project.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 4).map(tag => (
                                        <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                             <CardFooter className="p-6 pt-0">
                                <Button variant="outline" className="w-full group" asChild>
                                    <Link href={project.liveUrl || '#'}>
                                        View Dashboard <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsSection;
