import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
    { value: "15+", label: "PROJECTS DELIVERED" },
    { value: "24-48h", label: "RESPONSE TIME" },
    { value: "99.9%", label: "UPTIME GUARANTEE" },
    { value: "100%", label: "SATISFACTION RATE" },
];

const WhyWorkWithMeSection = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'hsl(var(--primary))'}}>
                Why Work With Me?
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12 text-lg">
                Professional service, clear communication, and guaranteed results. Your success is my priority.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg p-6 bg-card/70 border border-border/20 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-primary/10">
                        <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-2">
                            {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-primary text-primary-foreground group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
                No commitment. Let's discuss your project and see how I can help.
            </p>
        </div>
    );
};

export default WhyWorkWithMeSection;
