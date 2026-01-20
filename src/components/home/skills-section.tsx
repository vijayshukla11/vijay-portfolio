import { services } from "@/lib/data";

const SkillsSection = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {services.map((service) => (
                    <div key={service.title} className="bg-card/60 backdrop-blur-sm border border-border/20 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                            <div className="mt-2 inline-block px-2 py-0.5 text-xs font-semibold tracking-wider text-muted-foreground bg-muted/50 rounded">
                                {service.tag}
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
