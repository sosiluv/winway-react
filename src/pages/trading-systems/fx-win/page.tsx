import { useState, useRef, useEffect } from 'react';

// ✨ Fade-in animation wrapper
function FadeIn({ children, delay = 0 }) {
    const ref = useRef<HTMLDivElement | null>(null);
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

const EFX_KEY_FEATURES = [
    {
        icon: 'ri-flashlight-line',
        title: 'Low-latency execution & streaming quotes',
        description: 'Delivers real-time streaming quotes and rapid order execution to clients and APIs.',
    },
    {
        icon: 'ri-bank-line',
        title: 'Bank-grade connectivity',
        description:
            'Connects directly to interbank brokers, liquidity providers, and institutional data sources.',
    },
    {
        icon: 'ri-exchange-dollar-line',
        title: 'Full product coverage',
        description: 'Supports Spot, Forward, NDF, Swap and MAR (USD/KRW) across your FX workflow.',
    },
    {
        icon: 'ri-settings-line',
        title: 'Configurable markups & limits',
        description: 'Control pricing and limits by client, currency, tenor, and channel.',
    },
    {
        icon: 'ri-equalizer-line',
        title: 'Fully automated FX workflow for dealers & sales',
        description:
            'Covers algorithmic pricing, real-time market making, and automated hedging in a single flow.',
    },
    {
        icon: 'ri-links-line',
        title: 'End-to-end lifecycle & integrations',
        description:
            'Manages trade capture → notification → settlement → confirmation → reporting and integrates with core banking, capital-markets, risk, and document systems.',
    },
];



export default function WinEdgePropTradingPage() {
    const [currentSection, setCurrentSection] = useState<
        'overview' | 'functions' | 'features' | 'architecture'
    >('overview');

    // 🔹 Which Trading Function accordion item is open
    const [openId, setOpenId] = useState<string | null>(null);

    const scrollToSection = (sectionId: string, tab?: typeof currentSection) => {
        const el = document.getElementById(sectionId);
        if (tab) setCurrentSection(tab);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero */}
            <section className="relative py-20 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-cormorant ">
                            FXWin | FX Trading Platform
                        </h1>

                        {/* Top Nav */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
                            <button
                                onClick={() => scrollToSection('overview')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'overview'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Overview
                            </button>

                            <button
                                onClick={() => scrollToSection('key-features')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'key-features'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Key Features
                            </button>

                            <button
                                onClick={() => scrollToSection('features')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'features'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Client Platform
                            </button>

                            <button
                                onClick={() => scrollToSection('dealer-sales')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'dealer-sales'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Dealer &amp; Sales
                            </button>

                            <button
                                onClick={() => scrollToSection('enterprise-architecture')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'enterprise-architecture'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                Architecture &amp; Integrations
                            </button>

                            <button
                                onClick={() => scrollToSection('fx-dma-hub')}
                                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'fx-dma-hub'
                                    ? 'text-white border-white'
                                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                                    }`}
                            >
                                FX DMA HUB
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Overview Section (Animated) */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {/* 1. The Next Generation of Trading Platform (Left Aligned) */}
                    <FadeIn delay={0}>
                        <div className="max-w-4xl">
                            <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                                A Fully Integrated, Next-Generation e-FX Trading Platform
                            </h3>
                            <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                                FXWin is a next-generation integrated e-FX platform for dealers, sales, and clients, enabling differentiated pricing by customer, market making, automated hedging, and intelligent end-to-end management across the entire FX trading lifecycle.
                                <br></br><br></br>From web and mobile clients to dealer desktops and FIX APIs, FXWin unifies your FX business on a single, scalable platform.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ================================
    Key Features – Card Layout
================================= */}
            <section id="key-features" className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Low-latency execution, bank-grade connectivity, and full FX lifecycle automation
                            for dealers, sales, and clients.
                        </p>
                    </div>

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EFX_KEY_FEATURES.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white border border-slate-200 shadow-sm px-7 py-8 flex flex-col"
                            >
                                {/* Icon — no circle */}
                                <div className="mb-5">
                                    <i className={`${feature.icon} text-3xl text-slate-700`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg md:text-2xl font-cormorant font-semibold text-slate-900 mb-5">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-[17px] text-slate-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================================
   CLIENT PLATFORM – FEATURES LIST
=================================== */}
            <section
                id="features"
                className="py-24 bg-white"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <header className="mb-16">
                        <h2 className="text-5xl text-center font-cormorant font-bold text-slate-900 tracking-wide">
                            Client Platform
                        </h2>
                    </header>

                    {/* Divider-based list */}
                    <div className="divide-y divide-slate-200 text-center font-cormorant">

                        {/* Feature Item */}
                        {[
                            "Single Sign-On (SSO) via internet banking for seamless access.",
                            "Instruments: Spot (TOD, TOM, SPOT), Forward, NDF, FX Swap and MAR for USD/KRW.",
                            "Currency Pairs: USD/KRW, cross-currency vs KRW, USD vs cross-currency.",
                            "Order types: Market, Limit; TIF: Day, FOK, IOC, GTD.",
                            "Quote styles: RFS (Request for Streaming), RFQ (Request for Quote).",
                            "Streaming rates with per-client markup/margin by currency and tenor.",
                            "Best-of-book rate construction from multiple sources or a specified LP feed.",
                            "Trade & settlement: real-time fills, batch settlement, electronic confirmations.",
                            "Notifications: KakaoTalk, SMS, Email, FAX.",
                            "Content & insights: daily/weekly/monthly FX outlook, economic calendar, video news.",
                            "Portfolio actions: forward early-settle/close, rollover, derivatives valuation views."
                        ].map((text, idx) => (
                            <article key={idx} className="py-5">
                                <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                    {/* Split bold keyword */}
                                    <span className="font-extrabold text-slate-900">
                                        {text.split(":")[0]}
                                    </span>
                                    {text.includes(":") && (
                                        <span className="font-light">
                                            : {text.split(":").slice(1).join(":").trim()}
                                        </span>
                                    )}
                                    {!text.includes(":") && <span> {""}</span>}
                                </p>
                            </article>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================================
   DEALER & SALES – FEATURES LIST
=================================== */}
            <section
                id="dealer-sales"
                className="py-24 bg-gray-100"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <header className="mb-16">
                        <h2 className="text-5xl text-center font-cormorant font-bold text-slate-900 tracking-wide">
                            Dealer &amp; Sales
                        </h2>
                    </header>

                    {/* Divider-based list */}
                    <div className="divide-y divide-slate-200 text-center font-cormorant">

                        {/* 1 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Real-time pricing engine (24×365)</span>{" "}
                                with value-date logic and odd-date swap-point interpolation.
                            </p>
                        </article>

                        {/* 2 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Rate intake &amp; control</span>{" "}
                                to manage broker/LP sources, tradable products, and eligible LPs.
                            </p>
                        </article>

                        {/* 3 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Best-rate aggregation &amp; SOR</span>{" "}
                                (Smart Order Routing) with automated dealer/client quote regeneration.
                            </p>
                        </article>

                        {/* 4 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Interbank trading</span>{" "}
                                including real-time position and P&amp;L monitoring.
                            </p>
                        </article>

                        {/* 5 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">USD/KRW broker panels</span>{" "}
                                with best-rate and available-rate display and routing.
                            </p>
                        </article>

                        {/* 6 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Markup management</span>{" "}
                                by currency, product, tenor, amount, liquidity, and market session.
                            </p>
                        </article>

                        {/* 7 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Auto-hedge controls</span>{" "}
                                per currency (on/off), including internal dealer-to-dealer trades.
                            </p>
                        </article>

                        {/* 8 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Sales administration</span>{" "}
                                for client groups, eligibility, trading limits, margins, and risk buffers by
                                group/currency/amount/tenor.
                            </p>
                        </article>

                        {/* 9 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Analytics &amp; reporting</span>{" "}
                                including client trading analysis by currency, product, period, group,
                                and API clients.
                            </p>
                        </article>

                        {/* 10 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold text-slate-900">Back-office integration</span>{" "}
                                with treasury systems including Kondor, Calypso, and Summit.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            <section className="py-28 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-cormorant">

                    {/* Grid with vertical divider */}
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">

                        {/* Vertical divider */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>

                        {/* =======================
          Column 1 — FIX & Aggregate
      ========================== */}
                        <div className="pr-0 md:pr-12">

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-wide leading-tight text-left">
                                FIX <br /> &amp; Aggregate Connectivity
                            </h2>

                            {/* List */}
                            <div className="divide-y divide-slate-200">

                                <article className="py-6">
                                    <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light text-left">
                                        <span className="font-extrabold">Client FIX API</span>{" "}
                                        for differentiated pricing and{" "}
                                        <span className="font-extrabold">low-latency</span> order &amp;
                                        acknowledgement flows for arbitrage trading.
                                    </p>
                                </article>

                                <article className="py-6">
                                    <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light text-left">
                                        <span className="font-extrabold">External aggregator support:</span>{" "}
                                        publish client-specific tradable streams and accept orders.
                                    </p>
                                </article>

                            </div>
                        </div>

                        {/* =======================
          Column 2 — Administration & Controls
      ========================== */}
                        <div className="pl-0 md:pl-12">

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-wide leading-tight text-left">
                                Administration <br /> &amp; Controls
                            </h2>

                            {/* List */}
                            <div className="divide-y divide-slate-200">

                                <article className="py-6">
                                    <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light text-left">
                                        <span className="font-extrabold">Tiered limits</span>{" "}
                                        by instrument, client, and time window.
                                    </p>
                                </article>

                                <article className="py-6">
                                    <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light text-left">
                                        <span className="font-extrabold">Trading instrument setup:</span>{" "}
                                        Immediate Settlement, TOD/TOM/SPOT, Forward, FX Swap, MAR.
                                    </p>
                                </article>

                                <article className="py-6">
                                    <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light text-left">
                                        <span className="font-extrabold">User &amp; role management:</span>{" "}
                                        group-based screen permissions.
                                    </p>
                                </article>

                                <article className="py-6">
                                    <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light text-left">
                                        <span className="font-extrabold">Delegated client administration:</span>{" "}
                                        manage client limits, eligible products/times, and margins.
                                    </p>
                                </article>

                                <article className="py-6">
                                    <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light text-left">
                                        <span className="font-extrabold">Secure access</span>{" "}
                                        with full auditability across modules.
                                    </p>
                                </article>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================================
   ENTERPRISE ARCHITECTURE & INTEGRATIONS
=================================== */}
            <section
                id="enterprise-architecture"
                className="py-28 bg-gray-100"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <header className="mb-16">
                        <h2 className="text-4xl md:text-5xl text-center font-cormorant font-bold text-slate-900 tracking-wide">
                            Enterprise Architecture <br className="hidden md:block" /> &amp; Integrations
                        </h2>
                    </header>

                    {/* Divider-based list */}
                    <div className="divide-y divide-slate-200 text-center font-cormorant">

                        {/* 1 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Omnichannel client support</span>{" "}
                                across HTS, web, mobile, API clients, and external aggregators.
                            </p>
                        </article>

                        {/* 2 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Enterprise adapters &amp; EAI links</span>{" "}
                                to capital-markets systems, core banking, big-data platforms,
                                repositories, and authentication systems.
                            </p>
                        </article>

                        {/* 3 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">External service integration</span>{" "}
                                including market-data vendors, legacy rate sources, e-FAX and SMS gateways.
                            </p>
                        </article>

                        {/* 4 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Market connectivity</span>{" "}
                                to Seoul Money Brokerage, Korea Money Brokerage, EBS Direct, FXGO,
                                and Winway FX DMA HUB.
                            </p>
                        </article>

                        {/* 5 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Resilient architecture</span>{" "}
                                with live / standby components and backup rate sources for
                                uninterrupted service.
                            </p>
                        </article>

                    </div>
                </div>
            </section>
            {/* ================================
   FX DMA HUB SERVICE
=================================== */}
            <section
                id="fx-dma-hub"
                className="py-28 bg-white"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <header className="mb-14">
                        <h2 className="text-4xl md:text-5xl text-center font-cormorant font-bold text-slate-900 tracking-wide">
                            FX DMA HUB Service
                        </h2>
                    </header>

                    {/* Divider list */}
                    <div className="divide-y divide-slate-200 text-center font-cormorant">

                        {/* 1 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Central FX liquidity gateway</span>{" "}
                                connecting to multiple global FX liquidity providers.
                            </p>
                        </article>

                        {/* 2 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                Supports{" "}
                                <span className="font-extrabold">Spot, Swap, and USD/KRW NDF trading</span>{" "}
                                via a single unified hub.
                            </p>
                        </article>

                        {/* 3 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Located in Equinix Seoul</span>{" "}
                                eliminating separate leased-line requirements and dedicated infrastructure.
                            </p>
                        </article>

                        {/* 4 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Aggregated pricing &amp; BBO processing</span>{" "}
                                with smart order routing across multiple LPs.
                            </p>
                        </article>

                        {/* 5 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                Enables{" "}
                                <span className="font-extrabold">FX market-making, auto-hedging,</span>{" "}
                                and multi-LP price comparison.
                            </p>
                        </article>

                        {/* 6 */}
                        <article className="py-5">
                            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                                <span className="font-extrabold">Cost-effective alternative</span>{" "}
                                to individual LP platforms, improving client competitiveness.
                            </p>
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );
}
