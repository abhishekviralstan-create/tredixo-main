import { motion, animate, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef, useState } from 'react';
import {
  FiEdit3,
  FiLock,
  FiDollarSign,
  FiTrendingUp,
} from 'react-icons/fi';

import securityImg from '../assests/why-security.gif';
import candleImg from '../assests/candle.gif';
import bgImg from '../assests/CTA-BG.gif';
import commitmentBg from '../assests/globe.png';
import hero from '../assests/why-tredixo.png'

// right side hero image yaha change kar sakte ho
import heroImg from '../assests/why-security.gif';

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

const AnimatedStat = ({ value, suffix = '', decimals = 0, start = false }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start || typeof value !== 'number') return;

    setDisplay(0);

    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplay(latest);
      },
    });

    return () => controls.stop();
  }, [value, start]);

  return (
    <>
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
};

const ShieldVisual = () => {
  return (
  <div className="w-full max-w-[520px] rounded-[30px] border border-[#52ff1f]/30 overflow-hidden">
  <img
    src={securityImg}
    alt="security"
    className="w-full h-full object-cover"
  />
</div>
  );
};

const WhyTredixo = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 });

  return (
    <>
   <Helmet>
  <title>Why Tredixo | Smart Trading Platform with Powerful Tools</title>

  <meta
    name="description"
    content="Discover why traders choose Tredixo for low brokerage, fast execution, real-time market insights, advanced trading tools."
  />

  <meta
    name="keywords"
    content="Why Tredixo, Tredixo trading platform, smart trading platform, low brokerage trading platform, real-time market insights, advanced trading tools, high leverage trading, fast execution trading platform, reliable trading access, global market trading"
  />

  <meta name="publisher" content="Tredixo" />
  <meta name="author" content="Tredixo" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

  <link rel="canonical" href="https://www.tredixo.info/why-tredixo" />

  <meta property="og:title" content="Why Tredixo | Smart Trading Platform with Powerful Tools" />
  <meta
    property="og:description"
    content="See why Tredixo stands out with fast execution, low brokerage, advanced tools, real-time insights, and smooth access to global markets."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.tredixo.info/why-tredixo" />
  <meta property="og:site_name" content="Tredixo" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Why Tredixo | Smart Trading Platform" />
  <meta
    name="twitter:description"
    content="Trade smarter with Tredixo’s powerful tools, fast execution, low brokerage, and reliable market access."
  />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Why Tredixo",
      url: "https://www.tredixo.info/why-tredixo",
      description:
        "Discover why traders choose Tredixo for low brokerage, fast execution, real-time market insights, advanced trading tools, high leverage, and reliable global market access.",
      publisher: {
        "@type": "Organization",
        name: "Tredixo",
        url: "https://www.tredixo.info/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.tredixo.info/logo.png",
        },
      },
    })}
  </script>

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tredixo.info/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Why Tredixo",
          item: "https://www.tredixo.info/why-tredixo",
        },
      ],
    })}
  </script>
