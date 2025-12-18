export default function CTA() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#1b2435] via-[#141b2b] to-[#0d121d] text-[#e6e9ee] overflow-hidden">
      
      {/* Background emblem */}
      <div className="absolute inset-0 flex justify-center items-center opacity-[0.06] select-none">
        <span
          className="text-[#aab2c2] font-bold tracking-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '13rem',
            letterSpacing: '-0.05em',
            lineHeight: 1,
          }}
        >
          WWS
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* CTA title */}
          <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-[#f4f5f7] mb-5 leading-tight">
            Connect with Winway
          </h2>

          {/* Subtitle */}
          <p className="text-[#c8cdd4] text-lg mb-10 leading-relaxed">
            Headquartered in Yeouido, Seoul · CME Group ISV · 21 Years of Excellence <br></br><br></br>
            Email: win@winwaysystems.com <br></br> Tel: +82 2 769 1974
          </p>


        </div>
      </div>
    </section>
  );
}
