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

// 👉 image change kar sakte ho
import mcxHero from '../assests/mcx.png';

const mcxFeatures = [
  {
    icon: <FiTrendingUp />,
    title: 'Gold & Silver Trading',
    desc: 'Trade high-demand commodities like Gold and Silver with a smooth and modern interface.',
  },
  {
    icon: <FiZap />,
    title: 'Fast Execution',
    desc: 'Place trades instantly with a clean and responsive trading-style environment.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Market Analysis Tools',
    desc: 'Track price movement and market activity with simple and clear tools.',
  },
  {
    icon: <FiShield />,
    title: 'Secure Platform',
    desc: 'Focused on stability, usability and a better trading experience.',
  },
];

const mcxMarkets = [
  'Gold Trading',
  'Silver Trading',
  'Crude Oil Trading',
  'Natural Gas Trading',
  'Commodity Futures',
  'Intraday Commodity Trading',
];

const MCXtrading = () => {
  return (
    <>
      <Helmet>
        <title>MCX Trading Platform | Gold, Silver & Commodity Trading — Tredixo</title>
        <meta
          name="description"
          content="Trade Gold, Silver, Crude Oil and commodities on MCX with fast execution and a modern trading interface on Tredixo."
        />
        <meta
          name="keywords"
          content="MCX trading platform India, gold trading India, silver trading platform, crude oil trading MCX, commodity trading India, Tredixo MCX trading"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredixo.com/mcx-trading" />

        <meta property="og:title" content="MCX Trading Platform | Gold, Silver & Commodity Trading — Tredixo" />
        <meta property="og:description" content="Access MCX commodities with a clean and fast trading experience on Tredixo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredixo.com/mcx-trading" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MCX Trading Platform | Gold, Silver & Commodity Trading — Tredixo" />
        <meta name="twitter:description" content="Trade commodities like Gold, Silver & Crude Oil with a modern platform experience." />
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300 mb-4">
                MCX Trading Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Trade Commodities
                <br />
                <span className="text-[#52ff1f]">With Confidence</span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-xl leading-8 text-lg">
                Trade Gold, Silver, Crude Oil and more with a fast, clean and
                modern commodity trading experience on Tredixo.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#52ff1f] text-black px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Start Trading <FiArrowRight />
                </a>

                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=demo"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#52ff1f]/40 text-[#52ff1f] px-8 py-3.5 rounded-full hover:bg-[#52ff1f] hover:text-black transition"
                >
                  Try Demo
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] rounded-[30px] overflow-hidden min-h-[360px] flex items-center justify-center">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />

                <img
                  src={mcxHero}
                  alt="MCX Trading"
                  className="relative z-10 w-full h-[360px] object-contain"
                />
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Why Trade
              <span className="text-[#52ff1f]"> Commodities?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {mcxFeatures.map((item) => (
              <div key={item.title} className="bg-[#0b0f16] border border-white/10 p-6 rounded-2xl hover:border-[#52ff1f]/40 transition">
                <div className="text-[#52ff1f] text-2xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MARKETS */}
        <section className="bg-[#05060a] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold text-center mb-10">
              Popular MCX Markets
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {mcxMarkets.map((item) => (
                <div key={item} className="flex items-center gap-4 border border-white/10 p-5 rounded-xl hover:border-[#52ff1f]/40 transition">
                  <FiCheckCircle className="text-[#52ff1f]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Trading Commodities Today
          </h2>

          <p className="text-gray-400 mb-8">
            Open your account and experience a smarter commodity trading platform.
          </p>

          <a
            href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
            target="_blank"
            rel="noreferrer"
            className="bg-[#52ff1f] text-black px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition"
          >
            Open Account
          </a>
        </section>

      </div>
    </>
  );
};

export default MCXtrading;