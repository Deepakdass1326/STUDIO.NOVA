// Static site data for Studio Nova

export const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Studio", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
];

export const SERVICES = [
    {
        no: "01",
        title: "Brand Identity",
        desc: "Wordmarks, systems, and the visual gravity that holds a brand together across every surface.",
        tags: ["Identity", "Art Direction", "Type Design"],
    },
    {
        no: "02",
        title: "Digital Product",
        desc: "Interfaces engineered for momentum — from zero‑to‑one MVPs to enterprise platforms shipped at scale.",
        tags: ["Web Apps", "iOS / Android", "Design Systems"],
    },
    {
        no: "03",
        title: "Web Engineering",
        desc: "Marketing sites, commerce, and immersive editorial experiences. Performant. Accessible. Award‑adjacent.",
        tags: ["Next.js", "Headless", "WebGL"],
    },
    {
        no: "04",
        title: "Motion & 3D",
        desc: "Real‑time graphics, shader work, and cinematic motion that gives products a pulse.",
        tags: ["Three.js", "GSAP", "After Effects"],
    },
    {
        no: "05",
        title: "Strategy",
        desc: "Positioning, narrative, and product thinking. We help teams figure out what to build before we build it.",
        tags: ["Research", "Positioning", "Roadmaps"],
    },
    {
        no: "06",
        title: "Creative Direction",
        desc: "Embedded creative leadership for in‑house teams. We sit alongside founders, CMOs and product leads.",
        tags: ["Embedded", "Workshops", "Audits"],
    },
];

export const WORKS = [
    {
        client: "Halcyon Labs",
        title: "An operating system for ambient intelligence",
        year: "2025",
        category: "Brand · Product",
        img: "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwVUklMjBkZXNpZ24lMjBsYXlvdXR8ZW58MHx8fHwxNzgyNzYxNTkwfDA&ixlib=rb-4.1.0&q=85",
        span: "lg:col-span-7",
    },
    {
        client: "North Atlas",
        title: "Cartography for the post‑satellite era",
        year: "2025",
        category: "Identity · Site",
        img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwVUklMjBkZXNpZ24lMjBsYXlvdXR8ZW58MHx8fHwxNzgyNzYxNTkwfDA&ixlib=rb-4.1.0&q=85",
        span: "lg:col-span-5",
    },
    {
        client: "Lumen Press",
        title: "An independent publishing house, online",
        year: "2024",
        category: "Editorial · CMS",
        img: "https://images.unsplash.com/photo-1647675975434-864e1c3fc98d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDB8fHx8MTc4Mjc2MTU5MHww&ixlib=rb-4.1.0&q=85",
        span: "lg:col-span-5",
    },
    {
        client: "Field & Frame",
        title: "A camera company rediscovers its silhouette",
        year: "2024",
        category: "Identity · Packaging",
        img: "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDB8fHx8MTc4Mjc2MTU5MHww&ixlib=rb-4.1.0&q=85",
        span: "lg:col-span-7",
    },
];

export const PROCESS = [
    {
        no: "01",
        phase: "Discover",
        desc: "Workshops, interviews, audits. We learn the business until we can argue for it in your absence.",
    },
    {
        no: "02",
        phase: "Define",
        desc: "Positioning, principles, and the strategic backbone. Direction before decoration.",
    },
    {
        no: "03",
        phase: "Design",
        desc: "Identity systems, prototypes, and high‑fidelity craft. We iterate in public with the team.",
    },
    {
        no: "04",
        phase: "Deploy",
        desc: "Engineering, motion, and launch. We ship — and we stick around to keep things sharp.",
    },
];

export const TEAM = [
    {
        name: "Ines Marlow",
        role: "Founder · Creative Director",
        img: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwY3JlYXRpdmV8ZW58MHx8fHwxNzgyNzYxNTg0fDA&ixlib=rb-4.1.0&q=85",
    },
    {
        name: "Kai Okafor",
        role: "Principal Engineer",
        img: "https://images.unsplash.com/photo-1758613654360-45f1ff78c0cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwY3JlYXRpdmV8ZW58MHx8fHwxNzgyNzYxNTg0fDA&ixlib=rb-4.1.0&q=85",
    },
    {
        name: "Theo Vance",
        role: "Design Director",
        img: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwY3JlYXRpdmV8ZW58MHx8fHwxNzgyNzYxNTg0fDA&ixlib=rb-4.1.0&q=85",
    },
];

export const PRICING_TIERS = [
    {
        id: "starter",
        no: "01",
        name: "Starter",
        price: "₹10,000 – 20,000",
        timeline: "2–3 weeks",
        desc: "A clean, single landing page — exactly what you need to get found and get contacted.",
        bullets: [
            "Single‑page landing site",
            "Mobile responsive",
            "WhatsApp click‑to‑chat",
            "Basic on‑page SEO",
            "2 revision rounds",
        ],
        cta: "WhatsApp us ↗",
        ctaHref:
            "https://wa.me/910000000000?text=" +
            encodeURIComponent(
                "Hi Studio Nova — I'm interested in the Starter tier (₹10–20k landing page).",
            ),
        ctaExternal: true,
        featured: false,
    },
    {
        id: "growth",
        no: "02",
        name: "Growth",
        price: "₹25,000 – 55,000",
        timeline: "4–6 weeks",
        desc: "A custom website built around your business, with an AI chatbot that talks to your customers for you.",
        bullets: [
            "Multi‑page custom website",
            "AI chatbot built for your business",
            "Built exactly to your requirements",
            "Admin‑editable content",
            "Priority support",
        ],
        cta: "Book a 30‑min call ↗",
        ctaHref: "https://calendly.com/your-handle/intro",
        ctaExternal: true,
        featured: true,
    },
    {
        id: "premium",
        no: "03",
        name: "Premium",
        price: "₹55,000 – ₹1,20,000+",
        timeline: "8–14 weeks",
        desc: "A full, SaaS‑grade product — accounts, dashboards, payments, AI — built exactly to your spec.",
        bullets: [
            "Full‑stack custom build",
            "User accounts & dashboards",
            "Payment integration",
            "Advanced AI features (RAG, automation)",
            "Final price scoped per project",
        ],
        cta: "Request a proposal ↗",
        ctaHref:
            "mailto:hello@studionova.co?subject=" +
            encodeURIComponent("Premium tier — proposal request") +
            "&body=" +
            encodeURIComponent(
                "Hi Studio Nova,\n\nI'd like a scoped proposal for the Premium tier.\n\nProject:\nTimeline:\nBudget:\n\nThanks",
            ),
        ctaExternal: false,
        featured: false,
    },
];

export const CLIENTS = [
    "Custom Website Development",
    "Modern UI/UX Design",
    "AI Integration & Automation",
    "SaaS & Web Applications",
    "SEO & Performance Optimization",
    "E-commerce Solutions",
];

export const STATS = [
    { value: "01", label: "Founder on every build" },
    { value: "100%", label: "Custom code · No templates" },
    { value: "24h", label: "First reply window" },
    { value: "0", label: "Middlemen" },
];
