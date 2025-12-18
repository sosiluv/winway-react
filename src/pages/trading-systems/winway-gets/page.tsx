import { useState, useRef, useEffect } from "react";

/* -------------------------------------------------
   Fade-in animation wrapper
-------------------------------------------------- */
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
            className={`transition-all duration-[900ms] ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            {children}
        </div>
    );
}

/* -------------------------------------------------
   KEY FEATURES — GETS
-------------------------------------------------- */
const GETS_KEY_FEATURES = [
    {
        title: "Multi-Exchange Global Trading",
        list: [
            "Trading support for major global exchanges",
            "Stocks, ETFs, fractional trading, cross-currency margin support, and automated FX conversion for settlement",
        ],
    },
    {
        title: "Execution Algorithms & Real-Time Order Lifecycle Management",
        list: [
            "Comprehensive suite of algorithmic execution tools for automated and strategy-driven order placement",
            "End-to-end real-time visibility across working orders, fills, positions, and P/L with millisecond-level updates",
        ],
    },
    {
        title: "Advanced Market Data",
        list: [
            "Real-time and delayed Level 1 & Level 2 quote data",
            "Financial, corporate and fundamental data delivery",
            "Tick-level data storage, extraction, and replay for analytics",
            "Flexible filtering and throttling engine (zero-downtime configuration)",
            "UDP multicast data distribution to application/DB nodes",
            "Historical data archiving and backup with monitoring dashboard",
        ],
    },
    {
        title: "Ledger & Back Office, Clearing & Settlement System",
        list: [
            "Real-time and scheduled order/cancel/replace/settlement processing",
            "Multi-currency, integrated margin & auto FX conversion",
            "Daily and intraday P&L, valuation, reports, tax calculation",
            "Broker fee, trading cost, and withholding-tax management",
            "Exchange-specific settlement date and break reconciliation",
            "Support for retail, institutional, and proprietary trading accounts",
            "Exchange holiday and market status management",
        ],
    },

    /* -----------------------------
          Corporate Actions Management 
          — Full 4-Section Structure
    ------------------------------ */
    {
        title: "Corporate Actions Management",
        intro:
            "Our platform provides comprehensive end-to-end capabilities for managing corporate actions across equity markets.",
        groups: [
            {
                heading: "Corporate Action Information Management",
                lines: [
                    "Maintain complete and accurate records of all corporate action events, including schedules, terms, and entitlements.",
                ],
            },
            {
                heading: "Corporate Action Processing",
                lines: [
                    "Record date management",
                    "Allocation and entitlement calculations",
                    "Tax calculation",
                    "Deposits and withdrawals of securities",
                    "Cash processing (payment in / payment out)",
                ],
            },
            {
                heading: "Corporate Action Requests & Subscriptions",
                lines: [
                    "Rights subscription (paid-in capital increase)",
                    "Dissenting shareholder instructions",
                    "Appraisal rights / buyback claims",
                ],
            },
            {
                heading: "Corporate Action Reporting",
                lines: [
                    "Generate detailed reports on corporate action events, entitlements, transactions, and investor instructions for compliance and reconciliation.",
                ],
            },
        ],
    },
];

/* -------------------------------------------------
   PAGE COMPONENT
-------------------------------------------------- */
type SectionId = "overview" | "key-features";

export default function WinwayGETSPage() {
    const [currentSection, setCurrentSection] = useState<SectionId>("overview");
    const [openKeyFeature, setOpenKeyFeature] = useState<number | null>(null);

    const scrollToSection = (sectionId: SectionId) => {
        setCurrentSection(sectionId);
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* HERO */}
            <section className="relative py-20 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-cormorant">
                            Winway GETS<br />Global Equity Trading Platform
                        </h1>

                        {/* NAV */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
                            {/* Overview */}
                            <button
                                onClick={() => scrollToSection("overview")}
                                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${currentSection === "overview"
                                        ? "text-white border-white"
                                        : "text-slate-300 border-transparent hover:text-white"
                                    }`}
                            >
                                Overview
                            </button>

                            {/* Key Features */}
                            <button
                                onClick={() => scrollToSection("key-features")}
                                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${currentSection === "key-features"
                                        ? "text-white border-white"
                                        : "text-slate-300 border-transparent hover:text-white"
                                    }`}
                            >
                                Key Features
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------------------------------------
           OVERVIEW — L/R staggered animation
      -------------------------------------------------- */}
            <section id="overview" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* 1 — Left */}
                    <FadeIn delay={0}>
                        <div className="max-w-4xl">
                            <h3 className="text-sm font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Fully Integrated Global Equity Trading Platform
                            </h3>
                            <p className="text-4xl font-cormorant text-slate-900 leading-[1.65]">
                                Winway’s Global Equity Trading System delivers a fully integrated
                                platform for trading equities across major international exchanges,
                                providing seamless global market access for both retail and institutional
                                clients.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 2 — Right */}
                    <FadeIn delay={120}>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                End-to-End Trading Infrastructure
                            </h3>
                            <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.65]">
                                The platform includes client HTS, real-time market-data services,
                                trading ledger, back-office modules, and FIX connectivity with global
                                brokers—providing a streamlined and reliable overseas equity trading environment.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 3 — Left */}
                    <FadeIn delay={200}>
                        <div className="max-w-4xl">
                            <h3 className="text-sm font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Advanced Algorithmic Trading Capabilities
                            </h3>
                            <p className="text-4xl font-cormorant text-slate-900 leading-[1.65]">
                                With advanced algorithmic execution tools such as VWAP, TWAP, and other
                                smart order types, traders can execute sophisticated strategies with precision
                                and efficiency, while leveraging multiple foreign currencies as margin to
                                enhance capital efficiency in global markets.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* -------------------------------------------------
           KEY FEATURES — Accordion
      -------------------------------------------------- */}
            <section id="key-features" className="py-24 bg-white border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <header className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900">
                            Key Features
                        </h2>
                    </header>

                    <div className="divide-y divide-slate-300">
                        {GETS_KEY_FEATURES.map((block, idx) => {
                            const hasGroups = "groups" in block;

                            return (
                                <article key={idx} className="py-8">

                                    {/* Toggle Header */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenKeyFeature(prev => prev === idx ? null : idx)
                                        }
                                        className="w-full flex items-center justify-between text-left"
                                    >
                                        <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                            {block.title}
                                        </h3>

                                        <i
                                            className={`ri-arrow-down-s-line text-2xl transition-transform duration-200 ${openKeyFeature === idx ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Expanded */}
                                    {openKeyFeature === idx && (
                                        <div className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed">

                                            {/* Corporate Actions (nested groups) */}
                                            {hasGroups ? (
                                                <div className="space-y-10">

                                                    {/* Intro sentence – slight indent */}
                                                    {"intro" in block && (
                                                        <p className="text-base md:text-lg text-slate-700 pl-4">
                                                            {block.intro}
                                                        </p>
                                                    )}

                                                    {/* Groups */}
                                                    {block.groups.map((group, gi) => (
                                                        <div key={gi} className="space-y-3">

                                                            {/* Sub-section heading – more indent */}
                                                            <p className="font-semibold text-slate-900 text-base md:text-lg pl-8">
                                                                {group.heading}
                                                            </p>

                                                            {/* Bullets – deepest indent */}
                                                            <ul className="list-disc pl-16 space-y-1 text-base md:text-lg text-slate-700">
                                                                {group.lines.map((line) => (
                                                                    <li key={line}>{line}</li>
                                                                ))}
                                                            </ul>

                                                        </div>
                                                    ))}

                                                </div>
                                            ) : (

                                                <ul className="list-disc pl-6 space-y-2">
                                                    {block.list.map(item => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}

                                        </div>
                                    )}

                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
