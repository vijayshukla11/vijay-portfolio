import { AreaChart, Award, BarChart, Clock, Code, FileText, Gauge, LayoutDashboard, MessageSquare, PieChart, ShoppingCart, SlidersHorizontal, Target, TrendingUp } from "lucide-react";

export const kpiData = [
  { title: "Fill Rate", value: "92.5%", trend: "+1.2%", icon: Gauge },
  { title: "Cancel Rate", value: "3.1%", trend: "-0.5%", icon: PieChart },
  { title: "SLA %", value: "98.2%", trend: "+0.8%", icon: SlidersHorizontal },
  { title: "GMV Trend", value: "+5.7%", trend: "+2.1%", icon: AreaChart },
  { title: "OOS SKUs", value: "124", trend: "-15", icon: ShoppingCart },
];

export const skills = {
  "Data Analytics": [
    { name: "Advanced Excel", level: 95 },
    { name: "Power Query", level: 90 },
    { name: "Pivot Tables & Charts", level: 95 },
    { name: "KPI Reporting & MIS", level: 92 },
  ],
  "BI Tools": [
    { name: "Power BI (DAX - basics)", level: 75 },
    { name: "Dashboard Storytelling", level: 85 },
  ],
  "SQL": [{ name: "Basics (Joins, Aggregation)", level: 70 }],
  "Quick Commerce KPIs": [
    { name: "Fill Rate / OOS%", level: 95 },
    { name: "Cancellation Rate Analysis", level: 90 },
    { name: "SLA% (Dispatch to Delivery)", level: 88 },
  ],
  "Soft Skills": [
    { name: "Stakeholder Management", level: 90 },
    { name: "Problem Solving", level: 95 },
  ],
};

export const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"];

export const projects = [
  {
    title: "Stock Availability & OOS Tracker",
    problem: "Lack of real-time visibility into out-of-stock items, leading to lost sales and poor customer experience.",
    approach: "Developed an Excel-based dashboard using Power Query to pull data from the POS system. The dashboard tracked SKU availability across all outlets, highlighting top OOS items and their potential sales impact.",
    outcome: "Reduced OOS instances by 15% and provided operations with an actionable daily report to prioritize stock replenishment.",
    tags: ["Excel", "Power Query", "KPI", "Dashboard"],
  },
  {
    title: "Order Funnel & Cancellation Analysis",
    problem: "High order cancellation rates without a clear understanding of the root causes.",
    approach: "Analyzed order data to map the customer funnel from order placement to delivery. Segmented cancellations by reason (e.g., customer request, rider issue, stock mismatch) and by outlet.",
    outcome: "Identified 'stock mismatch' as the top cancellation reason in specific stores. Actions taken led to a 20% reduction in cancellations for those stores.",
    tags: ["KPI", "Analysis", "Excel"],
  },
  {
    title: "SLA Monitoring (Dispatch + Delivery)",
    problem: "Inconsistent delivery times were impacting customer satisfaction, but the team lacked a tool to monitor SLA compliance effectively.",
    approach: "Created a daily SLA monitoring report that tracked key timings: order placement, dispatch, and final delivery. Used conditional formatting to flag breaches.",
    outcome: "Improved average delivery time by 10 minutes and increased SLA compliance to 98% by providing clear performance visibility to the ops team.",
    tags: ["SLA", "KPI", "Reporting"],
  },
  {
    title: "Pricing/Discount Impact Watch",
    problem: "Marketing campaigns with heavy discounts were running without a clear view of their impact on gross margins.",
    approach: "Built a model to compare sales, GMV, and margin percentage during promotional periods versus baseline. The report helped quantify the trade-off between growth and profitability.",
    outcome: "Enabled data-driven decisions on discount strategy, leading to a 5% improvement in gross margin during campaigns without significantly hurting sales volume.",
    tags: ["Excel", "Analytics", "Margin Protection"],
  },
];

export const experiences = [
    {
      role: "Inventory & Operations Analyst",
      company: "Restaurant Company (Multi-Outlet Ops)",
      period: "Current Role",
      achievements: [
        "Managed daily inventory tracking for multiple outlets, ensuring stock accuracy.",
        "Built daily/weekly MIS dashboards for Stock Value, Variance %, and Consumption trends.",
        "Identified wastage patterns, leading to corrective actions and reduced dead stock.",
        "Reduced manual reporting time by creating structured templates for reconciliation."
      ],
    },
    {
      role: "E-commerce & Quick Commerce Operations",
      company: "Listing + Execution Support",
      period: "Previous Work / Additional Responsibility",
      achievements: [
        "Managed product listing, catalog updates, and operational data for online channels.",
        "Tracked and reported on performance issues like OOS, cancellations, and stock mismatch.",
        "Supported faster decision-making with structured data on product availability and demand.",
      ],
    },
];

