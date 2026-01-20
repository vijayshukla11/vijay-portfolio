import { dashboardNavLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-64 p-4 border-r border-border/20 bg-card/40">
            <div className="font-bold text-xl mb-8 p-2">
                <Link href="/">VS DASH</Link>
            </div>
            <nav className="flex flex-col gap-2">
                {dashboardNavLinks.map(link => {
                    const isActive = pathname === link.href;
                    return (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                isActive && "bg-primary/10 text-primary"
                            )}
                        >
                            <link.icon className="h-4 w-4" />
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    );
}

export default Sidebar;
