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
import whatNseImg from "../assests/what-is-nse.png";
import whyNseImg from "../assests/why-nse.png";
import nseHero from "../assests/nse.png";

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

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                NSE Trading Platform
                <br />
                <span className="text-[#52ff1f]">With Upto 500X Margin</span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                India's largest stock exchange by both market capitalization and trading
                volume is the National Stock Exchange (NSE). Trade NSE stocks, futures
                and options on Tredixo, a NSE trading platform with Upto 500X margin.
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
            <VisualBox type="what" />

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
                  Tredixo gives access to NSE segments along with real time market data,
                  advanced charting tools and instant order execution.
                </p>
              </div>

              <VisualBox type="why" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyTradeItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[26px] bg-[#0b0f16] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
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

                    <p className="text-gray-400 leading-7 text-sm mb-5">
                      {item.desc}
                    </p>

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
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>How to Start NSE Trading on Tredixo</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Start NSE Trading In
              <br />
              <span className="text-[#52ff1f]">5 Simple Steps</span>
            </h2>

            <p className="text-gray-300 mt-5 leading-8">
              Open your account, add funds, choose your NSE symbol, place your order,
              and monitor live positions through a clean trading interface.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-transparent via-[#52ff1f]/35 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {startSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="group relative overflow-hidden rounded-[28px] bg-[#0b0f16] p-6 min-h-[260px] transition-all duration-300 hover:-translate-y-2 hover:bg-[#0f1720] hover:shadow-[0_25px_70px_rgba(82,255,31,0.10)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_48%)] opacity-80" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#52ff1f] text-black text-lg font-black shadow-[0_0_35px_rgba(82,255,31,0.25)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs uppercase tracking-[0.22em] text-[#52ff1f]/80">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#52ff1f] transition">
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

            <VisualBox type="faq" />
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
  <div className="rounded-2xl bg-[#0b0f16] p-5 hover:border-[#52ff1f]/40 transition">
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
            className="overflow-hidden rounded-[22px] bg-[#0b0f16]"
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
                className={`text-[#52ff1f] shrink-0 transition ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

const VisualBox = ({ type }) => (
  <div className="flex justify-center">
    <div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(82,255,31,0.14),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(0,190,255,0.08),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:44px_44px]" />

      {type === "what" && <WhatNseVisual />}
      {type === "why" && <WhyNseVisual />}
      {type === "start" && <StartNseVisual />}
      {type === "faq" && <FaqNseVisual />}
    </div>
  </div>
);

const WhatNseVisual = () => (
  <div className="relative w-full max-w-[620px] mx-auto">
    <img
      src={whatNseImg}
      alt="What is NSE Trading"
      className="w-full h-auto object-contain drop-shadow-[0_20px_80px_rgba(0,255,170,0.18)]"
    />
  </div>
);
const WhyNseVisual = () => (
  <div className="relative w-full max-w-[620px] mx-auto flex items-center justify-center">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.14),transparent_60%)] blur-3xl" />

    <img
      src={whyNseImg}
      alt="Why Trade NSE on Tredixo"
      className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_90px_rgba(82,255,31,0.16)]"
    />
  </div>
);

const StartNseVisual = () => (
  <svg viewBox="0 0 620 430" className="relative z-10 w-full h-[360px]" fill="none">
    <style>
      {`
        .step-pulse{animation:stepPulse 2s ease-in-out infinite}
        .step-flow{stroke-dasharray:260;stroke-dashoffset:260;animation:stepFlow 3s ease-in-out infinite}
        @keyframes stepPulse{0%,100%{transform:scale(1);opacity:.75}50%{transform:scale(1.06);opacity:1}}
        @keyframes stepFlow{0%{stroke-dashoffset:260}70%,100%{stroke-dashoffset:0}}
      `}
    </style>

    <ellipse cx="310" cy="374" rx="220" ry="32" fill="#000" opacity=".45" />
    <rect x="92" y="80" width="436" height="260" rx="30" fill="#071018" stroke="#244232" strokeWidth="2" />

    <text x="310" y="125" textAnchor="middle" fill="#fff" fontSize="25" fontWeight="900">
      START TRADING FLOW
    </text>

    <text x="310" y="150" textAnchor="middle" fill="#9ca3af" fontSize="13">
      Sign up • Add funds • Select symbol • Place trade • Monitor
    </text>

    <path className="step-flow" d="M130 235 H490" stroke="#52FF1F" strokeWidth="5" strokeLinecap="round" />

    {[1, 2, 3, 4, 5].map((num, i) => (
      <g key={num} transform={`translate(${105 + i * 90} 198)`} className="step-pulse" style={{ animationDelay: `${i * 0.18}s` }}>
        <circle cx="35" cy="35" r="34" fill="#0B1118" stroke="#52FF1F" strokeOpacity=".55" strokeWidth="2" />
        <text x="35" y="45" textAnchor="middle" fill="#52FF1F" fontSize="26" fontWeight="900">
          {num}
        </text>
        <text x="35" y="86" textAnchor="middle" fill="#9ca3af" fontSize="11">
          STEP
        </text>
      </g>
    ))}
  </svg>
);

const FaqNseVisual = () => (
  <svg viewBox="0 0 620 430" className="relative z-10 w-full h-[360px]" fill="none">
    <style>
      {`
        .faq-float{animation:faqFloat 4s ease-in-out infinite}
        .faq-pulse{animation:faqPulse 2s ease-in-out infinite}
        @keyframes faqFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes faqPulse{0%,100%{opacity:.45}50%{opacity:1}}
      `}
    </style>

    <ellipse cx="310" cy="374" rx="220" ry="32" fill="#000" opacity=".45" />

    <g className="faq-float">
      <rect
        x="90"
        y="45"
        width="440"
        height="330"
        rx="34"
        fill="#071018"
        stroke="#244232"
        strokeWidth="2"
      />
      <circle cx="310" cy="140" r="48" fill="#52FF1F" opacity=".14" />

      <text x="310" y="158" textAnchor="middle" fill="#52FF1F" fontSize="70" fontWeight="900">
        ?
      </text>

      <text x="310" y="215" textAnchor="middle" fill="#fff" fontSize="25" fontWeight="900">
        NSE FAQ
      </text>

      <text x="310" y="240" textAnchor="middle" fill="#9ca3af" fontSize="13">
        Common trading questions answered
      </text>

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(175 ${265 + i * 34})`} className="faq-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
          <rect width="270" height="25" rx="11" fill="#0B1118" stroke="#52FF1F" strokeOpacity=".22" />
          <rect x="18" y="7" width={150 - i * 25} height="12" rx="4" fill="#fff" opacity=".28" />
          <rect x="210" y="7" width="34" height="8" rx="4" fill="#52FF1F" opacity=".5" />
        </g>
      ))}
    </g>
  </svg>
);

export default NSEtrading;