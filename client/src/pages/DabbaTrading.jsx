import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiZap,
  FiShield,
  FiBarChart2,
  FiSmartphone,
} from "react-icons/fi";

import dabbaHero from "../assests/dabbatrading.png";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 },
};

const features = [
  {
    icon: <FiZap />,
    title: "Fast Execution",
    desc: "Designed for traders who need quick order flow and smooth trading experience.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Live Market Data",
    desc: "Track market movement, price charts and active opportunities in real time.",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Trading",
    desc: "Use a modern Dabba Trading App style experience from mobile devices.",
  },
  {
    icon: <FiShield />,
    title: "Secure Experience",
    desc: "Focused on platform stability, safe transactions and reliable access.",
  },
];

const faqs = [
  {
    q: "What is Dabba Trading?",
    a: "Dabba Trading refers to off-market trading activity where trades are managed internally within a trading system instead of official stock exchanges.",
  },
  {
    q: "Is Dabba Trading fast?",
    a: "Yes. Many traders prefer Dabba Trading platforms because of faster execution and simplified order flow.",
  },
  {
    q: "Can I trade using mobile?",
    a: "Yes. Modern Dabba Trading Apps allow users to trade directly from smartphones with live market updates.",
  },
];

const Section = ({ title, children }) => (
  <section className="py-10 border-b border-white/6 last:border-b-0">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
      {title}
    </h2>

    <div className="space-y-5 text-white/72 text-[16px] md:text-[17px] leading-8">
      {children}
    </div>
  </section>
);

