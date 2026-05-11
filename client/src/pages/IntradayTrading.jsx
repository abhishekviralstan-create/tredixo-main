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

import intradayHero from "../assests/intraday.png";
import trading from "../assests/trading.png";

const intradayFeatures = [
  {
    icon: <FiTrendingUp />,
    title: "High Leverage",
    desc: "Trade intraday positions with high leverage across NSE, MCX and forex markets.",
    points: [
      "Nifty & Bank Nifty: 500X",
      "Gold & Silver: 500X",
      "Forex pairs: 200X",
    ],
  },
  {
    icon: <FiBarChart2 />,
    title: "Advanced Charting",
    desc: "Use professional charting tools for intraday trading analysis and quick decisions.",
    points: [
      "100+ indicators",
      "1-min, 5-min, 15-min charts",
      "Trendlines & support/resistance",
    ],
  },
  {
    icon: <FiZap />,
    title: "Fast Execution",
    desc: "Every second matters in intraday trading, so Tredixo focuses on quick order execution.",
    points: [
      "Under 50ms execution",
      "Market & limit orders",
      "Smooth order flow",
    ],
  },
  {
    icon: <FiShield />,
    title: "Auto Square-Off",
    desc: "Intraday positions are automatically managed before market close to reduce overnight risk.",
    points: [
      "Auto square-off before close",
      "Avoid overnight holding",
      "Risk control support",
    ],
  },
];

const strategies = [
  {
    title: "Scalping",
    desc: "Quick trades on 1–5 minute timeframes targeting small price movements. Best suited for Nifty futures, Bank Nifty options and liquid stocks.",
  },
  {
    title: "Momentum Trading",
    desc: "Trade assets showing strong price momentum using volume indicators, RSI, MACD and live news catalysts.",
  },
  {
    title: "Breakout Trading",
    desc: "Enter trades when price breaks above resistance or below support with volume confirmation and 15-minute charts.",
  },
  {
    title: "Reversal Trading",
    desc: "Identify overbought or oversold zones and trade possible reversals using RSI, Stochastic, Bollinger Bands and candlestick patterns.",
  },
];

const instruments = [
  "Nifty 50",
  "Bank Nifty",
  "Reliance Industries",
  "HDFC Bank",
  "Gold (MCX)",
  "EUR/USD",
];

const startSteps = [
  {
    step: "01",
    title: "Choose Market",
    desc: "Select NSE, MCX, forex or crypto instruments suitable for intraday trading.",
  },
  {
    step: "02",
    title: "Analyse Chart",
    desc: "Use live charts, indicators, support/resistance and price action before entering.",
  },
  {
    step: "03",
    title: "Place Trade",
    desc: "Execute market or limit orders with predefined stop-loss and target levels.",
  },
  {
    step: "04",
    title: "Manage Risk",
    desc: "Control position size, monitor price movement and avoid overtrading.",
  },
  {
    step: "05",
    title: "Square Off",
    desc: "Close intraday positions before market close or use auto square-off support.",
  },
];

const faqs = [
  {
    q: "What is the amount of money needed to do intraday trading?",
    a: "You can start with ₹5,000, but we suggest ₹25,000–₹50,000 for better risk management and position sizing while doing intraday trading.",
  },
  {
    q: "What will happen if I do not square up my intraday positions?",
    a: "The system automatically squares off intraday positions before market close, helping avoid overnight holding.",
  },
  {
    q: "Is intraday trading profitable?",
    a: "Intraday trading can be profitable with disciplined day trading strategies, risk management and consistent execution, but market risk always remains.",
  },
];

const IntradayTrading = () => {
  return (
    <>
      <Helmet>
        <title>
          Intraday Trading Platform | Day Trading Stocks, Forex & Commodities - Tredixo
        </title>

        <meta
          name="description"
          content="Master intraday trading with zero brokerage & 500X leverage. Learn day trading strategies, get real-time charts & alerts. Start intraday trading on Tredixo now."
        />

        <meta
          name="keywords"
          content="intraday trading, Day trading strategies, Intraday trading tips, Best stocks for intraday, How to do intraday trading, intraday trading platform India, zero brokerage intraday trading, Tredixo intraday trading"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.info/intraday-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta
          property="og:title"
          content="Intraday Trading Platform | Day Trading Stocks, Forex & Commodities - Tredixo"
        />
        <meta
          property="og:description"
          content="Master intraday trading with zero brokerage, 500X leverage, real-time charts, day trading strategies and fast execution on Tredixo."
        />
        <meta property="og:url" content="https://tredixo.info/intraday-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Intraday Trading Platform | Day Trading Stocks, Forex & Commodities - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Start intraday trading with zero brokerage, 500X leverage, real-time charts, alerts and advanced trading tools."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Intraday Trading Platform",
            url: "https://tredixo.info/intraday-trading",
            description:
              "Learn intraday trading with day trading strategies, real-time charts, alerts, high leverage and zero brokerage on Tredixo.",
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
                Intraday Trading Platform
              </p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                 Day Trade With
                <br />
                <span className="text-[#52ff1f]">
                  Zero Commission & Advanced Tools
                </span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Intraday trading is the buying and selling of financial
                instruments within a single trading day. Tredixo supports
                intraday trading across stocks, forex, crypto and commodities
                with real-time charts, instant execution and technical
                indicators.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start Intraday Trading <FiArrowRight />
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

            <ImageBox image={intradayHero} alt="Intraday Trading Platform" />
          </div>
        </section>

        {/* WHAT IS INTRADAY */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ImageBox image={trading} alt="What is Intraday Trading" />

            <div>
              <SectionLabel>What is Intraday Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Same-Day Trading
                <br />
                <span className="text-[#52ff1f]">Without Overnight Holding</span>
              </h2>

              <p className="text-gray-300 mt-6 leading-8">
                Intraday trading means all positions opened during the day
                should be closed before the market closes. The biggest benefit
                is that traders do not carry overnight exposure.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {[
                  "No overnight position",
                  "More leverage than delivery trades",
                  "Fast returns from small price moves",
                  "Margin support for active trades",
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

        {/* WHY CHOOSE */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>Why Choose Tredixo for Intraday Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Leverage, Charts
                <br />
                <span className="text-[#52ff1f]">And Fast Execution</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-8">
                Tredixo gives intraday traders charting tools, fast execution,
                auto square-off support and high leverage for aggressive day
                trading strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {intradayFeatures.map((item, index) => (
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

        {/* STRATEGIES */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Popular Intraday Trading Strategies</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Day Trading
              <br />
              <span className="text-[#52ff1f]">Strategies Traders Use</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((item) => (
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

        {/* INSTRUMENTS */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>Best Instruments for Intraday Trading</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Markets Built For
                <br />
                <span className="text-[#52ff1f]">Active Day Trading</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {instruments.map((item) => (
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

        {/* START STEPS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>How to Start Intraday Trading</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Start Day Trading
              <br />
              <span className="text-[#52ff1f]">In 5 Easy Steps</span>
            </h2>

            <p className="text-gray-300 mt-5 leading-8">
              Pick your market, analyse the chart, place the trade, manage risk
              and square off before market close.
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
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <SectionLabel>Frequently Asked Questions</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold">
              Intraday Trading <span className="text-[#52ff1f]">FAQs</span>
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
                Start Intraday Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Day Trade
                <br />
                <span className="text-[#52ff1f]">With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Start intraday trading with fast execution, charts, alerts and
                disciplined risk tools.
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

export default IntradayTrading;