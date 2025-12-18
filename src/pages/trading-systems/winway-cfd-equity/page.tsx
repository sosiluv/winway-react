import { useState, useEffect, useRef } from "react";

// Fade-in animation
function FadeIn({ children, delay = 0 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay);
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-[1000ms] ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            {children}
        </div>
    );
}

export default function WinwayCFDPage() {
    const [currentSection, setCurrentSection] = useState("overview");
    const [capOpenId, setCapOpenId] = useState("trading"); // default open

    const scrollToSection = (id, tabKey) => {
        const el = document.getElementById(id);
        if (tabKey) setCurrentSection(tabKey);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* HERO + NAVBAR */}
            <section className="relative py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-cormorant">
                        Winway CFD Equity
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        Equity CFD Trading Platform
                    </p>

                    {/* NAV */}
                    <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
                        <button
                            onClick={() => scrollToSection("overview", "overview")}
                            className={`text-sm font-medium pb-1 border-b-2 transition-colors ${currentSection === "overview"
                                    ? "text-white border-white"
                                    : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => scrollToSection("capabilities", "caps")}
                            className={`text-sm font-medium pb-1 border-b-2 transition-colors ${currentSection === "caps"
                                    ? "text-white border-white"
                                    : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                }`}
                        >
                            Key Capabilities
                        </button>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 space-y-24">

                    {/* Paragraph 1 - Left */}
                    <FadeIn>
                        <div className="max-w-4xl">
                            <h3 className="text-sm font-semibold text-slate-500 tracking-widest uppercase mb-4">
                                Fully Integrated Equity CFD Platform
                            </h3>

                            <p className="text-3xl md:text-4xl font-cormorant leading-[1.65] text-slate-900">
                                Winway’s Equity CFD Trading Platform provides a fully integrated
                                solution for both domestic and global equity CFD markets. 
                                <br></br><br></br>The system supports the complete trading workflow, including client HTS,
                                market-data servers, order FEP, trading ledger, and all components
                                required for high-performance CFD operations.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Paragraph 2 – Right */}
                    <FadeIn delay={150}>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm font-semibold text-slate-500 tracking-widest uppercase mb-4">
                                Built for Brokers, Prop Desks & Prime Brokerage
                            </h3>

                            <p className="text-3xl md:text-4xl font-cormorant leading-[1.65] text-slate-900">
                                Designed for brokers, proprietary trading desks, and prime brokerage
                                services, the platform supports market-making models, back-to-back
                                agency brokerage, flexible liquidity, and hedging structures tailored
                                to each firm.<br></br><br></br> It also provides automated forced-liquidation based on
                                market conditions, corporate actions handling, trader-level permissions,
                                entitlement controls, and full CFD-eligible instrument management.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* KEY CAPABILITIES (Accordion) */}
            <section id="capabilities" className="py-24 bg-slate-50 border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-cormorant font-semibold mb-10 text-slate-900">
                        Key Capabilities
                    </h2>

                    <div className="divide-y divide-slate-300">

                        {/* 1. Trading & Execution Management */}
                        <article className="py-8">
                            <button
                                onClick={() =>
                                    setCapOpenId(capOpenId === "trading" ? null : "trading")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold">
                                    Trading & Execution Management
                                </h3>

                                <i
                                    className={`ri-arrow-down-s-line text-3xl transition-transform ${capOpenId === "trading" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {capOpenId === "trading" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-700">
                                    <li>Full support for buy, sell, short-sell, and cover-buy transactions.</li>
                                    <li>GTD (Good-Till-Date) order handling.</li>
                                    <li>Multi-venue and multi-counterparty order routing (by account or instrument).</li>
                                    <li>Manual and emergency order entry with trade registration features.</li>
                                </ul>
                            )}
                        </article>

                        {/* 2. Hedging & Position Management */}
                        <article className="py-8">
                            <button
                                onClick={() =>
                                    setCapOpenId(capOpenId === "hedging" ? null : "hedging")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold">
                                    Hedging & Position Management
                                </h3>

                                <i
                                    className={`ri-arrow-down-s-line text-3xl transition-transform ${capOpenId === "hedging" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {capOpenId === "hedging" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700 leading-relaxed">
                                    <li>Automated hedging by account and instrument.</li>
                                    <li>Proprietary DMS hedge orders for real-time risk offsetting.</li>
                                    <li>Back-to-Back hedge orders.</li>
                                    <li>Combined position and FIFO-based individual position tracking.</li>
                                    <li>Management of hedge instruments, trading currency, and settlement currency.</li>
                                    <li>Settlement FX rate management.</li>
                                </ul>
                            )}
                        </article>

                        {/* 3. Real-Time Risk & Limit Control */}
                        <article className="py-8">
                            <button
                                onClick={() =>
                                    setCapOpenId(capOpenId === "risk" ? null : "risk")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold">
                                    Real-Time Risk & Limit Control
                                </h3>

                                <i
                                    className={`ri-arrow-down-s-line text-3xl transition-transform ${capOpenId === "risk" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {capOpenId === "risk" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700 leading-relaxed">
                                    <li>Intraday risk monitoring, exposure analytics, and limit checks.</li>
                                    <li>Auto-liquidation (forced close-out) based on margin and risk thresholds.</li>
                                    <li>Short-sell eligible stock management and borrowable quantity control.</li>
                                    <li>Counterparty omnibus account management and reconciliation.</li>
                                </ul>
                            )}
                        </article>

                        {/* 4. CFD Instrument & Financing Management */}
                        <article className="py-8">
                            <button
                                onClick={() =>
                                    setCapOpenId(capOpenId === "instrument" ? null : "instrument")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold">
                                    CFD Instrument & Financing Management
                                </h3>

                                <i
                                    className={`ri-arrow-down-s-line text-3xl transition-transform ${capOpenId === "instrument" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {capOpenId === "instrument" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700">
                                    <li>CFD product master management.</li>
                                    <li>Long/short quantities, financing rate, and borrow fee management.</li>
                                    <li>Corporate action processing for CFD instruments.</li>
                                    <li>Rights schedules and entitlement management.</li>
                                </ul>
                            )}
                        </article>

                        {/* 5. Reporting & Compliance */}
                        <article className="py-8">
                            <button
                                onClick={() =>
                                    setCapOpenId(capOpenId === "report" ? null : "report")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold">
                                    Reporting & Compliance
                                </h3>

                                <i
                                    className={`ri-arrow-down-s-line text-3xl transition-transform ${capOpenId === "report" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {capOpenId === "report" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-700">
                                    <li>Client trade statements and activity reports.</li>
                                    <li>Association/Regulatory reporting.</li>
                                    <li>FX network reporting.</li>
                                    <li>Counterparty-level summary account reconciliation.</li>
                                </ul>
                            )}
                        </article>

                        {/* 6. PBS Swap Ledger & Settlement Management (from 2nd image) */}
                        <article className="py-8">
                            <button
                                onClick={() =>
                                    setCapOpenId(capOpenId === "pbs" ? null : "pbs")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold">
                                    PBS Swap Ledger & Settlement Management
                                </h3>

                                <i
                                    className={`ri-arrow-down-s-line text-3xl transition-transform ${capOpenId === "pbs" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {capOpenId === "pbs" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-700">
                                    <li>Prime Brokerage Services (PBS) swap ledger.</li>
                                    <li>OTC trade capture and account-level order/execution management.</li>
                                    <li>Settlement cycle management and interest calculation.</li>
                                    <li>Swap ledger balance and unit price management.</li>
                                    <li>Automated batch processing and data synchronization with PBS swap ledger.</li>
                                </ul>
                            )}
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );
}
