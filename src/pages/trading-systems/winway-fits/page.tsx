import { useState, useEffect, useRef } from "react";

// Simple fade-in on scroll
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
            className={`transition-all duration-[1000ms] ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            {children}
        </div>
    );
}

export default function WinwayFITSPage() {
    const [currentSection, setCurrentSection] = useState("overview");

    // separate accordions so they don't clash
    const [ktsOpenId, setKtsOpenId] = useState("system");
    const [portfolioOpenId, setPortfolioOpenId] = useState("coverage");

    const scrollToSection = (id, tabKey) => {
        const el = document.getElementById(id);
        if (tabKey) setCurrentSection(tabKey);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero + Navbar */}
            <section className="relative py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-cormorant">
                            Winway FITS | Fixed Income Trading System
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            A fully integrated, high-performance fixed-income trading platform
                            engineered for primary dealers, institutional traders, and liquidity
                            providers.
                        </p>

                        {/* Top Nav */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
                            <button
                                onClick={() => scrollToSection("overview", "overview")}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === "overview"
                                        ? "text-white border-white"
                                        : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                    }`}
                            >
                                Overview
                            </button>

                            <button
                                onClick={() => scrollToSection("kts-lp", "kts")}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === "kts"
                                        ? "text-white border-white"
                                        : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                    }`}
                            >
                                KTS LP
                            </button>

                            <button
                                onClick={() => scrollToSection("portfolio", "portfolio")}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === "portfolio"
                                        ? "text-white border-white"
                                        : "text-slate-300 border-transparent hover:text-white hover:border-slate-300"
                                    }`}
                            >
                                Portfolio Management
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 space-y-24">
                    {/* Paragraph 1 (Left aligned) */}
                    <FadeIn>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Integrated Fixed-Income Trading Platform
                            </h3>
                            <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.65]">
                                Winway FITS is an integrated fixed-income trading platform that supports
                                both on-exchange and OTC trading for a wide range of bond instruments,
                                including government bonds, municipal bonds, special bonds, and corporate
                                bonds.<br></br><br></br>It delivers a complete workflow from real-time market data and
                                order execution to trade capture and book management, ensuring a
                                seamless, efficient trading experience.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Paragraph 2 (Right aligned) */}
                    <FadeIn delay={150}>
                        <div className="max-w-4xl ml-auto text-right">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                Built for Primary Dealers & Institutions
                            </h3>
                            <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.65]">
                                FITS provides advanced capabilities for primary dealers engaged in
                                government bond liquidity provision, as well as comprehensive portfolio
                                and securities management features for institutional bond traders.
                                <br></br><br></br>Together, it offers a fully equipped, high-performance platform tailored
                                to professional fixed-income trading operations.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* KTS LP Section */}
            <section
                id="kts-lp"
                className="py-20 bg-slate-50 border-slate-200"
            >
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 text-center mb-10">
                        KTS LP
                    </h2>

                    <div className="divide-y divide-slate-300">
                        {/* System Administration & Common Utilities */}
                        <article className="py-8">
                            <button
                                type="button"
                                onClick={() => setKtsOpenId(ktsOpenId === "system" ? null : "system")}
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                    System Administration & Common Utilities
                                </h3>
                                <i
                                    className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${ktsOpenId === "system" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {ktsOpenId === "system" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-base md:text-lg text-slate-800 leading-relaxed">
                                    <li>Control of trader roles, access rights, and trading permissions.</li>
                                    <li>Monitoring of trader books, connectivity status, and operational health.</li>
                                    <li>System sessions, message traffic, and communication status monitoring.</li>
                                    <li>Management of bond master data, product attributes, and market reference information.</li>
                                    <li>KRX Account Number & Market Information lookup.</li>
                                    <li>Execution resend & quote management tools.</li>
                                    <li>Real-time tracking of trader quotes vs. market best quotes to detect deviation.</li>
                                </ul>
                            )}
                        </article>

                        {/* Liquidity Provision */}
                        <article className="py-8">
                            <button
                                type="button"
                                onClick={() =>
                                    setKtsOpenId(ktsOpenId === "liquidity" ? null : "liquidity")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                    Liquidity Provision
                                </h3>
                                <i
                                    className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${ktsOpenId === "liquidity" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {ktsOpenId === "liquidity" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-base md:text-lg text-slate-800 leading-relaxed">
                                    <li>Real-time retrieval of orders and executions connected with KRX.</li>
                                    <li>Real-time bond position monitoring.</li>
                                    <li>Management of all filled trades by product and date.</li>
                                    <li>One- and two-way quote submission.</li>
                                    <li>Real-time tracking of all working and pending orders.</li>
                                    <li>Daily liquidity provision status by instrument.</li>
                                    <li>Monitoring of liquidity-provision activity and fulfillment metrics for each bond.</li>
                                    <li>Configuration of quote duration and automated resubmission timing.</li>
                                    <li>Rules-based management for order modification & cancellation conditions.</li>
                                    <li>Configuration of order size and spread parameters.</li>
                                    <li>Automated computation of theoretical quote values for LP quoting.</li>
                                    <li>Verification of minimum quoting obligations per instrument.</li>
                                    <li>Soft-limit–based alerts for automatic quote submission.</li>
                                    <li>Auto-hedging logic for managing inventory & risk exposures.</li>
                                    <li>
                                        Intelligent monitoring that suspends quoting automatically when predefined risk or
                                        market conditions are met.
                                    </li>
                                </ul>
                            )}
                        </article>
                    </div>
                </div>
            </section>

            {/* Portfolio Management Section */}
            <section
                id="portfolio"
                className="py-24 bg-white border-slate-200"
            >
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-10">
                        Portfolio Management
                    </h2>

                    <div className="divide-y divide-slate-300">
                        {/* 1. Wide Product Coverage */}
                        <article className="py-8">
                            <button
                                type="button"
                                onClick={() =>
                                    setPortfolioOpenId(
                                        portfolioOpenId === "coverage" ? null : "coverage"
                                    )
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                    Wide Product Coverage
                                </h3>
                                <i
                                    className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${portfolioOpenId === "coverage" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {portfolioOpenId === "coverage" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700 leading-relaxed">
                                    <li>Government bonds.</li>
                                    <li>Financial debentures.</li>
                                    <li>Corporate bonds.</li>
                                    <li>Repurchase agreements (Repo).</li>
                                </ul>
                            )}
                        </article>

                        {/* 2. Pricing & Market Data Analytics */}
                        <article className="py-8">
                            <button
                                type="button"
                                onClick={() =>
                                    setPortfolioOpenId(
                                        portfolioOpenId === "pricing" ? null : "pricing"
                                    )
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                    Pricing &amp; Market Data Analytics
                                </h3>
                                <i
                                    className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${portfolioOpenId === "pricing" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {portfolioOpenId === "pricing" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700 leading-relaxed">
                                    <li>
                                        Monitoring of live interest rates, spread movements, and market
                                        quotes.
                                    </li>
                                    <li>
                                        Support for building, calibrating, and interpolating custom yield
                                        curves.
                                    </li>
                                    <li>
                                        Comprehensive spread analytics for portfolio valuation and risk
                                        assessment.
                                    </li>
                                    <li>
                                        Consolidation of pricing data from exchanges, OTC markets, and
                                        external data providers.
                                    </li>
                                    <li>
                                        Bond valuation and price calculation using real-time and reference
                                        market data.
                                    </li>
                                </ul>
                            )}
                        </article>

                        {/* 3. Risk Analytics & Exposure Monitoring */}
                        <article className="py-8">
                            <button
                                type="button"
                                onClick={() =>
                                    setPortfolioOpenId(portfolioOpenId === "risk" ? null : "risk")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                    Risk Analytics &amp; Exposure Monitoring
                                </h3>
                                <i
                                    className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${portfolioOpenId === "risk" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {portfolioOpenId === "risk" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700 leading-relaxed">
                                    <li>Primary and secondary market liquidity analysis.</li>
                                    <li>
                                        Analytics on carry returns, curve steepness, and roll-down effects.
                                    </li>
                                    <li>
                                        Comprehensive interest-rate sensitivity measurements for portfolio
                                        and position risk.
                                    </li>
                                    <li>
                                        Value-at-Risk calculations and scenario-based sensitivity
                                        assessment.
                                    </li>
                                    <li>
                                        Real-time profit and loss monitoring with exposure breakdowns.
                                    </li>
                                    <li>
                                        Detailed exposure insights by trader, desk, and account.
                                    </li>
                                    <li>
                                        Stress tests using custom or predefined scenarios to assess extreme
                                        market impact.
                                    </li>
                                </ul>
                            )}
                        </article>

                        {/* 4. Simulation & Scenario Analysis */}
                        <article className="py-8">
                            <button
                                type="button"
                                onClick={() =>
                                    setPortfolioOpenId(portfolioOpenId === "sim" ? null : "sim")
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                    Simulation &amp; Scenario Analysis
                                </h3>
                                <i
                                    className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${portfolioOpenId === "sim" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {portfolioOpenId === "sim" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700 leading-relaxed">
                                    <li>
                                        Management of simulated trading books or virtual funds for strategy
                                        testing.
                                    </li>
                                    <li>
                                        Analysis of portfolio behaviour under various rate-shift and
                                        curve-change scenarios.
                                    </li>
                                    <li>
                                        Simulation of trading strategies with historical market data for
                                        performance validation.
                                    </li>
                                    <li>
                                        Evaluation of hedging strategies and their impact on position risk
                                        and P&amp;L stability.
                                    </li>
                                </ul>
                            )}
                        </article>

                        {/* 5. Compliance & Control */}
                        <article className="py-8">
                            <button
                                type="button"
                                onClick={() =>
                                    setPortfolioOpenId(
                                        portfolioOpenId === "compliance" ? null : "compliance"
                                    )
                                }
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                                    Compliance &amp; Control
                                </h3>
                                <i
                                    className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${portfolioOpenId === "compliance" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {portfolioOpenId === "compliance" && (
                                <ul className="mt-6 list-disc pl-6 space-y-2 text-lg text-slate-700 leading-relaxed">
                                    <li>
                                        Pre-trade risk checks including limit validation, fat-finger
                                        protection, and exposure checks prior to execution.
                                    </li>
                                    <li>
                                        Post-trade audit logs and trade traceability with comprehensive
                                        audit trails for compliance review.
                                    </li>
                                    <li>
                                        Rule-based approval workflows driven by configurable compliance and
                                        risk rules.
                                    </li>
                                </ul>
                            )}
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}