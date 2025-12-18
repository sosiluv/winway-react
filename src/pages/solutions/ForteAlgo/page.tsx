import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<number | null>(null);

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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-center">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-cormorant">
            FORTE ALGO<br />
            ALGORITHMIC EXECUTION SYSTEM
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Execute Smarter. Trade Faster. Perform Better.
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
              href="#key-features"
              className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
            >
              Key Features
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section (Animated) */}
      <section id="overview" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-relaxed font-cormorant">
              ForteAlgo empowers traders with intelligent execution algorithms designed for precision, adaptability, and speed. <br />
              <br />
              Seamlessly integrated with WinWay’s F1Win OMS, it delivers ultra-low latency, strategy customization, and dynamic control across markets. <br />
              <br />
              Built for both institutional and proprietary trading, ForteAlgo transforms execution into a competitive advantage.
            </h2>
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
              Comprehensive capabilities for adaptive, high-speed, and compliant execution.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {/* Left Column */}
            <div className="space-y-12 flex flex-col justify-between">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="relative pr-6">
                  <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                  <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-3 font-cormorant tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] md:text-base leading-relaxed text-slate-800">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Middle Image */}
            <div className="flex items-stretch justify-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20dashboard%20with%20comprehensive%20order%20tracking%20interface%2C%20real-time%20execution%20monitoring%20displays%2C%20institutional%20trading%20workstation%20with%20sophisticated%20silver%20and%20navy%20color%20scheme%2C%20modern%20OMS%20platform%20showing%20order%20flow%20and%20portfolio%20positions&width=400&height=500&seq=oms-interface-compact&orientation=portrait"
                alt="ForteAlgo Execution Dashboard"
                className="w-full h-full object-cover object-top rounded-xl shadow-sm border border-slate-200"
              />
            </div>

            {/* Right Column (Expandable) */}
            <div className="space-y-12 flex flex-col justify-between">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full text-left focus:outline-none"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-3 flex items-center justify-between font-cormorant tracking-wide">
                      {feature.title}
                      {feature.details.length > 0 && (
                        <i
                          className={`ri-arrow-${expanded === index ? 'up' : 'down'}-s-line text-slate-700 ml-2 text-2xl`}
                        ></i>
                      )}
                    </h3>
                  </button>
                  {feature.description && (
                    <p className="text-[15px] md:text-base leading-relaxed text-slate-800 mb-2">
                      {feature.description}
                    </p>
                  )}
                  {expanded === index && feature.details.length > 0 && (
                    <ul className="list-disc ml-5 text-[15px] md:text-base text-slate-700 space-y-1">
                      {feature.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
