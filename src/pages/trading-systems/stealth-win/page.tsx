import { useState, useRef, useEffect } from 'react';

// ✨ Fade-in animation wrapper
function FadeIn({ children, delay = 0 }) {
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
            className={`transition-all duration-[1000ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            {children}
        </div>
    );
}

const CORE_ARBITRAGE_FUNCTIONS = [
    {
        id: 'fx-arb',
        title: 'FX Spot, NDF, and Futures Arbitrage',
        list: [
            'Real-time monitoring of swap points and basis',
            'Automated detection of buy/sell opportunities',
            'Dynamic hedging and multi-leg order execution',
            'Direct integration with domestic ECN brokers, local and global FX LPs, and the KRX currency-futures market',
        ],
    },
    {
        id: 'mar',
        title: 'MAR (Market Average Rate) Auto-Trading',
        list: [
            'VWAP-driven execution algorithms',
            'Automated MAR execution using SMB market data',
            'Achieves less than 0.01% tracking error',
        ],
    },
    {
        id: 'cf-spread',
        title: 'Currency Futures Spread Trading',
        list: [
            'Continuously tracks price differentials and market movements across all near and far-month futures.',
            'Enables automated execution of calendar spreads and inter-month strategies across regular and night trading hours.',
        ],
    },
    {
        id: 'spread-config',
        title: 'Futures Spread Trading Configuration',
        list: [
            'User-defined trigger levels for entering or exiting spread positions.',
            'Real-time computation of fair value, basis, and theoretical price for precise spread identification.',
            'Flexible configuration for leg-weighting, hedge ratios, and execution distribution across long and short legs.',
        ],
    },
    {
        id: 'risk-op',
        title: 'Risk Management & Operational Features',
        list: [
            'Real-time position limits and exposure control',
            'Order-by-order limit checks and automated stop conditions',
            'Automated or manual futures hedging for risk balancing',
            'Night-session trading support for FX and derivatives',
            'Full audit trail, reporting, and monitoring dashboard',
        ],
    },
];


const FEATURES_DATA = [
    {
        id: "risk",
        title: "Robust Risk Management",
        description:
            "Maintain control over your trading activities with our comprehensive risk management tools:",
        items: [
            "Real-time monitoring of positions and exposures",
            "Pre-trade risk checks and margin calculations",
            "Customizable alerts and limits to enforce trading discipline",
            "Compliance checks to safeguard your trading activities.",
        ],
    },
    {
        id: "execution",
        title: "Lightning-Fast Execution",
        description:
            "Our system is optimized for ultra-low latency, ensuring that your orders are executed promptly to capitalize on market opportunities.",
    },
    {
        id: "lifecycle",
        title: "Full Order Lifecycle Management",
        items: [
            "Supports order creation, validation, enrichment, routing, modification, cancellation, and execution handling",
        ],
    },
    {
        id: "workflow",
        title: "Customizable Workflows",
        description:
            "Tailor the OMS to fit your specific trading strategies and operational requirements, enhancing efficiency and control.",
    },
    {
        id: "infra",
        title: "System Architecture & Infrastructure",
        subgroups: [
            {
                heading: "Scalability",
                points: [
                    "Designed to handle high volumes of orders without compromising performance.",
                ],
            },
            {
                heading: "Reliability",
                points: [
                    "Built with robust infrastructure to ensure system stability and uptime.",
                ],
            },
            {
                heading: "Integration-Friendly",
                points: [
                    "Seamlessly connect with existing systems, data feeds, and APIs for a cohesive trading ecosystem.",
                ],
            },
            {
                heading: "Ultra Low Latency",
                points: [
                    "Microsecond-level tick-to-trade latency",
                    "In-memory data structures with lock-free algorithms",
                ],
            },
            {
                heading: "High Throughput",
                points: [
                    "Optimized C code",
                    "Capable of processing millions of messages per second",
                    "Horizontally scalable architecture using microservices and distributed message queues",
                ],
            },
            {
                heading: "Configurability & Extensibility",
                points: [
                    "Strategy-specific rule engines",
                    "Plug-in framework for connectivity to exchanges, brokers, and internal systems",
                ],
            },
        ],
    },
];

const WHY_STEALTH_ITEMS = [
    {
        title: 'Ultra-low-latency arbitrage engine optimized for FX',
        description:
            'Delivers microsecond-level signal detection and execution for high-velocity arbitrage strategies.',
    },
    {
        title: 'Intelligent algorithms for MAR and cross-market pricing',
        description:
            'Supports advanced MAR trading algorithms, VWAP-based execution, and dynamic pricing across Spot, NDF, and futures markets.',
    },
    {
        title: 'Cross-market intelligence for Spot, NDF and Futures',
        description:
            'Aggregates and analyzes multi-market data to identify precise arbitrage and spread-trading opportunities.',
    },
    {
        title: 'Robust risk controls with dynamic hedge execution',
        description:
            'Real-time exposure control, automated hedging, and protective execution logic ensure safe and consistent trading performance.',
    },
    {
        title: 'Fully automated workflow from signal detection to order execution',
        description:
            'A complete end-to-end automation pipeline that covers signal generation, trade execution, hedging, and post-trade processing.',
    },
];


export default function WinEdgePropTradingPage() {
    const [currentSection, setCurrentSection] = useState<
        'overview' | 'functions' | 'features' | 'architecture'
    >('overview');

    // 🔹 Which Trading Function accordion item is open
    const [openId, setOpenId] = useState<string | null>(null);

    const scrollToSection = (sectionId: string, tab?: typeof currentSection) => {
        const el = document.getElementById(sectionId);
        if (tab) setCurrentSection(tab);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero */}
            <section className="relative py-20 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-cormorant ">
                            Stealth Win<br></br>Currency Arbitrage Trading Platform
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Proprietary Trading, Engineered for Edge. Trade Faster, See Smarter, Execute
                            Better. <br />
                            Empowering traders with advanced tools and low-latency execution across
                            global markets.
                        </p>

                        {/* Top Nav */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
                            <button
                                onClick={() => scrollToSection('overview', 'overview')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'overview'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => scrollToSection('trading-functions', 'functions')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'functions'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Trading Functions
                            </button>
                            <button
                                onClick={() => scrollToSection('features', 'features')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'features'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('architecture', 'architecture')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'architecture'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                System Architecture
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section (Animated) */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* 1. Stealth Win Arbitrage Platform (Left Aligned) */}
                    <FadeIn delay={0}>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Advanced Cross-Currency Arbitrage Platform
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Stealth Win is a trading platform engineered for arbitrage opportunities
                                between USD, EUR and JPY against KRW.
                                <br /><br />
                                It provides a complete end-to-end solution that enables arbitrage across Spot FX, NDFs, currency futures,
                                as well as calendar-spread arbitrage between futures maturities.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 2. High-Performance Arbitrage Environment (Right Aligned) */}
                    <FadeIn delay={150}>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Fully Integrated Trading Environment
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                With an ultra-low-latency OMS, high-performance market data processing,
                                and sophisticated arbitrage algorithms, Stealth Win delivers a fully
                                integrated environment for professional dealers and traders to capture
                                arbitrage profits.
                                <br /><br />
                                It enables execution across domestic ECN brokers, FX liquidity-provider
                                banks, and the KRX currency-futures market.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>


            {/* Core Arbitrage Capabilities – same format as Trading Functions */}
            <section
                id="core-arbitrage"
                className="py-24 bg-slate-50 border-slate-200"
                style={{ overflowAnchor: 'none' }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-10">
                        <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-6">
                            Core Arbitrage Capabilities
                        </h2>
                    </header>

                    {/* Accordion – same structure & styling as Trading Functions */}
                    <div
                        className="divide-y divide-slate-300"
                        style={{ overflowAnchor: 'none' }}
                    >
                        {CORE_ARBITRAGE_FUNCTIONS.map((block) => (
                            <article key={block.id} className="py-8">
                                {/* Collapsed header */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenId((prev) => (prev === block.id ? null : block.id))
                                    }
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                        {block.title}
                                    </h3>

                                    <span className="text-slate-700 text-3xl ml-6">
                                        <i
                                            className={`ri-arrow-down-s-line transition-transform duration-200 ${openId === block.id ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </span>
                                </button>

                                {/* Expanded content */}
                                {openId === block.id && (
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
            {/* ================================
    WHY STEALTH WIN – NUMBERED LIST
================================ */}
            <section
                id="why-stealth-win"
                className="py-24 bg-slate-900 border-t border-slate-200 text-center"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <header className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-slate-900 text-white">
                            Why StealthWin ?
                        </h2>
                    </header>

                    {/* Numbered Items */}
                    <ol className="space-y-12">
                        {WHY_STEALTH_ITEMS.map((item, index) => (
                            <li
                                key={item.title}
                                className="pb-10 border-b-[0.5px] border-slate-400"
                            >
                                {/* Fade-in wrapper for each row */}
                                <FadeIn delay={index * 120}>
                                    <div className="flex items-start">
                                        {/* Big number */}
                                        <div className="mr-6 md:mr-10 flex-shrink-0">
                                            <span
                                                className="text-5xl md:text-6xl font-cormorant text-white"
                                                style={{ fontWeight: 900 }} // BLACK
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        {/* Title + Description */}
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-3xl font-bold font-cormorant text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-base md:text-lg text-white leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </li>
                        ))}
                    </ol>

                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Ready to Elevate Your Prop Trading?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        WinEdge equips professional traders and institutions with the tools needed to
                        capture opportunities, manage risk and execute with confidence in today&apos;s
                        dynamic markets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
                            Schedule Consultation
                        </button>
                        <button className="border border-slate-400 hover:border-slate-600 text-slate-800 hover:text-slate-900 px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
