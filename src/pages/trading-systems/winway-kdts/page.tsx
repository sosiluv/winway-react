import { useState, useRef, useEffect } from "react";

// ✨ Fade-in animation wrapper
function FadeIn({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-[1000ms] ease-out transform ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
        >
            {children}
        </div>
    );
}

/* ================================
   KEY FEATURES DATA
================================ */
const KEY_FEATURES = [
    {
        title: "High-Performance Order Execution Architecture",
        list: [
            "Memory-based DB and shared-memory OMS architecture to maximize order processing speed",
            "Asynchronous and post-processing methods applied for efficient and reliable execution flow",
            "Enhanced order validation using a Mask Matrix-based multi-rule check engine",
            "Oracle Sequence-driven order numbering to reduce lock contention and improve throughput",
            "Optimized EOD/expiry processing speed for high-volume trading environments",
        ],
    },
    {
        title: "Advanced Margin & Risk Management",
        list: [
            "Real-time and next-day estimated margin calculations for proactive liquidity and collateral planning",
            "Trigger automatic liquidation or SMS alerts when thresholds are reached",
            "Automated generation of margin-related reports and master-ledger management",
            "T+1 estimated margin-call guidance and notifications",
        ],
    },
    {
        title: "Automated Product & Parameter Synchronization",
        list: [
            "Automated workflow for registering or modifying products, margins, fees, and commission tables",
            "Product attributes automatically linked across operational screens",
            "Reduces operational workload and minimizes human error",
        ],
    },
    {
        title: "Comprehensive Reporting, Ledger & Document Management",
        list: [
            "Supports a wide range of ledger, settlement, administrative and audit-ready reports",
            "Unified document and voucher management for audit and compliance efficiency",
        ],
    },
    {
        title: "Built-In Professional Trading & Analysis Tools",
        list: [
            "Server-side conditional order system (OMS) with full automation support",
            "Risk-based asset management order system (RMS)",
            "Options pricing & theoretical value calculator",
            "Intraday & next-day margin calculator",
            "T+1 margin-call simulator",
            "Futures & options strategy execution interface with scenario-based analytics",
        ],
    },
];

/* ================================
   PAGE COMPONENT
================================ */
type SectionId =
    | "overview"
    | "global-market-access"
    | "trader-application"
    | "key-features";

export default function WinwayKDTSPage() {
    const [currentSection, setCurrentSection] =
        useState<SectionId>("overview");
    const [openKeyFeature, setOpenKeyFeature] =
        useState<number | null>(null);

    const scrollToSection = (sectionId: SectionId) => {
        setCurrentSection(sectionId);
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* ================================
          HERO
      ================================= */}
            <section className="relative py-20 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-cormorant">
                            Winway KDTS<br />Global Futures & Options
                        </h1>

                        {/* NAV */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
                            {[
                                ["overview", "Overview"],
                                ["trader-application", "Trader Application"],
                                ["key-features", "Key Features"],
                            ].map(([id, label]) => (
                                <button
                                    key={id}
                                    onClick={() =>
                                        scrollToSection(id as SectionId)
                                    }
                                    className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === id
                                        ? "text-white border-white"
                                        : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================
          OVERVIEW
      ================================= */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {/* LEFT */}
                    <FadeIn delay={0}>
                        <div className="max-w-4xl">
                            <h3 className="text-sm font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Complete KRX-Optimized Domestic F&O Platform
                            </h3>

                            <p className="text-4xl font-cormorant text-slate-900 leading-[1.65]">
                                Winway’s domestic futures and options trading system is purpose-built for Korea Exchange (KRX) listed derivatives, delivering a fully integrated environment across all core trading components.
                            </p>
                        </div>
                    </FadeIn>

                    {/* RIGHT */}
                    <FadeIn delay={150}>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Full Trading Infrastructure Package
                            </h3>

                            <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.7]">
                                The platform provides multiple GUI channels—including HTS, MTS, and Client API—along with order and market-data FEP, trading ledger, market-data servers, and all modules required for a complete derivatives infrastructure.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ================================
          TRADER APPLICATION
      ================================= */}
            <section
                id="trader-application"
                className="py-24 bg-slate-100"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-20 text-center">
                        Trader Application
                    </h2>

                    <p className="text-2xl md:text-3xl font-cormorant leading-[1.7] text-slate-900 mb-10">
                        Winway’s <span className="font-bold">KDTS</span> delivers a highly intuitive interface designed for maximum user convenience.
                    </p>

                    <p className="text-2xl md:text-3xl font-cormorant leading-[1.7] text-slate-900 mb-10">
                        To respond efficiently to fast-changing markets, KDTS integrates a high-performance
                        <span className="font-bold"> Order Management System (OMS)</span>, enabling automated and advanced order types not supported by the exchange.
                    </p>

                    <p className="text-2xl md:text-3xl font-cormorant leading-[1.7] text-slate-900 mb-10">
                        With <span className="font-bold">Trailing Stop</span>, <span className="font-bold">If-Done</span>, and
                        <span className="font-bold"> OCO</span> orders, traders can manage profit-taking and stop-loss strategies simultaneously.
                    </p>

                    <p className="text-2xl md:text-3xl font-cormorant leading-[1.7] text-slate-900">
                        KDTS continuously monitors a client’s evaluated equity, and when predefined thresholds are reached, it automatically closes open positions — ensuring disciplined and automated risk control.
                    </p>
                </div>
            </section>

            {/* ================================
          KEY FEATURES ACCORDION
      ================================= */}
            <section
                id="key-features"
                className="py-24 bg-white border-t border-slate-200"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
                            Key Features
                        </h2>
                    </header>

                    <div className="divide-y divide-slate-300">
                        {KEY_FEATURES.map((block, idx) => (
                            <article key={idx} className="py-8">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenKeyFeature(
                                            openKeyFeature === idx ? null : idx
                                        )
                                    }
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                        {block.title}
                                    </h3>

                                    <span className="text-slate-700 text-3xl ml-6">
                                        <i
                                            className={`ri-arrow-down-s-line transition-transform duration-200 ${openKeyFeature === idx
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    </span>
                                </button>

                                {openKeyFeature === idx && (
                                    <div className="mt-6 text-base md:text-lg leading-relaxed text-slate-700">
                                        <ul className="list-disc pl-6 space-y-2">
                                            {block.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================
          CTA
      ================================= */}
            <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Ready to Modernize Your Derivatives Platform?
                    </h2>

                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Winway KDTS delivers a unified global F&O trading environment with professional-grade risk,
                        analytics, and operational infrastructure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 font-semibold transition-colors">
                            Schedule Consultation
                        </button>

                        <button className="border border-slate-400 hover:border-slate-600 text-slate-800 hover:text-slate-900 px-8 py-4 font-semibold transition-colors">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
