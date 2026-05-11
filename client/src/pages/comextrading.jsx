import { Helmet } from "react-helmet-async";
import {
  FiTrendingUp,
  FiZap,
  FiShield,
  FiBarChart2,
  FiClock,
  FiGlobe,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import comexHero from "../assests/comext.png";
import trading from "../assests/trading.png";

const comexFeatures = [
  {
    icon: <FiTrendingUp />,
    title: "High Leverage",
    desc: "Trade global metals futures with powerful leverage on Tredixo.",
    points: [
      "COMEX Gold: 200X leverage",
      "COMEX Silver: 200X leverage",
      "Copper: 100X leverage",
    ],
  },
  {
    icon: <FiClock />,
    title: "23-Hour Trading",
    desc: "COMEX markets trade almost round-the-clock across global sessions.",
    points: [
      "Sunday 6 PM EST to Friday 5 PM EST",
      "Only 1 hour daily maintenance",
      "Trade during Indian market hours",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Global Price Discovery",
    desc: "Access global benchmark prices for precious and base metals.",
    points: [
      "International metal prices",
      "High liquidity",
      "Global commodity trading access",
    ],
  },
  {
    icon: <FiBarChart2 />,
    title: "Real-Time COMEX Prices",
    desc: "Track gold, silver, copper and metals futures with live market movement.",
    points: [
      "Live commodity prices",
      "Clean charting tools",
      "Fast execution",
    ],
  },
];

const comexCommodities = [
  {
    title: "COMEX Gold (GC)",
    desc: "The global gold price benchmark with a contract size of 100 troy ounces. Highly liquid and popular for COMEX gold trading.",
  },
  {
    title: "COMEX Silver (SI)",
    desc: "Global silver price discovery with a contract size of 5,000 troy ounces. Known for higher volatility and active speculation.",
  },
  {
    title: "Copper (HG)",
    desc: "Often called Dr. Copper because it reflects global economic trends. Contract size is 25,000 pounds.",
  },
  {
    title: "Platinum (PL)",
    desc: "A precious metal used in automotive, jewelry and industrial applications, offering unique global commodity trading opportunities.",
  },
];

const faqs = [
  {
    q: "COMEX gold vs MCX gold?",
    a: "COMEX is the global price setter and is denominated in USD, while MCX reflects COMEX prices with currency conversion into INR.",
  },
  {
    q: "Can I do COMEX trading in Indian day time?",
    a: "Yes. COMEX is operational for nearly 23 hours a day, making COMEX trading accessible from India during multiple global sessions.",
  },
  {
    q: "How much capital do I need to trade COMEX?",
    a: "With 200X leverage, some traders may start COMEX gold trading with around $50-$100, but for better risk management we suggest $500-$1000.",
  },
];

const ComexTrading = () => {
  return (
    <>
      <Helmet>
        <title>
          COMEX Trading India | Trade Gold, Silver, Copper Futures - Tredixo
        </title>

        <meta
          name="description"
          content="Trade COMEX commodities (gold, silver, copper) with zero commission & 200X leverage. Access global commodity markets 24/5. Start COMEX trading on Tredixo now."
        />

        <meta
          name="keywords"
          content="COMEX trading, COMEX gold trading, COMEX silver futures, Copper futures trading, Global commodity trading, COMEX Trading India, Gold futures trading, Silver futures trading, Tredixo COMEX trading"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.info/comex-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta
          property="og:title"
          content="COMEX Trading India | Trade Gold, Silver, Copper Futures - Tredixo"
        />
        <meta
          property="og:description"
          content="Trade COMEX gold, silver, copper and global commodities with zero commission, real-time prices and up to 200X leverage on Tredixo."
        />
        <meta property="og:url" content="https://tredixo.info/comex-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="COMEX Trading India | Trade Gold, Silver, Copper Futures - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Access COMEX gold, silver and copper futures trading with real-time global commodity prices and up to 200X leverage."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "COMEX Trading India",
            url: "https://tredixo.info/comex-trading",
            description:
              "Trade COMEX commodities including gold, silver, copper and platinum futures with real-time prices and up to 200X leverage on Tredixo.",
            publisher: {
              "@type": "Organization",
              name: "Tredixo",
              url: "https://tredixo.info",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                COMEX Trading India
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Trade Global Gold,
                <br />
                <span className="text-[#52ff1f]">
                  Silver & Copper Futures
                </span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Trade COMEX — one of the world’s biggest precious metals futures
                exchanges. Buy and sell gold, silver, copper, platinum and
                other industrial metals with up to 200X leverage on Tredixo.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start COMEX Trading <FiArrowRight />
                </a>

                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=demo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#52ff1f]/40 bg-[#52ff1f]/10 px-8 py-3.5 font-semibold text-[#52ff1f] transition hover:bg-[#52ff1f] hover:text-black"
                >
                  Try Demo Account
                </a>
              </div>
            </div>

            <ImageBox image={comexHero} alt="COMEX Trading India" />
          </div>
        </section>

        {/* WHAT IS COMEX */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ImageBox image={trading} alt="What is COMEX Trading" />

            <div>
              <SectionLabel>What is COMEX Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Global Metals
                <br />
                <span className="text-[#52ff1f]">Futures Exchange</span>
              </h2>

              <p className="text-gray-300 mt-6 leading-8">
                COMEX is the world’s largest precious metals exchange, with gold
                and silver benchmarks used across the world. It allows traders to
                access international metals pricing, deeper liquidity and
                nearly 23-hour market participation.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {[
                  "International price discovery",
                  "Higher liquidity than local markets",
                  "23 hours of trading, 5 days a week",
                  "Direct global metals exposure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#0b0f16] p-5 hover:bg-[#0f1720] transition"
                  >
                    <div className="flex items-start gap-3">
                      <FiCheckCircle className="text-[#52ff1f] mt-1 shrink-0" />
                      <span className="font-medium text-gray-200">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY TRADE */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>Why Trade COMEX on Tredixo?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                High Leverage,
                <br />
                <span className="text-[#52ff1f]">
                  Global Prices & Long Market Hours
                </span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Tredixo gives users access to COMEX gold, silver and copper
                futures with global commodity prices, smooth execution and
                powerful leverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comexFeatures.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[26px] bg-[#0b0f16] p-6 min-h-[330px] transition-all duration-300 hover:-translate-y-2 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.11),transparent_45%)] opacity-70" />

                  <div className="relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f] text-xl">
                      {item.icon}
                    </div>

                    <span className="text-sm text-[#52ff1f] font-semibold">
                      0{index + 1}
                    </span>

                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-[#52ff1f] transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-7 text-sm mb-5">
                      {item.desc}
                    </p>

                    <div className="space-y-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <FiCheckCircle className="text-[#52ff1f] mt-1 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[26px] border border-[#52ff1f]/20 bg-[#52ff1f]/5 p-6 text-gray-300 leading-8">
              COMEX markets trade almost round-the-clock from Sunday evening to
              Friday evening, allowing Indian traders to respond to global
              commodity developments in real time.
            </div>
          </div>
        </section>

        {/* COMEX COMMODITIES */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>COMEX Commodities Available</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Trade Global
              <br />
              <span className="text-[#52ff1f]">Metals Futures</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comexCommodities.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] bg-[#0b0f16] p-6 hover:bg-[#0f1720] transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f] mb-5">
                  <FiCheckCircle />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="text-center mb-14">
              <SectionLabel>Frequently Asked Questions</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold">
                COMEX Trading <span className="text-[#52ff1f]">FAQs</span>
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[24px] bg-[#0b0f16] p-6"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-5 font-semibold text-base md:text-lg">
                    {item.q}

                    <span className="text-[#52ff1f] text-2xl group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-gray-400 leading-8">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-6 md:px-10 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start COMEX Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">COMEX With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Access global gold, silver, copper and platinum futures with a
                clean and fast trading experience.
              </p>

              <div className="mt-8">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_rgba(82,255,31,0.28)] transition hover:scale-[1.04]"
                >
                  Start Trading Now <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const HeroBg = () => (
  <>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.15),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.09),transparent_24%)]" />
    <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
  </>
);

const SectionLabel = ({ children }) => (
  <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
    {children}
  </p>
);

const ImageBox = ({ image, alt }) => (
  <div className="flex justify-center">
    <div className="relative w-full max-w-[540px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[360px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />

      <img
        src={image}
        alt={alt}
        className="relative z-10 w-full h-[360px] object-contain"
      />
    </div>
  </div>
);

export default ComexTrading;