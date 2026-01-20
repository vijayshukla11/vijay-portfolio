import { experiences } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

const ExperienceSection = () => (
    <div>
        <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
        <div className="relative border-l-2 border-primary/20 pl-6 space-y-10">
            {experiences.map((exp, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="font-semibold text-primary/80 mb-2">{exp.company}</p>
                    <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 mt-1 text-green-400 flex-shrink-0" />
                                <span className="text-muted-foreground">{ach}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default ExperienceSection;
