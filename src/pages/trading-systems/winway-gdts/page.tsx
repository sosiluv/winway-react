import { useState, useRef, useEffect } from 'react';

// ✨ Fade-in animation wrapper
function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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


/* ================================
   DATA: Trader Application cards
================================= */

const TRADER_APP_CARDS = [
  {
    icon: 'ri-macbook-line',
    title: 'Multi-Channel Trading Environment',
    points: [
      'HTS, MTS, Client Open API  and FIX API for retail and institutional traders',
    ],
  },
  {
    icon: 'ri-double-quotes-l',
    title: 'Advanced Order Execution & Strategy Trading',
    points: [
      'Full support for advanced server-side automated order types:  OCO, If-Done, If-Done-OCO, MIT, Trailing   Stop',
      'One-click order entry from DOM and hotkey trading for active traders',
      'Enables inter-month spread and advanced option strategy orders (e.g., butterfly), along with interactive option strategy simulation tools',
    ],
  },
  {
    icon: 'ri-pulse-line',
    title: 'Real-Time Risk & Automated Position Control',
    points: [
      'Monitor Total Equity in real-time and trigger automatic liquidation or SMS alerts when profit-taking or stop-loss thresholds are reached.',
    ],
  },
  {
    icon: 'ri-wallet-3-line',
    title: 'Portfolio Margining & Clearing Support',
    points: [
      'Built-in support for global margin methodologies including:  CME SPAN, Eurex PRISMA, JPX VaR, OCC TIMS',
      'Real-time calculation of portfolio and one-directional risk margins, including dynamic margin simulation',
      'Supports cross-currency margin usage during trading hours.',
    ],
  },
  {
    icon: 'ri-layout-4-line',
    title: 'Key Capabilities',
    points: [
      'Users can customize frequently used screens, save layouts, and easily reload them when needed',
      'Supports integration of third-party solutions such as charting tools and algorithmic/system trading modules',
      'Provides an open API to enable user-developed trading strategies and custom automation',
      'Fat-finger error prevention and order validation controls',
    ],
  },
];

/* ================================
   DATA: Market Data System cards
================================= */

const MARKET_DATA_CARDS = [
  {
    id: 'scalability',
    icon: 'ri-scan-line',
    title: 'Scalability',
    points: [
      'Designed to minimize development impact when adding or changing exchanges or market data vendors',
      'Provides API sets optimized for futures and options market data',
      'New exchanges can be onboarded through configuration changes without modifying program code',
    ],
  },
  {
    id: 'modularity',
    icon: 'ri-git-branch-line',
    title: 'Modularity',
    points: [
      'The business, data-processing, and communication layers are clearly separated',
      'Each module can independently respond to changes in development environments and requirements',
    ],
  },
  {
    id: 'realtime',
    icon: 'ri-timer-flash-line',
    title: 'Real-Time Market Data Delivery',
    points: [
      'Processes real-time data with ultra-low latency',
      'Supports configurable data retention periods for both tick and bar (minute-based) data',
    ],
  },
  {
    id: 'dynamic-config',
    icon: 'ri-settings-3-line',
    title: 'Dynamic Configuration',
    points: [
      'Supports independent configuration settings for each exchange',
      'Provides flexible data retention period settings',
      'Supports exchange-specific configuration for time zones and trading hours',
      'Allows scheduling of batch processes',
    ],
  },
  {
    id: 'event-scheduler',
    icon: 'ri-calendar-check-line',
    title: 'Event Scheduler',
    points: [
      'Supports batch job scheduling for exchange-specific market open, close, and end-of-day processing',
      'Provides holiday management for each exchange',
    ],
  },
  {
    id: 'monitoring',
    icon: 'ri-bar-chart-2-line',
    title: 'Monitoring',
    points: [
      'Monitors market data reception status for each exchange',
      'Notifies administrators immediately when an issue or failure is detected',
    ],
  },
];

