
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
      title: 'PROP TRADING PLATFORM',
      description: 'Advanced proprietary trading platform with sophisticated algorithms, real-time market data integration, and comprehensive risk management tools for institutional trading operations.',
      image: 'https://readdy.ai/api/search-image?query=Sophisticated%20proprietary%20trading%20platform%20with%20multiple%20high-resolution%20monitors%20displaying%20complex%20financial%20data%2C%20professional%20traders%20in%20business%20attire%20working%20at%20sleek%20modern%20workstations%2C%20silver%20and%20navy%20color%20scheme%2C%20minimalist%20design%20with%20clean%20lines%2C%20high-tech%20trading%20environment%20with%20geometric%20patterns%20and%20metallic%20surfaces&width=400&height=300&seq=prop-trading&orientation=landscape',
      link: '/solutions/prop-trading-platform'
    },
    {
      title: 'OMS (ORDER MANAGEMENT SYSTEMS)',
      description: 'Comprehensive order management systems providing seamless order routing, execution management, and portfolio tracking capabilities for institutional investment operations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20order%20management%20system%20interface%20with%20sophisticated%20order%20flow%20displays%2C%20institutional%20trading%20desk%20with%20advanced%20monitoring%20equipment%2C%20silver%20and%20navy%20corporate%20design%2C%20minimalist%20workspace%20with%20clean%20typography%2C%20modern%20office%20environment%20with%20metallic%20accents%20and%20geometric%20patterns&width=400&height=300&seq=oms-systems&orientation=landscape',
      link: '/solutions/oms'
    },
    {
      title: 'MARKET DATA PROCESSING SYSTEMS',
      description: 'High-performance market data processing infrastructure with real-time data aggregation, normalization, and distribution capabilities for financial institutions.',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20market%20data%20processing%20systems%20with%20real-time%20financial%20data%20streams%2C%20sophisticated%20data%20visualization%20displays%2C%20professional%20monitoring%20center%20with%20silver%20and%20navy%20color%20palette%2C%20sleek%20modern%20design%20with%20clean%20geometric%20elements%2C%20high-tech%20financial%20technology%20environment&width=400&height=300&seq=market-data&orientation=landscape',
      link: '/solutions/market-data-processing'
    },
    {
      title: 'FIX ENGINE',
      description: 'Ultra-low latency trading systems designed for high-frequency trading operations...',
      image: 'https://readdy.ai/api/search-image?query=Market%20surveillance%20control%20center%20with%20multiple%20screens%20showing%20real-time%20market%20monitoring%20data%2C%20professional%20analysts%20working%20at%20advanced%20surveillance%20workstations%2C%20silver%20and%20navy%20interface%20design%2C%20minimalist%20modern%20surveillance%20room%20with%20metallic%20surfaces%20and%20clean%20architecture&width=400&height=300&seq=surveillance&orientation=landscape',
      link: '/solutions/hipassfix'  
    },

    {
      title: 'WINFEED ENGINE',
      description: 'Comprehensive market surveillance solutions providing real-time monitoring, anomaly detection, and regulatory compliance management for financial market operations.',
      image: 'https://readdy.ai/api/search-image?query=Market%20surveillance%20control%20center%20with%20multiple%20screens%20showing%20real-time%20market%20monitoring%20data%2C%20professional%20analysts%20working%20at%20advanced%20surveillance%20workstations%2C%20silver%20and%20navy%20interface%20design%2C%20minimalist%20modern%20surveillance%20room%20with%20metallic%20surfaces%20and%20clean%20architecture&width=400&height=300&seq=surveillance&orientation=landscape',
      link: '/solutions/winfeedengine' 
    },
    {
      title: 'PRIMA',
      description: 'Enterprise-grade messaging infrastructure with high-throughput message processing, guaranteed delivery, and comprehensive integration capabilities for financial institutions.',
      image: 'https://readdy.ai/api/search-image?query=Enterprise%20messaging%20systems%20infrastructure%20with%20sophisticated%20communication%20networks%2C%20professional%20IT%20operations%20center%20with%20advanced%20monitoring%20displays%2C%20silver%20and%20navy%20corporate%20design%2C%20sleek%20minimalist%20workspace%20with%20geometric%20patterns%20and%20metallic%20elements&width=400&height=300&seq=messaging&orientation=landscape',
      link: '/solutions/prima'
    },
     {
      title: 'CHAMMAE',
      description: 'Enterprise-grade messaging infrastructure with high-throughput message processing, guaranteed delivery, and comprehensive integration capabilities for financial institutions.',
      image: 'https://readdy.ai/api/search-image?query=Enterprise%20messaging%20systems%20infrastructure%20with%20sophisticated%20communication%20networks%2C%20professional%20IT%20operations%20center%20with%20advanced%20monitoring%20displays%2C%20silver%20and%20navy%20corporate%20design%2C%20sleek%20minimalist%20workspace%20with%20geometric%20patterns%20and%20metallic%20elements&width=400&height=300&seq=messaging&orientation=landscape',
      link: '/solutions/chammae'
    },
     {
      title: 'TRUSTMESSENGER ENTERPRISE',
      description: 'Enterprise-grade messaging infrastructure with high-throughput message processing, guaranteed delivery, and comprehensive integration capabilities for financial institutions.',
      image: 'https://readdy.ai/api/search-image?query=Enterprise%20messaging%20systems%20infrastructure%20with%20sophisticated%20communication%20networks%2C%20professional%20IT%20operations%20center%20with%20advanced%20monitoring%20displays%2C%20silver%20and%20navy%20corporate%20design%2C%20sleek%20minimalist%20workspace%20with%20geometric%20patterns%20and%20metallic%20elements&width=400&height=300&seq=messaging&orientation=landscape',
      link: '/solutions/trustmessenger-enterprise'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 min-h-[600px] flex items-end pb-32">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Advanced%20financial%20technology%20solutions%20environment%20with%20multiple%20monitors%20displaying%20sophisticated%20software%20systems%2C%20professional%20technology%20workspace%20with%20modern%20workstations%2C%20silver%20and%20navy%20color%20scheme%2C%20high-tech%20financial%20software%20development%20center%20with%20clean%20modern%20design&width=1200&height=600&seq=solutions-hero-bg&orientation=landscape"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-700/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p
              className={`text-sm font-bold mb-4 tracking-wide uppercase font-inter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '0ms' }}
            >
              WHAT WE DO
            </p>
            <h1
              className={`text-6xl md:text-7xl font-semibold mb-6 font-cormorant leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '200ms' }}
            >
              Solutions
            </h1>
            <p
              className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: '#FFFFFF', transitionDelay: '400ms' }}
            >
              Comprehensive technology solutions designed for financial market professionals.
              Our advanced systems provide the tools and infrastructure needed for successful operations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Services Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-8 font-cormorant">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl">
              We partner with business leaders to drive innovation, transformation, and enduring success that transcends individual transactions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => service.link !== '#' && navigate(service.link)}
              >
                <div className="mb-6 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/90 to-slate-900/85 group-hover:from-slate-900/90 group-hover:via-slate-800/85 group-hover:to-slate-900/80 transition-all duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-slate-800 underline decoration-1 underline-offset-4 group-hover:text-slate-600 group-hover:no-underline transition-all duration-200 cursor-pointer">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Banking Inquiry Section */}
      <section className="py-20 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 font-cormorant">
            Connect with Investment Banking
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