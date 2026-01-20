import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { storeFillRateData } from "@/lib/data"

const StoreFillrateChart = () => (
    <Card className="glassmorphic-card h-full">
        <CardHeader>
            <CardTitle>Store-wise Fill Rate (%)</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={storeFillRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[80, 100]} tickFormatter={(value) => `${value}%`} />
                    <Tooltip
                         contentStyle={{
                            backgroundColor: 'hsl(var(--background) / 0.8)',
                            borderColor: 'hsl(var(--border))',
                        }}
                        cursor={{fill: 'hsl(var(--primary) / 0.1)'}}
                    />
                     <Bar dataKey="fillRate" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
)

export default StoreFillrateChart;
