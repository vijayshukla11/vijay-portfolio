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
                    A data-driven analyst with a deep understanding of multi-outlet reporting and the operational nuances of inventory and Quick Commerce execution. My strength lies in transforming complex datasets into clear, actionable insights using Advanced Excel, Power Query, and intuitive dashboards. I thrive on optimizing operational KPIs to drive business growth and efficiency.
                </p>
            </div>
        </div>
    );
}

export default AboutSection;
