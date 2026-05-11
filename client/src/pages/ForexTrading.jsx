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

import forexHero from "../assests/forext.png";
import forexHero2 from "../assests/forext2.png";

const forexFeatures = [
  {
    icon: <FiTrendingUp />,
    title: "High Leverage",
    desc: "Trade major currency pairs like EUR/USD and GBP/USD with up to 200X leverage.",
    points: [
      "Major pairs: 200X leverage",
      "Minor pairs: 100X leverage",
      "Exotic pairs: 50X leverage",
    ],
  },
  {
    icon: <FiClock />,
    title: "24/5 Market Access",
    desc: "Forex markets are open 24 hours a day, five days a week across global sessions.",
    points: [
      "London session",
      "New York session",
      "Tokyo & Sydney sessions",
    ],
  },
  {
    icon: <FiZap />,
    title: "Tight Spreads",
    desc: "Experience low spreads and fast execution for smooth currency trading online.",
    points: [
      "EUR/USD from 0.1 pips",
      "GBP/USD from 0.2 pips",
      "Execution under 50ms",
    ],
  },
  {
    icon: <FiBarChart2 />,
    title: "Advanced Tools",
    desc: "Access forex charts, economic calendar, indicators and risk management tools.",
    points: [
      "100+ indicators",
      "Economic calendar",
      "Stop loss & take profit",
    ],
  },
];

const forexPairs = [
  {
    title: "EUR/USD",
    desc: "The world’s most traded forex pair, known for high liquidity and tight spreads.",
  },
  {
    title: "GBP/USD",
    desc: "Also called Cable, popular for volatility during London and New York sessions.",
  },
  {
    title: "USD/JPY",
    desc: "A major pair sensitive to Bank of Japan policy and Asian market sentiment.",
  },
  {
    title: "AUD/USD",
    desc: "Known as the Aussie, often influenced by commodity prices like gold and iron ore.",
  },
  {
    title: "USD/CAD",
    desc: "Known as the Loonie, highly correlated with crude oil price movements.",
  },
];

const startSteps = [
  {
    step: "01",
    title: "Create Account",
    desc: "Open your forex trading account in seconds using basic details.",
  },
  {
    step: "02",
    title: "Add Funds",
    desc: "Deposit using supported payment methods and prepare your account for trading.",
  },
  {
    step: "03",
    title: "Choose Currency Pair",
    desc: "Select major, minor, exotic or cross pairs such as EUR/USD, GBP/USD or USD/JPY.",
  },
  {
    step: "04",
    title: "Place Your Trade",
    desc: "Use market or limit orders with stop loss, take profit and trailing stop tools.",
  },
  {
    step: "05",
    title: "Monitor Positions",
    desc: "Track live forex rates, price movement and manage your trading risk.",
  },
];

const faqs = [
  {
    q: "Is forex trading legal in India?",
    a: "Yes. Forex trading in India should be done through regulated brokers. Tredixo works through licensed broker partnerships for compliant access.",
  },
  {
    q: "What is the minimum deposit for forex traders?",
    a: "No minimum deposit is required, but we advise a minimum of $100 for better risk management while using our forex trading platform.",
  },
  {
    q: "Can I trade forex over the weekend?",
    a: "No. Forex markets close on Saturday and Sunday. Trading resumes Sunday evening EST with the Sydney session.",
  },
];

const ForexTrading = () => {
  return (
    <>
      <Helmet>
        <title>
          Forex Trading Platform India | Trade EUR/USD, GBP/USD & Currency Pairs - Tredixo
        </title>

        <meta
          name="description"
          content="Trade forex with zero commission & 200X leverage. Access 50+ currency pairs, real-time forex rates, advanced charts."
        />

        <meta
          name="keywords"
          content="forex trading India, Forex trading platform, Currency trading online, EUR USD trading, Best forex broker India, forex trading platform India, currency pairs trading, Tredixo forex trading"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.info/forex-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta
          property="og:title"
          content="Forex Trading Platform India | Trade EUR/USD, GBP/USD & Currency Pairs - Tredixo"
        />
        <meta
          property="og:description"
          content="Trade forex with zero commission, up to 200X leverage, 50+ currency pairs, real-time forex rates and advanced charts on Tredixo."
        />
        <meta property="og:url" content="https://tredixo.info/forex-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Forex Trading Platform India | Trade EUR/USD, GBP/USD & Currency Pairs - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Trade 50+ forex currency pairs with zero commission, 200X leverage, tight spreads and real-time forex rates."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Forex Trading Platform India",
            url: "https://tredixo.info/forex-trading",
            description:
              "Trade 50+ currency pairs including EUR/USD, GBP/USD and USD/JPY with real-time forex rates, advanced charts, tight spreads and 200X leverage on Tredixo.",
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
                Forex Trading Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                 Trade Currency Pairs
                <br />
                <span className="text-[#52ff1f]">
                 With High Leverage
                </span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Work with over 50 currency pairs including EUR/USD, GBP/USD,
                USD/JPY and exotic pairs on Tredixo’s professional forex
                trading platform. Enjoy low brokerage, up to 200X leverage and
                24/5 access to the world’s largest financial market.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start Forex Trading <FiArrowRight />
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

            <ImageBox image={forexHero} alt="Forex Trading Platform" />
          </div>
        </section>

        {/* WHAT IS FOREX */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ImageBox image={forexHero2} alt="What is Forex Trading" />

            <div>
              <SectionLabel>What is Forex Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Trade The World’s
                <br />
                <span className="text-[#52ff1f]">
                  Largest Financial Market
                </span>
              </h2>

              <p className="text-gray-300 mt-6 leading-8">
                Forex trading means buying and selling currency pairs to benefit
                from changes in exchange rates. Forex is the world’s largest and
                most liquid financial market, with daily trading volume
                exceeding $7 trillion.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {[
                  "Major Pairs: EUR/USD, GBP/USD, USD/JPY",
                  "Minor Pairs: EUR/GBP, GBP/JPY, AUD/NZD",
                  "Exotic Pairs: USD/TRY, EUR/ZAR, GBP/MXN",
                  "Cross Pairs: EUR/JPY, GBP/AUD, CAD/CHF",
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
              <SectionLabel>Why Trade Forex on Tredixo?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                High Leverage, Tight Spreads
                <br />
                <span className="text-[#52ff1f]">
                  And Advanced Forex Tools
                </span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Tredixo gives traders 24/5 access, real-time forex rates, fast
                execution and integrated risk management tools for currency
                trading online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {forexFeatures.map((item, index) => (
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
              For instance, EUR/USD trading with 200X leverage lets you control
              $20,000 worth of currency with only $100 capital on our forex
              trading platform.
            </div>
          </div>
        </section>

        {/* POPULAR FOREX PAIRS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Popular Forex Pairs</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Trade Major
              <br />
              <span className="text-[#52ff1f]">Currency Pairs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forexPairs.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] bg-[#0b0f16] p-6 hover:bg-[#0f1720] transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f] mb-5">
                  <FiGlobe />
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
              <SectionLabel>How to Start Forex Trading</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Start Currency Trading
                <br />
                <span className="text-[#52ff1f]">In 5 Easy Steps</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Create your account, add funds, select a currency pair, place
                your forex trade and monitor your positions in real time.
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
              Forex Trading <span className="text-[#52ff1f]">FAQs</span>
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
                Start Forex Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">Forex With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Create your account and access a faster, smarter and cleaner
                forex trading experience.
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
        className="relative z-10 w-full h-[360px] object-contain "
      />
    </div>
  </div>
);

export default ForexTrading;