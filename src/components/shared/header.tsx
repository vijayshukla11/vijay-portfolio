import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "../ui/button"

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
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">VS</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button asChild>
                        <Link href="/dashboard">View Dashboard</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;
