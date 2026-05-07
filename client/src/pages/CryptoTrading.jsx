import { Helmet } from "react-helmet-async";
import {
  FiTrendingUp,
  FiZap,
  FiShield,
  FiBarChart2,
  FiGlobe,
  FiClock,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import cryptoHero from "../assests/crypto2.png";

const cryptoFeatures = [
  {
    icon: <FiTrendingUp />,
    title: "Zero Trading Fees",
    desc: "Tredixo provides commission-free crypto trading with no fees to buy or sell Bitcoin, Ethereum and other altcoins.",
    points: ["Zero commission", "No hidden fees", "Trade BTC, ETH & altcoins"],
  },
  {
    icon: <FiClock />,
    title: "24/7 Crypto Market",
    desc: "Cryptocurrency markets never close. Trade Bitcoin, Ethereum and altcoins anytime through Tredixo.",
    points: ["24/7 access", "Weekend trading", "Global crypto markets"],
  },
  {
    icon: <FiZap />,
    title: "High Leverage",
    desc: "Trade major crypto markets with flexible leverage designed for active traders.",
    points: ["Bitcoin & Ethereum: 100X", "Major Altcoins: 50X", "DeFi Tokens: up to 20X"],
  },
  {
    icon: <FiBarChart2 />,
    title: "Advanced Trading Tools",
    desc: "Use crypto-focused charts, indicators, order types, portfolio tracking and alerts.",
    points: ["100+ indicators", "Market & limit orders", "Price alerts"],
  },
];

const cryptoAssets = [
  {
    title: "Bitcoin (BTC)",
    desc: "The world's first and largest cryptocurrency by market cap, often called digital gold.",
  },
  {
    title: "Ethereum (ETH)",
    desc: "The second-largest crypto and the foundation of smart contracts, DeFi and decentralized apps.",
  },
  {
    title: "Ripple (XRP)",
    desc: "A digital payment protocol popular for fast international money transfers.",
  },
  {
    title: "Litecoin (LTC)",
    desc: "Known as the silver to Bitcoin’s gold, Litecoin is faster and cheaper to transfer.",
  },
  {
    title: "Cardano (ADA)",
    desc: "A proof-of-stake blockchain platform focused on scalability and sustainability.",
  },
];

const startSteps = [
  {
    step: "01",
    title: "Sign Up in Seconds",
    desc: "Create your account using your name and mobile number on the crypto trading platform.",
  },
  {
    step: "02",
    title: "Deposit Funds",
    desc: "Add funds using UPI, bank transfer or net banking. Minimum deposit starts from $10.",
  },
  {
    step: "03",
    title: "Choose Cryptocurrency",
    desc: "Select from 100+ cryptocurrencies including Bitcoin, Ethereum and trending altcoins.",
  },
  {
    step: "04",
    title: "Execute Your Trade",
    desc: "Place market orders for instant execution or limit orders at your preferred price.",
  },
  {
    step: "05",
    title: "Monitor & Manage",
    desc: "Track your portfolio, manage positions and set price alerts for your favorite cryptos.",
  },
];

const faqs = [
  {
    q: "Crypto trading is legal in India?",
    a: "Yes. Cryptocurrency trading is legal in India, but crypto gains are taxable under Indian tax laws.",
  },
  {
    q: "How much do you need to start crypto trading?",
    a: "You can start with a minimum of $10, which is around ₹800, on our crypto trading platform.",
  },
  {
    q: "Can I take out my crypto to a personal wallet?",
    a: "Tredixo is a CFD trading platform, so you trade on crypto price movements rather than directly owning coins. For direct ownership, use a crypto wallet alongside a crypto exchange.",
  },
];

const Trading = () => {
  return (
    <>
      <Helmet>
        <title>
          Crypto Trading Platform | Trade Bitcoin, Ethereum & Altcoins - Tredixo
        </title>

        <meta
          name="description"
          content="Trade Bitcoin, Ethereum, and 100+ cryptocurrencies with zero commission & high leverage. Real-time crypto prices, 24/7 trading, secure platform. Start crypto trading now."
        />

        <meta
          name="keywords"
          content="crypto trading platform, Bitcoin trading in India, Cryptocurrency trading app, Ethereum trading platform, Best crypto exchange in India, Bitcoin trading India, crypto trading India, Ethereum trading India, Tredixo crypto trading"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.co.in/crypto-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta
          property="og:title"
          content="Crypto Trading Platform | Trade Bitcoin, Ethereum & Altcoins - Tredixo"
        />
        <meta
          property="og:description"
          content="Trade Bitcoin, Ethereum and 100+ cryptocurrencies with zero commission, high leverage, real-time prices and 24/7 market access."
        />
        <meta property="og:url" content="https://tredixo.co.in/crypto-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Crypto Trading Platform | Trade Bitcoin, Ethereum & Altcoins - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Trade Bitcoin, Ethereum and 100+ cryptocurrencies with real-time prices, 24/7 trading and secure platform access."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Crypto Trading Platform",
            url: "https://tredixo.co.in/crypto-trading",
            description:
              "Trade Bitcoin, Ethereum and 100+ cryptocurrencies with zero commission, high leverage, real-time crypto prices and 24/7 market access on Tredixo.",
            publisher: {
              "@type": "Organization",
              name: "Tredixo",
              url: "https://tredixo.co.in",
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
                Crypto Trading Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Crypto Trading Platform
                <br />
                <span className="text-[#52ff1f]">
                  Trade Bitcoin, Ethereum & 100+ Cryptocurrencies
                </span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Trade top cryptocurrencies like Bitcoin, Ethereum, Litecoin and
                Ripple with 100+ cryptocurrencies on Tredixo’s crypto trading
                platform. Enjoy zero commission trading, high leverage and
                global crypto markets open 24/7.
              </p>

              <p className="text-gray-400 mt-4 max-w-2xl leading-8">
                Trade crypto in 10 seconds with no hidden fees, low starting
                capital and 24/7 customer support on Tredixo.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start Crypto Trading <FiArrowRight />
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

            <ImageBox image={cryptoHero} alt="Crypto Trading Platform" />
          </div>
        </section>

        {/* WHAT IS CRYPTO */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ImageBox image={cryptoHero} alt="What is Crypto Trading" />

            <div>
              <SectionLabel>What is Crypto Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Buy & Sell
                <br />
                <span className="text-[#52ff1f]">Digital Assets 24/7</span>
              </h2>

              <p className="text-gray-300 mt-6 leading-8">
                Crypto trading refers to buying and selling cryptocurrencies
                like Bitcoin, Ethereum and other altcoins. Unlike stocks or
                forex markets, crypto markets remain open 24/7, 365 days a
                year.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {[
                  "Bitcoin, Ethereum & Ripple",
                  "Litecoin, Cardano & Polkadot",
                  "USDT, USDC & DAI",
                  "UNI, LINK & AAVE",
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
              <SectionLabel>Why Trade Crypto on Tredixo?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Zero Fees, 24/7 Markets
                <br />
                <span className="text-[#52ff1f]">
                  And Advanced Crypto Tools
                </span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Tredixo gives crypto traders commission-free access, always-open
                markets, high leverage and powerful trading tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cryptoFeatures.map((item, index) => (
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
              With 100X leverage, you can control $10,000 worth of Bitcoin with
              just $100 on Tredixo’s crypto trading platform.
            </div>
          </div>
        </section>

        {/* POPULAR CRYPTO */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Popular Cryptocurrencies to Trade</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Trade Top
              <br />
              <span className="text-[#52ff1f]">Crypto Markets</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoAssets.map((item) => (
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
              <SectionLabel>How to Start Crypto Trading</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Start Crypto Trading
                <br />
                <span className="text-[#52ff1f]">In 5 Easy Steps</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Sign up, deposit funds, choose your cryptocurrency, execute your
                trade and manage your crypto portfolio in real time.
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
              Crypto Trading <span className="text-[#52ff1f]">FAQs</span>
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
                Start Crypto Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">Crypto With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Create your account and explore a faster, smarter and cleaner
                crypto trading experience.
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
        className="relative z-10 w-full h-[360px] object-contain drop-shadow-[0_25px_80px_rgba(82,255,31,0.12)]"
      />
    </div>
  </div>
);

export default Trading;