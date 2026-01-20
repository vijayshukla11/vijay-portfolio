import { projects } from "@/lib/data";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

const ProjectsSection = () => (
    <div>
        <h2 className="text-3xl font-bold text-center mb-8">Projects & Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {projects.map(project => (
                <Card key={project.title} className="flex flex-col">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription><strong>Problem:</strong> {project.problem}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p><strong className="text-primary/80">Approach:</strong> {project.approach}</p>
                        <p><strong className="text-primary/80">Outcome:</strong> {project.outcome}</p>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/80">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Button variant="outline">View Dashboard Preview</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
);

export default ProjectsSection;
