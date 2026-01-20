import { AreaChart, Award, BarChart, CheckCircle2, Clock, Code, Database, DatabaseZap, FileText, Gauge, LayoutDashboard, LifeBuoy, MessageSquare, PieChart, Presentation, Puzzle, Search, ShoppingCart, SlidersHorizontal, Target, TrendingUp, Users } from "lucide-react";

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
        description: "Building insightful MIS, KPI trackers, and executive summaries that provide a clear, at-a-glance view of business performance."
    },
    {
        icon: BarChart,
        title: "Inventory & Ops Analytics",
        tag: "Core Analytics",
        description: "Deep-diving into stock variance, wastage, and returns data to control shrinkage, improve stock accuracy, and optimize inventory flow."
    },
    {
        icon: Gauge,
        title: "Quick Commerce KPI Analysis",
        tag: "Specialization",
        description: "Specialized analysis of Fill Rate, Cancellation Rate, and SLA performance to identify bottlenecks and drive operational excellence."
    },
    {
        icon: FileText,
        title: "Advanced Excel & Data Modeling",
        tag: "Technical Skills",
        description: "Leveraging Power Query, Pivot Tables, and advanced formulas to clean, transform, and model complex datasets with efficiency and accuracy."
    },
    {
        icon: Database,
        title: "SQL for Data Extraction",
        tag: "Technical Skills",
        description: "Writing efficient SQL queries with joins and aggregations to extract and manipulate critical data from relational databases."
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Operations",
        tag: "Domain Knowledge",
        description: "Managing product listings, catalog data, and tracking key metrics like OOS and order execution for major online channels."
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
        "Built daily and weekly MIS dashboards for Stock Value, Variance %, and Consumption trends.",
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
    "Adept at root cause analysis for complex operational issues like stock variance and order cancellations.",
    "Skilled in translating raw operational data into actionable business insights.",
    "Passionate about efficiency; automates manual reporting tasks using Power Query and structured data templates.",
    "Excellent stakeholder management skills; partners with operations teams to implement data-driven improvements.",
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
        title: "Business-Focused Solutions",
        description: "I don't just build reports; I solve business challenges. My focus is on delivering insights that lead to measurable improvements in your operations."
    },
    {
        icon: LayoutDashboard,
        title: "Actionable Dashboards",
        description: "You get polished, easy-to-understand dashboards that stakeholders can use immediately to make informed decisions. My work is built for clarity and impact."
    },
    {
        icon: Clock,
        title: "Reliable & Responsive Partner",
        description: "Expect clear communication, timely delivery, and a professional partnership. I keep you updated at every stage and am always available to discuss progress."
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "With over 15 projects successfully delivered, I have a history of helping businesses harness their data to improve efficiency and drive growth."
    },
    {
        icon: MessageSquare,
        title: "Insights, Clearly Communicated",
        description: "I specialize in translating complex data findings into plain English, ensuring everyone from the C-suite to the ops team understands the story."
    },
    {
        icon: TrendingUp,
        title: "Future-Proof Analytics",
        description: "The solutions I build are designed to grow with your business. I create flexible, scalable models that can adapt to your changing data and operational needs."
    }
];

export const howIWorkSteps = [
    {
        icon: Search,
        title: "Discovery & Requirement Gathering",
        duration: "1-2 Days",
        description: "First, I understand your business objectives and define the key questions we need to answer. We'll identify KPIs and locate the necessary data sources to build a solid foundation."
    },
    {
        icon: DatabaseZap,
        title: "Data Extraction & Preparation",
        duration: "Project Dependent",
        description: "I extract data from various sources, then clean, transform, and model it. This ensures the data is accurate, consistent, and ready for analysis."
    },
    {
        icon: LayoutDashboard,
        title: "Dashboard Development & Analysis",
        duration: "Project Dependent",
        description: "This is where the insights come to life. I build interactive dashboards and perform deep-dive analysis to uncover trends, patterns, and actionable insights hidden in your data."
    },
    {
        icon: Presentation,
        title: "Insight Delivery & Review",
        duration: "1-2 Days",
        description: "I present the findings in a clear and compelling narrative. We'll review the dashboards together, ensuring the insights are understandable and directly address your business goals."
    },
    {
        icon: LifeBuoy,
        title: "Deployment & Support",
        duration: "Ongoing",
        description: "Once the dashboards are finalized, I deploy them for your team's use. I provide ongoing support to ensure the solution remains valuable and adapts to your future needs."
    }
];

export const articles = [
  {
    id: "article-1",
    category: "Data Architecture",
    date: "JAN 15, 2024",
    readTime: "8 MIN READ",
    title: "Building a Scalable Data Warehouse for Analytics",
    description: "Learn how to design and deploy a modern data warehouse using cloud technologies for scalable, production-ready analytics applications.",
    imageUrl: "article-1",
    articleUrl: "#",
  },
  {
    id: "article-2",
    category: "Analytics",
    date: "JAN 10, 2024",
    readTime: "12 MIN READ",
    title: "Advanced Dashboarding with Power BI and DAX",
    description: "A comprehensive guide to building dynamic and insightful dashboards using Power BI, focusing on advanced DAX formulas and data modeling techniques.",
    imageUrl: "article-2",
    articleUrl: "#",
  },
  {
    id: "article-3",
    category: "Operations",
    date: "JAN 5, 2024",
    readTime: "6 MIN READ",
    title: "Automating KPI Reporting with Python and SQL",
    description: "Set up automated data extraction, transformation, and reporting pipelines using Python scripts and SQL queries for seamless operations monitoring.",
    imageUrl: "article-3",
    articleUrl: "#",
  },
];
