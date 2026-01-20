import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils";

interface DashboardKpiCardProps {
    title: string;
    value: string;
    change: string;
    invertColor?: boolean;
}

const DashboardKpiCard = ({ title, value, change, invertColor = false }: DashboardKpiCardProps) => {
    const isPositive = change.startsWith('+');
    const changeColor = invertColor 
        ? (isPositive ? 'text-red-400' : 'text-green-400')
        : (isPositive ? 'text-green-400' : 'text-red-400');

    return (
        <Card className="glassmorphic-card">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className={cn("text-xs", changeColor)}>{change}</p>
            </CardContent>
        </Card>
    );
};

export default DashboardKpiCard;
