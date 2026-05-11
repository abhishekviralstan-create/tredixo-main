import { Helmet } from "react-helmet-async";
import {
  FiTrendingUp,
  FiZap,
  FiShield,
  FiBarChart2,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import mcxHero from "../assests/mcx.png";
import comex from "../assests/comext.png"
const mcxFeatures = [
  {
    icon: <FiTrendingUp />,
    title: "Massive Leverage",
    desc: "Trade Gold, Silver, Crude Oil and Natural Gas with up to 500X margin on Tredixo.",
    points: [
      "Gold & Silver: 500X margin",
      "Crude Oil: 500X margin",
      "Base Metals: up to 200X",
      "Natural Gas: 500X margin",
    ],
  },
  {
    icon: <FiBarChart2 />,
    title: "Live MCX Market Data",
    desc: "Track live MCX commodity prices, live charts and market depth for active commodity trading.",
    points: [
      "Gold live prices",
      "Silver market movement",
      "Crude Oil charts",
      "Order book depth",
    ],
  },
  {
    icon: <FiZap />,
    title: "Extended Trading Hours",
    desc: "Trade commodities during extended MCX market hours and track global commodity price movements.",
    points: [
      "Gold & Silver: 9 AM to 11:30 PM",
      "Crude Oil: 9 AM to 11:30 PM",
      "Base Metals: 9 AM to 5 PM",
    ],
  },
  {
    icon: <FiShield />,
    title: "Secure Platform",
    desc: "Tredixo focuses on stable access, fast execution and a clean commodity trading experience.",
    points: [
      "Fast order execution",
      "Clean dashboard",
      "Stable platform access",
      "24/7 support",
    ],
  },
];

const mcxCommodities = [
  {
    title: "Gold (MCX)",
    desc: "One of the most traded commodities on MCX. Popular for inflation hedging, currency value protection and gold trading online India.",
  },
  {
    title: "Silver (MCX)",
    desc: "High volatility compared to gold, making it suitable for active intraday traders and silver trading MCX users.",
  },
  {
    title: "Crude Oil (MCX)",
    desc: "Track global oil prices through MCX crude oil futures. Sensitive to geopolitical events and highly active.",
  },
  {
    title: "Natural Gas (MCX)",
    desc: "Linked with energy market movements and useful for traders seeking exposure to gas futures.",
  },
  {
    title: "Copper (MCX)",
    desc: "Copper is widely watched as a global growth indicator and actively traded by speculators and hedgers.",
  },
];

const startSteps = [
  {
    step: "01",
    title: "Create Free Account",
    desc: "Create your account in 10 seconds using your name and mobile number on our MCX trading platform.",
  },
  {
    step: "02",
    title: "Fund Your Account",
    desc: "Deposit using UPI transfer, bank transfer or net banking. Most deposits are reflected quickly.",
  },
  {
    step: "03",
    title: "Select MCX Commodity",
    desc: "Choose from Gold, Silver, Crude Oil, Natural Gas or base metals for MCX commodity trading.",
  },
  {
    step: "04",
    title: "Execute Your Trade",
    desc: "Place market or limit orders with built-in stop-loss and target functionality.",
  },
  {
    step: "05",
    title: "Track & Profit",
    desc: "Monitor your positions and book profits when your targets are achieved.",
  },
];

const faqs = [
  {
    q: "What is the minimum lot size of MCX to trade gold?",
    a: "Lot size varies by commodity contract. For better risk management, we suggest ₹5,000-₹10,000.",
  },
  {
    q: "What are the MCX trading hours?",
    a: "Gold, Silver and Crude Oil trade from 9:00 AM to 11:30 PM while base metals trade from 9:00 AM to 5:00 PM.",
  },
  {
    q: "Is MCX trading safe?",
    a: "Yes. MCX is a SEBI recognised exchange and all trades are cleared by approved clearing corporations.",
  },
];

const MCXtrading = () => {
  return (
    <>
      <Helmet>
        <title>
          MCX Trading Platform | Trade Gold, Silver & Commodities - Tredixo
        </title>

        <meta
          name="description"
          content="Trade MCX commodities (gold, silver, crude oil) with zero brokerage & 500X margin. Real-time MCX prices, instant execution, 24/7 support."
        />

        <meta
          name="keywords"
          content="MCX trading platform, MCX commodity trading, Gold trading online India, Silver trading MCX, Crude oil trading India, commodity trading India, gold trading India, silver commodity trading, natural gas trading India, Tredixo MCX trading"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.info/mcx-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta
          property="og:title"
          content="MCX Trading Platform | Trade Gold, Silver & Commodities - Tredixo"
        />
        <meta
          property="og:description"
          content="Trade Gold, Silver, Crude Oil and commodities with 500X leverage, live MCX prices and instant execution on Tredixo."
        />
        <meta property="og:url" content="https://tredixo.info/mcx-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MCX Trading Platform | Trade Gold, Silver & Commodities - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Trade Gold, Silver, Crude Oil and MCX commodities with live charts, instant execution and 500X leverage."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "MCX Trading Platform",
            url: "https://tredixo.info/mcx-trading",
            description:
              "Trade MCX commodities including gold, silver, crude oil and natural gas with real-time charts, instant execution and 500X leverage on Tredixo.",
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
                MCX Trading Platform Trade 
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
             Gold, Silver 
                <br />
                <span className="text-[#52ff1f]">
               & Commodities
                </span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                The Multi Commodity Exchange (MCX) is the largest commodity
                derivatives exchange in India. Trade Gold, Silver, Crude Oil,
                Natural Gas and more with zero brokerage and up to 500X margin
                on Tredixo.
              </p>


              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start MCX Trading <FiArrowRight />
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

            <ImageBox image={mcxHero} alt="MCX Trading Platform" />
          </div>
        </section>

        {/* WHAT IS MCX */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ImageBox image={comex} alt="What is MCX Trading" />

            <div>
              <SectionLabel>What is MCX Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                India’s Largest
                <br />
                <span className="text-[#52ff1f]">
                  Commodity Derivatives Exchange
                </span>
              </h2>

              <p className="text-gray-300 mt-6 leading-8">
                MCX allows traders to access Precious Metals, Energy contracts,
                Base Metals and Agricultural commodities. You can trade Gold,
                Silver, Crude Oil, Natural Gas, Copper, Zinc, Lead, Nickel,
                Aluminum, Cotton, Cardamom and Crude Palm Oil.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {[
                  "Gold & Silver",
                  "Crude Oil & Natural Gas",
                  "Copper, Zinc, Lead, Nickel & Aluminum",
                  "Cotton, Cardamom & Crude Palm Oil",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#0b0f16] p-5 hover:bg-[#0f1720] transition"
                  >
                    <div className="flex items-center gap-3">
                      <FiCheckCircle className="text-[#52ff1f] shrink-0" />
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
              <SectionLabel>Why Trade MCX on Tredixo?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                High Margin, Live Data
                <br />
                <span className="text-[#52ff1f]">
                  And Commodity Trading Tools
                </span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Tredixo gives access to MCX commodities with real-time market
                data, advanced charts, instant execution and smooth trading
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mcxFeatures.map((item, index) => (
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
              On Gold, you get up to 500X leverage — meaning with just ₹1,000
              capital you can control ₹5,00,000 worth of Gold on our MCX
              trading platform.
            </div>
          </div>
        </section>

        {/* POPULAR COMMODITIES */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Popular MCX Commodities</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Trade Popular
              <br />
              <span className="text-[#52ff1f]">Commodity Markets</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mcxCommodities.map((item) => (
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

        {/* START STEPS */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>How to Start MCX Trading</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Start Commodity Trading
                <br />
                <span className="text-[#52ff1f]">In 5 Easy Steps</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Create your account, add funds, select your commodity, execute
                your trade and track your positions in real time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {startSteps.map((item) => (
                <div
                  key={item.step}
                  className="group relative overflow-hidden rounded-[28px] bg-[#0b0f16] p-6 min-h-[260px] transition-all duration-300 hover:-translate-y-2 hover:bg-[#101822] hover:shadow-[0_25px_70px_rgba(82,255,31,0.10)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_48%)] opacity-80" />

                  <div className="relative z-10">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#52ff1f] text-black text-lg font-black shadow-[0_0_35px_rgba(82,255,31,0.25)]">
                      {item.step}
                    </span>

                    <h3 className="text-xl font-bold text-white mt-6 mb-3 group-hover:text-[#52ff1f] transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <SectionLabel>Frequently Asked Questions</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold">
              MCX Trading <span className="text-[#52ff1f]">FAQs</span>
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
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-6 md:px-10 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.12),transparent_35%)]" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start MCX Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">MCX With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Open your account and experience a smarter commodity trading
                platform.
              </p>

              <div className="mt-8">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_rgba(82,255,31,0.28)] transition hover:scale-[1.04]"
                >
                  Open Account <FiArrowRight />
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
        className="relative z-10 w-full h-[360px] object-contain "
      />
    </div>
  </div>
);

export default MCXtrading;