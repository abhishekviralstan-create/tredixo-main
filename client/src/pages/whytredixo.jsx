import { motion, animate } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import securityImg from '../assests/why-security.gif';
import candleImg from '../assests/candle.gif'
import bgImg from '../assests/CTA-BG.gif';
import commitmentBg from '../assests/globe.png';

const features = [
  {
    title: 'Advanced Trading Tools',
    desc: 'Tredixo gives traders powerful tools to analyze markets, track trends, and make smarter trading decisions with greater confidence.',
  },
  {
    title: 'Real-Time Market Insights',
    desc: 'Access live market movement, trading updates, and timely insights so you can react faster and stay ahead of opportunities.',
  },
  {
    title: 'Smooth User Experience',
    desc: 'Built with a clean and modern interface, Tredixo makes navigation simple for beginners while staying powerful for experienced traders.',
  },
  {
    title: 'Reliable Platform Access',
    desc: 'Our focus is on speed, stability, and a dependable experience that helps traders stay focused without unnecessary friction.',
  },
];

const reasons = [
  'Built for both new and experienced traders',
  'Fast interface with a modern user experience',
  'Market-focused environment with better clarity',
  'Reliable platform design for daily trading needs',
];

const AnimatedStat = ({ value, suffix = '', decimals = 0 }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (typeof value !== 'number') return;
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplay(latest);
      },
    });
    return () => controls.stop();
  }, [value]);

  return (
    <>
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
};

