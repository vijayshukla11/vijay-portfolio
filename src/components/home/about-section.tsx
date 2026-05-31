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
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="max-w-3xl mx-auto md:mx-0 text-muted-foreground text-lg">
                   I am a Business Analyst and Operations Professional with hands-on experience across supply chain management, e-commerce operations, food businesses, and analytics-driven decision making.

My journey started by managing real-world business operations, from farm production planning and inventory management to customer acquisition and sales analytics. Working with businesses such as JMS One Root, Clinza, and JustMySalad has given me practical exposure to solving operational challenges using data, automation, and technology.

Today, my focus is on building AI-powered business systems, creating insightful dashboards, automating workflows, and helping organizations make faster, smarter decisions through analytics and process optimization.

I believe the future belongs to professionals who can combine Business, Data, AI, and Automation into scalable systems that drive measurable growth.

            </div>
        </div>
    );
}

export default AboutSection;
