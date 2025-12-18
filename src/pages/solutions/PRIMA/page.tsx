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

    // ✅ Added for expandable Key Features only
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    // ✅ Key Features data (same text you had)
    const keyFeatures = [
        {
            title: "Multi-Exchange Margining Framework",
            bullets: [
                "Supports CME SPAN, Eurex Prisma, JPX VaR, OCC TIMS, and KRX COMS methodologies",
                "Unified computation logic for global clearing risk models",
            ],
        },
        {
            title: "Real-Time Margin Calculation",
            bullets: [
                "Ultra-fast shared-memory compute engine for continuous portfolio evaluation",
                "Unix/Linux-based high-performance deployment with microsecond-level computation",
                "Integrated pre-trade risk management capabilities",
            ],
        },
        {
            title: "Risk & Margin Capability",
            bullets: [
                "Real-time recognition of inter-product spread offsets by combined commodity",
                "Combined-commodity and currency-level margin aggregation",
                "Prevents excessive spread benefits; accurately handles one-sided risk exposure scenarios",
            ],
        },
        {
            title: "Unified API & One-Library Framework",
            bullets: [
                "Provides real-time portfolio ingestion and automated margin output",
                "Single integrated library with standardized API for fast system integration",
            ],
        },
        {
            title: "Operational Excellence",
            bullets: [
                "Automatically updates clearing settlement ledger and margin books",
                "Supports audit-ready workflows for risk and margin management teams",
            ],
        },
        {
            title: "Value Proposition",
            bullets: [
                "Real-time, high-performance portfolio margin analytics",
                "Unified support for major global exchange risk models",
                "Prevents under-one-sided exposure from excessive spread offsets",
                "Accelerates onboarding of new products and clearing rules",
                "Seamless integration with trading and risk ecosystems",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-center">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-cormorant">
                        PRIMA | Portfolio Margin Calculator
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

            {/* ================================
               KEY FEATURES SECTION (EXPANDABLE)
               ================================ */}
            <section
                id="key-features"
                className="py-24 bg-white border-t border-slate-200"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <header className="mb-10">
                        <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
                            Key Features
                        </h2>
                    </header>

                    {/* Divider-based accordion */}
                    <div className="divide-y divide-slate-300">
                        {keyFeatures.map((feature, idx) => {
                            const isOpen = openIndex === idx;

                            return (
                                <article key={feature.title} className="py-6">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between text-left"
                                    >
                                        <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                            {feature.title}
                                        </h3>

                                        {/* ✅ Arrow (chevron) */}
                                        <span
                                            className={`ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 transition-all duration-300
        ${isOpen ? 'rotate-180 bg-slate-100' : 'bg-white'}
        group-hover:scale-110
    `}
                                            aria-hidden="true"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-6 w-6 text-slate-800"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>

                                    </button>

                                    {/* content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[520px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-slate-700 leading-relaxed">
                                            {feature.bullets.map((b) => (
                                                <li key={b}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
