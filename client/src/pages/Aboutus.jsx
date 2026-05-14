import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import heroTrading from "../assests/about-hero.png";
import {
  FiBarChart2,
  FiZap,
  FiGlobe,
  FiCpu,
  FiCheckCircle,
  FiCreditCard,
  FiShield,
  FiMonitor,
  FiTrendingUp,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};


const whyChoose = [
  {
    title: "Free Demo Account",
    desc: "Practice in a risk-free environment before going live and understand market behavior with confidence.",
    icon: <FiBarChart2 />,
  },
  {
    title: "Quick Sign-Up",
    desc: "Start fast with a smooth onboarding process and get access without unnecessary friction.",
    icon: <FiZap />,
  },
  {
    title: "All Markets, One Platform",
    desc: "Trade forex, commodities, crypto, and indices from one clean and focused interface.",
    icon: <FiGlobe />,
  },
  {
    title: "Fast Execution",
    desc: "Enter and exit trades with speed and precision using a platform built for modern traders.",
    icon: <FiCpu />,
  },
  {
    title: "500+ Tradable Assets",
    desc: "Access a wide range of instruments and opportunities in one powerful ecosystem.",
    icon: <FiCheckCircle />,
  },
  {
    title: "Instant Deposits & Withdrawals",
    desc: "Move funds quickly and enjoy smoother account operations with better usability.",
    icon: <FiCreditCard />,
  },
  {
    title: "Zero Brokerage",
    desc: "Transparent experience with a simplified cost structure and no unnecessary surprises.",
    icon: <FiShield />,
  },
  {
    title: "Anytime, Any Device",
    desc: "Trade seamlessly from desktop, web, and mobile with one consistent platform experience.",
    icon: <FiMonitor />,
  },
];

const compareRows = [
  ["Deposit Time", "Instant", "2–3 Hours"],
  ["Withdrawal Time", "Instant", "24–48 Hours"],
  ["Daily Withdrawals", "Unlimited", "1"],
  ["Weekly Withdrawals", "Unlimited", "1"],
  ["Monthly Withdrawals", "Unlimited", "4"],
  ["Trade Execution Speed", "0.01 Sec", "0.10 Sec"],
  ["Margin", "Up to 500X", "Up to 100X"],
  ["Documentation", "Not Required", "Mandatory"],
  ["Customer Support", "24/7", "24/7"],
  ["Language Support", "8+ Languages", "1–2 Languages"],
  ["Research & Signals", "Yes", "No"],
  ["Trading Education", "Yes", "No"],
];

