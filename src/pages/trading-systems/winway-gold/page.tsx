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
   KEY CAPABILITIES DATA – Gold Trading Platform
-------------------------------------------------- */
const GOLD_KEY_CAPABILITIES = [
    {
        title: "KRX Gold Trading",
        list: [
            "New buy order entry with available buying-power validation",
            "Sell/close order entry with real-time available quantity checks",
            "Support for KRX FOK (Fill-or-Kill) order type",
            "Real-time management of KRX gold positions and liquidation-eligible quantities",
        ],
    },
    {
        title: "Automated Gold Arbitrage",
        list: [
            "Creates arbitrage conditions between KRX Gold and international gold markets based on price differentials",
            "Configurable parameters for arbitrage logic",
            "Order quantity per KRX gold order",
            "Price-difference thresholds for arbitrage triggers",
            "Automated generation of international OTC hedge orders",
            "Real-time synchronization of KRX gold holdings and hedge-eligible quantities",
        ],
    },
    {
        title: "Trading Unit & Price Conversion Engine",
        list: [
            "Real-time conversion of KRX trading units (kg, g) into the international OTC standard of ounces",
            "Automatic conversion of price denominations into USD for global OTC pricing and reporting",
        ],
    },
    {
        title: "OTC Order Management",
        list: [
            "Support for Market, Limit, and “Limited Market” order types",
            "Configurable handling logic when OTC hedge orders remain unfilled",
            "Auto-close using KRX position",
            "Manual close by trader",
            "Optional check for OTC open-limit before sending KRX buy orders",
        ],
    },
    {
        title: "Complete Position & Risk Control",
        list: [
            "Integrated monitoring of KRX gold positions and OTC hedging positions",
            "Automatic liquidation-eligible quantity calculation",
            "Exposure control for arbitrage and directional trading",
            "Limit checks for OTC unsettled exposure",
        ],
    },
];

/* -------------------------------------------------
   PAGE COMPONENT
-------------------------------------------------- */

type SectionId = "overview" | "key-capabilities";

export default function GoldTradingPlatformPage() {
    const [currentSection, setCurrentSection] = useState<SectionId>("overview");
    const [openKeyIdx, setOpenKeyIdx] = useState<number | null>(null);

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
                            Gold Trading Platform
                        </h1>
                        <p className="text-base md:text-lg text-slate-300">
                            KRX Gold Spot Market · Global Arbitrage-Ready Infrastructure
                        </p>

                        {/* Top Nav */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
                            <button
                                onClick={() => scrollToSection("overview")}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === "overview"
                                    ? "text-white border-white"
                                    : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                    }`}
                            >
                                Overview
                            </button>

                            <button
                                onClick={() => scrollToSection("key-capabilities")}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === "key-capabilities"
                                    ? "text-white border-white"
                                    : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                    }`}
                            >
                                Key Capabilities
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------------------------------------
          OVERVIEW – 2 blocks, L/R, with headlines
      -------------------------------------------------- */}
            <section id="overview" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {/* Left block */}
                    <FadeIn delay={0}>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                KRX Gold Spot–Optimized Trading Solution
                            </h3>

                            {/* Paragraph 1 */}
                            <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide mb-10">
                                This fully integrated gold trading solution is designed specifically for the
                                KRX Gold Spot market, supporting both KRX gold execution and automated
                                arbitrage strategies connected to global liquidity venues.
                            </p>

                            {/* Paragraph 2 */}
                            <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide mb-6">
                                The platform incorporates all essential components required for
                                professional gold trading, including:
                            </p>

                            {/* Bullet list — shifted slightly right */}
                            <ul className="list-disc pl-10 space-y-2 text-xl md:text-2xl font-cormorant text-slate-900 leading-[1.6] tracking-wide">
                                <li>Ultra-low-latency OMS for fast and reliable order execution</li>
                                <li>Real-time P&amp;L monitoring</li>
                                <li>Comprehensive trade ledger with back-office processing</li>
                                <li>Real-time market data for both domestic and international gold spot markets</li>
                            </ul>
                        </div>
                    </FadeIn>



                    {/* Right block */}
                    <FadeIn delay={120}>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                End-to-End Automation & Connectivity
                            </h3>
                            <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.7] tracking-wide">
                                With end-to-end automation and seamless connectivity, the Gold
                                Trading Platform enables professional traders and brokers to
                                operate with greater speed, accuracy, and efficiency in the gold
                                spot market.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* -------------------------------------------------
          KEY CAPABILITIES – Accordion
      -------------------------------------------------- */}
            <section
                id="key-capabilities"
                className="py-24 bg-slate-50 border-slate-200"
                style={{ overflowAnchor: "none" }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
                            Key Capabilities
                        </h2>
                    </header>

                    <div className="divide-y divide-slate-300">
                        {GOLD_KEY_CAPABILITIES.map((block, idx) => (
                            <article key={block.title} className="py-8">
                                {/* Collapsed header */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenKeyIdx((prev) => (prev === idx ? null : idx))
                                    }
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                        {block.title}
                                    </h3>
                                    <span className="text-slate-700 text-3xl ml-6">
                                        <i
                                            className={`ri-arrow-down-s-line transition-transform duration-200 ${openKeyIdx === idx ? "rotate-180" : ""
                                                }`}
                                        />
                                    </span>
                                </button>

                                {/* Expanded content */}
                                {openKeyIdx === idx && (
                                    <div className="mt-6 text-base md:text-lg leading-relaxed text-slate-700">
                                        <ul className="list-disc pl-6 space-y-2">
                                            {block.list.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
