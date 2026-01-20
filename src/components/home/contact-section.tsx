'use client';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection = () => (
    <div>
        <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-8">Have a question or want to work together? Leave a message.</p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
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
);

export default ContactSection;
