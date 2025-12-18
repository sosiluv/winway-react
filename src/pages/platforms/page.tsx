
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function PlatformsPage() {
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
      title: 'SERVER PLATFORM',
      description: 'Robust server infrastructure designed for high-performance trading operations with enterprise-grade reliability, scalability, and security features for institutional financial services.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20server%20platform%20infrastructure%20with%20multiple%20server%20racks%2C%20high-performance%20computing%20systems%2C%20enterprise%20data%20center%20environment%2C%20silver%20and%20navy%20color%20scheme%2C%20minimalist%20design%20with%20clean%20lines%2C%20sophisticated%20technology%20workspace%20with%20metallic%20surfaces&width=400&height=300&seq=server-platform&orientation=landscape',
      path: '/platforms/server-platform'
    },
    {
      title: 'MOBILE PLATFORM',
      description: 'Advanced mobile trading platform optimized for iOS and Android devices, providing seamless trading experience with real-time market data and comprehensive order management capabilities.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20trading%20platform%20interface%20on%20smartphones%20and%20tablets%2C%20modern%20mobile%20app%20design%20with%20trading%20charts%20and%20order%20management%2C%20professional%20mobile%20technology%20with%20silver%20and%20navy%20color%20palette%2C%20sleek%20device%20displays%20with%20financial%20applications&width=400&height=300&seq=mobile-platform&orientation=landscape',
      path: '/platforms/mobile-platform'
    },
    {
      title: 'PC CLIENT PLATFORM',
      description: 'Comprehensive desktop trading platform with advanced charting tools, multi-monitor support, and professional-grade trading interfaces designed for institutional traders and financial professionals.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20PC%20client%20trading%20platform%20with%20multiple%20monitors%20displaying%20advanced%20trading%20interfaces%2C%20desktop%20workstation%20setup%2C%20sophisticated%20trading%20software%20with%20charts%20and%20order%20management%2C%20silver%20and%20navy%20corporate%20design%20with%20clean%20modern%20aesthetics&width=400&height=300&seq=pc-client-platform&orientation=landscape',
      path: '/platforms/pc-client-platform'
    },
    {
      title: 'COMMUNICATION MIDDLEWARE',
      description: 'Enterprise communication middleware solutions providing secure, low-latency connectivity between trading systems, market data feeds, and execution venues for optimal trading performance.',
      image: 'https://readdy.ai/api/search-image?query=Communication%20middleware%20technology%20with%20network%20infrastructure%2C%20data%20flow%20visualization%2C%20enterprise%20connectivity%20systems%2C%20professional%20technology%20environment%20with%20silver%20and%20navy%20color%20scheme%2C%20minimalist%20design%20with%20geometric%20patterns%20and%20metallic%20finishes&width=400&height=300&seq=communication-middleware&orientation=landscape',
      path: '/platforms/communication-middleware'
    }
  ];

  const handleServiceClick = (service: any) => {
    navigate(service.path);
  };

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    fetch('https://readdy.ai/api/form/platform-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(response => {
      if (response.ok) {
        alert('Inquiry submitted successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to submit inquiry. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to submit inquiry. Please try again.');
    });
  };

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
              className={`text-sm font-bold mb-4 tracking-wide uppercase font-inter transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#FFFFFF', transitionDelay: '0ms' }}
            >
              WHAT WE DO
            </p>
            <h1 
              className={`text-6xl md:text-7xl font-semibold mb-6 font-cormorant leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#FFFFFF', transitionDelay: '200ms' }}
            >
              Platforms
            </h1>
            <p 
              className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#FFFFFF', transitionDelay: '400ms' }}
            >
              Comprehensive platform solutions designed for modern financial technology infrastructure.
              Our advanced platforms provide the foundation and tools needed for successful trading operations.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="mb-6 overflow-hidden relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-800/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
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

      {/* Platform Inquiry Section */}
      <section className="py-20 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 font-cormorant">
            Connect with Platform Solutions
          </h2>
          <form 
            id="platform-inquiry"
            data-readdy-form
            onSubmit={handleInquirySubmit}
            className="mt-8"
          >
            <button 
              type="submit"
              className="bg-slate-900 text-white px-8 py-4 font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap inline-flex items-center gap-2"
            >
              Inquire About Our Platforms
              <i className="ri-external-link-line text-lg"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
