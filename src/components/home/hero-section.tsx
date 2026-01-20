'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Download, Power, Zap } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HeroSection = () => {
    const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

    return (
        <section className="py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Turn Data Into 
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Actionable Insights</span>
                    </motion.h1>

                    <motion.p 
                        className="max-w-xl text-muted-foreground mb-6 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        I convert complex operations & supply chain data into clear, actionable dashboards that drive business growth and efficiency.
                    </motion.p>
                    <motion.p
                        className="max-w-xl text-primary/80 mb-8 font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Data Analyst by Day, Dashboard Wizard by Night.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Button size="lg" className="group" asChild>
                            <Link href="/dashboard">
                                View Dashboard <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="/resume.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <CheckCircle className="h-4 w-4" />
                      Available for new projects
                    </motion.div>
                </div>

                {/* Right Column */}
                <motion.div 
                    className="relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-50 lg:opacity-75"></div>
                    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-background rounded-2xl p-2 shadow-2xl shadow-black/60">
                         {profileImage && (
                            <Image
                                src={profileImage.imageUrl}
                                alt="A professional headshot of Vijay Shukla"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-xl"
                                sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                                data-ai-hint={profileImage.imageHint}
                                priority
                            />
                        )}
                        <div className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-accent/50">
                            <Power className="h-5 w-5 text-accent" />
                        </div>
                        <div className="absolute bottom-2 left-2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-primary/50">
                            <Zap className="h-5 w-5 text-primary" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
