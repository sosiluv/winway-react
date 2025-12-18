
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import bgimage from '../../images/image16.jpg';

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
    2021: [
      "Developed Overseas Stock Ledger System",
      "Developed Foreign Currency PR System"
    ],
    2020: [
      "Developed Arbitrage Trading and Order Management System for Securities Firm Traders",
      "Developed Eurex Prisma Margin Calculation Solution and Integrated SPAN/Prisma Margin Solution",
      "Developed Foreign Exchange Form System for Banks"
    ],
    2019: [
      "Developed PC Client–based Bank Foreign Exchange Trading System",
      "Developed Server-Based RMS (Risk Management System)"
    ],
    2018: [
      "Developed High-Volume SMS Distribution and Delivery System",
      "Developed Server-Based OMS (Order Management System)"
    ],
    2017: [
      "Developed Integrated Domestic and Overseas Derivatives HTS, MTS, and Ledger Systems",
      "Developed Futures Ledger System for the Hanoi Exchange (Vietnam Securities)"
    ],
    2016: [
      "Developed PC Client Platform Presto",
      "Developed Prima Portfolio Margin Calculation Solution for Overseas Futures and Options"
    ],
    2015: [
      "Acquired Mobin Co., Ltd. and Introduced Vivace Mobile Platform"
    ],
    2014: [
      "Developed FIX Gateway Solution",
      "Developed MDPS Overseas Market Data Processing Solution",
      "Developed Overseas Stock HTS for 16 Exchanges in Partnership with SunGard",
      "Transferred Overseas Futures & Options Market Data Vendor Business and IDC Partnership to GaemijipSoft Co., Ltd."
    ],
    2013: [
      "Developed MyMQ Server Platform"
    ],
    2012: [
      "Selected as a Government R&D Business Operator",
      "Developed KRX Derivatives HFT (High Frequency Trading) Solution",
      "Developed Overseas Options System",
      "Developed Trust Communication Platform"
    ],
    2011: [
      "Acquired ISV (Independent Software Vendor) Certification from CME Group and Developed FIX SBE 3.0 Interface Solution",
      "Signed Sales Agent Agreement in Korea with Global Data Vendor Interactive Data Corporation (IDC)",
      "Launched Overseas Futures & Options Market Data Vendor Service"
    ],
    2008: [
      "Developed Integrated Domestic and Overseas Futures & Options Ledger System"
    ],
    2007: [
      "Developed Non-Automated Overseas Futures & Options Ledger System"
    ],
    2006: [
      "Established Winway Systems R&D Center",
      "Developed Margin FX System for Brokers and Dealers"
    ],
    2004: [
      "Developed Overseas Futures System and Began ASP Service",
      "Company Founded"
    ]
  };

  const services = [
    {
      title: "Financial Solutions",
      description: "We provide a wide range of solutions essential for stock, derivatives, and foreign exchange trading, including HTS, MTS, market data servers, trading ledgers, external systems, and related applications."
    },
    {
      title: "Financial SI and SM",
      description: "We support the development and operation of IT systems for financial institutions such as securities firms, futures companies, and banks."
    },
    {
      title: "Data Services",
      description: "We offer English-language disclosure information for companies listed on the Korea Exchange."
    },
    {
      title: "Messaging Services",
      description: "By applying our financial trading solution technology, we build C language–based, stable, and high-speed systems for large-scale text message distribution and transmission."
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
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 min-h-[600px] flex items-end pb-32">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Global%20financial%20markets%20skyline%20with%20modern%20skyscrapers%20and%20trading%20centers%2C%20sophisticated%20urban%20landscape%20showcasing%20international%20finance%20districts%2C%20professional%20business%20environment%20with%20glass%20towers%20reflecting%20market%20data%2C%20silver%20and%20navy%20color%20scheme%20with%20clean%20architectural%20lines%20and%20geometric%20patterns&width=1200&height=600&seq=winway-hero-finance-skyline&orientation=landscape"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-700/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p
              className={`text-sm font-bold mb-4 tracking-wide uppercase font-inter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '0ms' }}
            >
              ABOUT US
            </p>
            <h1
              className={`text-6xl md:text-7xl font-semibold mb-6 font-cormorant leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '200ms' }}
            >
              About WinWay
            </h1>
            <p
              className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '400ms' }}
            >
              Innovative financial technology solutions designed to empower capital market professionals with cutting-edge tools and comprehensive platform capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Part 1 - Left aligned */}
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-cormorant text-slate-900 leading-[1.6] mb-10">
              “We are a partner dedicated to contributing to our clients’ continuous growth and enhancement of corporate value.”
            </h2>
            <p className="text-2xl md:text-[25px] font-cormorant leading-[1.7] tracking-wide">
              Winway Systems Co., Ltd. is a specialized software company in the capital market industry,
              focused on financial solutions and system integration (SI). We provide trading systems and solutions
              essential for stock, derivatives, and foreign exchange trading — serving securities firms, futures companies, and banks.
              <br /><br />
              Our services span HTS and MTS platforms, market data FEP, ledger systems, order and risk management,
              and portfolio margin calculation solutions — encompassing the full range of trading technology,
              system development, and consulting services.
            </p>
            <p className="text-2xl md:text-[25px] font-cormorant leading-[1.7] tracking-wide">
              We fully recognize that our ability to develop such diverse systems has been made possible
              through the trust and support of our clients. It is our mission to contribute to their sustainable growth
              and value creation. <br /><br />
              As the first company to introduce online trading for overseas stocks and derivatives to individual investors
              in Korea, Winway has witnessed and contributed to the evolution of the capital market.
              We will continue to help our clients create new business opportunities and achieve enduring success.
            </p>
            <p className="text-xl text-slate-600 mt-10">
              All Executives and Employees of Winway Systems Co., Ltd.
            </p>
          </div>
        </div>
      </section>


      {/* Our History Section - Vertical Timeline */}
      <section className="py-20 bg-stone-100" ref={timelineRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-slate-900 mb-8 font-cormorant text-center">
            Our History
          </h2>

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
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                      {/* Year */}
                      <h3 className="text-4xl font-semibold text-slate-900 mb-2 font-cormorant">
                        {year}
                      </h3>

                      {/* Milestones */}
                      <ul className="space-y-0.5">
                        {history[year as keyof typeof history].map((item, idx) => (
                          <li
                            key={idx}
                            className={`text-slate-700 text-m leading-relaxed ${index % 2 === 0 ? 'text-right' : 'text-left'
                              }`}
                            style={{
                              transitionDelay: `${idx * 100}ms`
                            }}
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-white mb-16 font-cormorant">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
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
          <h2 className="text-4xl font-semibold text-slate-900 mb-8 font-cormorant">
            Who We Look For
          </h2>

          <div className="mb-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We are hiring new and experienced employees on a rolling basis.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Winway, our ideal talent is someone who thinks innovatively (Imagination), collaborates well with teammates (Cooperation), strives for results (Accomplishment), approaches problems creatively (Creativity), and enjoys taking on challenges (Challenge).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 font-cormorant">
                  Recruitment Fields
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Developers for securities, banking, futures, and other financial institutions — including server programs, PC client, and mobile applications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 font-cormorant">
                  Preferred Qualifications
                </h3>
                <ul className="space-y-2 text-slate-700">
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
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 font-cormorant">
                  Hiring Process
                </h3>
                <ol className="space-y-2 text-slate-700">
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
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 font-cormorant">
                  How to Apply
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Submit by email:
                </p>
                <a
                  href="mailto:win@winwaysystems.com"
                  className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                >
                  win@winwaysystems.com
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 font-cormorant">
                  Employee Benefits
                </h3>
                <ul className="space-y-2 text-slate-700">
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
          <h2 className="text-4xl font-semibold text-slate-900 mb-12 font-cormorant">
            Contact & Address
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Main Phone
                </h3>
                <a
                  href="tel:+82-2-769-1974"
                  className="text-lg text-slate-700 hover:text-blue-600 transition-colors"
                >
                  (02) 769-1974/5
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Fax
                </h3>
                <p className="text-lg text-slate-700">
                  (02) 769-1976
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Email
                </h3>
                <a
                  href="mailto:win@winwaysystems.com"
                  className="text-lg text-blue-600 hover:text-blue-700 transition-colors"
                >
                  win@winwaysystems.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Address
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  #411, Haengjin Building, 106 International Finance Road,<br />
                  Yeouido-dong, Yeongdeungpo-gu,<br />
                  Seoul, South Korea
                </p>
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289!2d126.9265!3d37.5265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f7c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2s106%20Gukjegeumyung-ro%2C%20Yeongdeungpo-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Winway Systems Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Winway Systems Section */}
      <section className="py-20 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 font-cormorant">
            Connect with Winway Systems
          </h2>
          <button
            type="button"
            className="bg-slate-900 text-white px-8 py-4 font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap inline-flex items-center gap-2 mt-8"
          >
            Inquire About Our Services
            <i className="ri-external-link-line text-lg"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
