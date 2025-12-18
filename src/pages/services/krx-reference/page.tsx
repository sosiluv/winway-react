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

export default function KRXReferencePage() {
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
                        KRX Equity & ETF Reference Data
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-2">
                        Institutional-grade FX market access
                    </p>
                </div>
            </section>

            {/* ============================
    KRX Reference Data Coverage
============================ */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Intro — UNCHANGED */}
                    <p className="text-2xl md:text-3xl font-cormorant text-slate-900 leading-relaxed mb-12">
                        We provide reference data services for <strong>KRX-listed equities and ETFs</strong>, covering the
                        following information:
                    </p>

                    {/* List — upgraded formatting ONLY */}
                    <div className="divide-y divide-slate-300/70">
                        {[
                            'Corporate actions data',
                            'Dividend information',
                            'IPO-related events',
                            'Shares outstanding events',
                            'Industry sector classifications',
                            'Covered warrant securities information',
                            'Derivatives market notifications',
                            'Free-float share data',
                            'Shareholder ownership breakdown',
                        ].map((item, idx) => (
                            <div key={idx} className="py-3">
                                <p className="text-[17px] md:text-[18px] font-medium text-slate-800">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
}
