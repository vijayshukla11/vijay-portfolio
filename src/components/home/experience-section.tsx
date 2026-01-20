import { experiences, resumeHighlights } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
    return (
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-8 text-primary">Core Capabilities</h2>
                <div className="space-y-4">
                    {resumeHighlights.slice(0, 7).map((highlight, i) => (
                         <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card/60 border border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                            <CheckCircle2 className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">{highlight}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-8 text-primary">My Journey</h2>
                <div className="relative border-l border-primary/20 pl-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[18px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                            <p className="text-sm font-semibold text-primary">{exp.period}</p>
                            <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                            <p className="font-semibold text-primary/80 mb-4">{exp.company}</p>
                            <ul className="space-y-2">
                                {exp.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 mt-1 text-green-400 flex-shrink-0" />
                                        <span className="text-muted-foreground text-sm">{ach}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
