import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/* Fade-in component (unchanged) */
function FadeIn({ children, delay = 0 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(entry.target);
                }
            });
        });

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

/* FULL PAGE: CHAMMAE MARKET SURVEILLANCE SYSTEM */
export default function ChammaePage() {
    const { t } = useTranslation('common');
    const [openFeatureIndex, setOpenFeatureIndex] = useState(null);

    const [currentSection, setCurrentSection] = useState<'overview' | 'key-features' | 'scenarios' | 'benefits'>('overview');

    /* Smooth scroll function */
    const scrollToSection = (id: string, tab?: typeof currentSection) => {
        const el = document.getElementById(id);
        if (tab) setCurrentSection(tab);
        if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white pt-16">

            {/* ============================
                HERO SECTION
            ============================ */}
            <section className="relative py-20 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-cormorant">
                            Chammae | Market Surveillance System
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Real-time monitoring and analytics<br />
                            designed to detect market abuse and ensure fair trading practices.
                        </p>

                        {/* Navigation */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center">
                            <button
                                    onClick={() => scrollToSection('overview', 'overview')}
                                    className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'overview' ? 'text-white border-white' : 'text-white/90 border-transparent hover:text-white hover:border-slate-300'}`}>
                                    Overview
                                </button>

                                <button
                                    onClick={() => scrollToSection('key-features', 'key-features')}
                                    className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'key-features' ? 'text-white border-white' : 'text-white/90 border-transparent hover:text-white hover:border-slate-300'}`}>
                                    Key Features
                                </button>

                                <button
                                    onClick={() => scrollToSection('scenarios', 'scenarios')}
                                    className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'scenarios' ? 'text-white border-white' : 'text-white/90 border-transparent hover:text-white hover:border-slate-300'}`}>
                                    Scenarios
                                </button>

                                <button
                                    onClick={() => scrollToSection('benefits', 'benefits')}
                                    className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'benefits' ? 'text-white border-white' : 'text-white/90 border-transparent hover:text-white hover:border-slate-300'}`}>
                                    Benefits
                                </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================
                OVERVIEW SECTION
            ============================ */}
            <section
                id="overview"
                className="py-20 bg-gradient-to-b from-[#f9fafb] via-[#f6f7f9] to-[#f2f3f5]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Block 1 */}
                    <FadeIn>
                        <div className="max-w-4xl text-left">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Market Surveillance Overview
                            </h3>

                            <p className="text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                Our Market Surveillance System is designed to monitor derivatives and capital market
                                trading activities in real time, ensuring fair and transparent markets. The platform
                                automatically detects abnormal trading patterns and potential market-abusive behaviors,
                                helping financial institutions comply with regulatory standards and protect market integrity.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Block 2 */}
                    <FadeIn>
                        <div className="max-w-4xl text-left ml-auto">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Advanced Analytics & Detection
                            </h3>

                            <p className="text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                It leverages advanced analytics and rule-based detection engines to identify suspicious
                                activities — including manipulative order behaviors, coordinated trading, and violations
                                of market conduct rules.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* ============================
    KEY FEATURES SECTION (Accordion format)
============================ */}
            <section id="key-features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] font-cormorant mb-4">
                            Key Features
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div className="divide-y divide-slate-300 max-w-5xl mx-auto">

                        {[
                            {
                                title: 'Advanced Trade Surveillance',
                                bullets: [
                                    'Monitoring of order and trade flows',
                                    'Automated detection of suspicious behavior patterns',
                                    'Configurable detection rules aligned with regulatory requirements',
                                ],
                            },
                            {
                                title: 'Abnormal Order Behavior Detection',
                                bullets: [
                                    'Quote-stuffing and order-book manipulation',
                                    'Excessive order amendments or cancellations',
                                    'Low execution ratio alerts',
                                    'Spoofing-like and layering-like behavior monitoring',
                                ],
                            },
                            {
                                title: 'Market Manipulation Detection',
                                bullets: [
                                    'Price manipulation and misleading market signals',
                                    'Cross-account coordinated trading surveillance',
                                    'Pattern identification for wash trades and matched orders',
                                    'Detection of circular trading and self-dealing attempts',
                                ],
                            },
                            {
                                title: 'Trader & Account-Level Supervision',
                                bullets: [
                                    'Identification of self-trades (wash trades)',
                                    'Detection of collusive / coordinated trades (matched orders)',
                                    'Account-level order pattern analysis and violation alerts',
                                ],
                            },
                            {
                                title: 'Compliance & Reporting',
                                bullets: [
                                    'Pre-defined rule library for market abuse scenarios',
                                    'Evidence logs and investigation dashboards',
                                    'Regulatory reporting support and audit trails',
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
                                        <h3 className="text-xl md:text-2xl font-semibold font-cormorant text-[#0b172a]">
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
                                        <ul className="text-slate-800 leading-relaxed space-y-1.5 text-[15px] pl-6 list-disc">
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

            {/* ============================
                SCENARIOS SECTION (LEFT ALIGNED, BG WHITE)
            ============================ */}
            <section
                id="scenarios"
                className="py-20 bg-gray-100 text-left"
            >
                <div className="max-w-5xl mx-auto px-4">

                    <header className="mb-14">
                        <h2 className="text-5xl font-cormorant font-bold text-slate-900">
                            Scenarios
                        </h2>
                    </header>

                    <div className="divide-y divide-slate-200 font-cormorant">

                        {[
                            "Order-book imbalance creation (quote imbalance / quote stuffing)",
                            "Low execution rates indicating non-bona fide orders",
                            "Excessive modification & cancellation orders",
                            "Potential price manipulation and spoofing patterns",
                            "Wash trades (self-matched orders)",
                            "Matched or collusive trading (coordinated accounts)",
                            "Client or trader rule violation alerts",
                        ].map((text, idx) => (
                            <article key={idx} className="py-5">
                                <p className="text-2xl text-slate-900 leading-relaxed font-light">{text}</p>
                            </article>
                        ))}

                    </div>
                </div>
            </section>

            {/* ============================
                BENEFITS SECTION (LEFT ALIGNED, BG SHADED)
            ============================ */}
            <section
                id="benefits"
                className="py-20 bg-slate-50 border-t border-slate-200 text-left"
            >
                <div className="max-w-5xl mx-auto px-4">

                    <header className="mb-14">
                        <h2 className="text-5xl font-cormorant font-bold text-slate-900">
                            Benefits
                        </h2>
                    </header>

                    <div className="divide-y divide-slate-200 font-cormorant">

                        {[
                            "Strengthens market integrity and investor protection.",
                            "Enhances compliance with domestic and global market regulations.",
                            "Reduces operational risks and surveillance workload.",
                            "Enables early detection of market-abusive behaviors.",
                        ].map((text, idx) => (
                            <article key={idx} className="py-5">
                                <p className="text-2xl text-slate-900 leading-relaxed font-light">{text}</p>
                            </article>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    );
}
