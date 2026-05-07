import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiTrendingUp,
  FiZap,
  FiShield,
  FiBarChart2,
  FiArrowRight,
  FiCheckCircle,
  FiHelpCircle,
  FiChevronDown,
} from "react-icons/fi";

import nseHero from "../assests/NSE2.png";

const whatNseItems = [
  {
    title: "Equity Cash Segment",
    desc: "Purchase & sale of shares of 1,600+ listed companies through NSE stock trading online.",
  },
  {
    title: "Futures & Options (F&O)",
    desc: "NSE futures and option and NSE derivatives trading in stocks and indices.",
  },
  {
    title: "Currency Futures",
    desc: "Trade on currency pairs such as USD-INR and EUR-INR.",
  },
  {
    title: "Debt Segment",
    desc: "Government bonds and corporate debentures.",
  },
];

const whyTradeItems = [
  {
    icon: <FiZap />,
    title: "High Leverage",
    desc: "Trade NSE futures and options with up to 500X margin on our NSE trading platform.",
    points: [
      "Nifty futures: 500X margin",
      "STOCKS: 200X margins",
      "Options buying: 10X margin",
    ],
  },
  {
    icon: <FiTrendingUp />,
    title: "Real-Time Market Data",
    desc: "Track live NSE stock prices, order book depth and movement for seamless NSE stock trading online.",
    points: ["Live quotes data", "Synced platform experience", "Smooth market tracking"],
  },
  {
    icon: <FiBarChart2 />,
    title: "Advanced Trading Tools",
    desc: "Use technical tools, chart types, order types and personalized watchlists on the best NSE trading app.",
    points: [
      "RSI, MACD, Bollinger Bands, Moving Averages",
      "Candlestick, line and bar graphs",
      "Market, Limit, Stop-loss, Bracket orders",
    ],
  },
  {
    icon: <FiShield />,
    title: "24/7 Customer Support",
    desc: "NSE market hours are 9:15 AM – 3:30 PM, but our support team is reachable 24×7.",
    points: ["Account-related support", "NSE derivatives trading support", "Technical support"],
  },
];

const startSteps = [
  {
    step: "Step 1",
    title: "Sign Up in 10 Seconds",
    desc: "Simply input your name and mobile number to create your account.",
  },
  {
    step: "Step 2",
    title: "Add Funds",
    desc: "Deposit via UPI, bank transfer or net banking. Your deposits are reflected in your account within second.",
  },
  {
    step: "Step 3",
    title: "Select Your NSE Symbol",
    desc: "Choose from Nifty futures, Bank Nifty options, stock future and equity cash.",
  },
  {
    step: "Step 4",
    title: "Place Your Trade",
    desc: "Execute your market or limit orders on our intuitive platform. Set stop-loss to manage risk.",
  },
  {
    step: "Step 5",
    title: "Monitor & Profit",
    desc: "Monitor your positions in the live market and book profits as soon as your targets are hit while enjoying seamless NSE stock trading online.",
  },
];

const faqs = [
  {
    q: "How much is required for NSE trading?",
    a: "You can begin from as low as ₹500. But we suggest the trading positions in a meaningful way between ₹5,000-₹10,000 on our NSE trading platform.",
  },
  {
    q: "Safe or not for NSE trading in Tredixo?",
    a: "Yes. Our broker(s) is/are SEBI-registered; all trades happen on the actual NSE exchange. Therefore, when you deposit, your money goes into separate accounts.",
  },
  {
    q: "How to trade options and Nifty options in Tredixo?",
    a: "Absolutely. Get 10X margin for Nifty 50 and Bank Nifty options with unlimited access.",
  },
  {
    q: "How much is NSE equity delivery brokerage?",
    a: "Yes. Nominal charges on NSE equity delivery trades with our NSE trading platform.",
  },
];

