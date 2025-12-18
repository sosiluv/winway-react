import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import serviceArchi from '@/images/architecture/service_archi.png';

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
                        FX DMA Hub
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-8">
                        Institutional-grade FX market access
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
                            href="#architecture"
                            className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
                        >
                            Architecture
                        </a>
                    </div>
                </div>
            </section>

            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* 1. Unified FX Connectivity Fabric (Left Aligned) */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Unified FX Connectivity Fabric
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                By connecting global FX liquidity providers through the Winway Hub at Equinix Tokyo TY3
                                and Korean banks and securities firms through the Winway Hub at Equinix Seoul SL1,
                                institutions gain access to a unified FX connectivity fabric.
                                This architecture eliminates the cost and operational complexity of building and maintaining
                                individual private network links with each counterparty.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 2. Direct LP Access & Intelligent Execution (Right Aligned) */}
                    <FadeIn direction="right" triggerOnce>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                BBAO & SOR
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Through the Winway FX DMA Hub, institutions can directly access pricing from multiple FX
                                liquidity providers and generate best bid and offer rates.
                                These consolidated prices enable smart order routing, arbitrage across Spot, NDF, and Futures
                                markets, as well as systematic market-making strategies.
                            </p>
                        </div>
                    </FadeIn>

                    {/* 3. Competitive Pricing & Performance (Left Aligned) */}
                    <FadeIn direction="left" triggerOnce>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Competitive Pricing & Trading Performance
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Compared with relying on a single vendor platform or individual liquidity provider platforms,
                                the Winway Hub delivers more competitive pricing.
                                This results in enhanced trading performance and stronger client-facing price competitiveness
                                for banks, brokers, and institutional trading desks.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* Architecture Section */}
            <section
                id="architecture"
                className="py-28 bg-gradient-to-b from-[#f7f8f9] via-[#f4f5f6] to-[#eef0f2]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 font-cormorant tracking-tight">
                            Architecture
                        </h2>
                    </div>

                    {/* Architecture Image */}
                    <div className="w-full">
                        <img
                            src={serviceArchi}
                            alt="Service Architecture"
                            className="w-full h-auto rounded-xl shadow-xl"
                        />
                    </div>

                </div>
            </section>


        </div>
    );
}
