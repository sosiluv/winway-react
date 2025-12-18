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
    const [openFeatureIndex, setOpenFeatureIndex] = useState(null);


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
                        Trust Messenger Enterprise <br />
                        SMS Distribution & Delivery System
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-10">
                        A secure, scalable, and high-performance  <br />
                        messaging platform designed to deliver uninterrupted communication at all times.
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
            {/* Overview Section */}
            <section id="overview" className="py-20 bg-gradient-to-b from-[#f9fafb] via-[#f6f7f9] to-[#f2f3f5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* 1. Enterprise-Grade Messaging Infrastructure */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Enterprise-Grade Messaging Infrastructure
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                TrustMessenger Enterprise is built for institutions that demand uncompromising reliability —
                                financial organizations, government agencies, and large-scale enterprises. With high-speed
                                processing and horizontally scalable performance, it guarantees accurate and timely delivery
                                even under extreme message traffic.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 2. Intelligent Routing & Operational Continuity */}
                    <FadeIn direction="right" triggerOnce>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Intelligent Routing & Operational Continuity
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Through intelligent routing, multi-node redundancy, and real-time monitoring, the system
                                maintains uninterrupted message flow. Automated failover and health-check control ensure
                                resilience, security, and operational stability across enterprise communication networks.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* ============================
    KEY FEATURES SECTION (Accordion)
============================ */}
            <section id="key-features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
                            Key Features
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div className="divide-y divide-slate-300 max-w-5xl mx-auto">

                        {[
                            {
                                title: 'High Availability & Performance',
                                bullets: [
                                    'Non-stop, fault-tolerant architecture ensuring continuous uptime',
                                    'C-language based core engine for ultra-fast message processing',
                                    'Separated send/receive modules for optimized stability',
                                    'Direct carrier gateway connectivity for maximum reliability',
                                    'Pre-duplication filtering for high-volume message delivery',
                                ],
                            },
                            {
                                title: 'Scalability & Stability',
                                bullets: [
                                    'Dynamic scaling to support expanding message traffic',
                                    'Automated recovery and proactive failure detection',
                                    'Real-time memory and queue monitoring',
                                    'End-to-end diagnostics and traffic analytics for issue prevention',
                                ],
                            },
                            {
                                title: 'Advanced Delivery Management',
                                bullets: [
                                    'Intelligent load balancing and optimized distribution control',
                                    'Web-based bulk delivery dashboard and management interface',
                                    'Message history lookup and one-click resend for recovery',
                                    'Time-based delivery scheduling for business workflows',
                                    'Multi-priority routing for mission-critical services',
                                ],
                            },
                            {
                                title: 'Multi-Channel Messaging',
                                bullets: [
                                    'Alimtalk (Kakao Business Message) routing with failover',
                                    'Two-way SMS (MO) support for interactive services',
                                    'Global SMS delivery for international communication',
                                    'Call-forwarding, anti-spoofing, and secure routing features',
                                ],
                            },
                            {
                                title: 'Reporting & Compliance',
                                bullets: [
                                    'Real-time delivery statistics and performance metrics',
                                    'Comprehensive audit logs and exportable reports',
                                    'Full monitoring of processes and system components',
                                ],
                            },
                            {
                                title: 'Integration & Flexibility',
                                bullets: [
                                    'Seamless enterprise integration through standardized APIs',
                                    'Cross-service monitoring and operational linkage',
                                    'Automatic fallback routing for service continuity',
                                ],
                            },
                        ].map((block, idx) => {
                            const isOpen = openFeatureIndex === idx;

                            return (
                                <article key={block.title} className="py-6">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFeatureIndex(isOpen ? null : idx)
                                        }
                                        className="group w-full flex items-center justify-between text-left"
                                    >
                                        <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] font-cormorant tracking-wide">
                                            {block.title}
                                        </h3>

                                        {/* Bold arrow */}
                                        <span
                                            className={`ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full
                  border border-slate-300 text-slate-800 transition-all duration-300
                  ${isOpen ? 'rotate-180 bg-slate-100' : 'bg-white'}
                  group-hover:scale-110 group-hover:border-slate-500
                `}
                                        >
                                            <i className="ri-arrow-down-s-line text-2xl font-bold" />
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[520px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800 pl-6 list-disc">
                                            {block.bullets.map(item => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>


            <section id="benefits" className="py-24 bg-[#f2f3f5]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-12">
                        Benefits
                    </h2>

                    {/* Divider-based horizontal alignment list */}
                    <div className="divide-y divide-slate-300">

                        {/* 1 */}
                        <article className="py-6 flex flex-col md:flex-row md:items-start md:justify-between">
                            <h3 className="text-xl md:text-2xl font-cormorant font-semibold text-slate-900 md:w-1/3">
                                Guaranteed Reliability
                            </h3>
                            <p className="mt-2 md:mt-0 md:w-2/3 text-base md:text-lg text-slate-700 leading-relaxed">
                                Designed for financial-grade uptime and consistency.
                            </p>
                        </article>

                        {/* 2 */}
                        <article className="py-6 flex flex-col md:flex-row md:items-start md:justify-between">
                            <h3 className="text-xl md:text-2xl font-cormorant font-semibold text-slate-900 md:w-1/3">
                                High-Volume Capability
                            </h3>
                            <p className="mt-2 md:mt-0 md:w-2/3 text-base md:text-lg text-slate-700 leading-relaxed">
                                Handles peak load environments with ease.
                            </p>
                        </article>

                        {/* 3 */}
                        <article className="py-6 flex flex-col md:flex-row md:items-start md:justify-between">
                            <h3 className="text-xl md:text-2xl font-cormorant font-semibold text-slate-900 md:w-1/3">
                                Secure & Compliant
                            </h3>
                            <p className="mt-2 md:mt-0 md:w-2/3 text-base md:text-lg text-slate-700 leading-relaxed">
                                Enterprise-level security and audit trails.
                            </p>
                        </article>

                        {/* 4 */}
                        <article className="py-6 flex flex-col md:flex-row md:items-start md:justify-between">
                            <h3 className="text-xl md:text-2xl font-cormorant font-semibold text-slate-900 md:w-1/3">
                                Flexible Integration
                            </h3>
                            <p className="mt-2 md:mt-0 md:w-2/3 text-base md:text-lg text-slate-700 leading-relaxed">
                                Works seamlessly with core systems and APIs.
                            </p>
                        </article>

                        {/* 5 */}
                        <article className="py-6 flex flex-col md:flex-row md:items-start md:justify-between">
                            <h3 className="text-xl md:text-2xl font-cormorant font-semibold text-slate-900 md:w-1/3">
                                Operational Efficiency
                            </h3>
                            <p className="mt-2 md:mt-0 md:w-2/3 text-base md:text-lg text-slate-700 leading-relaxed">
                                Reduces downtime, manual work, and delivery failures.
                            </p>
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );

}