const NSEtrading = () => {
  return (
    <>
      <Helmet>
        <title>NSE Trading Platform | Trade NSE Futures & Options - Tredixo</title>

        <meta
          name="description"
          content="Trade NSE stocks, futures & options with zero brokerage on Tredixo. Get up to 500X margin, real-time market data, advanced charting tools and instant order execution."
        />

        <meta
          name="keywords"
          content="NSE trading platform, NSE futures and options, NSE stock trading online, Best NSE trading app, NSE derivatives trading, NSE F&O demo account, Tredixo NSE trading"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.tredixo.info/nse-trading" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="NSE Trading Platform | Trade India's Top Stock Exchange with Zero Brokerage"
        />
        <meta
          property="og:description"
          content="Trade NSE stocks, futures and options on Tredixo with up to 500X margin, real-time market data, advanced charting tools and instant order execution."
        />
        <meta property="og:url" content="https://www.tredixo.info/nse-trading" />
        <meta property="og:site_name" content="Tredixo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NSE Trading Platform | Trade NSE Futures & Options - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Access Nifty 50, Bank Nifty, NSE futures and options with fast execution, real-time market data and advanced trading tools."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "NSE Trading Platform",
            url: "https://www.tredixo.info/nse-trading",
            description:
              "Trade NSE stocks, futures and options on Tredixo with up to 500X margin, real-time market data, advanced charting tools and instant order execution.",
            publisher: {
              "@type": "Organization",
              name: "Tredixo",
              url: "https://www.tredixo.info",
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
                NSE Trading Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                NSE Trading Platform
                <br />
                <span className="text-[#52ff1f]">With Upto 500X Margin</span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                India's largest stock exchange by both market capitalization and trading
                volume is the National Stock Exchange (NSE). Trade NSE stocks, futures and
                options on Tredixo, a NSE trading platform with Upto 500X margin.
              </p>

              <p className="text-gray-400 mt-4 max-w-2xl leading-8">
                Does not matter whether you are trading Nifty 50 or Bank Nifty, Equity
                Futures or Stock Options, Tredixo will give you access to all NSE segments
                along with real time market data, advanced charting tools and instant order
                execution.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start NSE Trading <FiArrowRight />
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

            <HeroImageBox />
          </div>
        </section>

        {/* WHAT IS NSE */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSvgBox type="what" />

            <div>
              <SectionLabel>What is NSE Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Trade India’s Leading
                <br />
                <span className="text-[#52ff1f]">Stock Exchange</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                NSE (National Stock Exchange) is the market leader stock exchange in India
                founded in 1992. It offers trading in multiple segments for active market
                users.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {whatNseItems.map((item) => (
                  <InfoCard key={item.title} title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY TRADE */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
              <div>
                <SectionLabel>Why Trade NSE on Tredixo?</SectionLabel>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  High Margin, Real-Time Data
                  <br />
                  <span className="text-[#52ff1f]">And Advanced Tools</span>
                </h2>

                <p className="text-gray-300 mt-5 leading-8">
                  Trade on NSE for 10 seconds - not days of paperwork, its hassle free and
                  also NO HIDDEN CHARGES through the best NSE trading app.
                </p>
              </div>

              <AnimatedSvgBox type="why" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyTradeItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0b0f16] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.11),transparent_45%)] opacity-70" />

                  <div className="relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f] text-xl">
                      {item.icon}
                    </div>

                    <span className="text-sm text-[#52ff1f] font-semibold">
                      0{index + 1}
                    </span>

                    <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-[#52ff1f] transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-7 text-sm mb-5">{item.desc}</p>

                    <div className="space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 text-sm text-gray-300">
                          <FiCheckCircle className="text-[#52ff1f] mt-1 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-[#52ff1f]/20 bg-[#52ff1f]/5 p-6 text-gray-300 leading-8">
              To control ₹5,00,000 Nifty futures you only require ₹1,000.
            </div>
          </div>
        </section>

        {/* START STEPS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <AnimatedSvgBox type="start" />

            <div>
              <SectionLabel>How to Start NSE Trading on Tredixo</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Start Trading In
                <br />
                <span className="text-[#52ff1f]">5 Simple Steps</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Create an account, add funds, select your NSE symbol, place your trade and
                monitor your positions in the live market.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {startSteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-[24px] border border-white/10 bg-[#0b0f16] p-5 transition hover:border-[#52ff1f]/40 hover:-translate-y-1"
              >
                <span className="text-[#52ff1f] text-sm font-semibold">{item.step}</span>
                <h3 className="text-lg font-semibold mt-3 mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-y border-white/5 bg-[#05060a]">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Frequently Asked Questions</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                NSE Trading
                <br />
                <span className="text-[#52ff1f]">Questions Answered</span>
              </h2>

              <FaqAccordion />
            </div>

            <AnimatedSvgBox type="faq" />
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-6 md:px-10 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.12),transparent_35%)]" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start NSE Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">NSE With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Create your account and experience a faster, cleaner and more focused NSE trading interface.
              </p>

              <div className="mt-8">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#52ff1f] px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_rgba(82,255,31,0.28)] transition hover:scale-[1.04]"
                >
                  Start Trading Now
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

const HeroImageBox = () => (
  <div className="flex justify-center">
    <div className="relative w-full max-w-[520px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[380px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />
      <img
        src={nseHero}
        alt="NSE Trading Platform"
        className="relative z-10 w-full h-[380px] object-contain"
      />
    </div>
  </div>
);

const InfoCard = ({ title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0b0f16] p-5 hover:border-[#52ff1f]/40 transition">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400 leading-7">{desc}</p>
  </div>
);

const FaqAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => {
        const isOpen = active === index;

        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0f16]"
          >
            <button
              type="button"
              onClick={() => setActive(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="flex items-start gap-3 text-base md:text-lg font-semibold text-white">
                <FiHelpCircle className="text-[#52ff1f] mt-1 shrink-0" />
                {item.q}
              </span>

              <FiChevronDown
                className={`text-[#52ff1f] shrink-0 transition ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-12 text-gray-400 leading-7 text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const AnimatedSvgBox = ({ type }) => (
  <div className="flex justify-center">
    <div className="relative w-full max-w-[520px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[360px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <NseAnimatedSvg type={type} />
    </div>
  </div>
);

const NseAnimatedSvg = ({ type }) => {
  const isWhat = type === "what";
  const isWhy = type === "why";
  const isStart = type === "start";
  const isFaq = type === "faq";

  return (
    <svg
      viewBox="0 0 620 450"
      className="relative z-10 w-full h-[360px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`g-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#52FF1F" />
          <stop offset="100%" stopColor="#0B8F2A" />
        </linearGradient>

        <linearGradient id={`gold-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD66B" />
          <stop offset="100%" stopColor="#F5A400" />
        </linearGradient>

        <filter id={`glow-${type}`}>
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>
        {`
          .float-${type}{animation:float-${type} 3.8s ease-in-out infinite}
          .pulse-${type}{animation:pulse-${type} 2.4s ease-in-out infinite}
          .draw-${type}{stroke-dasharray:420;stroke-dashoffset:420;animation:draw-${type} 3s ease-in-out infinite}
          .bar-${type}{transform-origin:bottom;animation:bar-${type} 2.2s ease-in-out infinite}
          @keyframes float-${type}{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
          @keyframes pulse-${type}{0%,100%{opacity:.45}50%{opacity:1}}
          @keyframes draw-${type}{0%{stroke-dashoffset:420}60%,100%{stroke-dashoffset:0}}
          @keyframes bar-${type}{0%,100%{transform:scaleY(.65)}50%{transform:scaleY(1)}}
        `}
      </style>

      <ellipse cx="310" cy="390" rx="210" ry="34" fill="#000" opacity="0.42" />

      <g className={`float-${type}`}>
        <circle cx="310" cy="190" r="118" fill="#061126" opacity="0.96" />
        <circle cx="310" cy="190" r="88" stroke="#52FF1F" strokeOpacity="0.18" strokeWidth="3" />

        <text x="310" y="205" textAnchor="middle" fontSize="64" fontWeight="900" fill="#52FF1F">
          NSE
        </text>

        <path
          d="M220 238 C270 280 365 282 405 230"
          stroke="#52FF1F"
          strokeWidth="8"
          strokeLinecap="round"
          filter={`url(#glow-${type})`}
        />
      </g>

      {isWhat && (
        <>
          <g transform="translate(85 245)">
            {["Equity", "F&O", "Currency", "Debt"].map((label, i) => (
              <g key={label} transform={`translate(${i * 112} 0)`}>
                <rect width="92" height="62" rx="18" fill="#0B1118" stroke="#52FF1F" strokeOpacity="0.3" />
                <text x="46" y="38" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
                  {label}
                </text>
              </g>
            ))}
          </g>
          <path className={`draw-${type}`} d="M120 170 C205 105 315 95 492 155" stroke="#52FF1F" strokeWidth="6" strokeLinecap="round" />
        </>
      )}

      {isWhy && (
        <>
          <g transform="translate(110 250)">
            {[40, 75, 115, 155].map((h, i) => (
              <rect
                key={i}
                className={`bar-${type}`}
                x={i * 70}
                y={170 - h}
                width="42"
                height={h}
                rx="10"
                fill={i === 3 ? `url(#g-${type})` : "#17331f"}
                stroke="#52FF1F"
                strokeOpacity="0.35"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </g>
          <path className={`draw-${type}`} d="M100 125 C205 85 350 102 510 58" stroke="#52FF1F" strokeWidth="8" strokeLinecap="round" filter={`url(#glow-${type})`} />
          <path d="M512 48 L528 82 L488 72 Z" fill="#52FF1F" />
        </>
      )}

      {isStart && (
        <g transform="translate(80 265)">
          {[1, 2, 3, 4, 5].map((num, i) => (
            <g key={num} transform={`translate(${i * 95} 0)`} className={`pulse-${type}`} style={{ animationDelay: `${i * 0.18}s` }}>
              <circle cx="36" cy="36" r="34" fill="#0B1118" stroke="#52FF1F" strokeOpacity="0.55" />
              <text x="36" y="45" textAnchor="middle" fontSize="26" fontWeight="900" fill="#52FF1F">
                {num}
              </text>
              {i < 4 && <path d="M70 36 H94" stroke="#52FF1F" strokeOpacity="0.45" strokeWidth="4" />}
            </g>
          ))}
        </g>
      )}

      {isFaq && (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${120 + i * 48} ${245 + i * 42})`} className={`pulse-${type}`} style={{ animationDelay: `${i * 0.2}s` }}>
              <rect x="0" y="0" width="245" height="54" rx="18" fill="#0B1118" stroke="#52FF1F" strokeOpacity="0.35" />
              <circle cx="30" cy="27" r="14" fill="#52FF1F" opacity="0.18" />
              <text x="30" y="36" textAnchor="middle" fontSize="26" fontWeight="900" fill="#52FF1F">
                ?
              </text>
              <rect x="58" y="18" width="135" height="8" rx="4" fill="#fff" opacity="0.45" />
              <rect x="58" y="33" width="90" height="7" rx="4" fill="#52FF1F" opacity="0.6" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
};

export default NSEtrading;