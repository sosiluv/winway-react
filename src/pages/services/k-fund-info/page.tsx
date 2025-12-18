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
                        Korean Fund Reference Information
                    </h1>
                </div>
            </section>

            {/* ============================
    Fund Reference Information
============================ */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Intro — unchanged */}
                    <p className="text-2xl md:text-3xl font-cormorant font-bold text-slate-900 leading-relaxed mb-12">
                        We provide English-language fund information for Korea-domiciled funds.
                    </p>

                    {/* List — aligned exactly with title */}
                    <div className="divide-y divide-slate-300/70">
                        {[
                            'Fund Name',
                            'International Securities Identification Number (ISIN)',
                            'Fund Management Company',
                            'Registered Address of the Management Company',
                            'Fund Type',
                            'Fund Inception Date',
                            'Base Currency',
                            'Investment Region',
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
