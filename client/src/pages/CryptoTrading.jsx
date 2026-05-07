import { Helmet } from 'react-helmet-async';
import {
  FiTrendingUp,
  FiZap,
  FiShield,
  FiBarChart2,
  FiGlobe,
  FiClock,
  FiArrowRight,
  FiCheckCircle,
} from 'react-icons/fi';

// apni hero image yaha change kar sakte ho
import cryptoHero from '../assests/crypto2.png';

const cryptoFeatures = [
  {
    icon: <FiTrendingUp />,
    title: 'Top Crypto Markets',
    desc: 'Access popular crypto assets like Bitcoin, Ethereum, Litecoin, Ripple and more from one clean dashboard.',
  },
  {
    icon: <FiZap />,
    title: 'Fast Execution',
    desc: 'Experience a smooth trading interface designed for quick order flow and active market participation.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Live Market View',
    desc: 'Track market movement, price action and trading opportunities with a modern crypto-focused layout.',
  },
  {
    icon: <FiShield />,
    title: 'Secure Platform Access',
    desc: 'Trade with a platform experience focused on stability, usability and better access control.',
  },
];

const cryptoAssets = [
  'Bitcoin Trading',
  'Ethereum Trading',
  'Litecoin Trading',
  'Ripple Trading',
  'USDT Pairs',
  'Global Crypto Markets',
];

const Trading = () => {
  return (
    <>
      <Helmet>
        <title>Crypto Trading Platform | Bitcoin, Ethereum & More — Tredixo</title>
        <meta
          name="description"
          content="Trade Bitcoin, Ethereum, Litecoin, Ripple & top cryptocurrencies with zero brokerage on Tredixo. High leverage, instant execution & 24/7 support."
        />
        <meta
          name="keywords"
          content="crypto trading platform India, Bitcoin trading India, Ethereum trading India, zero fee crypto trading, crypto demo account India, simulate Bitcoin trading"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredixo.com/crypto-trading" />
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                Crypto Trading Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Trade Crypto
                <br />
                <span className="text-[#52ff1f]">Smarter With Tredixo</span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Trade Bitcoin, Ethereum, Litecoin, Ripple and other top cryptocurrencies
                with a modern interface, fast execution, zero brokerage experience and
                24/7 support.
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

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[380px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <img
                  src={cryptoHero}
                  alt="Crypto Trading"
                  className="relative z-10 w-full h-[380px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
              Why Crypto Traders Choose Us
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Built For Fast &
              <br />
              <span className="text-[#52ff1f]">Flexible Crypto Trading</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoFeatures.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0f16] p-6 min-h-[280px] transition-all duration-300 hover:-translate-y-2 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_45%)] opacity-70" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f] text-xl">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#52ff1f] transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-7 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ASSETS */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.09),transparent_35%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
                Crypto Markets
              </p>

              <h2 className="text-3xl md:text-5xl font-bold">
                Explore Top
                <br />
                <span className="text-[#52ff1f]">Digital Assets</span>
              </h2>

              <p className="text-gray-400 mt-5 leading-7">
                Access major crypto markets and practice active trading strategies using a
                clean, fast and modern platform experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cryptoAssets.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0f16] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#52ff1f]/40 hover:bg-[#0e151d]"
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

        {/* PLATFORM SECTION */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0f16] p-6 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_42%)]" />
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
                  Trading Experience
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  One Platform For
                  <br />
                  <span className="text-[#52ff1f]">Crypto Market Action</span>
                </h2>

                <p className="text-gray-300 mt-5 leading-8">
                  Tredixo helps users access a crypto-focused trading experience with a
                  simplified interface, real-time market feel, smart dashboard flow and
                  fast access across devices.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <FiClock />, title: '24/7 Market Access' },
                  { icon: <FiZap />, title: 'Quick Execution' },
                  { icon: <FiGlobe />, title: 'Global Crypto Assets' },
                  { icon: <FiShield />, title: 'Secure Access' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#52ff1f]/40 hover:bg-[#52ff1f]/10"
                  >
                    <div className="text-[#52ff1f] text-2xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-6 md:px-10 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.12),transparent_35%)]" />
            <div className="absolute -bottom-10 right-10 h-48 w-48 rounded-full bg-[#52ff1f]/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start Trading
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Trade
                <br />
                <span className="text-[#52ff1f]">Crypto With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Create your account and explore a faster, smarter and cleaner crypto trading experience.
              </p>

              <div className="mt-8">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#52ff1f] px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_rgba(82,255,31,0.28)] transition hover:scale-[1.04]"
                >
                  Start Trading Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Trading;