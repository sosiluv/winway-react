import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useTranslation('common');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white pt-16 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, #0b1930 0%, #a6b3c6 50%, #e7eaef 100%)',
      }}
    >
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.12),transparent_70%)]" />

   {/* Content */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  {/* Company Name */}
  <div
    className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    <h3 className="text-xl md:text-2xl text-slate-200 mb-4 font-cormorant tracking-wide font-semibold">
      Winway Systems, Inc.
    </h3>
  </div>

  {/* Elegant Line */}
  <div
    className={`mx-auto mb-10 h-[2px] w-1/2 max-w-md bg-gradient-to-r from-slate-300/0 via-slate-200/80 to-slate-300/0 rounded-full shadow-[0_0_14px_rgba(255,255,255,0.25)] transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] delay-[500ms] transform origin-center ${
      visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
    }`}
  ></div>

  {/* Title */}
  <div
    className={`transition-all duration-[2400ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[900ms] transform ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8 font-cormorant">
      <span className="block">SOFTWARE SOLUTIONS BUILT FOR</span>
      <span className="block text-slate-50">
        CAPITAL MARKET PROFESSIONALS
      </span>
    </h1>
  </div>

  {/* Subtitle */}
  <div
    className={`transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[1400ms] transform ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    <p className="text-lg md:text-xl text-slate-200 mt-4 tracking-wide">
      Empowering global finance through speed, precision, and trust.
    </p>
  </div>
</div>
    </section>
  );
}
