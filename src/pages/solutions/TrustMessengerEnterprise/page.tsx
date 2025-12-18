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

            {/* Key Features Section */}
            <section id="key-features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
                            Key Features
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                            Enterprise-grade messaging platform engineered for ultra-fast delivery, fault tolerance, and multi-channel communication with full monitoring and integration capabilities.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                        {/* LEFT COLUMN */}
                        <div className="space-y-12 flex flex-col justify-between">
                            {/* 1. High Availability & Performance */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    High Availability & Performance
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Non-stop, fault-tolerant architecture ensuring continuous uptime</li>
                                    <li>C-language based core engine for ultra-fast message processing</li>
                                    <li>Separated send/receive modules for optimized stability</li>
                                    <li>Direct carrier gateway connectivity for maximum reliability</li>
                                    <li>Pre-duplication filtering for high-volume message delivery</li>
                                </ul>
                            </div>

                            {/* 2. Scalability & Stability */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Scalability & Stability
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Dynamic scaling to support expanding message traffic</li>
                                    <li>Automated recovery and proactive failure detection</li>
                                    <li>Real-time memory and queue monitoring</li>
                                    <li>End-to-end diagnostics and traffic analytics for issue prevention</li>
                                </ul>
                            </div>

                            {/* 3. Advanced Delivery Management */}
                            <div className="relative pr-6">
                                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Advanced Delivery Management
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Intelligent load balancing and optimized distribution control</li>
                                    <li>Web-based bulk delivery dashboard and management interface</li>
                                    <li>Message history lookup and one-click resend for recovery</li>
                                    <li>Time-based delivery scheduling for business workflows</li>
                                    <li>Multi-priority routing for mission-critical services</li>
                                </ul>
                            </div>
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="flex items-stretch justify-center">
                            <img
                                src="https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20dashboard%20with%20comprehensive%20order%20tracking%20interface%2C%20real-time%20execution%20monitoring%20displays%2C%20institutional%20trading%20workstation%20with%20sophisticated%20silver%20and%20navy%20color%20scheme%2C%20modern%20OMS%20platform%20showing%20order%20flow%20and%20portfolio%20positions&width=400&height=500&seq=oms-interface-compact&orientation=portrait"
                                alt="Messaging System Dashboard"
                                className="w-full h-full object-cover object-center rounded-xl shadow-sm border border-slate-200"
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-12 flex flex-col justify-between">
                            {/* 4. Multi-Channel Messaging */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Multi-Channel Messaging
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Alimtalk (Kakao Business Message) routing with failover</li>
                                    <li>Two-way SMS (MO) support for interactive services</li>
                                    <li>Global SMS delivery for international communication</li>
                                    <li>Call-forwarding, anti-spoofing, and secure routing features</li>
                                </ul>
                            </div>

                            {/* 5. Reporting & Compliance */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Reporting & Compliance
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Real-time delivery statistics and performance metrics</li>
                                    <li>Comprehensive audit logs and exportable reports</li>
                                    <li>Full monitoring of processes and system components</li>
                                </ul>
                            </div>

                            {/* 6. Integration & Flexibility */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                                    Integration & Flexibility
                                </h3>
                                <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                                    <li>Seamless enterprise integration through standardized APIs</li>
                                    <li>Cross-service monitoring and operational linkage</li>
                                    <li>Automatic fallback routing for service continuity</li>
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