const marketItems = [
  { title: "NSE", desc: "Futures & Options" },
  { title: "MCX", desc: "Metals, Energy, Agri" },
  { title: "COMEX", desc: "Base & Precious Metals" },
  { title: "US Stocks & Indices", desc: "Dow Jones, S&P 500, Nasdaq" },
  { title: "Forex", desc: "Majors, Minors & Exotics" },
  { title: "Crypto", desc: "Bitcoin, Ethereum, and more" },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Tredixo | Your Trusted Trading Platform</title>
        <meta
          name="description"
          content="Learn about Tredixo, a reliable trading platform offering forex, commodities, crypto, and US stocks trading."
        />
        <meta
          name="keywords"
          content="about Tredixo, trusted trading platform, online trading platform India, CFD trading platform, trading for beginners India"
        />
        <meta property="og:title" content="About Tredixo | Your Trusted Trading Platform" />
        <meta
          property="og:description"
          content="Learn about Tredixo, a reliable trading platform offering forex, commodities, crypto, and US stocks trading."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tredixo Trading Platform" />
        <meta
          name="twitter:description"
          content="Learn about Tredixo, a reliable trading platform offering forex, commodities, crypto, and US stocks trading."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredixo.info/about-us" />
        <meta name="publisher" content="Tredixo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Tredixo",
            "url": "https://www.tredixo.info/about-us",
            "description":
              "Learn about Tredixo, a modern trading platform offering low brokerage, advanced trading tools, instant deposits, and access to global financial markets.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Tredixo",
              "url": "https://www.tredixo.info/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.tredixo.info/logo.png"
              },
              "description":
                "Tredixo is a global trading platform designed for traders looking for fast execution, advanced market access, low brokerage, and powerful trading technology.",
              "foundingDate": "2024",
              "areaServed": "Worldwide",
              "knowsAbout": [
                "Crypto Trading",
                "NSE Trading",
                "MCX Trading",
                "Forex Trading",
                "Margin Trading",
                "Intraday Trading",
                "Commodity Trading"
              ],
              "sameAs": [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
                "https://twitter.com/"
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Tredixo",
            "url": "https://www.tredixo.info/",
            "image": "https://www.tredixo.info/logo.png",
            "description":
              "Tredixo provides advanced online trading services with low brokerage, market analytics, high-speed execution, and access to global financial instruments.",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": [
              "Online Trading Platform",
              "Financial Market Access",
              "Paper Trading",
              "Margin Trading",
              "Forex Trading",
              "Crypto Trading"
            ],
            "brand": {
              "@type": "Brand",
              "name": "Tredixo"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.tredixo.info/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.tredixo.info/about-us"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5 bg-[#05070b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-5">
                Institutional Grade Tech
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-[-0.04em]">
                Precision
                <br />
                <span className="text-[#52ff1f]">Performance.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-8">
                Tredixo is built for traders who want speed, clarity, and a better
                digital trading experience. From modern tools to a clean interface,
                every part of the platform is designed to help users trade smarter.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="/why-tredixo"
                  className="inline-flex items-center justify-center rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Explore Platform
                </a>

                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#52ff1f]/40 bg-[#52ff1f]/10 px-8 py-3.5 font-semibold text-[#52ff1f] transition hover:bg-[#52ff1f] hover:text-black"
                >
                  Get Started
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="relative hidden sm:flex items-center justify-center"
            >
              <motion.img
                src={heroTrading}
                alt="Tredixo Global Trading Platform"
                className="w-full max-w-[620px] h-auto object-contain"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* MISSION */}
        <section className="relative max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3"
          >
            Our Mission
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Make Trading Simple,
            <br />
            <span className="text-[#52ff1f]">Fast & Accessible</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="mt-8 text-gray-300 text-base md:text-xl leading-9"
          >
            We provide a single platform where anyone can trade forex, commodities,
            crypto, and global stocks without the usual complexity. We prioritize
            simplicity, efficiency, and reliability so traders can focus on decisions,
            not confusion.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="mt-6 text-gray-300 text-base md:text-xl leading-9"
          >
            Every feature is built with purpose: secure transactions, clear pricing,
            fast execution, and a smoother experience that supports real trading needs.
          </motion.p>
        </section>

        {/* WHY CHOOSE */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold"
            >
              Why Choose <span className="text-[#52ff1f]">Tredixo?</span>
            </motion.h2>

            <p className="mt-4 text-gray-400">Experience trading that works for you</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0f16] p-6 min-h-[260px] transition-all duration-300 hover:-translate-y-2 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_45%)] opacity-70" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#52ff1f]/10 flex items-center justify-center text-2xl mb-5 border border-[#52ff1f]/25 text-[#52ff1f] group-hover:bg-[#52ff1f]/20 transition-all">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#52ff1f] transition-all">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm leading-7">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROFIT / LEVERAGE */}
        <section className="relative py-16 md:py-24 border-y border-white/5 bg-[#05060a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.09),transparent_35%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-[#0b0f16] p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Profit Without <span className="text-[#52ff1f]">Penalty.</span>
              </h2>
              <p className="mt-4 text-gray-300">
                Trade smart with a cleaner and more efficient trading environment.
              </p>
            </motion.div>

            <div className="mt-14 text-center">
              <h3 className="text-3xl md:text-5xl font-bold">
                Trade More with <span className="text-[#52ff1f]">Less Capital</span>
              </h3>

              <p className="mt-4 text-gray-400">
                Maximize your exposure with powerful margin options
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 rounded-full bg-[#52ff1f] text-black font-bold">
                  500X Margin on Futures
                </span>
                <span className="px-6 py-3 rounded-full border border-[#52ff1f]/40 bg-[#52ff1f]/10 text-[#52ff1f] font-bold">
                  10X Margin on Options
                </span>
              </div>

              <div className="mt-10 overflow-x-auto rounded-[24px] border border-white/10 bg-[#0b0f16]">
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-[#0f1620] text-white">
                    <tr>
                      <th className="px-5 py-4">Your Capital</th>
                      <th className="px-5 py-4">Leverage</th>
                      <th className="px-5 py-4">Buying Power</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["₹500", "100X", "₹50,000"],
                      ["₹1,000", "500X", "₹5,00,000"],
                      ["₹10,000", "500X", "₹50,00,000"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-white/10">
                        <td className="px-5 py-4">{row[0]}</td>
                        <td className="px-5 py-4 text-[#52ff1f] font-bold">{row[1]}</td>
                        <td className="px-5 py-4">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
              Comparison
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Tredixo vs <span className="text-[#52ff1f]">Other Platforms</span>
            </h2>

            <p className="mt-4 text-gray-400">
              See how Tredixo stands out with a more modern trading experience
            </p>
          </div>

          <div className="overflow-x-auto rounded-[24px] border border-white/10 bg-[#0b0f16]">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr>
                  <th className="px-5 py-4 bg-[#0f1620] text-white">Feature</th>
                  <th className="px-5 py-4 bg-[#52ff1f] text-black">Tredixo</th>
                  <th className="px-5 py-4 bg-[#0f1620] text-white">Others</th>
                </tr>
              </thead>

              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-5 py-4 text-white/85">{row[0]}</td>
                    <td className="px-5 py-4 text-[#52ff1f] font-bold">{row[1]}</td>
                    <td className="px-5 py-4 text-gray-400">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* MARKETS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
              Market Access
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Trade All Markets,
              <br />
              <span className="text-[#52ff1f]">One Powerful Platform</span>
            </h2>

            <p className="mt-4 text-gray-400">Access every major market, all in one place</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0f16] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#52ff1f]/40 hover:bg-[#0e151d]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.10),transparent_50%)] opacity-60" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#52ff1f]/10 flex items-center justify-center text-xl mb-4 border border-[#52ff1f]/20 text-[#52ff1f]">
                    <FiTrendingUp />
                  </div>

                  <h3 className="text-xl font-bold text-[#52ff1f]">{item.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-400 max-w-3xl mx-auto">
            Trade in your preferred currency. No conversion delays, no hidden fees.
            Just smooth, direct trading with better platform access.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#52ff1f] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(82,255,31,0.22)]"
            >
              START TRADING NOW
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-8 md:px-16 py-14 md:py-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.12),transparent_35%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Ready to start trading
                <br />
                <span className="text-[#52ff1f]">with Tredixo?</span>
              </h2>

              <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-2xl mx-auto">
                Join traders who choose Tredixo for a cleaner, faster, and more
                confident trading journey.
              </p>

              <div className="mt-8">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#52ff1f] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(82,255,31,0.22)]"
                >
                  OPEN ACCOUNT NOW
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;