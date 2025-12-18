import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function SolutionsPage() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "OMS",
      description: "Comprehensive order management systems providing seamless order routing, execution management, and portfolio tracking for institutional operations.",
      link: "/solutions/oms"
    },
    {
      title: "Execution Algo",
      description: "Advanced execution algorithms with real-time market data integration and comprehensive risk management tools.",
      link: "/solutions/prop-trading-platform"
    },
    {
      title: "RMS",
      description: "Real-time P&L monitoring at account or position level. Precision monitoring. Instant action. Total protection.",
      link: "/solutions/market-data-processing"
    },
    {
      title: "FIX Engine",
      description: "Ultra-low latency trading systems built for high-frequency trading and institutional connectivity.",
      link: "/solutions/winfix"
    },
    {
      title: "Market Data",
      description: "Real-time market data delivery, validation, and distribution across trading systems and front-to-back workflows.",
      link: "/solutions/winfeedengine"
    },
    {
      title: "Margin Calculator",
      description: "High-throughput enterprise-grade margin and risk calculation engine for financial institutions.",
      link: "/solutions/prima"
    },
    {
      title: "Messaging Middleware",
      description: "Enterprise messaging middleware enabling secure, low-latency connectivity across trading systems and market data feeds.",
      link: "/solutions/trustwin"
    },
    {
      title: "Market Surveillance",
      description: "Advanced surveillance engine monitoring trading activities with rule-based and AI-driven anomaly detection.",
      link: "/solutions/chammae"
    },
    {
      title: "SMS",
      description: "Reliable high-throughput SMS gateway for mission-critical financial communication.",
      link: "/solutions/trustmessenger-enterprise"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-8 min-h-[500px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#0a1325]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <p
            className={`text-sm font-bold mb-4 tracking-wide uppercase font-inter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ color: "#FFFFFF" }}
          >
            WHAT WE DO
          </p>

          <h1
            className={`text-6xl md:text-7xl font-semibold mb-6 font-cormorant leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ color: "#FFFFFF" }}
          >
            Solutions
          </h1>

          <p
            className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ color: "#FFFFFF" }}
          >
            Comprehensive technology solutions designed for capital market professionals.
            Our systems provide the tools and infrastructure needed for successful trading and operations.
          </p>

          {/* NAV BAR */}
          <div
            className={`mt-10 border-t border-slate-600 pt-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex flex-wrap gap-6 justify-center text-sm font-medium text-slate-300">
              {[
                { label: "OMS", link: "/solutions/oms" },
                { label: "Execution Algo", link: "/solutions/prop-trading-platform" },
                { label: "RMS", link: "/solutions/market-data-processing" },
                { label: "FIX Engine", link: "/solutions/winfix" },
                { label: "Market Data", link: "/solutions/winfeedengine" },
                { label: "Margin Calculator", link: "/solutions/prima" },
                { label: "Messaging Middleware", link: "/solutions/trustwin" },
                { label: "Market Surveillance", link: "/solutions/chammae" },
                { label: "SMS", link: "/solutions/trustmessenger-enterprise" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(item.link)}
                  className="pb-1 border-b-2 border-transparent hover:text-white hover:border-slate-300 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION – MINIMAL CARDS LIKE TRADING SYSTEMS */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate(service.link)}
                className="group cursor-pointer border border-slate-200 p-10 bg-white hover:shadow-sm transition-all flex flex-col"
              >
                <h3 className="text-[30px] font-cormorant font-extrabold text-slate-900 mb-4 leading-snug tracking-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <span className="mt-auto pt-4 text-slate-800 underline underline-offset-4 decoration-1 group-hover:text-slate-600 transition">
                  Learn More →
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
