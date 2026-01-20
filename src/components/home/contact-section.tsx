'use client';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const ContactSection = () => (
    <div className="w-full">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Ready to Start Your Project?
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                Let's discuss your project. I'll help you build a solution that works for your business and grows with your needs. Initial consultation is free. No obligation.
            </p>
            <div className="flex justify-center gap-4 mb-12">
                 <Button size="lg" className="group" asChild>
                    <a href="#contact-form">
                        Get In Touch <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
                 <Button size="lg" variant="outline" asChild>
                    <Link href="/dashboard">
                        Try Live Demo
                    </Link>
                </Button>
            </div>

            <div id="contact-form" className="grid md:grid-cols-2 gap-8 items-start text-left pt-8 border-t border-border/20">
                <form className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message here..." />
                    </div>
                    <Button type="submit">Send Message</Button>
                </form>
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <div className="text-left w-full">
                        <h3 className="font-bold text-lg mb-2">Other ways to connect</h3>
                        <p className="text-sm text-muted-foreground mb-4">You can also reach out directly via email or WhatsApp.</p>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                        <a href="mailto:yourmail@email.com">
                            <Mail className="mr-2 h-4 w-4"/> Email Me
                        </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-4 w-4"/> WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default ContactSection;
