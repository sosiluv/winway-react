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
            ArmisWin | Real-Time RMS
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Real-time P&L monitoring at the account or individual position level. <br />
            Precision Monitoring. Instant Action. Total Protection.
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
              href="#Functions"
              className="text-white hover:text-slate-300 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white pb-1"
            >
              Functions
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* 1. Real-Time Risk Monitoring (Left Aligned) */}
          <FadeIn direction="left" triggerOnce>
            <div className="max-w-4xl">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                Real-Time Risk Monitoring
              </h3>
              <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                ArmisWin provides real-time control and protection of trading accounts by continuously monitoring total equity based on tick-by-tick market data.
                <br /><br />
                When user-defined thresholds for loss cut or profit taking are reached, the RMS automatically executes corresponding actions—either partially or fully, according to user settings.
              </p>
            </div>
          </FadeIn>

          {/* 2. Unified Protection & Control (Right Aligned) */}
          <FadeIn direction="right" triggerOnce>
            <div className="max-w-4xl ml-auto text-right">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                Unified Protection & Control
              </h3>
              <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                It safeguards both individual and institutional portfolios by integrating execution control, alert mechanisms,
                and flexible rule-based management into one unified platform.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Functions Section */}
      <section
        id="functions"
        className="py-28 bg-gradient-to-b from-[#f7f8f9] via-[#f4f5f6] to-[#eef0f2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4 font-cormorant tracking-tight">
              Functions
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Delivering intelligent, automated risk management and seamless execution control for institutional trading operations.
            </p>
          </div>

          {/* Function Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Real-Time Equity Monitoring',
                description:
                  'Continuously tracks total account equity, margin usage, and floating P&L with tick-level market updates.',
                icon: 'ri-bar-chart-box-line',
              },
              {
                title: 'Automated Loss Cut / Profit Taking',
                description:
                  'Executes orders automatically when predefined conditions are met, minimizing risk exposure and locking in profits.',
                icon: 'ri-timer-flash-line',
              },
              {
                title: 'Proportional Execution Control',
                description:
                  'Allows users to set custom execution ratios (e.g., 25%, 50%, 100%) for loss-cut or profit-taking actions.',
                icon: 'ri-equalizer-line',
              },
              {
                title: 'Dynamic Alerts & Notifications',
                description:
                  'Sends instant alarms via SMS, email, or push notification when risk thresholds are breached or automatic actions are triggered.',
                icon: 'ri-notification-2-line',
              },
              {
                title: 'Integrated Order Interface',
                description:
                  'Seamlessly connects with OMS or Algo-Execution modules to ensure smooth order flow and minimal latency during risk events.',
                icon: 'ri-exchange-dollar-line',
              },
            ].map((func, index) => (
              <div
                key={index}
                className="bg-white/95 border border-slate-200 text-left flex flex-col justify-start h-full p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6">
                  <i className={`${func.icon} text-4xl text-[#1a2b4b]`} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1b1f2a] mb-4 font-cormorant leading-snug">
                  {func.title}
                </h3>
                <p className="text-base md:text-[17px] text-slate-700 leading-relaxed font-medium">
                  {func.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Key Features Section – Image Removed, Clean Institutional Layout */}
      <section id="key-features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
              Key Features
            </h2>
          </div>

          {/* Features Grid – 2 Column, Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

            {/* 1. Tick-by-Tick Market Price Tracking */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                Tick-by-Tick Market Price Tracking
              </h3>
              <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                <li>Continuous real-time monitoring of price movements</li>
                <li>Ensures microsecond-level responsiveness</li>
                <li>Supports institutional-grade precision</li>
                <li>Ideal for high-frequency and automated trading</li>
              </ul>
            </div>

            {/* 2. Multi-Account Monitoring */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                Multi-Account Monitoring
              </h3>
              <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                <li>Simultaneous oversight of multiple portfolios</li>
                <li>Unified interface for dealers and asset managers</li>
                <li>Cross-account exposure visualization</li>
                <li>Hierarchical control for risk managers</li>
              </ul>
            </div>

            {/* 3. Configurable Alert Channels */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                Configurable Alert Channels
              </h3>
              <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                <li>Instant alerts via SMS, email, and dashboard pop-ups</li>
                <li>Fully customizable notification logic</li>
                <li>Granular control per account or asset type</li>
                <li>Ensures rapid response to threshold breaches</li>
              </ul>
            </div>

            {/* 4. Automatic Position Liquidation / Reduction */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                Automatic Position Liquidation / Reduction
              </h3>
              <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                <li>Automatic execution when thresholds are met</li>
                <li>Supports partial or full liquidation strategies</li>
                <li>Integrated with risk limits and margin parameters</li>
                <li>Minimizes latency during high-volatility events</li>
              </ul>
            </div>

            {/* 5. Comprehensive Audit Logs */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                Comprehensive Audit Logs
              </h3>
              <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                <li>Full traceability of all trade and system actions</li>
                <li>Compliant with institutional audit standards</li>
                <li>Supports export for regulatory review</li>
                <li>Preserves historical risk and execution data</li>
              </ul>
            </div>

            {/* 6. Scalable Architecture */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 h-full w-[2px] bg-[#1b2a4e]/60 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] mb-4 font-cormorant tracking-wide">
                Scalable Architecture
              </h3>
              <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800">
                <li>Real-time processing of multiple portfolios</li>
                <li>Adaptive scaling for enterprise workloads</li>
                <li>Cloud, on-premise, and hybrid configurations</li>
                <li>Consistent performance under heavy data load</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
