import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// ✨ Fade-in animation wrapper
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

export default function ForteAlgoPage() {
  const { t } = useTranslation('common');
  const [expanded, setExpanded] = useState<number | null>(null);

  const [currentSection, setCurrentSection] = useState<'overview' | 'key-features'>('overview');

  const scrollToSection = (sectionId: string, tab?: typeof currentSection) => {
    const el = document.getElementById(sectionId);
    if (tab) setCurrentSection(tab);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const leftFeatures = [
    {
      title: 'Multi-Asset Execution Strategy Support',
      description:
        'Supports a wide range of algorithmic strategies including VWAP, TWAP, Iceberg, POV, and Smart Order Routing. Enables fully customizable strategy frameworks to reflect client-specific logic and execution styles.',
      details: [],
    },
    {
      title: 'Real-Time Market Interaction',
      description:
        'Continuously monitors market depth, liquidity, and volatility to dynamically adjust order slicing and timing. Executes with precision across fragmented markets to minimize market impact and slippage.',
      details: [],
    },
    {
      title: 'Smart Order Routing (SOR)',
      description:
        'Intelligently routes orders to the best venue based on price, liquidity, latency, and fee structure. Supports simultaneous connectivity to multiple exchanges, brokers via FIX or proprietary APIs.',
      details: [],
    },
    {
      title: 'Risk & Compliance Management',

      description:
        'Real-time pre-trade risk checks: exposure limits, fat-finger control, margin validation. Comprehensive audit trails and compliance.',

      details: [],
    },
  ];

  const rightFeatures = [
    {
      title: 'Low Latency Architecture',
      description:
        'High-performance execution framework optimized for microsecond-level latency.',
      details: [
        'In-Memory Data Processing & Lock-Free Design: Achieves microsecond-level performance through in-memory computation and lock-free data structures.',
        'Multi-Threaded Execution Engine: Optimized for parallel processing across CPU cores, ensuring consistent throughput under heavy conditions.',
        'Minimal Latency Between Market Data and Order Flow: Streamlined data architecture minimizes propagation delay between market updates and order execution.',
      ],
    },
    {
      title: 'Live Monitoring Dashboard',
      description:
        'Provides an intuitive dashboard displaying order status, fill ratios, and real-time P&L. Empowers traders to monitor performance and make data-driven decisions instantly through dynamic visual analytics.',
      details: [],
    },
    {
      title: 'Configurable Strategy Parameters',
      description:
        'Adjust aggression, participation rate, and execution style in real-time. Monitor live performance and instantly adjust parameters for evolving market conditions.',
      details: [],
    },
    {
      title: 'Seamless System Integration',
      description:
        'Fully integrated with OMS, Risk Engine, Market Data Feeds, and FIX Gateway for unified operations.',
      details: [
        'Full Integration with OMS, Risk Engine, Market Data Feed, and FIX Gateway — enables unified trading control.',
        'Pre-Trade and Post-Trade Data Connectivity — ensures seamless synchronization across entire trade lifecycle.',
      ],
    },
  ];

  // local programmatic scrolling handled by scrollToSection

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-center">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-cormorant">
            ForteAlgo | Algorithmic Execution System
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Execute Smarter. Trade Faster. Perform Better.
          </p>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 border-t border-slate-600 pt-6">
            <button
              onClick={() => scrollToSection('overview', 'overview')}
              className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'overview' ? 'text-white border-white' : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'}`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('key-features', 'key-features')}
              className={`text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${currentSection === 'key-features' ? 'text-white border-white' : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'}`}
            >
              Key Features
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section – SAME FORMAT AS OMS (TEXT KEPT INTACT) */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <div className="max-w-4xl">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-6 tracking-widest uppercase">
                Algorithmic Execution System
              </h3>

              <p className="text-2xl md:text-3xl font-cormorant text-slate-900 leading-[1.9] tracking-normal">
                <span className="block">
                  ForteAlgo empowers traders with intelligent execution algorithms
                  designed for precision, adaptability, and speed.
                </span>

                <span className="block mt-8">
                  Seamlessly integrated with WinWay’s F1Win OMS, it delivers ultra-low
                  latency, strategy customization, and dynamic control across markets.
                </span>

                <span className="block mt-8">
                  Built for both institutional and proprietary trading, ForteAlgo
                  transforms execution into a competitive advantage.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
              Key Features
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-14">
            {[
              {
                title: 'Multi-Asset Execution Strategy Support',
                description:
                  'Supports a wide range of algorithmic strategies including VWAP, TWAP, Iceberg, POV, and Smart Order Routing. Enables fully customizable strategy frameworks to reflect client-specific logic and execution styles.',
              },
              {
                title: 'Real-Time Market Interaction',
                description:
                  'Continuously monitors market depth, liquidity, and volatility to dynamically adjust order slicing and timing. Executes with precision across fragmented markets to minimize market impact and slippage.',
              },
              {
                title: 'Smart Order Routing (SOR)',
                description:
                  'Intelligently routes orders to the best venue based on price, liquidity, latency, and fee structure. Supports simultaneous connectivity to multiple exchanges, brokers via FIX or proprietary APIs.',
              },
              {
                title: 'Risk & Compliance Management',
                description:
                  'Real-time pre-trade risk checks: exposure limits, fat-finger control, margin validation. Comprehensive audit trails and compliance.',
              },
              {
                title: 'Low Latency Architecture',
                description:
                  'High-performance execution framework optimized for microsecond-level latency.',
                expandable: true,
                details: [
                  'In-memory data processing and lock-free design for microsecond-level performance.',
                  'Multi-threaded execution engine optimized for parallel CPU processing.',
                  'Minimal latency between market data ingestion and order execution.',
                ],
              },
              {
                title: 'Live Monitoring Dashboard',
                description:
                  'Provides an intuitive dashboard displaying order status, fill ratios, and real-time P&L. Enables traders to make data-driven decisions instantly through dynamic visual analytics.',
              },
              {
                title: 'Configurable Strategy Parameters',
                description:
                  'Adjust aggression, participation rate, and execution style in real time. Monitor live performance and instantly adapt parameters to evolving market conditions.',
              },
              {
                title: 'Seamless System Integration',
                description:
                  'Fully integrated with OMS, Risk Engine, Market Data Feeds, and FIX Gateway for unified operations.',
                expandable: true,
                details: [
                  'Full integration with OMS, Risk Engine, Market Data Feed, and FIX Gateway.',
                  'Pre-trade and post-trade data connectivity ensuring lifecycle-wide synchronization.',
                ],
              },
            ].map((feature, index) => (
              <div key={index} className="relative pl-8">

                {/* Side Accent Line */}
                <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-[#1b2a4e]/60 rounded-full" />

                {/* Title + Arrow */}
                <button
                  onClick={() => feature.expandable && toggleExpand(index)}
                  className="w-full text-left focus:outline-none group"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-3 font-cormorant tracking-wide leading-snug">
                      {feature.title}
                    </h3>

                    {feature.expandable && (
                      <span className="flex-shrink-0 mt-1">
                        <i
                          className={`ri-add-circle-${expanded === index ? 'fill' : 'line'
                            } text-[#0b172a] text-3xl transition-transform duration-300 ${expanded === index ? 'rotate-45' : ''
                            }`}
                        />
                      </span>
                    )}
                  </div>
                </button>

                {/* Description */}
                <p className="text-[15px] md:text-base leading-[1.85] text-slate-800 max-w-xl">
                  {feature.description}
                </p>

                {/* Expanded Content */}
                {feature.expandable && expanded === index && feature.details && (
                  <div className="mt-8 pl-6 border-l border-slate-200 space-y-5">
                    {feature.details.map((item, i) => (
                      <p
                        key={i}
                        className="text-[14.5px] md:text-[15px] leading-[1.9] text-slate-700"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
