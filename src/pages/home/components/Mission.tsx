import { useEffect, useRef, useState } from "react";


// 🏦 Import local logo images
import KB from "../../../images/logos/KB.png";
import IBK from "../../../images/logos/Industrial_Bank_of_Korea.svg";
import NH from "../../../images/logos/Nonghyup.png";
import Hana from "../../../images/logos/Hana_Financial_Investment.png";
import Mirae from "../../../images/logos/Mirae_Asset.png";
import Samsung from "../../../images/logos/Samsung_Securities.svg";
import Meritz from "../../../images/logos/Meritz_Securities.png";
import Kyobo from "../../../images/logos/Kyobo.svg";
import Shinhan from "../../../images/logos/Shinhan_Bank.png";
import Deutsche from "../../../images/logos/Deutsche_Bank.svg";
import Citi from "../../../images/logos/Citi.svg";
import Eugene from "../../../images/logos/Mirae_Asset.png"; // replace when real Eugene logo available

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: "KB Kookmin Bank", logo: KB },
    { name: "IBK Industrial Bank of Korea", logo: IBK },
    { name: "NH Nonghyup Bank", logo: NH },
    { name: "Hana Bank / Hana Financial Investment", logo: Hana },
    { name: "Mirae Asset Securities", logo: Mirae },
    { name: "Samsung Securities", logo: Samsung },
    { name: "Meritz Securities", logo: Meritz },
    { name: "Kyobo Securities", logo: Kyobo },
    { name: "Shinhan Investment Corporation", logo: Shinhan },
    { name: "Eugene Investment & Futures", logo: Eugene },
    { name: "Deutsche Bank", logo: Deutsche },
    { name: "Citi Group Global Markets", logo: Citi },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 font-cormorant leading-tight">
            Engineering the Core of Modern Finance
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-semibold max-w-4xl leading-relaxed">
            For over two decades, we have built the infrastructure behind Korea's capital markets, trusted by leading financial institutions.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-white p-8 flex items-center justify-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`h-14 w-auto object-contain transition-transform duration-300 ${client.name === "Samsung Securities"
                    ? "scale-[2.5]"
                    : client.name === "Meritz Securities"
                      ? "scale-[3]"
                      : "scale-100"
                  }`}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
            </div>
          ))}
        </div>

        {/* ⭐ Show More Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/projects"
            className="group mt-12 inline-flex items-center text-lg font-semibold text-slate-900 border border-slate-900 px-8 py-3 hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            Explore Our Projects <span class="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