/* ================================
   PAGE COMPONENT
================================= */

type SectionId =
  | 'overview'
  | 'global-market-access'
  | 'trader-app'
  | 'market-data'
  | 'back-office';

export default function WinwayGDTSPage() {
  const [currentSection, setCurrentSection] = useState<SectionId>('overview');
  const [openMarketId, setOpenMarketId] = useState<string | null>(null);
  const [marginOpen, setMarginOpen] = useState(false);
  const [openTraderCard, setOpenTraderCard] = useState<number | null>(null);

  const scrollToSection = (sectionId: SectionId) => {
    setCurrentSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-cormorant">
              Winway GDTS<br></br>Global Futures & Options
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
                onClick={() => scrollToSection('global-market-access')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'global-market-access'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Global Market Access
              </button>

              <button
                onClick={() => scrollToSection('trader-app')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'trader-app'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Trader Application
              </button>

              <button
                onClick={() => scrollToSection('market-data')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'market-data'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Market Data System
              </button>

              <button
                onClick={() => scrollToSection('back-office')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'back-office'
                  ? 'text-white border-white'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Back Office &amp; Ledger
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          OVERVIEW – 2 paragraphs, L/R
      ================================= */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Left paragraph + headline */}
          <FadeIn delay={0}>
            <div className="max-w-4xl">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                Integrated Global Futures &amp; Options Trading Platform
              </h3>
              <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                Winway GDTS enables global futures and options trading across major
                international exchanges using a fully integrated, multi-channel electronic
                trading platform. It delivers risk management, market data, advanced order
                execution, portfolio margining, and middle-to-back-office support for both
                professional and retail investors.
              </p>
            </div>
          </FadeIn>

          {/* Right paragraph – no headline */}
          <FadeIn delay={150}>
            <div className="max-w-4xl ml-auto text-right">
              <p className="text-3xl md:text-4xl font-cormorant text-slate-900 leading-[1.7] tracking-wide">
                With unified access to global derivatives markets, GDTS helps firms manage
                the entire trading lifecycle from front-office execution through clearing
                and settlement.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================================
    GLOBAL MARKET ACCESS – centered
================================= */}
      <section
        id="global-market-access"
        className="py-24 bg-slate-900 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-cormorant font-semibold text-white mb-12">
            Global Market Access
          </h2>

          <FadeIn delay={150}>
            <p className="mx-auto max-w-6xl text-xl md:text-2xl font-helvetica text-white/90 leading-[2.1] tracking-[0.01em] text-center">
              Trade listed futures and options from leading global exchanges such as CME Group,
              Eurex, HKEX, SGX, JPX, ICE, CBOE,&nbsp;as well as U.S.&nbsp;equity options cleared by
              OCC — all through a single, integrated platform.
            </p>
          </FadeIn>
        </div>
      </section>


      <section
        id="trader-app"
        className="py-24 bg-white border-t border-slate-200"
        style={{ overflowAnchor: 'none' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
              Trader Application
            </h2>
          </header>

          {/* Accordion – same structure as Core Arbitrage Capabilities */}
          <div className="divide-y divide-slate-300" style={{ overflowAnchor: 'none' }}>
            {TRADER_APP_CARDS.map((block, idx) => (
              <article key={idx} className="py-8">

                {/* Collapsed header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenTraderCard((prev) => (prev === idx ? null : idx))
                  }
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                    {block.title}
                  </h3>

                  <span className="text-slate-700 text-3xl ml-6">
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-200 ${openTraderCard === idx ? 'rotate-180' : ''
                        }`}
                    />
                  </span>
                </button>

                {/* Expanded content */}
                {openTraderCard === idx && (
                  <div className="mt-6 text-base md:text-lg leading-relaxed text-slate-700">
                    <ul className="list-disc pl-6 space-y-2">
                      {block.points.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ================================
          MARKET DATA SYSTEM – expandable cards
      ================================= */}
      <section id="market-data" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
              Market Data System
            </h2>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MARKET_DATA_CARDS.map((card) => {
              const isOpen = openMarketId === card.id;
              return (
                <div
                  key={card.id}
                  className="bg-white border border-slate-200 shadow-sm px-7 py-6 flex flex-col"
                >
                  {/* Header row */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMarketId((prev) => (prev === card.id ? null : card.id))
                    }
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <i className={`${card.icon} text-2xl text-slate-700`} />
                      <h3 className="text-lg md:text-2xl font-cormorant font-bold text-slate-900">
                        {card.title}
                      </h3>
                    </div>
                    <i
                      className={`ri-arrow-down-s-line text-2xl text-slate-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {/* Body */}
                  {isOpen && (
                    <div className="mt-4 border-t border-slate-200 pt-4">
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-[17px] text-slate-700 leading-relaxed">
                        {card.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================
          BACK OFFICE & LEDGER
      ================================= */}
      <section
        id="back-office"
        className="py-24 bg-white border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-16">
            <h2 className="text-5xl text-center font-cormorant font-bold text-slate-900 tracking-wide">
              Back Office &amp; Ledger
            </h2>
          </header>

          <div className="divide-y divide-slate-200 text-center font-cormorant">
            {/* Settlement processing */}
            <article className="py-6">
              <p className="text-xl md:text-2xl text-slate-900 leading-relaxed">
                <span className="font-extrabold text-slate-900">
                  Fully automated processing
                </span>{' '}
                of settlement prices, contract-level margin, First Notice Day (FND), and
                Last Trading Day (LTD) schedules.
              </p>
            </article>

            {/* Corporate accounts */}
            <article className="py-6">
              <p className="text-xl md:text-2xl text-slate-900 leading-relaxed">
                <span className="font-extrabold text-slate-900">
                  Dedicated settlement workflows for corporate accounts
                </span>{' '}
                including separate statement generation and reporting.
              </p>
            </article>

            {/* Margin & Risk – expandable */}
            <article className="py-6">
              <button
                type="button"
                onClick={() => setMarginOpen((prev) => !prev)}
                className="w-full flex items-center justify-center gap-6 group"
              >
                <span className="text-xl md:text-2xl text-slate-900 leading-relaxed text-center">
                  <span className="font-extrabold text-slate-900">
                    Margin &amp; Risk management
                  </span>
                </span>

                {/* Very notable arrow */}
                <span className="inline-flex items-center justify-center rounded-full border border-slate-400 text-slate-700 p-1.5 transition-all group-hover:scale-110 group-hover:border-slate-600">
                  <i
                    className={`ri-arrow-down-s-line text-xl transition-transform duration-200 ${marginOpen ? 'rotate-180' : ''
                      }`}
                  />
                </span>

              </button>

              {marginOpen && (
                <div className="mt-6 max-w-3xl mx-auto text-left font-sans">
                  <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-slate-800 leading-relaxed">
                    <li>Risk array file ingestion and updates</li>
                    <li>
                      New entry order margin for futures and options, net open position margin,
                      one-direction risk margin, and option-exercise reservation margin
                    </li>
                    <li>
                      Automated liquidation rules for physical delivery requirements, and margin
                      shortfall
                    </li>
                    <li>
                      Intraday risk monitoring with automatic position liquidation for accounts
                      reaching predefined risk thresholds
                    </li>
                    <li>
                      Automatic FX conversion when margin-base currency becomes insufficient for
                      accounts using cross-currency margin
                    </li>
                    <li>
                      Supports post-margin accounts and grace-period accounts to ensure
                      controlled liquidation and risk-aligned account handling
                    </li>
                  </ul>
                </div>
              )}
            </article>

            {/* Reconciliation */}
            <article className="py-6">
              <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-light">
                <span className="font-extrabold text-slate-900">
                  Reconciliation of FCM account settlements
                </span>{' '}
                with daily statements.
              </p>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
