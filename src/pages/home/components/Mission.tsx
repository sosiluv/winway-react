import { useEffect, useRef, useState } from "react";

/* =======================
   LOGO IMPORTS
======================= */

// Banks
import KBKookminBank from "../../../images/logos/kookmin_bank.png";
import IBK from "../../../images/logos/Industrial_Bank_of_Korea.svg";
import NonghyupBank from "../../../images/logos/nonghyup_bank.png";
import ShinhanBank from "../../../images/logos/shinhan_bank.png";
import Woori from "../../../images/logos/woori.png";
import DB from "../../../images/logos/DB.jpg";
import Deutsche from "../../../images/logos/Deutsche_Bank.svg";
import Citi from "../../../images/logos/Citi.svg";

// Securities / Institutions
import SamsungSecurities from "../../../images/logos/samsung_securities.png";
import MiraeAssetSecurities from "../../../images/logos/miraeasset_securities.png";
import Meritz from "../../../images/logos/Meritz_Securities.png";
import KBSecurities from "../../../images/logos/kb_securities.png";
import NHInvestment from "../../../images/logos/nonghyup_securities.png";
import Hana from "../../../images/logos/hana_securities.png";
import Yuanta from "../../../images/logos/yuanta_securities.png";
import Kiwoom from "../../../images/logos/kiwoom.png";
import SKSecurities from "../../../images/logos/sk_securities.png";
import Daishin from "../../../images/logos/daishin_securities.png";
import Hanwha from "../../../images/logos/hanhwa.png";
import Kyobo from "../../../images/logos/Kyobo.svg";
import KoreaInvestment from "../../../images/logos/korea_investment_securities.png";
import Leading from "../../../images/logos/leading_securities.png";
import CME from "../../../images/logos/CME.png";
import Koscom from "../../../images/logos/koskom.png";
import Eugene from "../../../images/logos/eugene.png";
import NHFutures from "../../../images/logos/nonghyup_futures.png";
import SamsungFutures from "../../../images/logos/samsung_futures.png";
import Lotte from "../../../images/logos/lotte.png";
import Equinix from "../../../images/logos/Equinix.png";
import NHIT from "../../../images/logos/NHIT.png";

/* =======================
   CLIENT PAGES 
======================= */

const pages = [
  [
    { name: "KB Kookmin Bank", logo: KBKookminBank },
    { name: "Industrial Bank of Korea", logo: IBK },
    { name: "NongHyup Bank", logo: NonghyupBank },
    { name: "Shinhan Bank", logo: ShinhanBank },

    { name: "Samsung Securities", logo: SamsungSecurities },
    { name: "MiraeAsset Securities", logo: MiraeAssetSecurities },
    { name: "Meritz Securities", logo: Meritz },
    { name: "KB Securities", logo: KBSecurities },

    { name: "NH Investment & Securities", logo: NHInvestment },
    { name: "Hana Securities", logo: Hana },

    // 🔁 REPLACED HERE
    { name: "Deutsche Bank", logo: Deutsche },
    { name: "Citi", logo: Citi },
    { name: "CME", logo: CME },

    { name: "Kiwoom Securities", logo: Kiwoom },
    { name: "Hanwha Securities", logo: Hanwha },
    { name: "Kyobo", logo: Kyobo },
  ],
  [
    { name: "Woori Bank", logo: Woori },
    { name: "DB", logo: DB },

    // moved out from page 1
    { name: "Yuanta Securities", logo: Yuanta },
    { name: "SK Securities", logo: SKSecurities },
    { name: "Daishin Securities", logo: Daishin },

    { name: "Korea Investment & Securities", logo: KoreaInvestment },
    { name: "Leading Securities", logo: Leading },
    { name: "Koscom", logo: Koscom },

    { name: "Eugene", logo: Eugene },
    { name: "NH Futures", logo: NHFutures },
    { name: "Samsung Futures", logo: SamsungFutures },
    { name: "Lotte", logo: Lotte },

    { name: "Equinix", logo: Equinix },
    { name: "NongHyup IT", logo: NHIT },
  ],
];



/* =======================
   VISUAL NORMALIZATION (UPDATED)
======================= */

const scaleMap: Record<string, string> = {
  "Meritz Securities": "scale-[2.5]",
  "Citi": "scale-75",
  "KB Kookmin Bank": "scale-125",

  "KB Securities": "scale-150",
  "Korea Investment & Securities": "scale-110",
  Kyobo: "scale-50",
  Equinix: "scale-60",
  "Kiwoom Securities": "scale-90",
  "SK Securities": "scale-90",
  "Yuanta Securities": "scale-90",
  "Deutsche Bank": "scale-[1.2]",
  "CME": "scale-[1.2]",
};

const blendMap: Record<string, string> = {
  "MiraeAsset Securities": "mix-blend-multiply",
};

/* =======================
   COMPONENT
======================= */

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const page = pages[pageIndex];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 font-cormorant">
            Engineering the Core of Modern Finance
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl">
            For over two decades, we have built the infrastructure behind Korea&apos;s capital markets,
            trusted by leading financial institutions.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-4 gap-x-14 gap-y-10 mb-14">
          {page.map((client, index) => (
            <div
              key={client.name}
              className={`flex items-center justify-center
                transition-all duration-[1000ms] ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="w-48 h-20 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-h-full max-w-full object-contain
                    ${scaleMap[client.name] || ""}
                    ${blendMap[client.name] || ""}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            disabled={pageIndex === 0}
            onClick={() => setPageIndex((p) => p - 1)}
            className="w-11 h-11 rounded-full border border-gray-900 text-xl font-bold
              disabled:opacity-30 hover:bg-gray-900 hover:text-white transition"
          >
            ←
          </button>

          <div className="flex gap-3">
            {pages.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full
                  ${i === pageIndex ? "bg-gray-900 scale-125" : "bg-gray-300"}`}
              />
            ))}
          </div>

          <button
            disabled={pageIndex === pages.length - 1}
            onClick={() => setPageIndex((p) => p + 1)}
            className="w-11 h-11 rounded-full border border-gray-900 text-xl font-bold
              disabled:opacity-30 hover:bg-gray-900 hover:text-white transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
