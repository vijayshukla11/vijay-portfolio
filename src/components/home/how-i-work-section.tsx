import { howIWorkSteps } from "@/lib/data";

const HowIWorkSection = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'hsl(var(--primary))'}}>
                How I Work
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-16">
                Simple, transparent process. You'll get clarity at every step and regular updates throughout the project.
            </p>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-9 top-0 h-full w-0.5 bg-border/30" />
                <div className="space-y-12">
                    {howIWorkSteps.map((step, index) => (
                        <div key={index} className="relative flex items-start gap-8">
                            {/* Icon */}
                            <div className="z-10 flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/50 bg-background">
                                <step.icon className="h-8 w-8 text-primary" />
                            </div>

                            {/* Card */}
                            <div className="relative text-left p-6 rounded-lg border border-border/20 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 w-full">
                                <span className="absolute top-6 right-6 inline-block py-1 px-2.5 text-xs font-semibold text-primary-foreground bg-primary/70 rounded-full">
                                    {step.duration}
                                </span>
                                <h3 className="text-xl font-bold mb-2">{`${index + 1}. ${step.title}`}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowIWorkSection;
