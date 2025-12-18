import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

export default function ProjectsPage() {
  const { t } = useTranslation('common');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projectHistory = {
    2025: [
      { company: "Hanwha Investment & Securities", description: "Global Derivatives Brokerage Platform", status: "In Progress" },
      { company: "Industrial Bank of Korea", description: "KTS (Korea Treasury System) Dedicated Network Platform", status: "In Progress" },
      { company: "Industrial Bank of Korea", description: "IBK FXON API Development", status: "In Progress" },
      { company: "Yuanta Securities", description: "FX Arbitrage Auto-Trading Solution", status: "In Progress" },
      { company: "Yuanta Securities", description: "FX LP Connectivity & FIX HUB Service", status: "In Progress" },
      { company: "Woori Investment & Securities", description: "New Platform Development", status: "In Progress" },
      { company: "Kookmin Bank", description: "E-CM FX Trading Expansion & Government Bond Trading Platform", status: "In Progress" },
      { company: "Shinhan Bank", description: "FX Platform Implementation & e-FX Infrastructure Expansion", status: "In Progress" },
      { company: "Shinhan Securities", description: "TR System Upgrade Consulting", status: "In Progress" },
      { company: "NongHyup Bank", description: "FX Trading Platform Development", status: "In Progress" },
      { company: "Mirae Asset Securities", description: "MALT Platform Enhancements for ATS Introduction", status: "In Progress" }
    ],

    2024: [
      { company: "Meritz Securities", description: "FIX Engine Implementation Supporting CME iLink 3.0", status: "Completed" },
      { company: "DB Securities", description: "FIX Engine Implementation Supporting CME iLink 3.0", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "U.S. Equity Options Margin Calculation System", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "FIX Engine Implementation Supporting CME iLink 3.0", status: "Completed" },
      { company: "Kookmin Bank", description: "E-Capital Market Platform Expansion", status: "Completed" },
      { company: "Industrial Bank of Korea", description: "FX Trading Digital Transformation", status: "Completed" },
      { company: "Samsung Securities", description: "Global Single-Stock Options Brokerage Service", status: "Completed" },
      { company: "Samsung Futures", description: "KRX Derivatives & ELW Market-Surveillance System", status: "Completed" },
      { company: "Daishin Securities", description: "Global Derivatives Market-Surveillance System", status: "Completed" },
      { company: "KB Securities", description: "Global Single-Stock Options Platform", status: "Completed" }
    ],

    2023: [
      { company: "Eugene Investment & Futures", description: "DMA Ledger Upgrade & KRX Next-Generation System", status: "Completed" },
      { company: "Samsung Securities", description: "Global Derivatives Brokerage Platform", status: "Completed" },
      { company: "NH Futures", description: "Next-Generation IT System Upgrade", status: "Completed" },
      { company: "Mirae Asset Securities", description: "CFD Trading Platform", status: "Completed" },
      { company: "NH Investment & Securities", description: "Global Derivatives Brokerage Service", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "KRX Gold Spot Trading Platform", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "Prima V3.0 Implementation", status: "Completed" }
    ],

    2022: [
      { company: "SK Securities", description: "EUREX Night Session Derivatives Trading Platform", status: "Completed" },
      { company: "Meritz Securities", description: "Low-Latency Trading Platform", status: "Completed" },
      { company: "KB Securities", description: "CFD Hedging & Trading Platform (Prime Brokerage Model)", status: "Completed" },
      { company: "Kookmin Bank", description: "E-Capital Market Platform", status: "Completed" }
    ],

    2021: [
      { company: "NH Futures", description: "Next-Generation IT Systems (HTS, Market Data, Ledger)", status: "Completed" },
      { company: "Koscom", description: "Global Equity & Foreign Currency RP Service Platform (Ledger, FIX Gateway)", status: "Completed" },
      { company: "NH Investment & Securities", description: "Global Derivatives Brokerage Platform", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "CD Order Platform (OMS, Ledger, GUI)", status: "Completed" },
      { company: "Bullion Bank", description: "Gold Trading Platform (HTS, MTS, Market Data, Ledger)", status: "Completed" }
    ],

    2020: [
      { company: "Mirae Asset Daewoo", description: "Next-Generation OMS (Arbitrage, Basket, Algorithm Trading)", status: "Completed" },
      { company: "SK Securities", description: "Global Derivatives Trading Platform (HTS, MTS, Market Data, Ledger, FIX)", status: "Completed" },
      { company: "NH Futures", description: "KS-VAN Money Transfer Update", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "Trading Community System", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "Dealer Account Management", status: "Completed" },
      { company: "Deutsche Bank", description: "Global Derivatives & KOSPI Night Options Market-Surveillance System", status: "Completed" },
      { company: "KB Securities", description: "Global Derivatives Clearing & Eurex Prisma Margin (SPAN, PRISMA)", status: "Completed" },
      { company: "Lotte Information & Communication", description: "Vietnam Securities OMS", status: "Completed" },
      { company: "Kookmin Bank", description: "FX Form Processing System", status: "Completed" },
      { company: "CytoCode", description: "CME Direct Market Data Feed Solution", status: "Completed" }
    ],

    2019: [
      { company: "Lotte Information & Communication", description: "Integrated Stock/Derivatives Ledger for Vietnam Securities Firms", status: "Completed" },
      { company: "Nonghyup Hanaro Mart", description: "Accounting Platform Enhancement", status: "Completed" },
      { company: "Meritz Securities", description: "Global Derivatives Trading Platform (Market Data, Ledger, OMS, RMS)", status: "Completed" },
      { company: "Kyobo Securities", description: "Global Options Platform (Ledger, Prima)", status: "Completed" },
      { company: "Kiwoom Securities", description: "Prima Solution (SPAN)", status: "Completed" },
      { company: "Kookmin Bank", description: "MyDealingRoom PRO (PC-based FX Trading Platform)", status: "Completed" },
      { company: "Samsung Futures", description: "Prima Solution (SPAN)", status: "Completed" }
    ],

    2018: [
      { company: "NongHyup Information System", description: "SMS Distribution Platform", status: "Completed" },
      { company: "NongHyup Bank", description: "OMS for Securities Trading", status: "Completed" },
      { company: "Mirae Asset Daewoo", description: "Next-Generation KRX Derivatives Trading Platform", status: "Completed" },
      { company: "KB Securities", description: "Margin FX FDM & Global Derivatives Position Transfer", status: "Completed" },
      { company: "DB Securities", description: "Global Derivatives Simulation Trading Platform", status: "Completed" },
      { company: "Lotte Information & Communication", description: "Vietnam Next-Generation Securities Trading Platform (PC & Mobile)", status: "Completed" },
      { company: "CNAINDO (Indonesia)", description: "Mobile Trading Platform Development", status: "Completed" },
      { company: "NH Futures", description: "Global Derivatives Spread Trading System", status: "Completed" }
    ],

    2017: [
      { company: "Eugene Investment & Futures", description: "KRX & Global Derivatives Platform Rebuild (HTS, MTS, Market Data, Ledger)", status: "Completed" },
      { company: "Meritz Securities", description: "Night Session Derivatives Trading Platform", status: "Completed" },
      { company: "DB Securities", description: "Mobile Trading Platform for Global Derivatives", status: "Completed" },
      { company: "DB Securities", description: "Global Derivatives Ledger Upgrade (Prima SPAN)", status: "Completed" },
      { company: "KB Securities", description: "Margin FX Platform Enhancements", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "Provision of Prima SPAN Solution", status: "Completed" },
      { company: "Hana Securities", description: "Prima SPAN Solution & Global Options Platform", status: "Completed" },
      { company: "Lotte Information & Communication Vietnam", description: "Futures Ledger Solution (VCSC, KIS)", status: "Completed" }
    ],

    2016: [
      { company: "Hana Securities", description: "Global Derivatives Trading Ledger (Next-Generation System)", status: "Completed" },
      { company: "Mirae Asset Securities", description: "Global Derivatives Trading Ledger (Next-Generation System)", status: "Completed" },
      { company: "Hyundai Securities", description: "Prima Solution & Global Options Trading Platform", status: "Completed" },
      { company: "Dongbu Securities", description: "Backup Market Data Platform for Global Derivatives", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "Mobile Trading Platform", status: "Completed" },
      { company: "Daewoo Indonesia", description: "Mobile Trading Platform", status: "Completed" }
    ],

    2015: [
      { company: "Hyundai Securities", description: "Global Equity Market Data FEP & Investment Information", status: "Completed" },
      { company: "Shinhan Securities", description: "Global Options Trading Platform (Ledger)", status: "Completed" },
      { company: "NH Futures", description: "KRX & Global Derivatives System Migration", status: "Completed" },
      { company: "Kyobo Securities", description: "Global Derivatives Ledger Enhancements", status: "Completed" },
      { company: "Dongbu Securities", description: "Global Derivatives Platform (HTS, Market Data, Ledger)", status: "Completed" }
    ],

    2014: [
      { company: "SUNGARD", description: "Global Equity Trading Platform (HTS, Market Data, FIX Gateway)", status: "Completed" },
      { company: "Koscom", description: "Tablet Service Enhancements (Mobi-In)", status: "Completed" },
      { company: "Korea Investment & Securities", description: "MTS Renewal (Mobi-In)", status: "Completed" },
      { company: "Korea Investment & Securities", description: "Global Derivatives Non-electronic Ledger Platform", status: "Completed" },
      { company: "Shinyoung Securities", description: "Global Derivatives Trading Platform (Package)", status: "Completed" }
    ],

    2013: [
      { company: "Korea Investment & Securities", description: "MTS Renewal (Mobi-In)", status: "Completed" },
      { company: "Korea Investment & Securities", description: "Manual Trading Ledger Platform for Global Derivatives", status: "Completed" },
      { company: "Woori Futures", description: "OMS & FCM FIX Order Connectivity", status: "Completed" },
      { company: "Dongbu Securities", description: "Global Futures Trading Platform (Package)", status: "Completed" }
    ],

    2012: [
      { company: "Hyundai Securities", description: "Global Futures Trading Platform", status: "Completed" },
      { company: "Money Partners Japan", description: "Margin FX Seoul Hub Service", status: "Completed" }
    ],

    2011: [
      { company: "KB Securities", description: "Margin FX Trading Platform (ASP)", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "Margin FX Trading Platform (ASP)", status: "Completed" }
    ],

    2010: [
      { company: "Korea Investment & Securities", description: "Margin FX Platform Operation & Technical Support", status: "Completed" },
      { company: "Mirae Asset Securities", description: "Global Futures & Margin FX Trading Platform", status: "Completed" },
      { company: "Kyobo Securities", description: "Global Futures & Margin FX Trading Platform", status: "Completed" },
      { company: "Citigroup Global Markets Securities", description: "Global Futures Trading Platform", status: "Completed" },
      { company: "Solomon Securities", description: "Global Futures & Margin FX Trading Platform", status: "Completed" },
      { company: "Hyundai Securities", description: "Global Futures & Margin FX Trading Platform", status: "Completed" },
      { company: "BS Investment & Securities", description: "Global Futures Trading Platform", status: "Completed" }
    ],

    2009: [
      { company: "Daewoo Securities", description: "Global Futures & Margin FX Consulting Services", status: "Completed" },
      { company: "NH Futures", description: "Margin FX Trading Platform", status: "Completed" },
      { company: "Leading Investment & Securities", description: "Global Futures Trading Platform", status: "Completed" },
      { company: "Newedge Securities", description: "Global Futures Trading Platform (Package)", status: "Completed" },
      { company: "Kookmin Bank", description: "Margin FX Trading Platform for LP & Clients", status: "Completed" }
    ],

    2008: [
      { company: "NH Futures", description: "KRX & Global Derivatives Integrated Ledger", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "TradeStation Auto-Order Integration", status: "Completed" }
    ],

    2007: [
      { company: "Eugene Investment & Futures", description: "Multi-FCM Global Futures Ledger", status: "Completed" },
      { company: "Eugene Investment & Futures", description: "Global Futures Offline Ledger", status: "Completed" }
    ],

    2006: [
      { company: "FX Platform", description: "Margin FX Rich Client Platform", status: "Completed" },
      { company: "Korea Exchange Bank", description: "Margin FX Trading Platform", status: "Completed" },
      { company: "Samsung Futures", description: "Margin FX Trading Platform", status: "Completed" }
    ],

    2005: [
      { company: "Eugene Investment & Futures", description: "Global Futures Trading Platform (ASP)", status: "Completed" },
      { company: "Woori Futures", description: "Global Futures Trading Platform (ASP)", status: "Completed" }
    ],

    2004: [
      { company: "Samsung Futures", description: "Global Futures Trading Platform (ASP)", status: "Completed" }
    ]
  };


  const years = Object.keys(projectHistory).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
      <section
        ref={heroRef}
        className="relative min-h-[500px] !pt-24 !pb-4 flex !items-center !justify-center bg-[#0a1325]"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto text-center">

            {/* Top Label */}
            <p
              className={`text-sm font-bold mb-4 tracking-wide uppercase font-inter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#FFFFFF", transitionDelay: "0ms" }}
            >
              OUR PORTFOLIO
            </p>

            {/* Title */}
            <h1
              className={`text-6xl md:text-7xl font-semibold mb-6 font-cormorant leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#FFFFFF", transitionDelay: "200ms" }}
            >
              Projects
            </h1>

            {/* Description */}
            <p
              className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#FFFFFF", transitionDelay: "400ms" }}
            >
              Explore our portfolio of successful implementations and innovative solutions
              that have transformed financial institutions worldwide.
            </p>

          </div>
        </div>
      </section>

      {/* Premium Scrolling Bank Names Section */}
      <section className="mt-0 py-5 bg-[#0A1A2F] overflow-hidden relative">

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A1A2F] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A1A2F] to-transparent"></div>

        {/* Inner Column */}
        <div className="flex flex-col gap-y-4">

          {/* Line 1 — LEFT → RIGHT (switched) */}
          <div className="flex whitespace-nowrap animate-scroll-rtl">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center gap-24 px-16">
                {[
                  "KOOKMIN BANK",
                  "INDUSTRIAL BANK OF KOREA",
                  "NONGHYUP BANK",
                  "SHINHAN BANK",
                  "MIRAE ASSET SECURITIES",
                  "MERITZ SECURITIES",
                  "DB SECURITIES",
                  "HANA SECURITIES",
                  "SK SECURITIES",
                  "KYOBO SECURITIES",
                  "SHINHAN SECURITIES",
                  "EUGENE INVESTMENT & FUTURES",
                  "DEUTSCHE BANK",
                  "KOSCOM",
                  "LOTTE INNOVATE",
                ].map((name) => (
                  <span
                    key={name}
                    className="text-white text-[16px] tracking-wider uppercase opacity-80 hover:opacity-100 transition"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Line 2 — RIGHT → LEFT (switched) */}
          <div className="flex whitespace-nowrap animate-scroll-ltr">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center gap-24 px-16">
                {[
                  "KB SECURITIES",
                  "SAMSUNG SECURITIES",
                  "NH INVESTMENT & SECURITIES",
                  "KIWOOM SECURITIES",
                  "HANWHA INVESTMENT & SECURITIES",
                  "YUANTA SECURITIES",
                  "WOORI INVESTMENT SECURITIES",
                  "DAISHIN SECURITIES",
                  "LS SECURITIES",
                  "KOREA INVESTMENT & SECURITIES",
                  "NH FUTURES",
                  "SAMSUNG FUTURES",
                  "CITIGROUP GLOBAL MARKETS KOREA SECURITIES",
                  "LEADING INVESTMENT & SECURITIES",
                  "NH INFORMATION SYSTEM",
                ].map((name) => (
                  <span
                    key={name}
                    className="text-white text-[16px] tracking-wider uppercase opacity-80 hover:opacity-100 transition"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Project History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-8 font-cormorant">
              Project History
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl">
              Two decades of successful implementations and partnerships with leading financial institutions across Asia and beyond.
            </p>
            {/* Year Navigation */}
            <div className="border-b border-slate-200 mb-12 mt-12">
              <div className="flex items-center gap-6 overflow-x-auto pb-3 custom-scrollbar">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`relative text-[15px] md:text-base font-medium tracking-wide transition-all duration-300 pb-2 
          ${selectedYear === year
                        ? "text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-slate-900"
                        : "text-slate-400 hover:text-slate-700"
                      }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="flex items-start gap-12">
            {/* Year */}
            <div className="w-32 flex-shrink-0 pt-2">
              <h3 className="text-6xl font-semibold text-slate-900 font-cormorant leading-none">
                {selectedYear}
              </h3>
            </div>

            {/* Project List */}
            <div className="flex-1 space-y-10 mt-3">
              {projectHistory[selectedYear as keyof typeof projectHistory].map((project, index) => (
                <div key={index} className="py-3 border-b border-slate-200/60 last:border-none">
                  <h4 className="text-[25px] font-bold text-slate-900 mb-1 font-cormorant tracking-tight">
                    {project.company}
                  </h4>
                  <p className="text-[18px] font-medium text-slate-700 leading-relaxed tracking-wide">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