const DabbaTrading = () => {
  return (
    <>
      <Helmet>
        <title>
          Dabba Trading Platform India | Online Dabba Trading App - Tredixo
        </title>

        <meta
          name="description"
          content="Explore online dabba trading with fast execution, high leverage and modern trading tools on Tredixo."
        />

        <meta
          name="keywords"
          content="Dabba Trading Platform, Online Dabba Trading Platform, Dabba Trading App, Best Dabba Trading Platform, Online Trading Platform India, High leverage trading platform, Tredixo Dabba Trading"
        />

        <meta name="publisher" content="Tredixo" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tredixo.info/dabba-trading" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tredixo" />
        <meta
          property="og:title"
          content="Dabba Trading Platform India | Online Dabba Trading App - Tredixo"
        />
        <meta
          property="og:description"
          content="Trade with a modern Dabba Trading Platform featuring fast execution, high leverage, mobile accessibility and advanced tools."
        />
        <meta property="og:url" content="https://tredixo.info/dabba-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dabba Trading Platform India | Online Dabba Trading App - Tredixo"
        />
        <meta
          name="twitter:description"
          content="Explore fast and advanced dabba trading experience with Tredixo."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Dabba Trading Platform India",
            url: "https://tredixo.info/dabba-trading",
            description:
              "Explore online dabba trading with fast execution, mobile trading experience, live market data and modern trading tools on Tredixo.",
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

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                Online  Dabba Trading Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Fast, Modern &
                <br />
                <span className="text-[#52ff1f]">
                  High Leverage
                </span>
              </h1>

              <p className="text-gray-300 mt-6 leading-8 text-base md:text-lg max-w-2xl">
                Dabba Trading is an expedited version of conventional market
                trading and is tailored for traders who value speed, simplicity
                and direct market access.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] hover:scale-105 transition"
                >
                  Start Trading <FiArrowRight />
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
            </motion.div>

            <motion.div {...fadeUp}>
              <ImageBox image={dabbaHero} alt="Dabba Trading Platform" />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative border-b border-white/5 bg-[#05060a] overflow-hidden">
          <HeroBg />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>Why Traders Like Dabba Trading</SectionLabel>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Fast Execution,
                <br />
                <span className="text-[#52ff1f]">Mobile Access & Live Tools</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[26px] bg-[#0b0f16] p-6 min-h-[260px] transition-all duration-300 hover:-translate-y-2 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
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

                    <p className="text-gray-400 leading-7 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        {/* ARTICLE CONTENT */}
        <main className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Dabba Trading Guide</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Understand Dabba Trading
              <br />
              <span className="text-[#52ff1f]">With A Modern View</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Learn how Dabba Trading works, its features, benefits, risks and the key
              things to check before choosing any platform.
            </p>
          </div>

          {/* WHAT IS */}
          <section className="grid lg:grid-cols-2 gap-8 items-stretch mb-10">
            <div className="relative overflow-hidden rounded-[30px] bg-[#0b0f16] p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.12),transparent_42%)]" />
              <div className="relative z-10">
                <SectionLabel>What is Dabba Trading?</SectionLabel>

                <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-5">
                  Off-Market Trading
                  <span className="text-[#52ff1f]"> Explained</span>
                </h3>

                <p className="text-gray-300 leading-8">
                  Dabba trading is where informal trades are made beyond official stock
                  exchanges. Orders do not enter NSE or BSE, but trading through a
                  Dabba Trading Platform is managed within the system.
                </p>

                <p className="text-gray-400 leading-8 mt-4">
                  In simple language, Dabba Trading allows traders to speculate on stock
                  price movement without actually executing the trade on the exchange.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] bg-[#0b0f16] p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,255,0.10),transparent_42%)]" />
              <div className="relative z-10">
                <SectionLabel>Key Characteristics</SectionLabel>

                <div className="space-y-4">
                  {[
                    "Trades are executed off-market",
                    "No official exchange transaction",
                    "Higher leverage opportunities",
                    "Faster trade execution",
                    "Lower margin requirements",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-4"
                    >
                      <FiCheckCircle className="text-[#52ff1f] mt-1 shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 leading-8 mt-5">
                  Because of these features, many traders prefer an Online Dabba Trading
                  Platform rather than using a traditional brokerage setup.
                </p>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="relative overflow-hidden rounded-[34px] bg-[#05060a] p-6 md:p-10 mb-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.10),transparent_45%)]" />

            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <SectionLabel>How Dabba Trading Works</SectionLabel>

                <h3 className="text-3xl md:text-5xl font-bold">
                  Simple Trading
                  <span className="text-[#52ff1f]"> Flow</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-4 gap-5">
                {[
                  {
                    step: "01",
                    title: "Account Setup",
                    desc: "A trader registers with a Dabba Trading Platform such as Tredixo.",
                  },
                  {
                    step: "02",
                    title: "Deposit Capital",
                    desc: "Funds are deposited into the trading wallet on the platform.",
                  },
                  {
                    step: "03",
                    title: "Trade Execution",
                    desc: "Buy and sell orders are placed through the Dabba Trading App.",
                  },
                  {
                    step: "04",
                    title: "Settlement",
                    desc: "Profit or loss is calculated based on actual market price movement.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="group rounded-[26px] bg-[#0b0f16] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-[#101822]"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#52ff1f] text-black font-black">
                      {item.step}
                    </span>

                    <h4 className="text-xl font-bold mt-6 mb-3 group-hover:text-[#52ff1f] transition">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMPARISON */}
          <section className="mb-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionLabel>Comparison</SectionLabel>

              <h3 className="text-3xl md:text-5xl font-bold">
                Dabba Trading vs
                <span className="text-[#52ff1f]"> Stock Market Trading</span>
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                Dabba Trading Platforms are usually built for traders who want speed and
                simplified execution, while conventional markets offer regulated
                transparency.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[30px] bg-[#0b0f16]">
              <table className="w-full text-left min-w-[720px]">
                <thead className="bg-[#52ff1f] text-black">
                  <tr>
                    <th className="p-5 font-bold">Feature</th>
                    <th className="p-5 font-bold">Dabba Trading</th>
                    <th className="p-5 font-bold">Stock Market Trading</th>
                  </tr>
                </thead>

                <tbody className="text-gray-300">
                  {[
                    ["Trade Location", "Off-market", "NSE/BSE"],
                    ["Regulation", "Informal", "SEBI regulated"],
                    ["Speed", "Faster", "Exchange dependent"],
                    ["Leverage", "Higher", "Limited"],
                    ["Brokerage", "Often lower", "Standard charges"],
                  ].map(([feature, dabba, stock]) => (
                    <tr key={feature} className="border-b border-white/10 last:border-b-0">
                      <td className="p-5 font-semibold text-white">{feature}</td>
                      <td className="p-5">{dabba}</td>
                      <td className="p-5">{stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FEATURES + APP ADVANTAGES */}
          <section className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="rounded-[30px] bg-[#0b0f16] p-6 md:p-8">
              <SectionLabel>Platform Features</SectionLabel>

              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Best Platform
                <span className="text-[#52ff1f]"> Features</span>
              </h3>

              <div className="space-y-5">
                {[
                  ["Live Market Data", "A good platform should show accurate live market prices."],
                  ["Simple to Use", "A good Dabba Trading App should be clean and easy to understand."],
                  ["Efficient Order Execution", "The platform should support high trading volume smoothly."],
                  ["Safe Transactions", "A trusted trading website should support safe deposits and withdrawals."],
                  ["Advanced Trading Tools", "Charts, indicators, stop-loss options and margin tracking help traders."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <FiCheckCircle className="text-[#52ff1f] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">{title}</h4>
                      <p className="text-gray-400 leading-7 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[#0b0f16] p-6 md:p-8">
              <SectionLabel>App Advantages</SectionLabel>

              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Benefits Of Using
                <span className="text-[#52ff1f]"> The App</span>
              </h3>

              <div className="space-y-5">
                {[
                  ["Trade Anywhere", "Monitor markets and trade from mobile devices."],
                  ["Instant Notifications", "Live alerts help traders react quickly to market movements."],
                  ["Market Insights", "Price charts and analytical services help users understand opportunities."],
                  ["Faster Decision Making", "Live updates help traders act quickly without delayed inputs."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <FiCheckCircle className="text-[#52ff1f] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">{title}</h4>
                      <p className="text-gray-400 leading-7 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RISK + START */}
          <section className="grid lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-[30px] bg-[#0b0f16] p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,80,80,0.10),transparent_45%)]" />

              <div className="relative z-10">
                <SectionLabel>Risks and Legal Implications</SectionLabel>

                <h3 className="text-2xl md:text-4xl font-bold mb-6">
                  Know The
                  <span className="text-red-400"> Risks</span>
                </h3>

                <div className="space-y-5">
                  {[
                    ["No Regulation", "Dabba Trading Platforms are generally not regulated by official market authorities."],
                    ["Counterparty Risk", "Traders depend on platform credibility because trades are handled internally."],
                    ["Market Volatility", "Like all trading, Dabba Trading includes risk from market price fluctuations."],
                    ["Platform Reliability", "Check platform stability, reviews and credibility before choosing any platform."],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex gap-4">
                      <FiCheckCircle className="text-red-400 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-bold text-white">{title}</h4>
                        <p className="text-gray-400 leading-7 text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-[#0b0f16] p-6 md:p-8">
              <SectionLabel>How to Start</SectionLabel>

              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Start Dabba Trading
                <span className="text-[#52ff1f]"> Step-by-Step</span>
              </h3>

              <div className="space-y-4">
                {[
                  "Choose a trusted platform like Tredixo",
                  "Register your account",
                  "Deposit funds",
                  "Analyse the market",
                  "Place your first trade",
                  "Manage risk with stop-loss",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#52ff1f] text-black font-black">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY TREDIXO */}
          <section className="mt-10 rounded-[34px] bg-[linear-gradient(135deg,#0b0f16,#102914,#071018)] p-6 md:p-10 text-center">
            <SectionLabel>Why Tredixo?</SectionLabel>

            <h3 className="text-3xl md:text-5xl font-bold">
              Why Tredixo Is A Modern
              <br />
              <span className="text-[#52ff1f]">Dabba Trading Platform</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
              {[
                "Advanced trading interface",
                "Fast execution engine",
                "Mobile trading experience",
                "Secure transaction flow",
                "Growing trader community",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-black/25 p-5">
                  <FiCheckCircle className="text-[#52ff1f] mx-auto mb-3" />
                  <p className="text-gray-300 text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-6 md:px-10 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start Dabba Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Explore a fast, modern and mobile-friendly trading experience.
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

const HeroBg = () => null;

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
        className="relative z-10 w-full h-[380px] object-contain"
      />
    </div>
  </div>
);

export default DabbaTrading;