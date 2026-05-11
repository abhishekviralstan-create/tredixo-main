import { Helmet } from "react-helmet-async";
import {
  FiTrendingUp,
  FiZap,
  FiShield,
  FiBarChart2,
  FiClock,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import usStocksHero from "../assests/us-stock.png";

const usStockFeatures = [
  {
    icon: <FiTrendingUp />,
    title: "Trade With Leverage",
    desc: "Access US stocks and index futures with flexible leverage options on Tredixo.",
    points: [
      "S&P 500 / Dow Jones: 300X",
      "Large-cap stocks: around 20X",
      "Mid & small-cap stocks: 10X",
    ],
  },
  {
    icon: <FiZap />,
    title: "No Currency Hassle",
    desc: "Deposit in INR and trade US markets in USD with automatic currency conversion.",
    points: ["INR deposit support", "Live forex conversion", "Zero conversion charges"],
  },
  {
    icon: <FiClock />,
    title: "Extended Market Hours",
    desc: "Trade US stocks during evening and night hours from India.",
    points: [
      "Pre-market access",
      "Regular US session",
      "After-hours opportunity",
    ],
  },
  {
    icon: <FiBarChart2 />,
    title: "Real-Time Market Access",
    desc: "Track US stock prices, index movement and Wall Street opportunities in real time.",
    points: ["Live prices", "Fast execution", "Clean trading dashboard"],
  },
];

const popularStocks = [
  {
    title: "Apple (AAPL)",
    desc: "One of the world’s most valuable companies and a popular choice for users who want to trade Apple stock in India.",
  },
  {
    title: "Tesla (TSLA)",
    desc: "A leading EV and energy company, widely active on every Tesla stock trading platform.",
  },
  {
    title: "Amazon (AMZN)",
    desc: "A global online retail and cloud computing giant with strong market participation.",
  },
  {
    title: "Google (GOOGL)",
    desc: "A major technology company known for search, advertising, AI and digital innovation.",
  },
  {
    title: "Microsoft (MSFT)",
    desc: "A cloud, software and AI leader, popular among global stock market participants.",
  },
];

const etfs = [
  "S&P 500 (SPY)",
  "NASDAQ 100 (QQQ)",
  "Dow Jones ETF (DIA)",
];

const faqs = [
  {
    q: "Is it legal to trade US stocks in India?",
    a: "Yes, it is legal. Under LRS, RBI allows Indians to invest up to $250,000 annually in foreign stocks.",
  },
  {
    q: "Do I need a US bank account?",
    a: "No. You can fund your Tredixo account in INR and USD conversion is handled automatically while buying or selling.",
  },
  {
    q: "What about tax?",
    a: "Profit from US stock trading in India is generally taxed as capital gains. Short-term gains may be taxed at your income slab rate, while long-term gains may follow applicable capital gains rules. Please consult a tax advisor for your case.",
  },
];

const UsStocksTrading = () => {
  return (
    <>
      <Helmet>
        <title>
          US Stocks Trading India | Trade Apple, Tesla, Amazon Stocks - Tredixo
        </title>

        <meta
          name="description"
          content="Trade US stocks (Apple, Tesla, Amazon, Google) from India with zero commission. Access S&P 500, NASDAQ stocks with leverage. Start US stock trading on Tredixo now."
        />

        <meta
          name="keywords"
          content="US stocks trading in India, How to invest in US stocks from India, Trade Apple stock in India, Tesla stock trading platform, S&P 500 trading in India, US stock trading India, NASDAQ stocks India, Tredixo US stocks"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.info/us-stocks-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta
          property="og:title"
          content="US Stocks Trading India | Trade Apple, Tesla, Amazon Stocks - Tredixo"
        />
        <meta
          property="og:description"
          content="Trade Apple, Tesla, Amazon, Google, S&P 500 and NASDAQ stocks from India with zero commission and leverage on Tredixo."
        />
        <meta
          property="og:url"
          content="https://tredixo.info/us-stocks-trading"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="US Stocks Trading India | Trade Apple, Tesla, Amazon Stocks - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Trade US stocks from India with access to Apple, Tesla, Amazon, S&P 500 and NASDAQ stocks."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "US Stocks Trading India",
            url: "https://tredixo.info/us-stocks-trading",
            description:
              "Trade US stocks including Apple, Tesla, Amazon, Google, S&P 500 and NASDAQ stocks from India with Tredixo.",
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
                US Stocks Trading India
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Trade Apple, Tesla,
                <br />
                <span className="text-[#52ff1f]">
                  Amazon & S&P 500
                </span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Trade 2000+ US stocks listed on NYSE and NASDAQ, including
                Apple, Tesla, Amazon, Alphabet, Facebook and other top global
                companies from India through Tredixo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start US Stock Trading <FiArrowRight />
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

            <ImageBox image={usStocksHero} alt="US Stocks Trading India" />
          </div>
        </section>

        {/* WHY TRADE */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>Why Trade US Stocks on Tredixo?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Wall Street Access
                <br />
                <span className="text-[#52ff1f]">
                  Without Currency Conversion Hassle
                </span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Trade US stocks from India with access to leverage, real-time
                Wall Street pricing and simplified INR-to-USD trading flow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usStockFeatures.map((item, index) => (
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
          </div>
        </section>

        {/* POPULAR US STOCKS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Popular US Stocks to Trade</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Trade FAANG+
              <br />
              <span className="text-[#52ff1f]">And Global Market Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularStocks.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] bg-[#0b0f16] p-6 hover:bg-[#0f1720] transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f] mb-5">
                  <FiTrendingUp />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ETF SECTION */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>Index Funds & ETFs</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Trade S&P 500,
                <br />
                <span className="text-[#52ff1f]">NASDAQ 100 & Dow Jones</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {etfs.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl bg-[#0b0f16] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0e151d]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f]">
                    <FiCheckCircle />
                  </div>

                  <h3 className="font-semibold group-hover:text-[#52ff1f] transition">
                    {item}
                  </h3>
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
              US Stocks Trading <span className="text-[#52ff1f]">FAQs</span>
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
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start US Stock Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">US Stocks With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Trade Apple, Tesla, Amazon, Google and S&P 500 from India with a
                clean and fast market experience.
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

export default UsStocksTrading;