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
            F1WIN | Order Management System
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

      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <div className="max-w-4xl">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-6 tracking-widest uppercase">
                The Next Generation of Trading Platform
              </h3>

              <p className="text-2xl md:text-3xl font-cormorant text-slate-900 leading-[1.9] tracking-normal">
                <span className="block">
                  Experience the next generation of trading with WinEdge — a cutting-edge
                  Order Management System built for high-performance trading across
                  multi-asset markets.
                </span>

                <span className="block mt-8">
                  Whether you're dealing in equities, futures, options, bonds, foreign
                  exchange or gold, our platform ensures lightning-fast, reliable, and
                  efficient order handling to meet the demands of today’s competitive
                  trading environments.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-6 font-cormorant">
              Applications
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              Empowering diverse trading environments through precision and performance
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12">
            {[
              { title: 'High-Frequency', icon: 'ri-flashlight-line' },
              { title: 'Broker-Dealers Offering DMA', icon: 'ri-exchange-dollar-line' },
              { title: 'Prop Trading', icon: 'ri-line-chart-line' },
              { title: 'MM & LP', icon: 'ri-funds-line' },
              { title: 'Arbitrage Trading', icon: 'ri-exchange-box-line' },
              { title: 'Algorithm Trading', icon: 'ri-cpu-line' },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 120}>
                <div className="group">
                  {/* Increased box size via aspect + padding */}
                  <div className="w-full aspect-[4/5] bg-[#0a1224] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="text-center px-6">
                      <i className={`${item.icon} text-white text-4xl mb-6 block`}></i>
                      <h3 className="text-white text-base md:text-lg font-helvetica leading-snug tracking-wide">
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

      {/* Key Features Section – Image Removed, Clean Institutional Layout */}
      <section id="key-features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
              Key Features
            </h2>
          </div>

          {/* Features Grid – 2 Column, Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

            {[
              {
                title: 'Speed Advantage',
                description:
                  'Lightning-fast execution boosts fill rates and reduces slippage by processing order flow with microsecond latency from entry to execution.',
              },
              {
                title: 'Pre-Trade Risk & Compliance Checks',
                description:
                  'Performs real-time validation of trading limits, quote accuracy, and compliance rules before execution.',
              },
              {
                title: 'Event-Driven Architecture',
                description:
                  'Asynchronous, event-based design processes multiple market and client events in parallel to maximize throughput.',
              },
              {
                title: 'Horizontal Scalability',
                description:
                  'Distributed, microservices-based architecture scales seamlessly to handle growing order volumes without performance degradation.',
              },
              {
                title: 'Customization',
                description:
                  'Flexible execution logic supports strategy-specific rules and parameters tailored to asset classes, products, and trading styles.',
              },
              {
                title: 'Exchange & Broker Connectivity',
                description:
                  'Supports multiple exchange protocols including FIX and iLink3, enabling seamless integration with brokers and liquidity providers.',
              },
            ].map((feature, index) => (
              <div key={index} className="relative pl-6">
                {/* Accent Line */}
                <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />

                <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-3 font-cormorant tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[15px] md:text-base leading-relaxed text-slate-800 max-w-xl">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
