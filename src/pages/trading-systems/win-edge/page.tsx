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

// 🔹 Trading Functions data (accordion content)
const TRADING_FUNCTIONS = [
  {
    id: 'basket',
    title: 'Basket Orders',
    description:
      'Execute multiple trades simultaneously with our intuitive basket order system—ideal for managing portfolios of stocks or mixed asset classes.',
    sections: [
      {
        heading: 'Custom Basket Creation & Management',
        items: [
          'Configure baskets via Excel upload or pre-defined templates',
          'Set up by various criteria such as number of instruments, weightings, or target notional value',
          'Save and reload frequently used basket configurations',
        ],
      },
      {
        heading: 'One-Click Basket Execution',
        items: [
          'Execute all orders within a basket simultaneously with a single click',
          'Centrally manage execution status of each individual order',
          'View summarized metrics including overall fill ratio, remaining quantity, and average execution price',
        ],
      },
      {
        heading: 'Real-Time Performance Monitoring',
        items: [
          'Monitor each basket’s real-time execution status, market prices, and P&L in one unified view',
          'Modify or cancel orders while execution is in progress',
        ],
      },
      {
        heading: 'Error Handling',
        items: [
          'Automatically re-transmit failed orders or notify users immediately',
          'Restore partially filled or failed orders for re-execution',
        ],
      },
    ],
  },
  {
    id: 'arb',
    title: 'Pair and Basket Arbitrage Trading',
    description:
      'WinEdge provides advanced arbitrage tools designed for high-precision trading across multiple asset classes.',
    body: [
      'Our platform supports spot/futures arbitrage between equities, currencies, bonds, and gold, as well as basket arbitrage between stock index futures or ETFs and their underlying portfolios.',
      'With real-time monitoring, automated execution, and intelligent risk control, WinEdge enables traders to capture and execute arbitrage opportunities with speed and precision for consistent success.',
    ],
  },
  {
    id: 'algos',
    title: 'Execution Algorithm Orders',
    description:
      'Optimize your trade execution with our suite of algorithmic order types designed to minimize market impact and slippage.',
    list: [
      'Time-weighted average price (TWAP)',
      'Volume-weighted average price (VWAP)',
      'Percentage of Volume (POV)',
      'Customizable algorithms tailored to your trading strategy',
    ],
  },
  {
    id: 'mm',
    title: 'Market Making and Liquidity Provision',
    description:
      'Engineered for institutional market makers and liquidity providers.',
    body: [
      "Built to meet the demands of today's volatile financial markets, it delivers precision, speed, and control for quoting and managing liquidity in foreign exchange, Korean government bonds, and KRX gold.",
    ],
  },
];

