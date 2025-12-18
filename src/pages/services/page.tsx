
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
      title: 'FX DMA Hub',
      description: 'Institutional-grade FX Direct Market Access hub providing low-latency connectivity to global liquidity providers, unified pricing, and intelligent execution.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20server%20platform%20infrastructure%20with%20multiple%20server%20racks%2C%20high-performance%20computing%20systems%2C%20enterprise%20data%20center%20environment%2C%20silver%20and%20navy%20color%20scheme%2C%20minimalist%20design%20with%20clean%20lines%2C%20sophisticated%20technology%20workspace%20with%20metallic%20surfaces&width=400&height=300&seq=server-platform&orientation=landscape',
      path: '/services/fx-dma-hub'
    },
    {
      title: 'KRX Equity & ETF Reference Data',
      description: 'Comprehensive reference data for KRX-listed equities and ETFs, covering corporate actions, dividends, IPO events, ownership structure, and key market classifications for institutional use.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20trading%20platform%20interface%20on%20smartphones%20and%20tablets%2C%20modern%20mobile%20app%20design%20with%20trading%20charts%20and%20order%20management%2C%20professional%20mobile%20technology%20with%20silver%20and%20navy%20color%20palette%2C%20sleek%20device%20displays%20with%20financial%20applications&width=400&height=300&seq=mobile-platform&orientation=landscape',
      path: '/services/krx-reference'
    },
    {
      title: 'Korean Fund Information',
      description: 'English-language reference data for Korea-domiciled funds, including fund identifiers, management company details, fund structure, and core investment attributes.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20PC%20client%20trading%20platform%20with%20multiple%20monitors%20displaying%20advanced%20trading%20interfaces%2C%20desktop%20workstation%20setup%2C%20sophisticated%20trading%20software%20with%20charts%20and%20order%20management%2C%20silver%20and%20navy%20corporate%20design%20with%20clean%20modern%20aesthetics&width=400&height=300&seq=pc-client-platform&orientation=landscape',
      path: '/services/k-fund-info'
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
      <section
        ref={heroRef}
        className="relative pt-24 pb-8 min-h-[500px] flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=dark%20navy%20financial%20technology%20workspace%20multiple%20monitors%20advanced%20systems%20deep%20blue%20color%20scheme%20professional%20tech%20environment&width=1200&height=600&seq=platforms-hero-bg&orientation=landscape"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark navy overlay */}
          <div className="absolute inset-0 bg-[#0a1325]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto text-center">

            {/* Top label */}
            <p
              className={`text-sm font-bold mb-4 tracking-wide uppercase font-inter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#FFFFFF", transitionDelay: "0ms" }}
            >
              WHAT WE DO
            </p>

            {/* Title */}
            <h1
              className={`text-6xl md:text-7xl font-semibold mb-6 font-cormorant leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#FFFFFF", transitionDelay: "200ms" }}
            >
              Services
            </h1>

            {/* Description */}
            <p
              className={`text-lg font-bold leading-relaxed font-inter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#FFFFFF", transitionDelay: "400ms" }}
            >
             Institutional-grade FX market access and reference data for Korea’s financial markets.
            </p>

            {/* Categories Navigation Bar */}
            <div
              className={`mt-10 border-t border-slate-600 pt-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex flex-wrap gap-6 justify-center text-sm font-medium text-slate-300">

                {[
                  { label: "FX DMA Hub", link: "/services/fx-dma-hub" },
                  { label: "KRX Equity & ETF Reference Data", link: "/services/krx-reference" },
                  { label: "Korean Fund Information", link: "/services/k-fund-info" },
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
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Minimal 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service)}
                className="group cursor-pointer border border-slate-200 p-10 bg-white hover:shadow-sm transition-all flex flex-col"
              >
                {/* Title */}
                <h3 className="text-[30px] font-cormorant font-extrabold text-slate-900 mb-4 leading-snug tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bottom-Aligned Learn More */}
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
