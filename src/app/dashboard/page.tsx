'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardKpis } from "@/lib/data";
import { motion } from "framer-motion";
import Sidebar from "@/components/dashboard/sidebar";
import DashboardKpiCard from "@/components/dashboard/dashboard-kpi-card";
import TrendChart from "@/components/dashboard/trend-chart";
import StoreFillrateChart from "@/components/dashboard/store-fillrate-chart";
import CancellationReasonsChart from "@/components/dashboard/cancellation-reasons-chart";
import TopOosSkusTable from "@/components/dashboard/top-oos-skus-table";
import { Input } from "@/components/ui/input";
import { Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar />
            <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">Overview</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search..." className="pl-9" />
                        </div>
                        <Button variant="outline">
                            <Calendar className="mr-2 h-4 w-4" />
                            Date Range
                        </Button>
                    </div>
                </div>

                <motion.div
                    className="grid gap-4 md:grid-cols-2 lg:grid-cols-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {dashboardKpis.map(kpi => (
                        <motion.div key={kpi.title} variants={itemVariants}>
                            <DashboardKpiCard {...kpi} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                         <TrendChart />
                    </motion.div>
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <StoreFillrateChart />
                    </motion.div>
                </motion.div>
                
                 <motion.div
                    className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <CancellationReasonsChart />
                    </motion.div>
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                        <TopOosSkusTable />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={itemVariants}>
                        <Card className="glassmorphic-card">
                            <CardHeader>
                                <CardTitle>Key Insights</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p>🟢 <strong className="text-green-400">Store 4</strong> achieved the highest fill rate at 97%.</p>
                                <p>🔴 <strong className="text-red-400">Store 5's</strong> cancellation rate increased 12% WoW, driven by stock mismatches.</p>
                                <p>💡 Top 5 OOS SKUs are driving an estimated <strong>₹11,640</strong> in lost sales this week.</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                     <motion.div variants={itemVariants}>
                        <Card className="glassmorphic-card">
                            <CardHeader>
                                <CardTitle>Top Cancelling Stores</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-muted-foreground">
                                <p>1. Store 5 (High stock mismatch issues)</p>
                                <p>2. Store 2 (Repeated rider assignment delays)</p>
                                <p>3. Store 3 (Manual order errors)</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
};

export default DashboardPage;
