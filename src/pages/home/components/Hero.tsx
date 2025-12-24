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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b1324] text-[#e8ebf0]">
      {/* Background — “Arvo Pärt” gradation: contemplative, minimal, luminous */}
      <div
        className="absolute inset-0"
        style={{
          background: `
      radial-gradient(
        circle at 50% 10%,
        rgba(245, 247, 250, 0.9) 0%,
        rgba(200, 210, 230, 0.7) 25%,
        rgba(60, 80, 120, 0.6) 55%,
        rgba(15, 20, 40, 0.9) 100%
      )
    `,
          backdropFilter: 'blur(6px)',
        }}
      />

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1f]/40 via-[#0a0f1f]/50 to-[#050914]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 translate-y-[16vh] md:translate-y-[22vh] lg:translate-y-[27vh]">
        {/* Company Name */}
        <div
          className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <h3 className="text-lg md:text-xl font-cormorant font-semibold tracking-[0.35em] text-[#d1d5db] mb-4">
            {t('companyName')}
          </h3>
        </div>

        {/* Divider Line */}
        <div
          className={`mx-auto mb-10 h-[1.5px] w-[45%] max-w-md bg-gradient-to-r from-transparent via-[#e5e8ed]/80 to-transparent transition-all duration-[1500ms] ${visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
        ></div>

        {/* Title */}
        <div
          className={`transition-all duration-[2000ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[600ms] transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cormorant leading-snug mb-6 text-[#f8f9fa] tracking-[0.04em] drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)] whitespace-pre-line">
            {t('heroTitle')}
            {'\n'}
            {t('heroSubtitle')}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[1000ms] transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <p className="text-base md:text-lg text-[#e5e8ec]/95 font-light tracking-[0.12em]">
            {t('heroDescription')}
          </p>
        </div>
      </div>
    </section>
  );
}
