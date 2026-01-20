import { AreaChart, Award, BarChart, CheckCircle2, Clock, Code, Database, FileText, Gauge, LayoutDashboard, MessageSquare, PieChart, Presentation, Puzzle, ShoppingCart, SlidersHorizontal, Target, TrendingUp, Users } from "lucide-react";

export const kpiData = [
  { title: "Fill Rate", value: "92.5%", trend: "+1.2%", icon: Gauge },
  { title: "Cancel Rate", value: "3.1%", trend: "-0.5%", icon: PieChart },
  { title: "SLA %", value: "98.2%", trend: "+0.8%", icon: SlidersHorizontal },
  { title: "GMV Trend", value: "+5.7%", trend: "+2.1%", icon: AreaChart },
  { title: "OOS SKUs", value: "124", trend: "-15", icon: ShoppingCart },
];

export const services = [
    {
        icon: LayoutDashboard,
        title: "Dashboards & Reporting",
        tag: "BI & Visualization",
        description: "Building daily/weekly MIS, KPI trackers, and executive summaries to provide a clear view of business performance."
    },
    {
        icon: BarChart,
        title: "Inventory & Ops Analytics",
        tag: "Analytics",
        description: "Analyzing stock variance, wastage, and returns to control shrinkage and improve stock accuracy."
    },
    {
        icon: Gauge,
        title: "Quick Commerce KPI Analysis",
        tag: "Q-Commerce",
        description: "Deep-dive analysis into Fill Rate, Cancellation Rate, and SLA performance to drive operational excellence."
    },
    {
        icon: FileText,
        title: "Advanced Excel & Data Modeling",
        tag: "Data Tools",
        description: "Using Power Query, Pivot Tables, and advanced formulas to clean, transform, and model complex datasets."
    },
    {
        icon: Database,
        title: "SQL for Data Extraction",
        tag: "Data",
        description: "Writing basic SQL queries with joins and aggregations to extract and manipulate data from databases."
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Operations",
        tag: "E-commerce",
        description: "Managing product listings, catalog data, and tracking key metrics like OOS and order execution for online channels."
    },
    {
        icon: Presentation,
        title: "Dashboard Storytelling",
        tag: "Communication",
        description: "Translating complex data findings into a clear and compelling narrative for stakeholders."
    },
    {
        icon: Users,
        title: "Stakeholder Management",
        tag: "Soft Skills",
        description: "Communicating insights and collaborating with operations teams to drive data-backed improvements."
    },
    {
        icon: Target,
        title: "Problem Solving",
        tag: "Strategy",
        description: "Identifying root causes for business challenges like stock variance and order cancellations through data analysis."
    },
    {
        icon: CheckCircle2,
        title: "Data Cleaning & Validation",
        tag: "Data Quality",
        description: "Ensuring data accuracy and consistency through validation rules and cleaning processes in Excel and Power Query."
    },
    {
        icon: TrendingUp,
        title: "Performance Tracking",
        tag: "Analytics",
        description: "Setting up and monitoring key performance indicators to track outlet performance and identify areas for improvement."
    },
    {
        icon: Puzzle,
        title: "End-to-End Analysis",
        tag: "Process",
        description: "From data extraction and cleaning to building the final dashboard and presenting insights to leadership."
    },
];

export const projects = [
  {
    id: "oos-tracker",
    title: "Stock Availability & OOS Tracker",
    description: "Developed an Excel dashboard using Power Query to provide real-time visibility into out-of-stock items, helping reduce OOS instances by 15% and prioritize stock replenishment.",
    imageUrl: "project-4",
    tags: ["Excel", "Power Query", "KPI", "Dashboard", "Inventory"],
    liveUrl: "/dashboard",
  },
  {
    id: "cancellation-analysis",
    title: "Order Funnel & Cancellation Analysis",
    description: "Analyzed order data to map the customer funnel and segmented cancellations by root cause. Identified 'stock mismatch' as a key issue, leading to a 20% reduction in cancellations for targeted stores.",
    imageUrl: "project-1",
    tags: ["Excel", "Analysis", "KPI", "Reporting"],
    liveUrl: "/dashboard",
  },
  {
    id: "sla-monitoring",
    title: "SLA Monitoring (Dispatch + Delivery)",
    description: "Created a daily SLA monitoring report to track order placement, dispatch, and delivery timings. Improved average delivery time by 10 minutes and increased SLA compliance to 98%.",
    imageUrl: "project-3",
    tags: ["SLA", "KPI", "Reporting", "Excel"],
    liveUrl: "/dashboard",
  },
  {
    id: "pricing-impact",
    title: "Pricing/Discount Impact Watch",
    description: "Built a model to compare sales, GMV, and margin percentage during promotional periods. This enabled data-driven decisions on discount strategy, improving gross margin by 5%.",
    imageUrl: "project-2",
    tags: ["Excel", "Analytics", "Margin Protection", "Reporting"],
    liveUrl: "/dashboard",
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
        "Managed product listing, catalog updates, and operational data for online sales channels.",
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