</Helmet>

      <div className="w-full min-h-screen bg-[#05070b] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative w-full min-h-[75vh] md:min-h-[90vh] flex items-center justify-center bg-[#05070b] px-4 md:px-8 lg:px-12 border-b border-white/5 overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
  <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

  <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center py-16">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
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
        <a
          href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-[#52ff1f] text-black px-8 py-3.5 rounded-full font-semibold shadow-[0_0_35px_rgba(82,255,31,0.25)] hover:scale-105 transition-all duration-300"
        >
          Explore Platform
        </a>

        <a
          href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center border border-[#52ff1f]/40 bg-[#52ff1f]/10 text-[#52ff1f] px-8 py-3.5 rounded-full font-semibold hover:bg-[#52ff1f] hover:text-black transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: 30 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-[560px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[420px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-12 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <img
          src={hero}
          alt="Tredixo platform"
          className="relative z-10 w-full h-[420px] object-contain"
        />
      </div>
    </motion.div>
  </div>
</section>
        {/* INTRO */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[#52ff1f] uppercase tracking-[3px] text-sm font-semibold mb-4">
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
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <ShieldVisual />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-24">
          <div className="text-center mb-12">
            <p className="text-[#52ff1f] font-semibold tracking-[3px] uppercase text-sm">
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
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#10151d] to-[#0a0d12] p-6 min-h-[300px] transition-all duration-300 hover:-translate-y-2 hover:border-[#52ff1f]/40 hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_42%)] opacity-60" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#52ff1f]/10 border border-[#52ff1f]/25 flex items-center justify-center text-[#52ff1f] font-bold text-lg mb-5 group-hover:bg-[#52ff1f]/20 transition-all">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#52ff1f] transition-all">
                    {item.title}
                  </h3>

                  <p className="text-white/70 leading-7 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="relative w-full py-16 md:py-20 border-y border-white/5 bg-[#05060a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.08),transparent_35%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div ref={statsRef} className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  value: <AnimatedStat value={5} suffix="+" start={statsInView} />,
                  label: 'Years of Market Empowerment',
                },
                {
                  value: '24/7',
                  label: 'Platform Availability',
                },
                {
                  value: <AnimatedStat value={1000} suffix="+" start={statsInView} />,
                  label: 'Trading Opportunities',
                },
                {
                  value: 'Fast',
                  label: 'Performance & Execution',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f16] px-4 py-7 md:py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_18px_45px_rgba(82,255,31,0.08)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.14),transparent_42%)] opacity-70" />
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#52ff1f]/10 blur-2xl transition-all duration-300 group-hover:bg-[#52ff1f]/20" />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#52ff1f] transition-all duration-300 group-hover:scale-105">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-white/70 text-sm md:text-base">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HIGHLIGHT */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="relative rounded-[32px] overflow-hidden border border-white/10 px-6 md:px-10 lg:px-14 py-12 md:py-16 bg-[#05070b] transition-all duration-300 hover:border-[#52ff1f]/35 hover:shadow-[0_25px_70px_rgba(82,255,31,0.10)]">
            <div className="absolute inset-0 z-0">
              <img
                src={commitmentBg}
                alt="CTA Background"
                className="w-full h-full object-cover opacity-[0.25]"
              />
            </div>

            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.10),transparent_60%)]" />

            <div className="relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                  Open Account in Just 1 Minute and Start Trading
                </h2>

                <p className="mt-5 text-white/70 text-sm md:text-lg leading-7 md:leading-8 max-w-3xl mx-auto">
                  Join Tredixo now for the ultimate trading experience. Apply for a trading
                  account in just 1 minute and access advanced tools.
                </p>
              </div>

              <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
                {[
                  {
                    title: 'Register With Tredixo',
                    link: 'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real',
                    icon: <FiEdit3 />,
                  },
                  {
                    title: 'Login',
                    link: 'https://crm.tredixo.co.in/auth-pages/login',
                    icon: <FiLock />,
                  },
                  {
                    title: 'Deposit Funds',
                    link: 'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real',
                    icon: <FiDollarSign />,
                  },
                  {
                    title: 'Start Trading',
                    link: 'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real',
                    icon: <FiTrendingUp />,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-[#52ff1f] text-3xl transition-all duration-300 group-hover:scale-105 group-hover:border-[#52ff1f]/40 group-hover:bg-[#52ff1f]/10">
                      {item.icon}
                    </div>

                    <h3 className="mt-4 text-white text-base md:text-lg font-semibold group-hover:text-[#52ff1f] transition-all">
                      {item.title}
                    </h3>
                  </a>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center min-w-[180px] h-[56px] px-8 rounded-full bg-[#52ff1f] text-black font-semibold text-lg transition-all duration-300 shadow-[0_0_35px_rgba(82,255,31,0.28)] hover:scale-[1.04]"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default WhyTredixo;