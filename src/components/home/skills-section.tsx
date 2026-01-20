import { skills, techStack } from "@/lib/data"
import { Progress } from "../ui/progress"

const SkillsSection = () => (
    <div>
        <h2 className="text-3xl font-bold text-center mb-8">Analytics & Tools</h2>
        <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                    <h3 className="text-xl font-semibold mb-4">{category}</h3>
                    <div className="space-y-4">
                        {skillList.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-primary/90">{skill.name}</span>
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-4">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {techStack.map(tech => (
                    <div key={tech} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default SkillsSection;
