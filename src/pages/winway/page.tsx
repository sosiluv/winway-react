import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

export default function WinwayPage() {
  const { t } = useTranslation('common');
  const [visibleYears, setVisibleYears] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const history = {
    2025: [
      "FX DMA & Client FIX API Hub Service Launched (Equinix TY3–SL1)"
    ],
    2024: [
      "Launch of WinFIX, a FIX Engine Solution Integrated with CME iLink 3.0",
      "KRX Bond Liquidity Provider System Developed"
    ],
    2023: [
      "Development of OCC Equity Options Systems"
    ],
    2022: [
      "Launch of FXWin, an FX Trading Platform for Clients, Sales, and Dealers",
      "Equity CFD Trading System Developed"
    ],
    2021: [
      "Global Equity Trading System Developed",
      "Chammae Derivatives Market Surveillance Solution Launched"
    ],
    2020: [
      "WinEdge Proprietary Trading Platform Launched"
    ],
    2018: [
      "High-Volume Text Message Distribution and Delivery System Developed"
    ],
    2017: [
      "Promising Export SME Selection (Seoul Regional Office of SMEs and Startups)",
      "Excellent Technology Research Center Designation (MOTIE)",
      "Signed a Partnership Agreement with Lotte-HPT Vietnam to Supply Global FOX Solution for HNX"
    ],
    2016: [
      "Prima Global Derivatives Portfolio Margin Solution Launched"
    ],
    2015: [
      "Patent Registration (Korean Intellectual Property Office)",
      "Method for Data Processing and a Supporting Terminal Device in an InfiniBand Environment",
      "Method for Data Backup and a System Supporting the Same"
    ],
    2013: [
      "Certified as an INNO-BIZ (Innovation-Driven Small and Medium Enterprise)"
    ],
    2011: [
      "Certified as a CME Group ISV (Independent Software Vendor)",
      "Entered into a CME Group Market Data Vendor Agreement (2011–2015)",
      "Appointed as a Sales Agent for Interactive Data Corporation (IDC) in Korea (2011–2015)"
    ],
    2008: [
      "Integrated KRX & Global Derivatives System Developed"
    ],
    2006: [
      "Certified as an In-House Research Institute (KITA)",
      "Margin FX System for Brokers & Dealers (ASP Model) Launched"
    ],
    2005: [
      "Certified as a Technology Venture Company"
    ],
    2004: [
      "Company Founded",
      "Global Futures Trading System (ASP Model) Launched"
    ]
  };

  const services = [
    {
      title: "Capital Markets Trading & Infrastructure Solutions",
      description:
        "We provide a broad portfolio of trading and infrastructure software solutions that span the full trading lifecycle—from front-end to back-end—across capital markets instruments, including equities, derivatives, foreign exchange, and commodities."
    },
    {
      title: "Institutional IT Systems Implementation & Operations",
      description:
        "We support the design, implementation, and operation of core IT systems for financial institutions, including banks, securities firms, asset management companies, and futures brokers."
    },
    {
      title: "Global FX FIX Connectivity Infrastructure",
      description:
        "We provide a network infrastructure service that enables banks and other financial institutions to directly access the global foreign exchange market via FIX APIs, reducing connectivity complexity and overall costs."
    },
    {
      title: "Korea Capital Markets Reference Data Services",
      description:
        "We provide English-language reference data services covering corporate actions and related information for companies listed on the Korea Exchange (KRX), as well as for Korea-domiciled funds."
    },
    {
      title: "High-Performance Messaging & SMS Distribution Systems",
      description:
        "Leveraging our capital markets trading platform expertise, we build and deliver a stable, high-performance, C-based systems for large-scale SMS distribution and delivery."
    }
  ];


  const years = Object.keys(history).sort((a, b) => parseInt(b) - parseInt(a));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute('data-year');
            if (year) {
              setVisibleYears((prev) => new Set(prev).add(year));
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    const yearElements = document.querySelectorAll('[data-year]');
    yearElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
      {/* Hero Header — Goldman-style editorial introduction */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Kicker + Title */}
          <div
            className={`max-w-3xl transition-all duration-[900ms] ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '120ms' }}
          >
            {/* Kicker */}
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 mb-6 font-inter">
              Our Firm
            </p>

            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl font-cormorant font-semibold text-slate-900 leading-tight">
              About Winway
            </h1>
          </div>

        </div>
      </section>

      {/* About — Editorial Substance */}
      <section className="pt-10 pb-32 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-20">

            {/* LEFT — Editorial anchor quote */}
            <div
              className={`max-w-xl transition-all duration-[1000ms] ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '220ms' }}
            >
              <h2 className="text-4xl md:text-5xl font-cormorant text-slate-900 leading-[2.35] tracking-[0.01em]">
                “A trusted technology partner supporting the sustainable growth and
                long-term value of financial institutions.”
              </h2>
            </div>

            {/* RIGHT — Institutional description */}
            <div
              className={`max-w-[620px] space-y-14 font-inter text-slate-800
        transition-all duration-[1000ms] ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '320ms' }}
            >
              <p className="text-[19px] leading-[1.9] tracking-[0.01em]">
                Winway Inc. is a financial technology firm dedicated to building the core
                trading systems that support the operation of capital markets. For over
                two decades, we have delivered mission-critical trading platforms and
                system integration services across equities, derivatives, and foreign
                exchange markets, serving leading financial institutions.
              </p>

              <p className="text-[19px] leading-[1.9] tracking-[0.01em]">
                Our capabilities span the full trading lifecycle, including HTS and MTS
                platforms, market data processing, trading and settlement ledgers, order
                and risk management systems, and portfolio margin solutions. Through these
                capabilities, we support the stability, efficiency, and scalability of
                institutional trading operations.
              </p>

              <p className="text-[19px] leading-[1.9] tracking-[0.01em] text-slate-700">
                The breadth and reliability of our systems reflect long-standing
                partnerships built on trust. Contributing to our clients’ sustainable
                growth and long-term value creation remains central to our mission.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our History Section - Vertical Timeline */}
      <section className="py-20 bg-gray-100" ref={timelineRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b172a] mb-10 font-cormorant text-center">
            Our History
          </h2>
          {/* Subtitle */}
          <p className="mt-2 mb-20 text-lg md:text-l text-slate-600 leading-relaxed max-w-5xl mx-auto text-center">
            A record of building mission-critical trading infrastructure for capital markets,
            shaped by long-term partnerships with financial institutions.
          </p>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-900 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-1">
              {years.map((year, index) => (
                <div
                  key={year}
                  data-year={year}
                  className={`relative transition-all duration-700 ${visibleYears.has(year)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                    }`}
                >
                  {/* Year Circle on Timeline */}
                  <div className="absolute left-1/2 top-0 w-3 h-3 bg-slate-900 rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Content Container - Alternating Sides */}
                  <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-4 text-right' : 'pl-4 text-left'}`}>
                      {/* Year */}
                      <h3 className="text-4xl font-bold text-slate-900 mb-2 font-cormorant">
                        {year}
                      </h3>

                      {/* Milestones */}
                      <ul className="space-y-1">
                        {history[year as keyof typeof history].map((item, idx) => (
                          <li
                            key={idx}
                            className={`text-slate-1000 font-Inter text-base leading-[1.7] ${index % 2 === 0 ? 'text-right' : 'text-left'
                              }`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-20 font-cormorant">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-white mb-10">
                  {service.title}
                </h3>
                <p className="text-slate-200 text-4xl text-lg leading-[1.7] max-w-md">
                  {service.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Look For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 font-cormorant">
            Who We Look For
          </h2>
          <div className="mb-12">
            <p className="text-lg text-slate-900 leading-relaxed mb-20">
              We are hiring new and experienced employees on a rolling basis.
              <br></br>
              At Winway, our ideal talent is someone who thinks innovatively (Imagination), collaborates well with teammates (Cooperation), strives for results (Accomplishment), approaches problems creatively (Creativity), and enjoys taking on challenges (Challenge).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-10 font-cormorat">
                  Recruitment Fields
                </h3>
                <p className="text-slate-900 leading-relaxed text-4l">
                  Developers for securities, banking, futures, and other financial institutions — including server programs, PC client, and mobile applications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-10">
                  Preferred Qualifications
                </h3>
                <ul className="space-y-2 text-slate-900">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Proficiency in foreign languages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Possession of computer programming or financial-related certifications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-10">
                  Hiring Process
                </h3>
                <ol className="space-y-2 text-slate-900">
                  <li className="flex items-start">
                    <span className="mr-3">1.</span>
                    <span>Submission of résumé and self-introduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">2.</span>
                    <span>First document screening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">3.</span>
                    <span>Second interview</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-10">
                  How to Apply
                </h3>
                <p className="text-slate-900 leading-relaxed mb-4">
                  Submit by email:
                </p>
                <a
                  href="mailto:win@winwaysystems.com"
                  className="text-blue-600 hover:text-blue-900 font-medium text-lg"
                >
                  win@winwaysystems.com
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-10">
                  Employee Benefits
                </h3>
                <ul className="space-y-2 text-slate-900">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Awards for long-term service and outstanding performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Project leave, maternity/paternity leave</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Paid annual leave compensation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Group insurance, retirement pension, and four major insurances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Congratulatory and condolence payments according to company policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 font-cormorant">
            Contact & Address
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-cormorant text-slate-900 mb-4">
                  Main Phone
                </h3>
                <a
                  href="tel:+82-2-769-1974"
                  className="text-lg text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +82 2 769 1974
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold font-cormorant text-slate-900 mb-4">
                  Fax
                </h3>
                <p className="text-lg text-slate-900">
                  +82 2 769 1976
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-cormorant text-slate-900 mb-4">
                  Email
                </h3>
                <a
                  href="mailto:win@winwaysystems.com"
                  className="text-lg text-blue-600 hover:text-blue-900 transition-colors"
                >
                  win@winwaysystems.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold font-cormorant text-slate-900 mb-4">
                  Address
                </h3>
                <p className="text-lg text-slate-900 leading-relaxed">
                  #411, Haengjin Building, 106 International Finance Road,<br />
                  Yeouido-dong, Yeongdeungpo-gu,<br />
                  Seoul, South Korea
                </p>
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=106%20International%20Finance%20Road%20Yeouido%20Seoul&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Winway Inc. Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}