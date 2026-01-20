'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { kpiData } from "@/lib/data";
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import KpiCard from "./kpi-card";

const HeroSection = () => {
    return (
        <section className="text-center py-20 md:py-32">
            <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Vijay Shukla
            </motion.h1>
            <motion.h2 
                className="text-xl md:text-2xl font-semibold text-primary/80 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Data Analyst | Quick Commerce Ops Analytics
            </motion.h2>
            <motion.p 
                className="max-w-3xl mx-auto text-muted-foreground mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                “I convert operations + supply chain data into dashboards that improve Fill Rate, reduce cancellations, improve SLA, and protect margin.”
            </motion.p>
            <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Button size="lg" asChild>
                    <Link href="/dashboard">View Dashboard</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="/resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                    </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                     <Link href="#contact">
                        <Send className="mr-2 h-4 w-4" />
                        Contact
                    </Link>
                </Button>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 max-w-5xl mx-auto">
                {kpiData.map((kpi, index) => (
                     <motion.div
                        key={kpi.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                        <KpiCard {...kpi} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