const TradingPhoneMockup = () => {
  return (
    <div className="relative w-[290px] sm:w-[340px] md:w-[390px] h-[520px] md:h-[620px] flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -5, 0], rotate: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 w-[250px] sm:w-[290px] md:w-[320px] h-[500px] md:h-[590px] rounded-[42px] bg-[#111] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.75)] overflow-hidden"
      >
        <div className="absolute inset-[5px] rounded-[36px] bg-black border border-white/10 overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-[#0f1115] border border-white/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,140,0.04),transparent_22%)]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 h-full px-4 pt-10 pb-3 flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-white text-sm font-medium">INR 1478541/-</div>
                <div className="text-white/45 text-[10px] mt-0.5">INR Account</div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-[#1ef7b2] text-black flex items-center justify-center font-black text-[11px]">
                A
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-[#274dff]/40 border border-[#5f77ff]/30" />
                <span>Gold · FX</span>
              </div>
              <div className="flex items-center gap-2 text-[#ffd24a]/80">
                <span>⚡</span>
                <span>1M</span>
              </div>
            </div>

            {/* CHART / IMAGE SECTION */}
            <div className="relative mt-4 flex-1 rounded-[24px] border border-white/5 bg-[#05070b] overflow-hidden">
              {/* grid bg */}
              <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px]" />

              {/* dotted line */}


              {/* IMAGE PLACEHOLDER AREA */}
              <div className="absolute inset-0 z-10 px-3 pt-3 pb-[86px]">
                <div className="w-full h-full rounded-[18px] overflow-hidden border border-dashed border-white/10 bg-[#06080d] flex items-center justify-center">
                  {/* yaha image lagani hai */}
                  <img
                    src={candleImg}
                    alt="chart preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* bottom buttons */}
              <div className="absolute left-3 right-3 bottom-3 z-20">
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <div className="h-9 rounded-lg bg-[#2c2d31] flex items-center justify-center text-white/60 text-xs">
                    2 Min
                  </div>
                  <div className="h-9 rounded-lg bg-[#2c2d31] flex items-center justify-center text-white text-sm">
                    - INR 100 +
                  </div>
                  <div className="h-9 rounded-lg bg-[#2c2d31] flex items-center justify-center text-white/60 text-xs">
                    x500
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button className="h-11 rounded-xl bg-[#ff5f73] text-black font-semibold text-sm">
                    Down
                  </button>
                  <button className="h-11 rounded-xl bg-[#3d3f45] text-white font-semibold text-sm">
                    Stop
                  </button>
                  <button className="h-11 rounded-xl bg-[#27e07d] text-black font-semibold text-sm">
                    Up
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-3 text-center text-[10px] text-white/55">
              <div>Tredixo</div>
              <div>Trades</div>
              <div>Events</div>
              <div>Help</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(0,255,140,0.08),transparent_55%)] blur-3xl" />
    </div>
  );
};
const ShieldVisual = () => {
  return (
    <div className="relative w-[270px] md:w-[390px] h-[320px] md:h-[420px] rounded-[32px] overflow-hidden flex items-center justify-center border border-blue-500/20 bg-[#000002] shadow-[0_0_60px_rgba(0,140,255,0.12)]">

      {/* soft blue glow (center only) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.18),transparent_60%)]" />

      {/* grid overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* IMAGE */}
      <img
        src={securityImg}
        alt="security"
        className="relative z-10 w-[90%] h-[90%] object-contain rounded-xl"
      />

    </div>
  );
};
const WhyTredixo = () => {
  return (
    <>
      <Helmet>
        <title>Why Tredixo - Smarter Trading Experience with Powerful Tools and Reliable Access</title>
        <meta
          name="description"
          content="Discover why Tredixo stands out as a modern trading platform with powerful tools, real-time market insights, reliable access, and a smooth experience for traders."
        />
        <meta
          name="keywords"
          content="Why Tredixo, Tredixo trading platform, modern trading platform, real-time market insights, trading tools, reliable trading access, smart trading experience"
        />
        <meta property="og:title" content="Why Tredixo - Smarter Trading Experience with Powerful Tools and Reliable Access" />
        <meta
          property="og:description"
          content="Explore the advantages of Tredixo, including real-time market insights, advanced trading tools, reliable performance, and a user-friendly experience."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Why Tredixo - Smarter Trading Experience with Powerful Tools and Reliable Access"
        />
        <meta
          name="twitter:description"
          content="See why traders choose Tredixo for its smooth interface, reliable performance, and powerful trading-focused experience."
        />
        <link rel="canonical" href="https://yourdomain.com/why-tredixo" />
      </Helmet>

      <div className="w-full min-h-screen bg-black text-white overflow-hidden">
        {/* Hero */}
        <section className="relative w-full min-h-[75vh] md:min-h-[90vh] flex items-center justify-center bg-black px-4 md:px-8 lg:px-12 border-b border-white/10">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,140,0.12),transparent_55%)]" />
          </div>

          <div className="absolute inset-0 opacity-[0.06]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="uppercase tracking-[4px] text-cyan-300 text-xs md:text-sm mb-4 font-medium">
                Institutional Grade Tech
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.98] tracking-[-0.03em]">
                <span className="text-[#eef1f4] block">Precision</span>
                <span className="text-[#52ff1f] block mt-2">Performance.</span>
              </h1>

              <p className="mt-6 text-white/75 text-base md:text-lg lg:text-xl leading-8 max-w-2xl mx-auto md:mx-0">
                Tredixo is built for traders who want speed, clarity, and a better
                digital trading experience. From modern tools to a clean interface,
                every part of the platform is designed to help users trade smarter.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  Explore Platform
                </button>
                <button className="bg-[#ff6b4a] hover:bg-[#ff5a35] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl mx-auto md:mx-0">
                {reasons.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#0f0f0f] border border-white/10 rounded-2xl px-4 py-4 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <TradingPhoneMockup />
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[#ff6b4a] uppercase tracking-[3px] text-sm font-semibold mb-4">
                Built Around Traders
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                More than a platform, it is a better trading environment
              </h2>

              <p className="text-white/75 mt-6 text-base md:text-lg leading-8">
                Tredixo is designed to simplify the trading journey without removing
                the power serious traders need. The platform balances usability,
                speed, and practical market-focused features in one smooth experience.
              </p>

              <p className="text-white/75 mt-4 text-base md:text-lg leading-8">
                Whether users are exploring opportunities, monitoring the market, or
                building daily trading habits, Tredixo provides a cleaner and more
                focused digital environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <ShieldVisual />
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-24">
          <div className="text-center mb-12">
            <p className="text-[#ff6b4a] font-semibold tracking-[3px] uppercase text-sm">
              What Makes Tredixo Different
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Why traders choose Tredixo
            </h2>
            <p className="text-white/65 mt-5 max-w-3xl mx-auto text-base md:text-lg leading-8">
              Every part of the Tredixo experience is built to make trading more
              accessible, more modern, and more reliable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 hover:bg-[#161616] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff6b4a]/15 border border-[#ff6b4a]/20 flex items-center justify-center text-[#ff6b4a] font-bold text-lg mb-5">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                <p className="text-white/70 leading-7 text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-16 md:py-20 border-y border-white/10 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#0e0e0e] border border-white/10 rounded-3xl p-7 md:p-8 text-center"
              >
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#ff6b4a]">
                  <AnimatedStat value={5} suffix="+" />
                </h3>
                <p className="mt-3 text-white/70 text-sm md:text-base">
                  Years of Market Empowerment
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0e0e0e] border border-white/10 rounded-3xl p-7 md:p-8 text-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                />
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#ff6b4a]">24/7</h3>
                <p className="mt-3 text-white/70 text-sm md:text-base">
                  Platform Availability
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0e0e0e] border border-white/10 rounded-3xl p-7 md:p-8 text-center"
              >
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#ff6b4a]">
                  <AnimatedStat value={1000} suffix="+" />
                </h3>
                <p className="mt-3 text-white/70 text-sm md:text-base">
                  Trading Opportunities
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#0e0e0e] border border-white/10 rounded-3xl p-7 md:p-8 text-center"
              >
                <motion.h3
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="text-3xl md:text-5xl font-extrabold text-[#ff6b4a]"
                >
                  Fast
                </motion.h3>
                <p className="mt-3 text-white/70 text-sm md:text-base">
                  Performance & Execution
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlight */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="relative rounded-[32px] overflow-hidden border border-white/10 px-6 md:px-10 lg:px-14 py-12 md:py-16 bg-[#05070b]">

            {/* BG IMAGE */}
            <div className="absolute inset-0 z-0">
              < img src={commitmentBg}
                alt="CTA Background"
                className="w-full h-full object-cover opacity-[0.25]"
              />
            </div>

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/70 to-black/90" />

            {/* subtle glow */}
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(0,255,140,0.08),transparent_60%)]" />

            <div className="relative z-10">
              {/* Heading */}
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                  Open Account in Just 1 Minute and Start Trading
                </h2>

                <p className="mt-5 text-white/70 text-sm md:text-lg leading-7 md:leading-8 max-w-3xl mx-auto">
                  Join Tredixo now for the ultimate trading experience. Apply for a trading
                  account in just 1 minute and access advanced tools.
                </p>
              </div>

              {/* Steps */}
              <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">

                {[
                  {
                    title: "Register With Tredixo",
                    link: "https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real",
                  },
                  {
                    title: "Login",
                    link: "https://crm.tredixo.co.in/auth-pages/login",
                  },
                  {
                    title: "Deposit Funds",
                    link: "https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real",
                  },
                  {
                    title: "Start Trading",
                    link: "https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-[#00ffae]/40">

                      {/* step number */}
                    

                      {/* simple icon */}
                      <div className="text-white text-2xl opacity-80">
                        {i === 0 && "📝"}
                        {i === 1 && "🔐"}
                        {i === 2 && "💰"}
                        {i === 3 && "📈"}
                      </div>
                    </div>

                    <h3 className="mt-5 text-white text-lg md:text-xl font-medium">
                      {item.title}
                    </h3>
                  </a>
                ))}

              </div>

              {/* CTA BUTTON */}
              <div className="mt-12 flex justify-center">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center min-w-[180px] h-[56px] px-8 rounded-full bg-[#ff6b4a] hover:bg-[#ff5a35] text-white font-semibold text-lg transition-all duration-300 shadow-[0_0_25px_rgba(255,107,74,0.4)]"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-20">
          <div className="relative rounded-[32px] px-8 md:px-16 py-14 md:py-20 overflow-hidden border border-white/10 min-h-[320px] md:min-h-[380px] flex items-center">

            {/* BACKGROUND IMAGE FULL COVER */}
            <div className="absolute inset-0 z-0">
              <img
                src={bgImg}
                alt="CTA Background"
                className="w-full h-full object-cover opacity-[0.25]"
              />
            </div>

            {/* extra dark overlay */}
            <div className="absolute inset-0 z-[1] bg-black/70" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Ready to trade smarter with Tredixo?
              </h2>

              <p className="mt-6 text-white/80 text-base md:text-lg leading-8">
                Join a platform designed to offer better usability, smoother access,
                and a more modern trading experience for users who want more from
                their digital journey.
              </p>

              <div className="mt-8">
                <button className="bg-[#ff6b4a] hover:bg-[#ff5a35] transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl">
                  APPLY NOW
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default WhyTredixo;