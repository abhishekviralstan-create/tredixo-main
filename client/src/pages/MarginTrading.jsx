import { Helmet } from "react-helmet-async";
import {
  FiTrendingUp,
  FiZap,
  FiShield,
  FiBarChart2,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import marginHero from "../assests/margintrading.png";
import trading from "../assests/intraday.png"
const marginFeatures = [
  {
    icon: <FiTrendingUp />,
    title: "Up to 500X Leverage",
    desc: "Access high leverage across NSE, MCX, forex, crypto and options.",
    points: ["NSE & MCX Futures: 500X", "Forex major pairs: 200X", "Crypto: up to 100X"],
  },
  {
    icon: <FiZap />,
    title: "Zero Interest on Margin",
    desc: "Tredixo provides leverage without daily interest or hidden financing charges.",
    points: ["No daily interest", "No hidden financing fee", "Spread-only cost structure"],
  },
  {
    icon: <FiBarChart2 />,
    title: "Real-Time Margin Monitoring",
    desc: "Track available margin, used margin and margin level directly on the platform.",
    points: ["Available margin", "Used margin", "Margin level alerts"],
  },
  {
    icon: <FiShield />,
    title: "Automatic Risk Management",
    desc: "Built-in risk controls help manage high leverage trading more transparently.",
    points: ["Stop-out at 50%", "Margin call alerts", "Negative balance protection"],
  },
];

const steps = [
  {
    step: "01",
    title: "Understand Margin Terminology",
    desc: "Learn leverage, margin percentage, margin level and free margin before placing trades.",
  },
  {
    step: "02",
    title: "Calculate Position Size",
    desc: "Use position sizing based on account balance, leverage and current market price.",
  },
  {
    step: "03",
    title: "Manage Your Risk",
    desc: "Use stop-loss orders, avoid overexposure and keep margin level above safer limits.",
  },
];

const faqs = [
  {
    q: "What is Margin and Leverage?",
    a: "Leverage is the ratio used to multiply your capital, such as 100X. Margin is the percentage you need to put down. Margin percentage equals 100 divided by leverage.",
  },
  {
    q: "Could I lose more money than the amount I deposit?",
    a: "Tredixo provides negative balance protection on its margin trading platform, so you cannot owe more than your deposited amount.",
  },
  {
    q: "What is Stop Out Level?",
    a: "Stop-out level is the margin threshold where the platform automatically closes positions to help prevent additional losses.",
  },
  {
    q: "Why does the system close positions at 50% margin level?",
    a: "This automatic risk-management rule helps limit excessive losses and protects the trading account during high leverage market conditions.",
  },
];

const MarginTrading = () => {
  return (
    <>
      <Helmet>
        <title>Margin Trading India | Trade with Up to 500X Leverage - Tredixo</title>
        <meta
          name="description"
          content="Margin trading with up to 500X leverage on stocks, forex, crypto & commodities. Amplify your returns with zero commission. Learn how margin trading works on Tredixo."
        />
        <meta
          name="keywords"
          content="margin trading in India, High leverage trading, Margin trading platform, What is margin trading, Leverage trading explained, 500x leverage trading India, Tredixo margin trading"
        />
        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.info/margin-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta property="og:title" content="Margin Trading India | Trade with Up to 500X Leverage - Tredixo" />
        <meta
          property="og:description"
          content="Trade with up to 500X leverage across stocks, forex, crypto and commodities. Learn how margin trading works on Tredixo."
        />
        <meta property="og:url" content="https://tredixo.info/margin-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Margin Trading India | Trade with Up to 500X Leverage - Tredixo" />
        <meta
          name="twitter:description"
          content="Margin trading with up to 500X leverage, zero commission, real-time margin monitoring and risk management tools."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Margin Trading India",
            url: "https://tredixo.info/margin-trading",
            description:
              "Learn margin trading with up to 500X leverage across stocks, forex, crypto and commodities on Tredixo.",
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
        <section className="relative overflow-hidden border-b border-white/5">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                Margin Trading Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
               Boost Your Gains 
                <br />
                <span className="text-[#52ff1f]">With Up To 500X Leverage</span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Margin trading lets you control larger positions with smaller capital by using leverage. Tredixo offers margin trading in India with leverage from 1:1 to 1:500 across stocks, forex, crypto and commodities.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Start Margin Trading <FiArrowRight />
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

            <ImageBox image={marginHero} alt="Margin Trading Platform" />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ImageBox image={trading} alt="What is Margin Trading" />

            <div>
              <SectionLabel>What is Margin Trading?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Control Larger Positions
                <br />
                <span className="text-[#52ff1f]">With Limited Capital</span>
              </h2>

              <p className="text-gray-300 mt-6 leading-8">
                Margin trading, also known as leverage trading, is the process of borrowing money from your broker to place larger positions than your account balance would normally allow. You deposit a smaller portion as collateral, called margin.
              </p>

              <div className="mt-8 rounded-[28px] bg-[#0b0f16] p-6">
                <h3 className="text-xl font-bold mb-5 text-[#52ff1f]">Example</h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "You have ₹1,000 in your trading account",
                    "500X leverage on Nifty futures via Tredixo",
                    "You get ₹5,00,000 worth of control on Nifty futures",
                    "A 1% move can potentially earn ₹5,000 instead of ₹10",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <FiCheckCircle className="text-[#52ff1f] mt-1 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 mt-6 leading-8">
                Leverage can increase profits, but it can also increase losses. Always use stop-loss orders and never risk more than you can afford to lose.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>Why Trade on Margin with Tredixo?</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                High Leverage, Zero Interest
                <br />
                <span className="text-[#52ff1f]">And Real-Time Margin Controls</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marginFeatures.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[26px] bg-[#0b0f16] p-6 min-h-[330px] transition-all duration-300 hover:-translate-y-2 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.11),transparent_45%)] opacity-70" />

                  <div className="relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f] text-xl">
                      {item.icon}
                    </div>

                    <span className="text-sm text-[#52ff1f] font-semibold">0{index + 1}</span>

                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-[#52ff1f] transition">
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

            <div className="mt-8 rounded-[26px] border border-[#52ff1f]/20 bg-[#52ff1f]/5 p-6 text-gray-300 leading-8">
              You can get started with margin trading for just ₹500. Many traditional brokers ask for ₹25,000–₹50,000 minimum margin requirements.
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>How Margin Trading Works</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Learn, Calculate
              <br />
              <span className="text-[#52ff1f]">And Manage Risk</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item) => (
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

                  <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] bg-[#0b0f16] p-6 text-gray-300 leading-8">
            <strong className="text-white">Formula:</strong> Position Size = (Account Balance × Leverage) / Current Price
            <br />
            Example: Account balance ₹10,000 × 100 leverage / Nifty price 20,000 = 52 lots.
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <SectionLabel>Frequently Asked Questions</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold">
              Margin Trading <span className="text-[#52ff1f]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[24px] bg-[#0b0f16] p-6">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-5 font-semibold text-base md:text-lg">
                  {item.q}
                  <span className="text-[#52ff1f] text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-8">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-6 md:px-10 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start Margin Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">With Margin On Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Access high leverage trading with margin controls, risk tools and a clean trading experience.
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

export default MarginTrading;