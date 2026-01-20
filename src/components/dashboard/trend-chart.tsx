import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { trendData } from "@/lib/data"

const TrendChart = () => (
    <Card className="glassmorphic-card h-full">
        <CardHeader>
            <CardTitle>GMV & Orders Trend (Weekly)</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                    <defs>
                        <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                         <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `₹${Number(value)/1000}k`} />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'hsl(var(--background) / 0.8)',
                            borderColor: 'hsl(var(--border))',
                        }}
                    />
                    <Area yAxisId="left" type="monotone" dataKey="GMV" stroke="hsl(var(--primary))" fill="url(#colorGmv)" />
                    <Area yAxisId="right" type="monotone" dataKey="Orders" stroke="hsl(var(--primary) / 0.5)" fill="url(#colorOrders)" />
                </AreaChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
)

export default TrendChart;