const FEATURES_DATA = [
  {
    id: "risk",
    title: "Robust Risk Management",
    description:
      "Maintain control over your trading activities with our comprehensive risk management tools:",
    items: [
      "Real-time monitoring of positions and exposures",
      "Pre-trade risk checks and margin calculations",
      "Customizable alerts and limits to enforce trading discipline",
      "Compliance checks to safeguard your trading activities.",
    ],
  },
  {
    id: "execution",
    title: "Lightning-Fast Execution",
    description:
      "Our system is optimized for ultra-low latency, ensuring that your orders are executed promptly to capitalize on market opportunities.",
  },
  {
    id: "lifecycle",
    title: "Full Order Lifecycle Management",
    items: [
      "Supports order creation, validation, enrichment, routing, modification, cancellation, and execution handling",
    ],
  },
  {
    id: "workflow",
    title: "Customizable Workflows",
    description:
      "Tailor the OMS to fit your specific trading strategies and operational requirements, enhancing efficiency and control.",
  },
  {
    id: "infra",
    title: "System Architecture & Infrastructure",
    subgroups: [
      {
        heading: "Scalability",
        points: [
          "Designed to handle high volumes of orders without compromising performance.",
        ],
      },
      {
        heading: "Reliability",
        points: [
          "Built with robust infrastructure to ensure system stability and uptime.",
        ],
      },
      {
        heading: "Integration-Friendly",
        points: [
          "Seamlessly connect with existing systems, data feeds, and APIs for a cohesive trading ecosystem.",
        ],
      },
      {
        heading: "Ultra Low Latency",
        points: [
          "Microsecond-level tick-to-trade latency",
          "In-memory data structures with lock-free algorithms",
        ],
      },
      {
        heading: "High Throughput",
        points: [
          "Optimized C code",
          "Capable of processing millions of messages per second",
          "Horizontally scalable architecture using microservices and distributed message queues",
        ],
      },
      {
        heading: "Configurability & Extensibility",
        points: [
          "Strategy-specific rule engines",
          "Plug-in framework for connectivity to exchanges, brokers, and internal systems",
        ],
      },
    ],
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
              WinEdge | Prop Trading Platform
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Proprietary Trading, Engineered for Edge. Trade Faster, See Smarter, Execute
              Better. <br />
              Empowering traders with advanced tools and low-latency execution across
              global markets.
            </p>

            {/* Top Nav */}
            <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
              <button
                onClick={() => scrollToSection('overview', 'overview')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'overview'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('trading-functions', 'functions')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'functions'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Trading Functions
              </button>
              <button
                onClick={() => scrollToSection('features', 'features')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'features'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('architecture', 'architecture')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'architecture'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                System Architecture
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
                The Next Generation of Trading Platform
              </h3>
              <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                Experience the next generation of trading with WinEdge — a cutting-edge
                Order Management System built for high-performance trading across
                multi-asset markets.
                <br />
                <br />
                Whether you're dealing in equities, futures, options, bonds, foreign
                exchange or gold, our platform ensures lightning-fast, reliable, and
                efficient order handling to meet the demands of today’s competitive
                trading environments.
              </p>
            </div>
          </FadeIn>

          {/* 2. A Premier Trading Environment Built for Professionals and Institutions (Right Aligned) */}
          <FadeIn delay={150}>
            <div className="max-w-4xl ml-auto text-right">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                A Premier Trading Environment Built for Professionals and Institutions
              </h3>
              <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                At WinEdge, we provide a cutting-edge trading environment tailored for
                professional traders and institutions. Our platform offers a comprehensive
                suite of features designed to optimize trading strategies across various
                asset classes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trading Functions – WhiteHouse.gov Style */}
      <section
        id="trading-functions"
        className="py-24 bg-gradient-to-r from-slate-50 to-slate-100 border-t border-slate-200"
        style={{ overflowAnchor: "none" }}
      >

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-6">
              Trading Functions
            </h2>
          </header>

          {/* Accordion */}
          <div
            className="divide-y divide-slate-300"
            style={{ overflowAnchor: "none" }}
          >
            {TRADING_FUNCTIONS.map((block) => (
              <article key={block.id} className="py-8">

                {/* Collapsed Header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenId((prev) => (prev === block.id ? null : block.id))
                  }
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                    {block.title}
                  </h3>

                  {/* Arrow */}
                  <span className="text-slate-700 text-3xl ml-6">
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-200 ${openId === block.id ? "rotate-180" : ""
                        }`}
                    />
                  </span>
                </button>

                {/* Expanded panel */}
                {openId === block.id && (
                  <div className="mt-6 space-y-8 text-base md:text-lg leading-relaxed text-slate-700">

                    {/* Description now appears here */}
                    {block.description && (
                      <p className="text-slate-700">{block.description}</p>
                    )}

                    {/* Basket Orders: subsection lists */}
                    {block.sections && (
                      <div className="space-y-8">
                        {block.sections.map((section) => (
                          <div key={section.heading}>
                            <h4 className="text-xl font-semibold text-slate-900 mb-2 font-cormorant">
                              {section.heading}
                            </h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {section.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Arbitrage & Market Making: paragraphs */}
                    {block.body && (
                      <div className="space-y-4">
                        {block.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    )}

                    {/* Algo orders simple list */}
                    {block.list && (
                      <ul className="list-disc pl-6 space-y-2">
                        {block.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
   FEATURES SECTION (MATCH TRADING FUNCS)
   ================================ */}
      <section
        id="features"
        className="py-24 bg-white border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-10">
            <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
              Features
            </h2>
  
          </header>

          {/* Divider-based list */}
          <div className="divide-y divide-slate-300">

            {/* 1. Robust Risk Management — Expandable */}
            <article className="py-8">
              <button
                type="button"
                onClick={() => setOpenId(openId === 'risk' ? null : 'risk')}
                className="w-full flex justify-between items-center text-left group"
              >
                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                  Robust Risk Management
                </h3>
                <i
                  className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${openId === 'risk' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Always-visible description */}
              <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed">
                Maintain control over your trading activities with our comprehensive risk management tools:
              </p>

              {/* Expandable list */}
              {openId === 'risk' && (
                <ul className="mt-4 list-disc pl-6 space-y-2 text-base md:text-lg text-slate-700 leading-relaxed">
                  <li>Real-time monitoring of positions and exposures.</li>
                  <li>Pre-trade risk checks and margin calculations.</li>
                  <li>Customizable alerts and limits to enforce trading discipline.</li>
                  <li>Compliance checks to safeguard your trading activities.</li>
                </ul>
              )}
            </article>

            {/* 2. Lightning-Fast Execution — Static */}
            <article className="py-8">
              <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                Lightning-Fast Execution
              </h3>
              <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed">
                The system is optimized for ultra-low latency so orders are executed promptly to
                capitalize on market opportunities, even in high-frequency and volatile environments.
              </p>
            </article>

            {/* 3. Full Order Lifecycle Management — Static */}
            <article className="py-8">
              <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                Full Order Lifecycle Management
              </h3>
              <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed">
                Supports order creation, validation, enrichment, routing, modification, cancellation,
                and execution handling, all within a unified workflow.
              </p>
            </article>

            {/* 4. Customizable Workflows — Static */}
            <article className="py-8">
              <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                Customizable Workflows
              </h3>
              <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed">
                Tailor the OMS to fit specific trading strategies and operational
                requirements, enhancing efficiency and control.
              </p>
            </article>

            {/* 5. System Architecture & Infrastructure — Expandable */}
            <article className="py-8">
              <button
                type="button"
                onClick={() => setOpenId(openId === 'sys' ? null : 'sys')}
                className="w-full flex justify-between items-center text-left group"
              >
                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                  System Architecture & Infrastructure
                </h3>
                <i
                  className={`ri-arrow-down-s-line text-3xl text-slate-700 transition-transform ${openId === 'sys' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed">
                Designed for high-performance enterprise trading environments.
              </p>

              {openId === 'sys' && (
                <div className="mt-6 space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">

                  <div>
                    <h4 className="font-semibold text-slate-900">Scalability</h4>
                    <p className="mt-1">
                      Designed to handle high volumes of orders without compromising performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Reliability</h4>
                    <p className="mt-1">
                      Built with robust infrastructure to ensure system stability and uptime for
                      mission-critical trading operations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Integration-Friendly</h4>
                    <p className="mt-1">
                      Seamlessly connects with existing systems, data feeds, and APIs for a cohesive
                      trading ecosystem.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Ultra Low Latency</h4>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Microsecond-level tick-to-trade latency.</li>
                      <li>In-memory data structures with lock-free algorithms.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">High Throughput</h4>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Optimized C code.</li>
                      <li>Capable of processing millions of messages per second.</li>
                      <li>
                        Horizontally scalable architecture using microservices and distributed
                        message queues.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Configurability & Extensibility</h4>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Strategy-specific rule engines.</li>
                      <li>
                        Plug-in framework for connectivity to exchanges, brokers, and internal systems.
                      </li>
                    </ul>
                  </div>

                </div>
              )}
            </article>

          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Elevate Your Prop Trading?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            WinEdge equips professional traders and institutions with the tools needed to
            capture opportunities, manage risk and execute with confidence in today&apos;s
            dynamic markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
              Schedule Consultation
            </button>
            <button className="border border-slate-400 hover:border-slate-600 text-slate-800 hover:text-slate-900 px-8 py-4 font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
