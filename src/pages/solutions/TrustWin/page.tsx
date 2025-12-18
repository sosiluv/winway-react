import { useState, useRef, useEffect } from 'react';

// ✨ Fade-in animation wrapper
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
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

// ------------------ TEXT DATA ------------------

// For the “Key Capabilities” section (Key Features layout)
const KEY_CAPABILITIES = {
  introTitle: 'Key Capabilities',
  left: [
    {
      title: 'Unified Connectivity Across All Channels',
      bullets: [
        'Supports integration with domestic and global exchanges, brokers, market-data vendors, and institutional systems.',
        'Processes all order, execution, and market-data messages with speed and precision.'
      ]
    },
    {
      title: 'High-Performance Message Processing',
      bullets: [
        'Optimized for rapid inter-process communication with minimal latency.',
        'Shared-memory and disk-based messaging queues enabling Once-Write, Multiple-Read without data loss.',
        'Supports up to 16 concurrent access IDs for parallel data consumption.'
      ]
    },
    {
      title: 'Intelligent Routing Engine',
      bullets: [
        'Dynamic routing between gateway and business processes with no restart required when rules change.',
        'Supports point-to-point, round-robin, and target-specific routing logic.',
        'Queue-header awareness ensures priority delivery to designated processes.'
      ]
    }
  ],
  right: [
    {
      title: 'Flexible Protocol Adapters',
      bullets: [
        'Gateway layer provides configurable, rule-based protocol adaptors for seamless external-system integration.',
        'Supports multiple communication types and formats used across financial markets.'
      ]
    },
    {
      title: 'Enterprise-Grade Monitoring & Operations',
      bullets: [
        'Comprehensive GUI for system monitoring, process management, and maintenance.',
        'Real-time logging controls with adjustable log levels.',
        'Supports configuration updates, environment-file management, and automated push of error logs.'
      ]
    },
    {
      title: 'Fault-Tolerant Messaging Infrastructure',
      bullets: [
        'Engineered for continuous 24×365 operation in mission-critical environments.',
        'Low-latency message delivery with resilient design to sustain uninterrupted operations.'
      ]
    }
  ]
};

// For “Architecture Highlights” (Core Arbitrage layout, non-expandable)
const ARCHITECTURE_ITEMS = [
  {
    title: 'Scalable, Modular Design',
    list: [
      'Gateway, Router, and Business processing layers operate independently for maximum flexibility.',
      'Easy to add new institutions or integrate new business functions without engine downtime.'
    ]
  },
  {
    title: 'Reliable 24×365 Operation',
    list: [
      'Proven stability through memory-leak-free design and automated failure detection/recovery.',
      'Supports distributed deployment, active-active or active-standby configurations, and large-scale clustering.'
    ]
  },
  {
    title: 'Open System Compatibility',
    list: [
      'Works across diverse operating systems and supports a wide range of network technologies.'
    ]
  }
];

// For “Why Winway Messaging Middleware?” (Why StealthWin format)
const WHY_TRUSTWIN_ITEMS = [
  {
    title: 'Financial-grade performance',
    description:
      'Built for the latency and reliability demands of capital markets, ensuring consistent message delivery even under peak load.'
  },
  {
    title: 'Flexible, extensible architecture',
    description:
      'Supports evolving business requirements and regulatory needs without disrupting existing operations.'
  },
  {
    title: 'Unified messaging backbone',
    description:
      'Provides a single backbone for order routing, market-data distribution, and inter-system communication across the enterprise.'
  },
  {
    title: 'Operational transparency',
    description:
      'Delivers powerful monitoring and administration tools for full visibility into message flows, system health, and operations.'
  }
];

