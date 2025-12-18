import { useState, useRef, useEffect } from "react";
import IDEImage from "@/images/architecture/IDE.png";


/* -------------------------------------------------
   Fade-in animation wrapper
-------------------------------------------------- */
function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------
   KEY FEATURES — SPIDERGEN (7 ITEMS)
-------------------------------------------------- */
const SPIDERGEN_KEY_FEATURES = [
  {
    title: "Multi-Platform Development",
    list: [
      "Develop applications for Web, Mobile, and Desktop from a single shared codebase.",
      "Unified architecture reduces fragmentation and accelerates multi-device delivery.",
    ],
  },
  {
    title: "WYSIWYG Visual Editor",
    list: [
      "Drag-and-drop layout designer with real-time simulation.",
      "Integrated debugger and preview engine for instant development feedback.",
    ],
  },
  {
    title: "Figma Design Integration",
    list: [
      "Import UI assets directly from Figma into SpiderGen.",
      "Automatically convert design components into fully usable interface elements.",
    ],
  },
  {
    title: "High-Performance Financial Components",
    list: [
      "HTML5-based components optimized for real-time trading applications.",
      "High-performance grid engines designed for large-volume financial data updates.",
    ],
  },
  {
    title: "Built-In Deployment & Server Management",
    list: [
      "Publish updated builds instantly with built-in web server tools.",
      "Manage versions, configurations, and operational deployments seamlessly.",
    ],
  },
  {
    title: "Comprehensive Documentation",
    list: [
      "Complete manuals covering UI design, scripting, APIs, and deployment workflows.",
    ],
  },
  {
    title: "Team Development Support",
    list: [
      "Integrated Git version control for team-based development and code governance.",
    ],
  },
];

/* -------------------------------------------------
   PAGE COMPONENT — EXACT SAME STRUCTURE AS TEMPLATE
-------------------------------------------------- */
type SectionId = "overview" | "key-features";

export default function SpiderGenIDEPage() {
  const [currentSection, setCurrentSection] = useState<SectionId>("overview");
  const [openKeyFeature, setOpenKeyFeature] = useState<number | null>(null);

  const scrollToSection = (sectionId: SectionId) => {
    setCurrentSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white pt-16">

      {/* HERO (kept simple like original template) */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-cormorant ">
              SpiderGen | Unified Multi-Platform Development
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              IDE designed to enable rapid development of applications that run seamlessly across Web, Mobile, and Desktop platforms—using a single source code base.
            </p>

            {/* NAVIGATION */}
            <div className="flex flex-wrap gap-6 border-t border-slate-600 pt-6 justify-center mt-10">
              <button
                onClick={() => scrollToSection("overview")}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${currentSection === "overview"
                  ? "text-white border-white"
                  : "text-slate-300 border-transparent hover:text-white"
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("key-features")}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${currentSection === "key-features"
                  ? "text-white border-white"
                  : "text-slate-300 border-transparent hover:text-white"
                  }`}
              >
                Key Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
   OVERVIEW — Staggered L/R Animation (2 sections)
-------------------------------------------------- */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Overview 1 — Left */}
          <FadeIn delay={0}>
            <div className="max-w-4xl">
              <h3 className="text-sm font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                Integrated Multi-Platform Development Environment
              </h3>
              <p className="text-4xl font-cormorant text-slate-900 leading-[1.65]">
                SpiderGen is a unified development environment designed to build
                high-performance applications for Web, Mobile, and Desktop—
                all from a single codebase. Its powerful simulation engine and
                real-time debugging tools dramatically accelerate development
                cycles while ensuring consistent UI behavior across platforms.
              </p>
            </div>
          </FadeIn>

          {/* Overview 2 — Right */}
          <FadeIn delay={120}>
            <div className="max-w-4xl ml-auto text-right">
              <h3 className="text-sm font-semibold text-slate-500 mb-4 tracking-widest uppercase">
                Professional-Grade UI, Workflow & Deployment Tools
              </h3>
              <p className="text-4xl font-cormorant text-slate-900 leading-[1.65]">
                With its WYSIWYG editor, responsive-design support, financial-grade
                UI components, and integrated deployment tools, SpiderGen enables
                development teams to deliver robust applications efficiently and
                collaboratively—ensuring the highest standards of performance and
                usability across devices.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>


      {/* -------------------------------------------------
               KEY FEATURES — Accordion (same format as template)
            -------------------------------------------------- */}
      <section id="key-features" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <header className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-cormorant font-semibold text-slate-900">
              Key Features
            </h2>
          </header>

          <div className="divide-y divide-slate-300">
            {SPIDERGEN_KEY_FEATURES.map((block, idx) => (
              <article key={idx} className="py-8">

                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenKeyFeature(prev => prev === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-slate-900">
                    {block.title}
                  </h3>

                  <i
                    className={`ri-arrow-down-s-line text-2xl transition-transform duration-200 ${openKeyFeature === idx ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Expanded Block */}
                {openKeyFeature === idx && (
                  <div className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2">
                      {block.list.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
   STRENGTHS OF SPIDERGEN — NUMBERED LIST
================================ */}
      <section
        id="strengths-spidergen"
        className="py-24 bg-slate-900 border-t border-slate-200 text-center"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-20">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white">
              Why SpiderGen ?
            </h2>
          </header>

          {/* Numbered Items */}
          <ol className="space-y-12">
            {[
              {
                title: "OSMU Flexibility",
                description:
                  "Develop applications independently of OS or device type. Extend or customize built-in components to meet specialized requirements."
              },
              {
                title: "High Speed & Performance",
                description:
                  "Native-level runtime performance with robust handling of high-volume, real-time data."
              },
              {
                title: "Advanced UI Capabilities",
                description:
                  "Rich UI editing tools, combined with Figma integration and automated asset conversion, boost development productivity."
              },
              {
                title: "Operational Efficiency",
                description:
                  "Web-standards-based IDE ensures short learning curves, high productivity, and simplified maintenance."
              },
              {
                title: "Proven Reliability",
                description:
                  "Backed by extensive experience building high-performance trading and financial applications for major institutions."
              }
            ].map((item, index) => (
              <li
                key={item.title}
                className="pb-10 border-b-[0.5px] border-slate-400"
              >
                <FadeIn delay={index * 120}>
                  <div className="flex items-start">
                    {/* Big number */}
                    <div className="mr-6 md:mr-10 flex-shrink-0">
                      <span
                        className="text-5xl md:text-6xl font-cormorant text-white"
                        style={{ fontWeight: 900 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title + Description */}
                    <div className="flex-1 text-left">
                      <h3 className="text-xl md:text-3xl font-bold font-cormorant text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-white leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>

        </div>
      </section>
      {/* ================================
   ARCHITECTURE
================================ */}
      <section
        id="architecture"
        className="py-28 bg-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-slate-900">
              Architecture
            </h2>
          </header>

          {/* Architecture Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <img
                src={IDEImage}
                alt="SpiderGen Architecture Diagram"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
