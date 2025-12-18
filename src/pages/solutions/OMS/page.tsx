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
            F1WIN<br />
            ORDER MANAGEMENT SYSTEM
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Shared Memory-Based Order Management System for Low-Latency Trading
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
              href="#applications"
              className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
            >
              Applications
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

      {/* Overview Section (animated) */}
      <section id="overview" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-relaxed font-cormorant">
              F1Win delivers<br />
              ultra-fast, event-driven order management across the entire trading lifecycle. <br />
              <br />
              Built for high-frequency and high-volume environments, it minimizes execution latency and ensures seamless, reliable performance
              under the most demanding market conditions.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-24 bg-[#e6e8eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 font-cormorant">
              Applications
            </h2>
            <p className="text-lg text-slate-600">
              Empowering diverse trading environments through precision and performance
            </p>
          </div>

          {/* Animated Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              { title: 'High-Frequency Trading', icon: 'ri-flashlight-line' },
              { title: 'Broker-Dealers Offering DMA', icon: 'ri-exchange-dollar-line' },
              { title: 'Prop Trading', icon: 'ri-line-chart-line' },
              { title: 'Market Making & Liquidity Provision Trading', icon: 'ri-funds-line' },
              { title: 'Arbitrage Trading', icon: 'ri-exchange-box-line' },
              { title: 'Algorithm Trading', icon: 'ri-cpu-line' },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 120}>
                <div className="relative group overflow-hidden shadow-lg transition-all duration-500 rounded-none">
                  <div className="w-full h-64 bg-[#0a1224] flex flex-col justify-end relative">
                    <div className="absolute inset-0 bg-[#0a1224] opacity-90"></div>
                    <div className="relative z-10 text-center px-4 pb-6">
                      <i className={`${item.icon} text-white text-3xl mb-4`}></i>
                      <h3 className="text-white text-lg font-semibold font-cormorant leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
              Professional order management capabilities designed for ultra-low-latency trading operations.
            </p>
          </div>

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {/* LEFT COLUMN */}
            <div className="space-y-12 flex flex-col justify-between">
              {[
                {
                  title: 'Tick-by-Tick Market Price Tracking',
                  description:
                    'Ensures precise and timely risk control by continuously monitoring market price changes in real time.',
                },
                {
                  title: 'Multi-Account Monitoring',
                  description:
                    'Supports brokers, dealers, and asset managers by tracking multiple accounts simultaneously from one unified dashboard.',
                },
                {
                  title: 'Configurable Alert Channels',
                  description:
                    'Instant alerts via SMS, email, or dashboard pop-ups keep users informed of critical market events and thresholds.',
                },
              ].map((feature, index) => (
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

            {/* CENTER IMAGE */}
            <div className="flex items-stretch justify-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20dashboard%20with%20comprehensive%20order%20tracking%20interface%2C%20real-time%20execution%20monitoring%20displays%2C%20institutional%20trading%20workstation%20with%20sophisticated%20silver%20and%20navy%20color%20scheme%2C%20modern%20OMS%20platform%20showing%20order%20flow%20and%20portfolio%20positions&width=400&height=500&seq=oms-interface-compact&orientation=portrait"
                alt="Institutional Risk Management Dashboard"
                className="w-full h-full object-cover object-center rounded-xl shadow-sm border border-slate-200"
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-12 flex flex-col justify-between">
              {[
                {
                  title: 'Automatic Position Liquidation / Reduction',
                  description:
                    'Executes automatic liquidation or partial reduction based on user-defined ratios to safeguard portfolio value.',
                },
                {
                  title: 'Comprehensive Audit Logs',
                  description:
                    'Provides full traceability of all trade and system actions, meeting institutional compliance standards.',
                },
                {
                  title: 'Scalable Architecture',
                  description:
                    'Processes multiple portfolios in real time with minimal latency, ensuring consistent performance as demand grows.',
                },
              ].map((feature, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#1b2a4e]/50 rounded-full" />
                  <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-3 font-cormorant tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] md:text-base leading-relaxed text-slate-800">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Closing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Performance You Can Trust
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            F1Win offers the foundation for a next-generation trading environment — delivering speed, precision, and stability demanded by today’s competitive financial markets.
          </p>
        </div>
      </section>
    </div>
  );
}