export default function TrustWinMessagingPage() {
  const [currentSection, setCurrentSection] = useState<
    'overview' | 'capabilities' | 'architecture' | 'why'
  >('overview');
  const [openCapabilityIndex, setOpenCapabilityIndex] = useState(null);


  const scrollToSection = (sectionId: string, tab?: typeof currentSection) => {
    const el = document.getElementById(sectionId);
    if (tab) setCurrentSection(tab);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* ======================
          HERO
      ======================= */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-cormorant">
              TrustWin | Messaging Middleware
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              A fault-tolerant messaging infrastructure built to sustain low-latency communication and
              uninterrupted operations.
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
                onClick={() => scrollToSection('key-capabilities', 'capabilities')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'capabilities'
                    ? 'text-white border-white'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Key Capabilities
              </button>
              <button
                onClick={() => scrollToSection('architecture', 'architecture')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'architecture'
                    ? 'text-white border-white'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Architecture Highlights
              </button>
              <button
                onClick={() => scrollToSection('why-trustwin', 'why')}
                className={`text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${currentSection === 'why'
                    ? 'text-white border-white'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-300'
                  }`}
              >
                Why Winway Messaging Middleware?
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================
          OVERVIEW
      ======================= */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Left aligned overview */}
          <FadeIn delay={0}>
            <div className="max-w-4xl">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                High-Performance Messaging for Financial Institutions
              </h3>
              <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                TrustWin Messaging Middleware is a high-performance, fault-tolerant communication platform
                engineered for financial institutions that require uncompromising speed, reliability, and
                seamless interoperability.
                <br />
                <br />
                It enables real-time exchange of orders, trades, market data, and operational messages across
                heterogeneous internal systems and external market channels—without dependency on any
                specific communication network.
              </p>
            </div>
          </FadeIn>

          {/* Right aligned overview extension */}
          <FadeIn delay={150}>
            <div className="max-w-4xl ml-auto text-right">
              <h3 className="text-sm md:text-base font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                Always-On, Mission-Critical Operations
              </h3>
              <p className="text-4xl md:text-4xl font-cormorant text-slate-900 leading-[1.65] tracking-wide">
                Built to operate 24×365, TrustWin delivers low-latency message delivery, flexible routing, and
                robust monitoring tools to ensure continuous, stable operations in mission-critical
                environments.
                <br />
                <br />
                The platform provides the messaging backbone required to keep trading, risk, and operational
                systems synchronized and resilient, even under extreme market conditions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================
    KEY CAPABILITIES (Accordion format)
======================= */}
      <section id="key-capabilities" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-4 font-cormorant">
              {KEY_CAPABILITIES.introTitle}
            </h2>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-slate-300 max-w-5xl mx-auto">
            {[...KEY_CAPABILITIES.left, ...KEY_CAPABILITIES.right].map((block, idx) => {
              const isOpen = openCapabilityIndex === idx;

              return (
                <article key={block.title} className="py-6">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenCapabilityIndex(isOpen ? null : idx)
                    }
                    className="group w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-[#0b172a] font-cormorant tracking-wide">
                      {block.title}
                    </h3>

                    {/* Bold arrow */}
                    <span
                      className={`ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full
                  border border-slate-300 text-slate-800 transition-all duration-300
                  ${isOpen ? 'rotate-180 bg-slate-100' : 'bg-white'}
                  group-hover:scale-110 group-hover:border-slate-500
                `}
                    >
                      <i className="ri-arrow-down-s-line text-2xl font-bold" />
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[520px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <ul className="space-y-1.5 text-[15px] md:text-base leading-relaxed text-slate-800 pl-6 list-disc">
                      {block.bullets.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* ======================
          ARCHITECTURE HIGHLIGHTS
          (Core Arbitrage layout, non-expandable)
      ======================= */}
      <section
        id="architecture"
        className="py-24 bg-white border-slate-200"
        style={{ overflowAnchor: 'none' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900 mb-4">
              Architecture Highlights
            </h2>
          </header>

          {/* Static list in the same visual style as Core Arbitrage (but always open) */}
          <div className="divide-y divide-slate-300" style={{ overflowAnchor: 'none' }}>
            {ARCHITECTURE_ITEMS.map(block => (
              <article key={block.title} className="py-8">
                <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900 mb-4">
                  {block.title}
                </h3>
                <div className="mt-2 text-base md:text-lg leading-relaxed text-slate-700">
                  <ul className="list-disc pl-6 space-y-2">
                    {block.list.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================
          WHY WINWAY MESSAGING MIDDLEWARE?
          (Why StealthWin style)
      ======================= */}
      <section
        id="why-trustwin"
        className="py-24 bg-slate-900 border-t border-slate-200 text-center"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-20">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white">
              Why Winway Messaging Middleware?
            </h2>
          </header>

          {/* Numbered Items */}
          <ol className="space-y-12">
            {WHY_TRUSTWIN_ITEMS.map((item, index) => (
              <li
                key={item.title}
                className="pb-10 border-b-[0.5px] border-slate-400 last:border-b-0"
              >
                <FadeIn delay={index * 120}>
                  <div className="flex items-start">
                    {/* Big number */}
                    <div className="mr-6 md:mr-10 flex-shrink-0">
                      <span
                        className="text-5xl md:text-6xl font-cormorant text-white"
                        style={{ fontWeight: 900 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title + Description */}
                    <div className="flex-1 text-left">
                      <h3 className="text-xl md:text-3xl font-bold font-cormorant text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-white leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
