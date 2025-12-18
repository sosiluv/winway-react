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

export default function OMSPage() {
    const { t } = useTranslation('common');
    const navigate = useNavigate();

    const leftFeatures = [
        {
            title: 'Speed Advantage',
            description:
                'Lightning-fast execution boosts fill rates and cuts down slippage. Processes order flow with microsecond latency from entry to execution, minimizing delay in high-frequency trading environments.',
        },
        {
            title: 'Event-Driven Architecture',
            description:
                'Employs an asynchronous, event-based design to process multiple market and client events in parallel for maximum throughput.',
        },
        {
            title: 'Customization',
            description:
                'Flexible execution logic designed for different asset classes and strategies. Supports strategy-specific rules and parameters tailored to different asset classes, products, and trading styles.',
        },
    ];

    const rightFeatures = [
        {
            title: 'Pre-Trade Risk and Compliance Checks',
            description:
                'Performs real-time validation of trading limits, quote accuracy, and compliance rules before execution.',
        },
        {
            title: 'Horizontal Scalability',
            description:
                'Utilizes distributed and microservices-based architecture to handle growing order volumes without sacrificing performance.',
        },
        {
            title: 'Exchange & Broker Connectivity',
            description:
                'Supports multiple exchange protocols (FIX, iLink3) and APIs for seamless integration with brokers and liquidity providers.',
        },
    ];

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-center">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-cormorant">
                        HipassFIX <br />
                        FIX Engine & Gatewa
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-10">
                        Real-time P&L monitoring at the account or individual position level. <br />
                        Precision Monitoring. Instant Action. Total Protection.
                    </p>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-6 border-t border-slate-600 pt-6">
                        <a
                            href="#overview"
                            className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
                        >
                            Overview
                        </a>
                        <a
                            href="#applications"
                            className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
                        >
                            Applications
                        </a>
                         <a
                            href="#functions"
                            className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
                        >
                            Funtions
                        </a>
                        <a
                            href="#key-features"
                            className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
                        >
                            Key Features
                        </a>
                    </div>
                </div>
            </section>
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* 1. Global FIX Connectivity (Left Aligned) */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Global FIX Connectivity
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                HipassFIX delivers ultra-reliable, low-latency FIX connectivity for global financial institutions.
                                <br></br><br></br>
                                Designed for high-performance trading environments, it supports multi-asset electronic trading
                                across equities, futures, options, and FX — including CME iLink3 and direct FX liquidity-provider connectivity.
                                <br></br><br></br>
                                Whether connecting to global exchanges, brokers, liquidity venues, or OMS/EMS platforms,
                                HipassFIX ensures seamless, secure, and scalable FIX communications with full protocol flexibility
                                and enterprise-grade message routing.
                            </p>
                            <br></br><br></br>
                        </div>
                    </FadeIn>

                    {/* 2. Performance and Reliability (Right Aligned) */}
                    <FadeIn direction="right" triggerOnce>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Performance and Reliability
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Built for mission-critical trading infrastructure, HipassFIX achieves microsecond-level latency,
                                robust session management, fault tolerance, and high throughput — delivering the stability
                                and precision required for modern capital-markets operations.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* Applications Section */}
            <section id="applications" className="py-24 bg-[#f5f6f7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 font-cormorant">
                            Applications
                        </h2>
                        <p className="text-lg text-slate-600 tracking-wide">
                            Empowering diverse trading environments through precision and performance
                        </p>
                    </div>

                    {/* Animated Card Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {[
                            { title: 'Sell-Side Broker Electronic Trading Gateways', icon: 'ri-exchange-dollar-line' },
                            { title: 'Buy-Side OMS/EMS FIX Connectivity Hub', icon: 'ri-links-line' },
                            { title: 'Market-Maker & Liquidity-Provision Platforms', icon: 'ri-funds-line' },
                            { title: 'FX Aggregation & DMA Execution', icon: 'ri-currency-line' },
                            { title: 'Exchange Access & Market Connectivity Hubs', icon: 'ri-global-line' },
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 150} direction="up" triggerOnce>
                                <div className="relative group overflow-hidden shadow-sm transition-all duration-700 rounded-none">
                                    <div className="w-full h-64 bg-gradient-to-b from-[#0b1b3f] to-[#101726] flex flex-col justify-center items-center text-center relative">
                                        <div className="absolute inset-0 bg-[#0b1b3f]/85 group-hover:bg-[#0b1b3f]/60 transition duration-700"></div>

                                        {/* Icon */}
                                        <i
                                            className={`${item.icon} text-[#f0f2f6] text-5xl mb-6 relative z-10 transition-transform duration-700 group-hover:scale-110`}
                                        ></i>

                                        {/* Title */}
                                        <h3 className="text-[#ffffff] text-lg md:text-xl font-semibold font-cormorant leading-snug tracking-wide relative z-10 px-4">
                                            {item.title}
                                        </h3>

                                        {/* Accent Line */}
                                        <div className="w-10 h-[1px] bg-[#e5e9ef]/50 mt-4 relative z-10 group-hover:w-12 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Functions Section */}
            <section id="functions" className="py-24 bg-[#e6e8eb]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 font-cormorant">
                            Functions
                        </h2>
                        <p className="text-lg text-slate-600">
                            Delivering robust FIX-based infrastructure for secure, scalable, and high-performance trading.
                        </p>
                    </div>

                    {/* Grid of Functional Areas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* 1. Multi-Asset Trading Connectivity */}
                        <div className="bg-white p-10 shadow-sm border border-slate-300 hover:shadow-md transition-all duration-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-cormorant">
                                Multi-Asset Trading Connectivity
                            </h3>
                            <ul className="space-y-2 text-slate-700 leading-relaxed">
                                <li>Global equities, futures, and options execution</li>
                                <li>CME iLink3 for futures & options order routing</li>
                                <li>FX DMA to Tier-1 LPs & ECNs</li>
                                <li>Support for both buy-side and sell-side workflows</li>
                            </ul>
                        </div>

                        {/* 2. Advanced FIX Session Management */}
                        <div className="bg-white p-10 shadow-sm border border-slate-300 hover:shadow-md transition-all duration-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-cormorant">
                                Advanced FIX Session Management
                            </h3>
                            <ul className="space-y-2 text-slate-700 leading-relaxed">
                                <li>Session initiation & handshakes</li>
                                <li>Heartbeat & recovery mechanisms</li>
                                <li>Connection monitoring & auto-reconnect</li>
                                <li>Duplicate prevention and sequence reset management</li>
                            </ul>
                        </div>

                        {/* 3. Protocol Flexibility & Customization */}
                        <div className="bg-white p-10 shadow-sm border border-slate-300 hover:shadow-md transition-all duration-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-cormorant">
                                Protocol Flexibility & Customization
                            </h3>
                            <ul className="space-y-2 text-slate-700 leading-relaxed">
                                <li>Full FIX 4.x / 5.x support</li>
                                <li>CME iLink3 (SBE) support</li>
                                <li>Custom FIX dictionaries & client-specific rule mapping</li>
                                <li>Dynamic tag routing and multi-venue connectivity rules</li>
                            </ul>
                        </div>

                        {/* 4. Message Routing & Processing */}
                        <div className="bg-white p-10 shadow-sm border border-slate-300 hover:shadow-md transition-all duration-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-cormorant">
                                Message Routing & Processing
                            </h3>
                            <ul className="space-y-2 text-slate-700 leading-relaxed">
                                <li>Multi-threaded inbound/outbound pipelines</li>
                                <li>Routing logic based on strategy, client group, or venue</li>
                                <li>FIX normalization and message enrichment</li>
                                <li>Latency-optimized encoding/decoding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section id="key-features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
                            Key Features
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                            Professional order management capabilities designed for ultra-low-latency trading operations.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                        {/* LEFT COLUMN */}
                        <div className="space-y-12 flex flex-col justify-between">
                            {/* 1. Ultra-Low Latency Architecture */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Ultra-Low Latency Architecture
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Optimized C core messaging engine</li>
                                    <li>Lock-free data structures and in-memory processing</li>
                                    <li>Microsecond-level message throughput</li>
                                    <li>Hardware-accelerated networking support</li>
                                </ul>
                            </div>

                            {/* 2. High Reliability & Resilience */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    High Reliability & Resilience
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Fail-over and redundancy options</li>
                                    <li>High-availability clustering</li>
                                    <li>Persistent message store & guaranteed delivery</li>
                                    <li>Order recovery & session replay</li>
                                </ul>
                            </div>

                            {/* 3. Scalable & Flexible Integration */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Scalable & Flexible Integration
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Plug-in architecture for routing logic and venue adapters</li>
                                    <li>Seamless connectivity to OMS, EMS, RMS, and market data systems</li>
                                    <li>Cloud, on-premise, colocation, and hybrid deployment support</li>
                                </ul>
                            </div>
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="flex items-stretch justify-center">
                            <img
                                src="https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20dashboard%20with%20comprehensive%20order%20tracking%20interface%2C%20real-time%20execution%20monitoring%20displays%2C%20institutional%20trading%20workstation%20with%20sophisticated%20silver%20and%20navy%20color%20scheme%2C%20modern%20OMS%20platform%20showing%20order%20flow%20and%20portfolio%20positions&width=400&height=500&seq=oms-interface-compact&orientation=portrait"
                                alt="F1Win Order Management System Interface"
                                className="w-full h-full object-cover object-center rounded-xl shadow-sm"
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-12 flex flex-col justify-between">
                            {/* 4. Monitoring & Operations */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Monitoring & Operations
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Real-time dashboard for FIX session and message flow</li>
                                    <li>Web-based configuration & admin interface</li>
                                    <li>Alerts, logs, and audit trails</li>
                                    <li>Performance metrics and latency telemetry</li>
                                </ul>
                            </div>

                            {/* 5. Compliance & Security */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Compliance & Security
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>TLS/SSL encryption and secure session management</li>
                                    <li>FIX compliance audit and message trace tools</li>
                                    <li>Role-based access control</li>
                                    <li>Regulatory logging & reporting ready</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Performance You Can Trust
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        F1Win offers the foundation for a next-generation trading environment — delivering speed, precision, and stability demanded by today’s competitive financial markets.
                    </p>
                </div>
            </section>
        </div>
    );
}
