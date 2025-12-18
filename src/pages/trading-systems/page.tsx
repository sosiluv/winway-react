import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function TradingSystemsPage() {
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
      title: 'Prop Trading Platform',
      description:
        'Proprietary trading platform offering advanced tools and low-latency execution across equities, futures, and options.',
      link: '/trading-systems/win-edge',
    },
    {
      title: 'FX Arbitrage Trading Platform',
      description:
        'Low-latency FX arbitrage engine across Korea’s FX ECN brokers, offshore NDFs, and KRX currency futures.',
      link: '/trading-systems/stealth-win',
    },
    {
      title: 'FX Trading Platform',
      description:
        'FX trading platform that supports both dealer and client environments, equipped with a wide range of advanced features for bank dealers.',
      link: '/trading-systems/fx-win',
    },
    {
      title: 'Global Futures & Options Trading System',
      description:
        'Global derivatives trading systems delivering a complete end-to-end solution, from front-end trading to back-office processing.',
      link: '/trading-systems/winway-gdts',
    },
    {
      title: 'KRX Futures & Options Trading System',
      description:
        'KRX derivatives trading systems with comprehensive front-to-back functionality, covering the entire trading lifecycle.',
      link: '/trading-systems/winway-kdts',
    },
    {
      title: 'Global Equity Trading System',
      description:
        'Integrated global equity trading systems providing complete front-to-back coverage across the full trading workflow.',
      link: '/trading-systems/winway-gets',
    },
    {
      title: 'Fixed Income Trading System',
      description:
        'Fixed Income Trading System designed for both institutional and retail users, supporting the full workflow from front office to back office.',
      link: '/trading-systems/winway-fits',
    },
    {
      title: 'Equity CFD Trading System',
      description:
        'Equity CFD Trading Systems with comprehensive front-to-back functionality, covering the entire trading lifecycle.',
      link: '/trading-systems/winway-cfd-equity',
    },
    {
      title: 'Gold Trading System',
      description:
        'KRX Gold Trading System that supports the full front-to-back workflow and enables arbitrage between KRX gold and global gold markets.',
      link: '/trading-systems/winway-gold',
    },
  ];

  /** Guarded navigation to avoid runtime errors */
  const handleNavigate = (link: string) => {
    try {
      if (link && link !== '#') {
        navigate(link);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-8 min-h-[550px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-slate-900" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto text-center">

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
              Trading Systems
            </h1>

            <p
              className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#FFFFFF" }}
            >
              Advanced trading system solutions designed for modern financial markets.
              Our sophisticated systems provide the performance and reliability needed
              for successful trading operations.
            </p>

            <div
              className={`mt-10 border-t border-slate-600 pt-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="flex flex-wrap gap-6 justify-center text-sm font-medium text-slate-300">

                {[
                  { label: "Prop Trading", link: "/trading-systems/win-edge" },
                  { label: "Arbitrage", link: "/trading-systems/stealth-win" },
                  { label: "FX", link: "/trading-systems/fx-win" },
                  { label: "Global F&O", link: "/trading-systems/winway-gdts" },
                  { label: "KRX F&O", link: "/trading-systems/winway-kdts" },
                  { label: "Global Equity", link: "/trading-systems/winway-gets" },
                  { label: "Fixed Income", link: "/trading-systems/winway-fits" },
                  { label: "CFD", link: "/trading-systems/winway-cfd-equity" },
                  { label: "Gold", link: "/trading-systems/winway-gold" },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavigate(item.link)}
                    className="pb-1 border-b-2 border-transparent hover:text-white hover:border-slate-300 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(service.link)}
                className="group cursor-pointer border border-slate-200 p-10 bg-white hover:shadow-sm transition-all flex flex-col"
              >
                <h3 className="text-[30px] font-cormorant font-extrabold text-slate-900 mb-4 leading-snug tracking-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* aligned bottom */}
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
