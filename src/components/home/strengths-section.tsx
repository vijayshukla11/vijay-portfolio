import { strengths } from "@/lib/data";

const StrengthsSection = () => {
    return (
        <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-12">
                My Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {strengths.map((strength) => (
                    <div key={strength.title} className="bg-card/70 border border-border/20 rounded-xl p-6 text-left flex flex-col gap-4 transition-all duration-300 hover:border-primary/40 hover:shadow-primary/10">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <strength.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground">{strength.title}</h3>
                        <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StrengthsSection;
