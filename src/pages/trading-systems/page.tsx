
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import bgimage from '../../images/image1.jpg';
import bgimage2 from '../../images/image19.jpg';

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
        'Comprehensive equity trading solutions with advanced order management, real-time market data integration, and sophisticated execution algorithms for global equity markets.',
      image:
        bgimage,
      link: '/trading-systems/win-edge',
    },
    {
      title: 'Currency Arbitrage Trading Platform',
      description:
        'Advanced derivatives trading platform supporting futures, options, and complex derivatives with sophisticated risk management and real-time position monitoring capabilities.',
      image:
        bgimage,
      link: '/trading-systems/stealth-win',
    },
    {
      title: 'FX Trading Platform',
      description:
        'High-performance foreign exchange trading platform with ultra-low latency execution, multi-currency support, and comprehensive liquidity management for institutional FX operations.',
      image:
        bgimage,
      link: '/trading-systems/fx-win',
    },
    {
      title: 'Global Futures & Options  Trading Platform',
      description:
        'Specialized trading system for Korea Exchange derivatives market, featuring optimized connectivity, local market expertise, and comprehensive compliance management.',
      image:
        bgimage,
      link: '/trading-systems/winway-gdts',
    },
    {
      title: 'KRX Futures & Options  Trading Platform',
      description:
        'Traditional ledger management system providing comprehensive record-keeping, audit trails, and regulatory compliance for non-electronic trading operations and legacy systems.',
      image:
        bgimage,
      link: '/trading-systems/winway-kdts',
    },
    {
      title: 'Global Equity Trading Platform',
      description:
        'Traditional ledger management system providing comprehensive record-keeping, audit trails, and regulatory compliance for non-electronic trading operations and legacy systems.',
      image:
        bgimage,
      link: '/trading-systems/winway-gets',
    },
    {
      title: 'Fixed Income Trading System',
      description:
        'Traditional ledger management system providing comprehensive record-keeping, audit trails, and regulatory compliance for non-electronic trading operations and legacy systems.',
      image:
        bgimage,
      link: '/trading-systems/winway-fits',
    },
    {
      title: 'Equity CFD Trading Platform',
      description:
        'Traditional ledger management system providing comprehensive record-keeping, audit trails, and regulatory compliance for non-electronic trading operations and legacy systems.',
      image:
        bgimage,
      link: '/trading-systems/winway-cfd-equity',
    },
    {
      title: 'Gold Trading Platform',
      description:
        'Traditional ledger management system providing comprehensive record-keeping, audit trails, and regulatory compliance for non-electronic trading operations and legacy systems.',
      image:
        bgimage,
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
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 min-h-[600px] flex items-end pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">

            {/* Top small label */}
            <p
              className={`text-sm font-bold mb-4 tracking-wide uppercase font-inter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '0ms' }}
            >
              WHAT WE DO
            </p>

            {/* Main Title */}
            <h1
              className={`text-6xl md:text-7xl font-semibold mb-6 font-cormorant leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '200ms' }}
            >
              Trading Systems
            </h1>

            {/* Description */}
            <p
              className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '400ms' }}
            >
              Advanced trading system solutions designed for modern financial markets.
              Our sophisticated systems provide the performance and reliability needed for successful trading operations.
            </p>

            {/* ---------------------------------------- */}
            {/* Quick Navigation Bar (Positioned HERE) */}
            {/* ---------------------------------------- */}
            <div
              className={`mt-10 border-t border-slate-600 pt-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex flex-wrap gap-6 justify-start text-sm font-medium text-slate-300">

                {[
                  { label: 'Prop Trading Platform', link: '/trading-systems/global-equity' },
                  { label: 'Currency Arbitrage Trading', link: '/trading-systems/stealth-win' },
                  { label: 'FX Trading Platform', link: '/trading-systems/fx-win' },
                  { label: 'Global Futures & Options', link: '/trading-systems/winway-gdts' },
                  { label: 'KRX F&O Trading', link: '/trading-systems/winway-kdts' },
                  { label: 'Global Equity Trading', link: '/trading-systems/winway-gets' },
                  { label: 'Fixed Income Trading', link: '/trading-systems/winway-fits' },
                  { label: 'Equity CFD Trading', link: '/trading-systems/winway-cfd-equity' },
                  { label: 'Gold Trading Platform', link: '/trading-systems/winway-gold' },
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


      {/* Our Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-8 font-cormorant">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl">
              We partner with business leaders to drive innovation, transformation, and enduring success
              that transcends individual transactions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => handleNavigate(service.link)}
              >
                <div className="mb-6 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <span className="text-slate-800 underline decoration-1 underline-offset-4 group-hover:text-slate-600 group-hover:no-underline transition-all duration-200 cursor-pointer">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Systems Inquiry Section */}
      <section className="py-20 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 font-cormorant">
            Connect with Trading Systems
          </h2>
          <button
            type="button"
            className="bg-slate-900 text-white px-8 py-4 font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap inline-flex items-center gap-2 mt-8"
          >
            Inquire About Our Trading Systems
            <i className="ri-external-link-line text-lg"></i>
          </button>
        </div>
      </section>
    </div>
  );
}

