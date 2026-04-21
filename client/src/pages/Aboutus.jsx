import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
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
        <title>About Us - Tredixo</title>
        <meta
          name="description"
          content="Learn more about Tredixo, our mission, vision, and why traders choose our modern, reliable, and fast trading experience."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* HERO */}
        <section className="relative border-b border-white/10 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(57,255,20,0.14),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,195,255,0.10),transparent_40%)]" />
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[#00c3ff] tracking-[4px] text-sm font-semibold mb-4 uppercase"
            >
              Institutional Grade Tech
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.03em]"
            >
              <span className="text-white">About</span>
             &nbsp;
              <span className="text-[#39FF14]">Tredixo</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-8 max-w-4xl text-white/75 text-base md:text-xl leading-8 md:leading-9"
            >
            Tredixo is built for one reason — to make global trading easier for everyone. We're not just another trading platform; we're your gateway to the world's financial markets, designed with simplicity and power in mind.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center min-w-[220px] h-[58px] rounded-full bg-[#39FF14] text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(57,255,20,0.28)]"
              >
                Start Trading Now
              </a>
            </motion.div>
          </div>
        </section>

      

        {/* MISSION */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#00c3ff]"
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
              className="text-3xl md:text-5xl font-bold text-[#00c3ff]"
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
                className="rounded-[28px] border border-white/10 bg-[#05070d] p-6 hover:border-[#39FF14]/40 hover:shadow-[0_0_24px_rgba(57,255,20,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#0d1d3d] flex items-center justify-center text-2xl mb-5 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-white/65 text-sm leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROFIT / LEVERAGE */}
        <section className="py-16 md:py-24 border-y border-white/10 bg-[#03050a]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1c44_0%,#12307d_100%)] p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold">Profit Without Penalty.</h2>
              <p className="mt-4 text-white/85">
                Trade smart with a cleaner and more efficient trading environment.
              </p>
            </motion.div>

            <div className="mt-14 text-center">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-[#00c3ff]"
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
                className="mt-10 overflow-x-auto rounded-[24px] border border-white/10"
              >
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-[#0f2d73] text-white">
                    <tr>
                      <th className="px-5 py-4">Your Capital</th>
                      <th className="px-5 py-4">Leverage</th>
                      <th className="px-5 py-4">Buying Power</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#05070d]">
                    <tr className="border-t border-white/10">
                      <td className="px-5 py-4">₹500</td>
                      <td className="px-5 py-4 text-[#39FF14] font-bold">100X</td>
                      <td className="px-5 py-4">₹50,000</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-5 py-4">₹1,000</td>
                      <td className="px-5 py-4 text-[#39FF14] font-bold">500X</td>
                      <td className="px-5 py-4">₹5,00,000</td>
                    </tr>
                    <tr className="border-t border-white/10">
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
              className="text-3xl md:text-5xl font-bold text-[#00c3ff]"
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
            className="overflow-x-auto rounded-[24px] border border-white/10"
          >
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr>
                  <th className="px-5 py-4 bg-[#0f2d73] text-white">Feature</th>
                  <th className="px-5 py-4 bg-[#39FF14] text-black">Tredixo</th>
                  <th className="px-5 py-4 bg-[#0f2d73] text-white">Others</th>
                </tr>
              </thead>
              <tbody className="bg-[#05070d]">
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
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
              className="text-3xl md:text-5xl font-bold text-[#00c3ff]"
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
                className="rounded-[28px] border border-white/10 bg-[#05070d] p-6 hover:border-[#39FF14]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0f2d73] flex items-center justify-center text-xl mb-4 border border-white/10">
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
              className="rounded-[32px] overflow-hidden border border-white/10 bg-[linear-gradient(135deg,#0f2d73_0%,#1a49b8_100%)] px-8 md:px-16 py-14 md:py-20"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Ready to start trading with Tredixo?
                  </h2>
                  <p className="mt-6 text-white/85 text-base md:text-lg leading-8 max-w-xl">
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