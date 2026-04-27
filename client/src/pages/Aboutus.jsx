import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const TradingChartSvg = ({ className = "" }) => {
  const greenPath =
    "M0 318 L28 292 L55 300 L83 254 L112 268 L142 228 L174 236 L205 204 L236 214 L268 182 L300 190 L330 160 L362 170 L394 142 L426 156 L458 130 L490 142 L522 116 L554 130 L586 104 L618 116 L650 96 L682 110 L714 98 L746 122 L778 145 L806 188 L834 132 L862 70 L884 82 L900 76";

  return (
    <svg
      viewBox="0 0 900 420"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="chartBgRun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#061216" />
          <stop offset="100%" stopColor="#02080b" />
        </linearGradient>

        <linearGradient id="chartFillRun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#39FF14" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#39FF14" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#39FF14" stopOpacity="0" />
        </linearGradient>

        <filter id="chartGlowRun">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="900" height="420" fill="url(#chartBgRun)" />

      {[70, 135, 200, 265, 330].map((y) => (
        <line key={y} x1="0" y1={y} x2="900" y2={y} stroke="#ffffff" strokeOpacity="0.06" />
      ))}

      {[120, 260, 400, 540, 680, 820].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#ffffff" strokeOpacity="0.035" />
      ))}

      <motion.path
        d={`${greenPath} L900 420 L0 420 Z`}
        fill="url(#chartFillRun)"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <motion.path
        d={greenPath}
        fill="none"
        stroke="#39FF14"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#chartGlowRun)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1], strokeWidth: [5, 7, 5] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.4 }}
      />

      <motion.circle
        cx="305"
        cy="190"
        r="8"
        fill="#39FF14"
        filter="url(#chartGlowRun)"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.55, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />

      <motion.line
        x1="305"
        y1="0"
        x2="305"
        y2="420"
        stroke="#ffffff"
        strokeOpacity="0.18"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
};
const whyChoose = [
  {
    title: "Free Demo Account",
    desc: "Practice in a risk-free environment before going live and understand market behavior with confidence.",
    icon: "📊",
  },
  {
    title: "Quick Sign-Up",
    desc: "Start fast with a smooth onboarding process and get access without unnecessary friction.",
    icon: "⚡",
  },
  {
    title: "All Markets, One Platform",
    desc: "Trade forex, commodities, crypto, and indices from one clean and focused interface.",
    icon: "🌐",
  },
  {
    title: "Fast Execution",
    desc: "Enter and exit trades with speed and precision using a platform built for modern traders.",
    icon: "🚀",
  },
  {
    title: "500+ Tradable Assets",
    desc: "Access a wide range of instruments and opportunities in one powerful ecosystem.",
    icon: "✅",
  },
  {
    title: "Instant Deposits & Withdrawals",
    desc: "Move funds quickly and enjoy smoother account operations with better usability.",
    icon: "💸",
  },
  {
    title: "Zero Brokerage",
    desc: "Transparent experience with a simplified cost structure and no unnecessary surprises.",
    icon: "🛡️",
  },
  {
    title: "Anytime, Any Device",
    desc: "Trade seamlessly from desktop, web, and mobile with one consistent platform experience.",
    icon: "📱",
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
        <link rel="canonical" href="https://www.tredixo.com/" />
      </Helmet>

      <div className="min-h-screen bg-[#02080b] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#39FF14]/20 bg-[#02080b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(57,255,20,0.16),transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_35%,rgba(0,195,255,0.08),transparent_35%)]" />

          <div className="relative z-10 max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
              <motion.div variants={fadeUp} initial="hidden" animate="show">
                <p className="text-[#00c3ff] tracking-[4px] text-sm font-semibold mb-5 uppercase">
                  Institutional Grade Tech
                </p>

                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em]">
                  About <span className="text-[#39FF14]">Tredixo</span>
                </h1>

                <p className="mt-7 max-w-2xl text-white/75 text-base md:text-xl leading-8 md:leading-9">
                  Tredixo is built for one reason — to make global trading easier for
                  everyone. We’re your gateway to the world’s financial markets with
                  simplicity and power.
                </p>

                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex items-center justify-center min-w-[220px] h-[58px] rounded-full bg-[#39FF14] text-black font-black text-base hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(57,255,20,0.35)]"
                >
                  Start Trading Now
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="relative hidden sm:flex items-center justify-center min-h-[430px] group"
              >
                <motion.div
                  className="absolute w-[580px] h-[300px] bg-[#39FF14]/10 blur-[90px] rounded-full"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* LAPTOP */}
                <motion.div
                  className="relative w-[650px]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.035, rotateX: 3, rotateY: -4 }}
                >
                  <div className="relative rounded-[28px] border-[7px] border-[#242424] bg-[#050b0f] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.75)] transition-all duration-500 group-hover:shadow-[0_35px_120px_rgba(57,255,20,0.25)]">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black border border-white/10" />

                    <div className="rounded-[18px] overflow-hidden bg-[#02080b] border border-white/10">
                      <TradingChartSvg className="w-full h-[310px]" />
                    </div>

                    <motion.div
                      className="absolute top-5 left-6 px-4 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/10"
                      whileHover={{ scale: 1.08 }}
                    >
                      <p className="text-white text-sm font-black">Tredixo</p>
                    </motion.div>
                  </div>

                  <div className="mx-auto h-5 w-[92%] bg-gradient-to-r from-[#2b2b2b] via-[#9b9b9b] to-[#2b2b2b] rounded-b-full shadow-[0_15px_35px_rgba(0,0,0,0.6)]" />
                  <div className="mx-auto h-3 w-[22%] bg-[#4b4b4b] rounded-b-xl" />
                </motion.div>

                {/* PHONE */}
                <motion.div
                  className="absolute right-0 top-[92px] w-[175px]"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                >
                  <div className="relative rounded-[38px] border-[7px] border-[#252525] bg-[#050b0f] p-2 shadow-[0_35px_80px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_30px_90px_rgba(57,255,20,0.28)]">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-2 rounded-full bg-black z-20" />

                    <div className="rounded-[28px] overflow-hidden bg-[#02080b] border border-white/10">
                      <TradingChartSvg className="w-full h-[275px]" />
                    </div>

                    <motion.div
                      className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#39FF14] text-black text-[10px] font-black"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 1.3, repeat: Infinity }}
                    >
                      Tredixo
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#39FF14]"
          >
            Our Mission
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="mt-8 text-white/75 text-base md:text-xl leading-9"
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
            className="mt-6 text-white/75 text-base md:text-xl leading-9"
          >
            Every feature is built with purpose: secure transactions, clear pricing,
            fast execution, and a smoother experience that supports real trading needs.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="mt-8 text-[#39FF14] font-semibold text-lg md:text-2xl"
          >
            Tredixo — made for real traders, in the real world.
          </motion.p>
        </section>

        {/* WHY CHOOSE */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#39FF14]"
            >
              Why Choose Tredixo?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="mt-4 text-white/60"
            >
              Experience trading that works for you
            </motion.p>
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
                className="rounded-[28px] border border-[#39FF14]/15 bg-[#050b0f] p-6 hover:border-[#39FF14]/45 hover:shadow-[0_0_28px_rgba(57,255,20,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#07160d] flex items-center justify-center text-2xl mb-5 border border-[#39FF14]/20">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-white/65 text-sm leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROFIT / LEVERAGE */}
        <section className="py-16 md:py-24 border-y border-[#39FF14]/15 bg-[#03080b]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-[#39FF14]/20 bg-[linear-gradient(135deg,#07160d_0%,#051015_100%)] p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Profit Without Penalty.
              </h2>
              <p className="mt-4 text-white/75">
                Trade smart with a cleaner and more efficient trading environment.
              </p>
            </motion.div>

            <div className="mt-14 text-center">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-[#39FF14]"
              >
                Trade More with Less Capital
              </motion.h3>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                className="mt-4 text-white/60"
              >
                Maximize your exposure with powerful margin options
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={2}
                className="mt-8 flex flex-wrap justify-center gap-4"
              >
                <span className="px-6 py-3 rounded-full bg-[#39FF14] text-black font-bold">
                  500X Margin on Futures
                </span>
                <span className="px-6 py-3 rounded-full bg-[#39FF14] text-black font-bold">
                  10X Margin on Options
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={3}
                className="mt-10 overflow-x-auto rounded-[24px] border border-[#39FF14]/20"
              >
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-[#07160d] text-white">
                    <tr>
                      <th className="px-5 py-4">Your Capital</th>
                      <th className="px-5 py-4">Leverage</th>
                      <th className="px-5 py-4">Buying Power</th>
                    </tr>
                  </thead>

                  <tbody className="bg-[#050b0f]">
                    <tr className="border-t border-[#39FF14]/15">
                      <td className="px-5 py-4">₹500</td>
                      <td className="px-5 py-4 text-[#39FF14] font-bold">100X</td>
                      <td className="px-5 py-4">₹50,000</td>
                    </tr>

                    <tr className="border-t border-[#39FF14]/15">
                      <td className="px-5 py-4">₹1,000</td>
                      <td className="px-5 py-4 text-[#39FF14] font-bold">500X</td>
                      <td className="px-5 py-4">₹5,00,000</td>
                    </tr>

                    <tr className="border-t border-[#39FF14]/15">
                      <td className="px-5 py-4">₹10,000</td>
                      <td className="px-5 py-4 text-[#39FF14] font-bold">500X</td>
                      <td className="px-5 py-4">₹50,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#39FF14]"
            >
              Compare Tredixo vs Other Platforms
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="mt-4 text-white/60"
            >
              See how Tredixo stands out with a more modern trading experience
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="overflow-x-auto rounded-[24px] border border-[#39FF14]/20"
          >
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr>
                  <th className="px-5 py-4 bg-[#07160d] text-white">Feature</th>
                  <th className="px-5 py-4 bg-[#39FF14] text-black">Tredixo</th>
                  <th className="px-5 py-4 bg-[#07160d] text-white">Others</th>
                </tr>
              </thead>

              <tbody className="bg-[#050b0f]">
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-t border-[#39FF14]/15">
                    <td className="px-5 py-4 text-white/85">{row[0]}</td>
                    <td className="px-5 py-4 text-[#39FF14] font-bold">{row[1]}</td>
                    <td className="px-5 py-4 text-white/65">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* MARKETS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#39FF14]"
            >
              Trade All Markets, One Powerful Platform!
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="mt-4 text-white/60"
            >
              Access every major market, all in one place
            </motion.p>
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
                className="rounded-[28px] border border-[#39FF14]/15 bg-[#050b0f] p-6 hover:border-[#39FF14]/45 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#07160d] flex items-center justify-center text-xl mb-4 border border-[#39FF14]/20">
                  📈
                </div>

                <h3 className="text-xl font-bold text-[#39FF14]">{item.title}</h3>
                <p className="mt-2 text-white/65 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="mt-10 text-center text-white/70 max-w-3xl mx-auto"
          >
            Trade in your preferred currency. No conversion delays, no hidden fees.
            Just smooth, direct trading with better platform access.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="mt-10 flex justify-center"
          >
            <a
              href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#39FF14] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(57,255,20,0.22)]"
            >
              START TRADING NOW
            </a>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] overflow-hidden border border-[#39FF14]/20 bg-[linear-gradient(135deg,#07160d_0%,#051015_100%)] px-8 md:px-16 py-14 md:py-20"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Ready to start trading with Tredixo?
                  </h2>

                  <p className="mt-6 text-white/80 text-base md:text-lg leading-8 max-w-xl">
                    Join traders who choose Tredixo for a cleaner, faster, and more
                    confident trading journey.
                  </p>
                </div>

                <div className="flex md:justify-end">
                  <a
                    href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#39FF14] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(57,255,20,0.22)]"
                  >
                    OPEN ACCOUNT NOW
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs; 