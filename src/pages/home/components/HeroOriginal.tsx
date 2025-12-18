
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20glass%20skyscraper%20building%20with%20geometric%20patterns%20and%20reflective%20surfaces%2C%20minimalist%20architecture%2C%20silver%20and%20navy%20blue%20tones%2C%20professional%20financial%20district%20atmosphere%2C%20clean%20lines%20and%20contemporary%20design%2C%20sophisticated%20business%20environment&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          
          {/* Text Content */}
          <div className="text-center max-w-8xl">
              <h3 className="text-xl md:text-2xl text-white mb-6 font-cormorant">
              Winway Systems, Inc.
              </h3>
              <hr></hr>
            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 font-cormorant">
              <span className="block">SOFTWARE SOLUTIONS BUILT FOR</span>
              <span className="block text-white">
                CAPITAL MARKET PROFESSIONALS
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
