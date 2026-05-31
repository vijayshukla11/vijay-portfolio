import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const AboutSection = () => {
    const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

    return (
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
                {profileImage && (
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <Image
                            src={profileImage.imageUrl}
                            alt="A professional headshot of Vijay Shukla"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 192px, 256px"
                            data-ai-hint={profileImage.imageHint}
                        />
                    </div>
                )}
            </div>
            <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Business Operations, Analytics & Technology</h2>
                <p className="max-w-3xl mx-auto md:mx-0 text-muted-foreground text-lg">
                  About Me

I am a Business Analyst and Operations Professional with hands-on experience in data-driven business management, technology operations, inventory control, and process optimization.

Currently, I work closely with Sachde Food & Beverages, managing operational data and business performance across multiple brands including Love N Latte, Nymi Coffee, and JustMySalad. My role involves transforming raw business data into actionable insights that support strategic decision-making and operational efficiency.

I oversee sales analytics, inventory management, purchase order (PO) management, business reporting, and performance tracking across multiple outlets. In addition to analytics, I provide technology and operational support for outlet teams, helping streamline workflows and improve day-to-day business operations.

My responsibilities also include managing and optimizing the websites and digital platforms of Love N Latte, Nymi Coffee, and JustMySalad, ensuring smooth customer experiences and efficient backend operations. I work extensively with business data, dashboards, reporting systems, and operational processes to identify opportunities for growth and efficiency.

I am particularly interested in solving complex business and technology challenges through analytics, automation, and AI-powered solutions. My goal is to build scalable systems that combine Business, Data, Operations, and Technology to drive measurable business growth and improve decision-making.</p>

            </div>
        </div>
    );
}

export default AboutSection;
