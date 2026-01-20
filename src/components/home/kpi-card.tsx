import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface KpiCardProps {
    title: string;
    value: string;
    trend: string;
    icon: LucideIcon;
}

const KpiCard = ({ title, value, trend, icon: Icon }: KpiCardProps) => {
    return (
        <Card className="glassmorphic-card text-left">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{trend} from last month</p>
            </CardContent>
        </Card>
    )
}

export default KpiCard;
