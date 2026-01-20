import Link from "next/link";
import { Button } from "../ui/button";
import { Linkedin, PlayCircle, Github } from "lucide-react";

const Header = () => {
    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];
    
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-7xl items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-md bg-foreground flex items-center justify-center text-background font-bold text-lg">
                        VS
                    </div>
                    <span className="font-bold hidden sm:inline-block">Vijay Shukla</span>
                </Link>
                <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center justify-end space-x-2 md:space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        </a>
                    </Button>
                     <Button className="bg-gradient-to-r from-secondary to-blue-400 text-white group hidden sm:flex" asChild>
                        <Link href="/dashboard">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            View Dashboard
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;
