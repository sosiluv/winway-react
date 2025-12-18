import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// ✨ Fade-in component (same as OMS)
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

export default function PRIMAPage() {
    const { t } = useTranslation('common');
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-center">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-cormorant">
                        PRIMA
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                        Precision Risk & Market Analytics — a next-generation portfolio margin and risk analysis engine.
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
                            href="#key-features"
                            className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
                        >
                            Key Features
                        </a>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="py-20 bg-gradient-to-b from-[#f9fafb] via-[#f6f7f9] to-[#f2f3f5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {/* 1. Multi-Exchange Framework */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Multi-Exchange Portfolio Margin Framework
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                PRIMA delivers high-performance portfolio margin analytics across major derivatives markets —
                                supporting CME SPAN, Eurex Prisma, Japan Exchange Group VaR, OCC TIMS, and KRX COMS.
                                Designed for institutional-grade computation, it unifies cross-exchange margining, stress testing,
                                and portfolio netting under a single risk engine.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 2. Computation & Architecture */}
                    <FadeIn direction="right" triggerOnce>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Real-Time Computation & High-Performance Core
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Built for microsecond-level performance, PRIMA executes real-time margin and risk calculations
                                using a shared-memory computation engine optimized for parallel processing.
                                Its deterministic latency and scalable architecture provide accurate margin evaluation even under
                                extreme volatility and high throughput trading environments.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 3. Integration & Extensibility */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Unified Integration & Extensible Architecture
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Engineered for seamless integration, PRIMA connects directly with clearinghouse APIs, OMS/RMS modules,
                                and third-party data systems. Its modular framework supports hybrid deployment across cloud,
                                colocation, and on-premise environments, ensuring efficient scaling with minimal configuration overhead.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 4. Institutional Reliability */}
                    <FadeIn direction="right" triggerOnce>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Institutional Reliability & Operational Compliance
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                PRIMA ensures operational resilience and regulatory compliance with auditable logs, redundancy control,
                                and continuous validation. Its robust design supports 24/7 operation across mission-critical infrastructures,
                                reducing systemic risk and ensuring market stability across all levels of trading and clearing.
                            </p>
                        </div>
                    </FadeIn>
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
                            High-performance portfolio margining engine supporting global clearinghouse methodologies with real-time risk computation and institutional-grade reliability.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                        {/* LEFT COLUMN */}
                        <div className="space-y-12 flex flex-col justify-between">
                            {/* 1. Multi-Exchange Margining Framework */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Multi-Exchange Margining Framework
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Supports CME SPAN, Eurex Prisma, JPX VaR, OCC TIMS, and KRX COMS methodologies</li>
                                    <li>Unified computation logic for global clearing risk models</li>
                                </ul>
                            </div>

                            {/* 2. Real-Time Margin Calculation */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Real-Time Margin Calculation
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Ultra-fast shared-memory compute engine for continuous portfolio evaluation</li>
                                    <li>Unix/Linux-based high-performance deployment with microsecond-level computation</li>
                                    <li>Integrated pre-trade risk management capabilities</li>
                                </ul>
                            </div>

                            {/* 3. Risk & Margin Capability */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Risk & Margin Capability
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Real-time recognition of inter-product spread offsets by combined commodity</li>
                                    <li>Combined-commodity and currency-level margin aggregation</li>
                                    <li>Prevents excessive spread benefits; accurately handles one-sided risk exposure scenarios</li>
                                </ul>
                            </div>
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="flex items-stretch justify-center">
                            <img
                                src="https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20dashboard%20with%20comprehensive%20order%20tracking%20interface%2C%20real-time%20execution%20monitoring%20displays%2C%20institutional%20trading%20workstation%20with%20sophisticated%20silver%20and%20navy%20color%20scheme%2C%20modern%20OMS%20platform%20showing%20order%20flow%20and%20portfolio%20positions&width=400&height=500&seq=oms-interface-compact&orientation=portrait"
                                alt="Portfolio Margin Engine Dashboard"
                                className="w-full h-full object-cover object-center rounded-xl shadow-sm border border-slate-200"
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-12 flex flex-col justify-between">
                            {/* 4. Unified API & Framework */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Unified API & One-Library Framework
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Provides real-time portfolio ingestion and automated margin output</li>
                                    <li>Single integrated library with standardized API for fast system integration</li>
                                </ul>
                            </div>

                            {/* 5. Operational Excellence */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Operational Excellence
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Automatically updates clearing settlement ledger and margin books</li>
                                    <li>Supports audit-ready workflows for risk and margin management teams</li>
                                </ul>
                            </div>

                            {/* 6. Value Proposition */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Value Proposition
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Real-time, high-performance portfolio margin analytics</li>
                                    <li>Unified support for major global exchange risk models</li>
                                    <li>Prevents under-one-sided exposure from excessive spread offsets</li>
                                    <li>Accelerates onboarding of new products and clearing rules</li>
                                    <li>Seamless integration with trading and risk ecosystems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
