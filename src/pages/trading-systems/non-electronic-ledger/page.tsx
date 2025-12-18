
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NonElectronicLedgerPage() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: 'Order and Trade Management',
      details: [
        'Average orders, GTC orders',
        'Order registration, matching, correction, and cancellation',
        'Transfer of trade history and position rollover',
        'Liquidation of expired contracts',
        'Futures final settlement, option exercise, and assignment processing'
      ]
    },
    {
      title: 'Margin, Fee, and Credit Management',
      details: [
        'Automated calculation of margin, profit/loss, and commission',
        'Gross, Net, Spread margin, Credit',
        'Half Turn and Round Turn commission models',
        'FCM account, commission, and margin management',
        'Trade margin and additional margin management',
        'Support for as-needed margin requirements'
      ]
    },
    {
      title: 'Account and Product Management',
      details: [
        'Account-based and product-based operations',
        'Withholding accounts, proprietary accounts, and broker accounts',
        'Broker account management functions',
        'Support for periodic and non-periodic settlement products'
      ]
    },
    {
      title: 'Settlement and Reporting',
      details: [
        'Daily and periodic settlement',
        'Support for periodic and non-periodic product transactions',
        'Real-time calculation and record of settlements'
      ]
    },
    {
      title: 'Online Trading and Operational Efficiency',
      details: [
        'Support for non-periodic account trading of online products',
        'Minimization of commission cost and operational workload through online trading support'
      ]
    }
  ];

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://readdy.ai/api/form/d3rih1tunt03ug6cuo2g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your inquiry. We will contact you soon.');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage('There was an error submitting your inquiry. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(features.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(features.length / 3)) % Math.ceil(features.length / 3));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
       <section className="relative py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-cormorant">
              GLOBAL DERIVATIVES NON-ELECTRONIC TRADING LEDGER SYSTEMS
            </h1>
             <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Traditional ledger-based trading systems for non-electronic derivatives transactions, providing comprehensive record-keeping and compliance management for institutional clients.
            </p>
            
             {/* Navigation Categories - Minimal Design */}
            <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center">
              <button
                onClick={() => scrollToSection('key-features')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                Key Features
              </button>
              <button
                onClick={() => scrollToSection('system-configuration')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                System Configuration
              </button>
              <button
                onClick={() => scrollToSection('non-electronic-account')}
                className="text-white hover:text-slate-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-white pb-1"
              >
                Non-electronic Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-20 bg-gradient-to-r from-slate-100 to-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-8 font-cormorant">
              Key Features
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our non-electronic trading ledger systems provide comprehensive record-keeping 
              and compliance management for traditional derivatives transactions.
            </p>
          </div>
          
          {/* Desktop View - All 5 boxes in one line */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center font-cormorant">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet View - Swipeable carousel */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(features.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.slice(slideIndex * 3, slideIndex * 3 + 3).map((feature, index) => (
                          <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center font-cormorant">
                              {feature.title}
                            </h3>
                            <ul className="space-y-3">
                              {feature.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-slate-600 mt-2 flex-shrink-0"></div>
                                  <span className="text-slate-700 text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                  disabled={currentSlide === 0}
                >
                  <i className="ri-arrow-left-s-line text-lg"></i>
                </button>

                {/* Dots indicator */}
                <div className="flex space-x-2">
                  {Array.from({ length: Math.ceil(features.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 transition-colors cursor-pointer ${
                        currentSlide === index ? 'bg-slate-600' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                  disabled={currentSlide === Math.ceil(features.length / 3) - 1}
                >
                  <i className="ri-arrow-right-s-line text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Configuration Section */}
      <section id="system-configuration" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-800 mb-6 font-cormorant">
              System Configuration
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive system architecture designed for optimal performance and scalability. Our configuration management ensures seamless integration with existing infrastructure while providing flexible customization options for diverse trading environments and regulatory requirements.
            </p>
          </div>
          <div className="mt-12">
            <div className="w-full bg-slate-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Complex%20system%20configuration%20diagram%20showing%20network%20architecture%2C%20database%20connections%2C%20server%20infrastructure%2C%20trading%20system%20components%2C%20professional%20technical%20diagram%20with%20clean%20lines%2C%20silver%20and%20navy%20color%20scheme%2C%20modern%20enterprise%20system%20design%20with%20interconnected%20modules%20and%20data%20flow&width=1200&height=600&seq=system-config-diagram&orientation=landscape"
                alt="System Configuration Diagram"
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Non-electronic Account Section */}
      <section id="non-electronic-account" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-800 mb-6 font-cormorant">
              Non-electronic Account
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Traditional account management system supporting manual transaction processing and comprehensive audit trails. Designed for institutions requiring non-electronic trading capabilities with full regulatory compliance and detailed record-keeping for all account activities and position management.
            </p>
          </div>
          <div className="mt-12">
            <div className="w-full bg-slate-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Non-electronic%20account%20management%20system%20diagram%20showing%20traditional%20ledger%20processes%2C%20account%20hierarchy%2C%20manual%20transaction%20workflows%2C%20compliance%20tracking%2C%20professional%20financial%20diagram%20with%20clean%20design%2C%20silver%20and%20navy%20color%20palette%2C%20structured%20account%20management%20visualization&width=1200&height=600&seq=non-electronic-account-diagram&orientation=landscape"
                alt="Non-electronic Account Management Diagram"
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 font-cormorant">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Experience next-generation trading technology with our comprehensive suite of solutions. 
            Join leading financial institutions worldwide in revolutionizing their trading operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => navigate('/solutions')}
              className="bg-white text-slate-800 px-8 py-4 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap inline-flex items-center gap-2 cursor-pointer"
            >
              <i className="ri-rocket-line text-lg"></i>
              Explore Solutions
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 whitespace-nowrap inline-flex items-center gap-2 cursor-pointer"
            >
              <i className="ri-eye-line text-lg"></i>
              View Projects
            </button>
          </div>
          <p className="text-slate-400 text-sm">
            Trusted by 500+ financial institutions globally
          </p>
        </div>
      </section>

      {/* Footer Company Info */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4 font-cormorant">KOSCOM</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of financial technology solutions, specializing in trading systems, 
                market data services, and comprehensive financial infrastructure for global markets.
              </p>
              <div className="space-y-2 text-slate-400">
                <p><i className="ri-map-pin-line mr-2"></i>Seoul, South Korea</p>
                <p><i className="ri-phone-line mr-2"></i>+82-2-767-7114</p>
                <p><i className="ri-mail-line mr-2"></i>info@koscom.co.kr</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-cormorant">Solutions</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => navigate('/trading-systems')} className="hover:text-white transition-colors cursor-pointer">Trading Systems</button></li>
                <li><button onClick={() => navigate('/platforms')} className="hover:text-white transition-colors cursor-pointer">Platforms</button></li>
                <li><button onClick={() => navigate('/solutions')} className="hover:text-white transition-colors cursor-pointer">All Solutions</button></li>
                <li><button onClick={() => navigate('/projects')} className="hover:text-white transition-colors cursor-pointer">Projects</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-cormorant">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors cursor-pointer">About Us</button></li>
                <li><button onClick={() => navigate('/winway')} className="hover:text-white transition-colors cursor-pointer">WinWay</button></li>
                <li><a href="https://readdy.ai/?origin=logo" className="hover:text-white transition-colors">Website Builder</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 KOSCOM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