export const resumeHighlights = [
    "Expert in Advanced Excel, Power Query, and Pivot Tables for complex data modeling.",
    "Proven ability to design and build insightful MIS dashboards for operational KPIs.",
    "Strong understanding of Quick Commerce metrics like Fill Rate, OOS%, and SLA.",
    "Experience in identifying root causes for issues like stock variance and order cancellations.",
    "Skilled in translating raw operational data into actionable business insights.",
    "Reduces manual effort by automating reporting and creating efficient data templates.",
    "Collaborates effectively with operations teams to drive data-backed improvements.",
    "Fast learner, currently expanding skills in Power BI (DAX) and SQL."
];

export const dashboardNavLinks = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Availability", icon: Gauge, href: "#" },
    { name: "Cancellations", icon: PieChart, href: "#" },
    { name: "SLA", icon: SlidersHorizontal, href: "#" },
    { name: "Margin", icon: BarChart, href: "#" },
    { name: "Catalog Health", icon: FileText, href: "#" },
];

export const dashboardKpis = [
  { title: "Total Orders", value: "4,281", change: "+12.5% vs last week" },
  { title: "GMV", value: "₹12,45,670", change: "+9.8% vs last week" },
  { title: "Fill Rate", value: "92.5%", change: "+1.2% vs last week" },
  { title: "Cancel Rate", value: "3.1%", change: "-0.5% vs last week", invertColor: true },
  { title: "On-Time SLA", value: "98.2%", change: "+0.8% vs last week" },
];

export const trendData = [
  { week: 'Week 1', Orders: 3200, GMV: 900000 },
  { week: 'Week 2', Orders: 3500, GMV: 980000 },
  { week: 'Week 3', Orders: 3100, GMV: 850000 },
  { week: 'Week 4', Orders: 3800, GMV: 1100000 },
  { week: 'Week 5', Orders: 4100, GMV: 1210000 },
  { week: 'Week 6', Orders: 4281, GMV: 1245670 },
];

export const storeFillRateData = [
  { name: 'Store 1', fillRate: 95 },
  { name: 'Store 2', fillRate: 88 },
  { name: 'Store 3', fillRate: 91 },
  { name: 'Store 4', fillRate: 97 },
  { name: 'Store 5', fillRate: 85 },
  { name: 'Store 6', fillRate: 94 },
];

export const cancellationReasonsData = [
  { name: 'Customer Request', value: 45 },
  { name: 'Stock Mismatch', value: 25 },
  { name: 'Rider Not Assigned', value: 15 },
  { name: 'Store Closed', value: 8 },
  { name: 'Other', value: 7 },
];

export const topOosSkusData = [
    { sku: 'AMUL TAAZA 500ML', oosInstances: 125, lostGmv: 3500 },
    { sku: 'BRITANNIA BREAD 400G', oosInstances: 98, lostGmv: 2940 },
    { sku: 'MAGGI 2-MINUTE NOODLES', oosInstances: 85, lostGmv: 1020 },
    { sku: 'COCA-COLA PET 750ML', oosInstances: 72, lostGmv: 2880 },
    { sku: 'LAY\'S CHIPS - BLUE', oosInstances: 65, lostGmv: 1300 },
];

export const strengths = [
    {
        icon: Target,
        title: "Solve Your Business Problems",
        description: "Not just code - I understand your business goals and build solutions that drive real results."
    },
    {
        icon: Code,
        title: "Production-Ready Code",
        description: "Not just demos - production-ready code that can be deployed directly. Zero bugs guarantee."
    },
    {
        icon: Clock,
        title: "Fast Delivery & Response",
        description: "24-48 hours response time. Time-bound delivery with regular milestones and updates."
    },
    {
        icon: Award,
        title: "15+ Successful Projects",
        description: "Real clients, real projects, real results. Every project is running successfully in production."
    },
    {
        icon: MessageSquare,
        title: "Clear Communication",
        description: "Regular updates, clear explanations, and comfortable communication. Your success is my priority."
    },
    {
        icon: TrendingUp,
        title: "Scalable Solutions",
        description: "Small business today, big business tomorrow. Solutions designed to grow with your business."
    }
];
