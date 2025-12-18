import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// ✨ Fade-in component
function FadeIn({ children, delay = 0 }) {
    const ref = useRef(null);
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

export default function WinFeedEnginePage() {
    const { t } = useTranslation('common');
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-cormorant">
                        WinFeed Engine | Market Data Processing
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                        A unified market data processing solution that enables efficient processing of
                        high-volume data streams from global exchanges and multiple data providers.
                    </p>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <a href="#overview" className="text-white hover:text-slate-300 text-sm font-medium border-b-2 border-transparent hover:border-white pb-1">
                            Overview
                        </a>
                        <a href="#functions" className="text-white hover:text-slate-300 text-sm font-medium border-b-2 border-transparent hover:border-white pb-1">
                            Functions
                        </a>
                        <a href="#features" className="text-white hover:text-slate-300 text-sm font-medium border-b-2 border-transparent hover:border-white pb-1">
                            Features
                        </a>
                        <a href="#applications" className="text-white hover:text-slate-300 text-sm font-medium border-b-2 border-transparent hover:border-white pb-1">
                            Applications
                        </a>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* 1. System Overview (Left Aligned) */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Unified Market Data Infrastructure
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                WinFeed Engine enables seamless, high-performance handling of large-scale market data
                                streams across global exchanges and liquidity venues. Designed for multi-asset trading
                                environments, it aggregates, normalizes, and distributes real-time data for equities,
                                futures, options, and FX markets — providing institutions with exceptional speed and reliability.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 2. Scalability & Architecture (Right Aligned) */}
                    <FadeIn direction="right" triggerOnce>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Scalable & Reliable Architecture
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Supporting both multi-exchange and multi-vendor feeds, the system provides a unified API framework
                                and flexible data models to accommodate diverse data formats. With advanced load balancing,
                                in-memory processing, and horizontally scalable architecture, it ensures ultra-low-latency delivery
                                and consistent data quality for mission-critical trading systems.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 3. Monitoring & Operations (Left Aligned) */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Advanced Monitoring & Operational Intelligence
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Advanced monitoring and control tools empower users to track flow, latency, and data integrity
                                in real time — enabling efficient operations and proactive issue management. The platform is
                                purpose-built to support high-frequency trading, algorithmic execution, risk management systems,
                                and enterprise market data streaming environments, ensuring transparency, control, and performance
                                across global venues.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* Applications Section */}
            <section id="applications" className="py-28 bg-[#f6f7f9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-5 font-cormorant tracking-tight">
                            Applications
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            Powering mission-critical market data infrastructure across global trading ecosystems.
                        </p>
                    </div>

                    {/* 6 Equal Cards in One Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                        {[
                            { title: "HFT Trading Platforms", icon: "ri-flashlight-line" },
                            { title: "Multi-Asset Algo Execution Engines", icon: "ri-cpu-line" },
                            { title: "Market-Making & Liquidity-Provision Systems", icon: "ri-funds-line" },
                            { title: "Smart Order Routing & Aggregation Hubs", icon: "ri-node-tree" },
                            { title: "Enterprise Market Data Distribution", icon: "ri-database-2-line" },
                            { title: "Risk & Portfolio Analytics, AI Research Platform", icon: "ri-bar-chart-box-line" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center text-center bg-[#0b1b3f] border border-slate-200 h-[340px] px-6 py-8 hover:bg-[#101a34] transition-all duration-300"
                            >
                                {/* Thin, Sleek Icon */}
                                <i
                                    className={`${item.icon} text-[#e8ebef] text-[42px] mb-6`}
                                    style={{ fontWeight: 200 }}
                                ></i>

                                {/* Title */}
                                <h3 className="text-[#f4f6f8] text-[20px] md:text-[22px] font-semibold font-cormorant tracking-wide leading-snug">
                                    {item.title}
                                </h3>

                                {/* Subtle Line */}
                                <div className="w-20 h-[1px] bg-[#cfd3d8]/50 mt-6"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Functions Section */}
            <section
                id="functions"
                className="py-28 bg-gradient-to-b from-[#f7f8f9] via-[#f4f5f6] to-[#eef0f2]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 font-cormorant tracking-tight">
                            Functions
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            Enabling seamless market data aggregation, normalization, and ultra-low-latency delivery across global trading networks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Multi-Source Market Data Aggregation',
                                description:
                                    'Collects real-time data from global exchanges, brokers, ECNs, and OTC liquidity pools. Supports equities, derivatives, FX, and commodities with full multi-vendor feed compatibility.',
                                icon: 'ri-global-line',
                            },
                            {
                                title: 'Data Normalization & Standardization',
                                description:
                                    'Converts heterogeneous feed formats into a unified schema. Provides tick-by-tick precision, full depth-of-book handling, and standardized exchange code mapping.',
                                icon: 'ri-database-2-line',
                            },
                            {
                                title: 'Ultra-Low-Latency Distribution',
                                description:
                                    'Delivers data through an in-memory, lock-free architecture designed for high-speed throughput. Optimized for HFT, OMS/EMS, and risk systems.',
                                icon: 'ri-timer-flash-line',
                            },
                            {
                                title: 'Historical & Real-Time Data Management',
                                description:
                                    'Supports tick capture, replay, and archival for back-testing and analytics. Offers real-time streaming, snapshot services, and configurable retention for compliance.',
                                icon: 'ri-history-line',
                            },
                            {
                                title: 'API & Integration Framework',
                                description:
                                    'Unified API supporting FIX, SBE, FAST, and binary feeds for seamless integration with OMS, algo engines, risk management, and data lake systems.',
                                icon: 'ri-plug-2-line', // ✅ added
                            },
                        ].map((func, index) => (
                            <div
                                key={index}
                                className="bg-white/95 border border-slate-200 text-left flex flex-col justify-start h-full p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="mb-6">
                                    <i className={`${func.icon} text-4xl text-[#1a2b4b]`} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-[#1b1f2a] mb-4 font-cormorant leading-snug">
                                    {func.title}
                                </h3>
                                <p className="text-base md:text-[17px] text-slate-700 leading-relaxed font-medium">
                                    {func.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features Section – Image Removed, Clean Institutional Layout */}
            <section id="key-features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
                            Key Features
                        </h2>
                    </div>

                    {/* Features Grid – 2 Column, Balanced */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

                        {/* 1. Ultra-Low Latency Performance */}
                        <div className="relative pl-6">
                            <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                Ultra-Low Latency Performance
                            </h3>
                            <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                <li>Microsecond-level data processing</li>
                                <li>Zero-copy data pipeline, tuned for HFT & low-latency DMA environments</li>
                            </ul>
                        </div>

                        {/* 2. Scalable Distributed Architecture */}
                        <div className="relative pl-6">
                            <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                Scalable Distributed Architecture
                            </h3>
                            <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                <li>Horizontally scalable cluster design</li>
                                <li>Elastic throughput from retail to institutional workloads</li>
                            </ul>
                        </div>

                        {/* 3. Advanced Monitoring & Control */}
                        <div className="relative pl-6">
                            <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                Advanced Monitoring & Control
                            </h3>
                            <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                <li>Real-time dashboards for flow, latency, synchronization, and data integrity</li>
                                <li>Alerting for feed status, anomalies, and connectivity issues</li>
                            </ul>
                        </div>

                        {/* 4. Robust Data Quality Controls */}
                        <div className="relative pl-6">
                            <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                Robust Data Quality Controls
                            </h3>
                            <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                <li>Duplicate suppression, timestamp alignment, stale tick detection</li>
                                <li>Validation and cleansing to ensure clean, tradable data</li>
                            </ul>
                        </div>

                        {/* 5. Secure & Reliable Operation */}
                        <div className="relative pl-6">
                            {/* Accent line sized to text */}
                            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-[#1b2a4e]/60 rounded-full" />

                            <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                Secure & Reliable Operation
                            </h3>
                            <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                <li>Role-based access control & encrypted transit channels</li>
                                <li>Proven resilience in high-volume trading environments</li>
                            </ul>
                        </div>


                        {/* 6. Value Proposition */}
                        <div className="relative pl-6">
                            <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                Value Proposition
                            </h3>
                            <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                <li>Faster signal generation</li>
                                <li>Better order execution quality</li>
                                <li>Reduced latency risk & information delay</li>
                                <li>Higher stability and market uptime</li>
                                <li>Simplified integration and data governance</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

