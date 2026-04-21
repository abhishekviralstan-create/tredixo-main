import { motion, animate } from 'framer-motion';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../assests/spinner/Spinner';
import { Helmet } from 'react-helmet-async';
import {
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiBookOpen,
  FiBarChart2,
  FiZap,
  FiArrowRight,
} from 'react-icons/fi';
import { FaWhatsapp, FaStar } from 'react-icons/fa';

const formatMoney = (num) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(num);
};

const AnimatedCounter = ({ value, suffix = '', prefix = '', decimals = 0, className = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.2,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Home = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const [withdrawalAmount, setWithdrawalAmount] = useState(12426);
  const [trustScore, setTrustScore] = useState(12.4);

  const [perView, setPerView] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ravi S ',
      role: 'Corporate Trainer & Traveler',
      text:"The whole process of getting into trading always felt complicated, especially since I'm often switching between different devices and time zones while training clients. I started with Tredixo's demo platform, and it immediately clicked. It's so clean and intuitive.",
    },
    {
      id: 2,
      name: 'Priya S',
      role: ' Small Business Owner',
      text: "I run a small export business, so my schedule is crazy. I needed a way to understand the share market but I didn't want to risk my capital while learning. Tredixo’s simulated trading is exactly what I needed. The best part? The support team is 24/7. Seriously, I had a small login hiccup at 2 AM IST, and they sorted it in minutes. It makes managing my learning journey so much less stressful.",
    },
    {
      id: 3,
      name: 'Neha R',
      role: 'Corporate Trainer & Traveler',
      text: "As a consultant, I’m constantly on flights and in different cities-sometimes the network is patchy, and I certainly don't have time for slow platforms. Tredixo’s 10-second registration and super-fast deposits were a lifesaver. It’s the easiest way to keep my market skills active without being tied to a desktop. Highly recommended for any road warrior!",
    },
    {
      id: 4,
      name: 'Vikas Mehra',
      role: 'Intraday Trader',
      text: 'Real-time feel aur speed ka combination impressive hai. Platform stable lagta hai aur day trading ke liye suitable hai.',
    },
    {
      id: 5,
      name: 'Neha Singh',
      role: 'Crypto Trader',
      text: 'Trading journey kaafi easy ho gayi. Layout modern hai, aur mujhe market movement track karna kaafi comfortable lagta hai.',
    },
  ];

  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/blog/get-all-blogs?limit=3`);
        if (response.status === 200) {
          setRecentBlogs(response.data.blogs || []);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllBlogs();
  }, []);

  useEffect(() => {
    const withdrawalInterval = setInterval(() => {
      setWithdrawalAmount((prev) => {
        const next = prev + Math.random() * 120 - 35;
        return Number(Math.max(11950, Math.min(next, 12980)).toFixed(2));
      });
    }, 1800);

    const trustInterval = setInterval(() => {
      setTrustScore((prev) => {
        const next = prev + (Math.random() * 0.9 - 0.35);
        return Number(Math.max(11.8, Math.min(next, 14.9)).toFixed(1));
      });
    }, 1600);

    return () => {
      clearInterval(withdrawalInterval);
      clearInterval(trustInterval);
    };
  }, []);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth >= 1024) {
        setPerView(3);
      } else if (window.innerWidth >= 768) {
        setPerView(2);
      } else {
        setPerView(1);
      }
    };

    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - perView);
    if (testimonialIndex > maxIndex) {
      setTestimonialIndex(0);
    }
  }, [perView, testimonialIndex, testimonials.length]);

  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - perView);
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [perView, testimonials.length]);

  const fadeUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true },
  };

  const stats = useMemo(
    () => [
      { value: 2.5, label: 'Active Traders', suffix: 'M+', green: false, decimals: 1 },
      { value: 150, label: 'Monthly Volume', prefix: '₹', suffix: 'M', green: true, decimals: 0 },
      { value: 0.01, label: 'Execution Speed', suffix: 's', green: false, decimals: 2 },
      { value: 24, label: 'Global Support', suffix: '/7', green: true, decimals: 0 },
    ],
    []
  );

  const paymentOptions = [
    {
      id: 1,
      label: 'UPI',
      sub: 'Instant bank transfer',
      icon: '₹',
      accent: 'from-[#0f1720] to-[#0a0d12]',
    },
    {
      id: 2,
      label: 'Card',
      sub: 'Visa / Mastercard',
      icon: '💳',
      accent: 'from-[#111723] to-[#0a0d12]',
    },
    {
      id: 3,
      label: 'Crypto',
      sub: 'BTC / ETH / USDT',
      icon: '₿',
      accent: 'from-[#111925] to-[#0a0d12]',
    },
    {
      id: 4,
      label: 'Binance Pay',
      sub: 'Fast wallet payments',
      icon: '◆',
      accent: 'from-[#101821] to-[#0a0d12]',
    },
  ];

  const maxDotIndex = Math.max(0, testimonials.length - perView);

  return (
    <>
      <Helmet>
        <title>Low Brokerage & No KYC Trading Platform | Tredixo</title>
        <meta
          name="description"
          content="Access global markets with Tredixo's no KYC, low brokerage platform. Enjoy 500X leverage, zero commissions, and instant deposits. Start trading today!"
        />
        <meta
          name="keywords"
          content="tredixo, trading platform, forex trading, crypto trading, stock market, commodities trading"
        />
        <meta property="og:title" content="Tredixo - Advanced Trading Platform" />
        <meta
          property="og:description"
          content="Experience ultra-fast trading with advanced charting tools."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tredixo Trading Platform" />
        <meta
          name="twitter:description"
          content="Fast, secure & advanced trading experience."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredixo.com/" />
      </Helmet>

      <div className="bg-[#05070b] text-white min-h-screen">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(57,255,20,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(0,180,255,0.08),_transparent_22%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold">
                Free Demo for Financial Markets
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02]">
                <span className="text-slate-100">Zero Brokerage</span>
                <br />
                <span className="text-[#52ff1f]">Trading Platform.</span>
              </h1>

              <p className="text-sm md:text-base text-gray-300 max-w-xl leading-7">
                Explore the world of financial markets with Tredixo. 99% on-time
                deposits & withdrawals with a cleaner and faster trading experience.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#52ff1f] text-black font-semibold px-10 py-4 rounded-full shadow-[0_0_35px_rgba(82,255,31,0.22)] hover:scale-[1.02] transition-all"
                >
                  Start Trading Now
                </a>

                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#52ff1f] text-black font-semibold px-10 py-4 rounded-full shadow-[0_0_35px_rgba(82,255,31,0.22)] hover:scale-[1.02] transition-all"
                >
                  Demo Account
                </a>
              </div>

              <div className="flex items-center gap-5 pt-4 text-gray-400 text-xl">
                <FiShield />
                <FiGlobe />
                <FiBarChart2 />
                <FiBookOpen />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-[radial-gradient(circle,_rgba(82,255,31,0.15),_transparent_55%)] blur-2xl" />

              <div className="relative rounded-[28px] border border-[#193126] bg-gradient-to-br from-[#081018] to-[#0d1117] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <div className="rounded-[22px] overflow-hidden border border-white/5 bg-[#0a0f14]">
                  <div className="h-10 px-4 flex items-center gap-2 border-b border-white/5 bg-[#0e1319]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <span className="text-xs text-gray-400 ml-3">Tredixo</span>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      {['Indices', 'Forex', 'Commodities', 'Crypto'].map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ y: -2, scale: 1.02 }}
                          className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-center text-xs text-gray-300"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>

                    <div className="relative h-72 rounded-2xl bg-gradient-to-b from-[#10161d] to-[#0b1016] border border-white/5 overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

                      <motion.div
                        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
                        animate={{ x: ['0%', '420%'] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                      />

                      <svg viewBox="0 0 600 260" className="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="greenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#52ff1f" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#52ff1f" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1da1f2" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#1da1f2" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        <motion.path
                          d="M0 190 C60 150, 80 160, 140 120 S240 150, 300 110 S400 90, 460 135 S540 110, 600 70"
                          fill="none"
                          stroke="url(#greenGlow)"
                          strokeWidth="12"
                          filter="blur(5px)"
                          opacity="0.9"
                        />

                        <motion.path
                          d="M0 190 C60 150, 80 160, 140 120 S240 150, 300 110 S400 90, 460 135 S540 110, 600 70"
                          fill="none"
                          stroke="#52ff1f"
                          strokeWidth="3"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2.5, ease: 'easeInOut' }}
                        />

                        <motion.path
                          d="M0 210 C70 185, 120 215, 200 170 S330 190, 420 145 S520 160, 600 120"
                          fill="none"
                          stroke="url(#blueGlow)"
                          strokeWidth="10"
                          filter="blur(5px)"
                          opacity="0.65"
                        />

                        <motion.path
                          d="M0 210 C70 185, 120 215, 200 170 S330 190, 420 145 S520 160, 600 120"
                          fill="none"
                          stroke="#1da1f2"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.15 }}
                        />

                        <motion.circle
                          r="5"
                          fill="#52ff1f"
                          filter="drop-shadow(0 0 10px #52ff1f)"
                          animate={{
                            cx: [0, 70, 140, 220, 300, 380, 460, 540, 600],
                            cy: [190, 152, 120, 135, 110, 100, 135, 108, 70],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />

                        <motion.circle
                          r="4"
                          fill="#1da1f2"
                          filter="drop-shadow(0 0 8px #1da1f2)"
                          animate={{
                            cx: [0, 80, 160, 240, 330, 420, 510, 600],
                            cy: [210, 190, 205, 170, 188, 145, 158, 120],
                          }}
                          transition={{
                            duration: 6.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </svg>

                      <motion.div
                        className="absolute bottom-4 left-4 bg-black/70 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <p className="text-xs text-gray-300">Latest Withdrawal</p>
                        <p className="text-sm text-white font-semibold">
                          Success:{' '}
                          <span className="text-[#52ff1f] tabular-nums">
                            {formatMoney(withdrawalAmount)}
                          </span>
                        </p>
                      </motion.div>

                      <motion.div
                        className="absolute top-4 right-4 bg-white/10 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm"
                        animate={{
                          y: [0, 2, 0],
                          boxShadow: [
                            '0 0 0 rgba(82,255,31,0)',
                            '0 0 24px rgba(82,255,31,0.18)',
                            '0 0 0 rgba(82,255,31,0)',
                          ],
                        }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <p className="text-[11px] text-gray-300 uppercase">Trustscore</p>
                        <p className="text-sm font-bold text-[#52ff1f] tabular-nums">
                          +{trustScore.toFixed(1)}%
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <motion.div key={index} {...fadeUp} className="text-center md:text-left">
                <h3
                  className={`text-3xl md:text-4xl font-bold ${item.green ? 'text-[#52ff1f]' : 'text-slate-100'
                    }`}
                >
                  <AnimatedCounter
                    value={item.value}
                    prefix={item.prefix || ''}
                    suffix={item.suffix || ''}
                    decimals={item.decimals || 0}
                  />
                </h3>
                <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BUILT FOR HIGH STAKES */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <motion.p
            {...fadeUp}
            className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3"
          >
            Ecosystem Architecture
          </motion.p>

          <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold text-slate-100 mb-10">
            Built for High Stakes.
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              {...fadeUp}
              className="lg:col-span-2 rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] overflow-hidden"
            >
              <div className="p-7 md:p-8">
                <FiTrendingUp className="text-white text-2xl mb-4" />
                <h3 className="text-3xl font-bold mb-3">Advanced Charting Engine</h3>
                <p className="text-gray-300 max-w-xl leading-7 text-sm md:text-base">
                  Experience a charting engine that updates in real-time with over 100+
                  technical indicators and drawing tools directly in your browser.
                </p>
                <div className="mt-8 text-sm font-semibold text-white inline-flex items-center gap-2">
                  Explore Analytics <FiArrowRight />
                </div>
              </div>

              <div className="h-48 md:h-60 bg-[radial-gradient(circle_at_bottom_right,_rgba(82,255,31,0.18),_transparent_25%),linear-gradient(to_top,_rgba(29,161,242,0.08),transparent)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />

                <motion.div
                  className="absolute bottom-0 right-0 w-40 h-40 bg-[#52ff1f]/10 blur-3xl rounded-full"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.55, 0.35] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                />

                <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M0 180 C50 150, 120 170, 180 130 S320 120, 390 100 S500 120, 600 60"
                    fill="none"
                    stroke="#52ff1f"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.6, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  />

                  <motion.circle
                    r="5"
                    fill="#52ff1f"
                    filter="drop-shadow(0 0 10px #52ff1f)"
                    animate={{
                      cx: [0, 60, 120, 180, 250, 320, 390, 480, 600],
                      cy: [180, 160, 152, 130, 123, 118, 100, 102, 60],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </svg>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="rounded-[26px] border border-[#21451f] bg-[radial-gradient(circle_at_top,_rgba(82,255,31,0.18),_transparent_40%),#0c150b] p-8 flex flex-col justify-center items-center text-center min-h-[320px]"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-[#52ff1f]/15 flex items-center justify-center mb-6"
                animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiZap className="text-[#52ff1f] text-2xl" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Instant Execution</h3>
              <p className="text-gray-300 text-sm leading-7">
                Orders are processed in less than 15ms via our ultra-low latency routing architecture.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: <FiShield className="text-xl text-white" />,
                title: 'Bank-Grade Security',
                desc: '2FA, cold storage vaults, and end-to-end encryption for every transaction.',
              },
              {
                icon: <FiGlobe className="text-xl text-[#52ff1f]" />,
                title: 'Global Markets',
                desc: 'Access 1000+ assets across Stocks, Forex, Crypto, and Commodities.',
              },
              {
                icon: <FiBookOpen className="text-xl text-white" />,
                title: 'Tredixo Academy',
                desc: 'Free educational resources from industry experts to master your strategy.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 min-h-[210px]"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-5">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BLOGS */}
        <section id="blogs" className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-10">
              <div>
                <motion.p
                  {...fadeUp}
                  className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-3"
                >
                  Insights & Intel
                </motion.p>
                <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold text-slate-100">
                  Latest Blogs.
                </motion.h2>
              </div>

              <Link
                to="/blogs"
                className="bg-white/10 border border-white/10 text-white px-5 py-3 rounded-full text-sm hover:bg-white/15 transition-all"
              >
                View All Blogs
              </Link>
            </div>

            {loading ? (
              <div className="flex justify-center py-10">
                <Spinner />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentBlogs && recentBlogs.length > 0 ? (
                  recentBlogs.map((value, index) => (
                    <motion.div
                      key={value._id || index}
                      {...fadeUp}
                      transition={{ duration: 0.7, delay: index * 0.08 }}
                      className="rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] hover:-translate-y-1 transition-all"
                    >
                      <Link to={`/blog/${value.slug}`}>
                        <div className="relative">
                          <img
                            src={value.blogImgFile}
                            alt={value.blogTitle}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="text-[10px] uppercase tracking-[0.18em] bg-black/60 border border-white/10 text-white px-3 py-1 rounded-full">
                              {value.blogCategory || 'Blog'}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <p className="text-[11px] text-gray-400 uppercase tracking-[0.18em] mb-4">
                            {new Date(value.createdAt || Date.now()).toLocaleDateString()} • 5 min read
                          </p>

                          <h3 className="text-2xl font-semibold leading-snug mb-4 line-clamp-2">
                            {value.blogTitle}
                          </h3>

                          <p className="text-gray-400 text-sm leading-7 line-clamp-3 mb-5">
                            {value.blogBody?.replace(/<[^>]*>/g, '').slice(0, 140)}...
                          </p>

                          <span className="text-[#52ff1f] text-sm font-semibold inline-flex items-center gap-2">
                            Read Insight <FiArrowRight />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-400 py-8">
                    No blogs available yet.
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* PAYMENT OPTIONS */}
        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-3">
                Withdrawal Deposit
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
                Quick Deposit
                <br className="hidden sm:block" />
                <span className="text-[#52ff1f]"> with local payment options</span>
              </h2>
            </motion.div>

            {/* Desktop / tablet */}
            <div className="hidden md:flex justify-center items-end mt-14 overflow-x-auto pb-4">
              {paymentOptions.map((item, index) => {
                const isFeatured = item.featured;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40, rotate: isFeatured ? 0 : -6 }}
                    whileInView={{ opacity: 1, y: 0, rotate: isFeatured ? 0 : -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={{
                      rotate: 0,
                      y: -10,
                      scale: isFeatured ? 1.03 : 1.06,
                    }}
                    className={`relative shrink-0 cursor-pointer transition-all duration-300 ${isFeatured
                      ? 'w-[250px] h-[300px] z-20 ml-3 rounded-[28px] border border-white/10 shadow-[0_20px_55px_rgba(0,0,0,0.5)]'
                      : 'w-[135px] h-[250px] -mr-2 rounded-[24px] border border-white/5'
                      }`}
                    style={
                      isFeatured
                        ? {}
                        : {
                          clipPath:
                            'polygon(0 8%, 86% 14%, 100% 20%, 100% 80%, 86% 86%, 0 92%)',
                        }
                    }
                  >
                    <div
                      className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${item.accent}`}
                    />
                    <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
                    <div className="absolute inset-0 rounded-[inherit] border border-white/5" />

                    <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4">
                      <div
                        className={`flex items-center justify-center rounded-full border border-white/10 bg-white/5 mb-5 ${isFeatured ? 'w-16 h-16 text-2xl' : 'w-12 h-12 text-lg'
                          }`}
                      >
                        <span className={isFeatured ? 'text-[#52ff1f]' : 'text-white'}>
                          {item.icon}
                        </span>
                      </div>

                      <h3
                        className={`font-bold tracking-tight ${isFeatured ? 'text-white text-[28px]' : 'text-white text-[17px]'
                          }`}
                      >
                        {item.label}
                      </h3>

                      <p
                        className={`mt-3 text-white/60 leading-6 ${isFeatured ? 'text-sm max-w-[170px]' : 'text-[11px] max-w-[100px]'
                          }`}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile manual slide */}
            <div className="md:hidden mt-10 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex gap-4 w-max pr-4">
                {paymentOptions.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
                    className={`snap-start shrink-0 w-[220px] h-[150px] rounded-[24px] border transition-all duration-300 ${item.featured
                      ? 'border-white/15 bg-gradient-to-br from-[#151b26] to-[#0a0d12] shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
                      : 'border-white/10 bg-gradient-to-br from-[#121821] to-[#0a0d12]'
                      }`}
                  >
                    <div className="h-full flex flex-col items-start justify-between p-5">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-[#52ff1f]">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className={`font-bold ${item.featured ? 'text-xl' : 'text-lg'}`}>
                          {item.label}
                        </h3>
                        <p className="mt-1 text-white/60 text-sm leading-6">{item.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          <motion.div
            {...fadeUp}
            className="rounded-[34px] overflow-hidden border border-[#21451f] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_0%),linear-gradient(90deg,rgba(255,255,255,0.18),rgba(82,255,31,0.22))] min-h-[290px] flex items-center justify-center text-center px-6"
          >
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
                Ready to join the <span className="text-[#52ff1f]">precisionists?</span>
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-7 mt-6 max-w-2xl mx-auto">
                Sign up in 30 seconds and get a ₹10,000 demo account to practice your
                strategies with real-time market data.
              </p>
              <div className="mt-8 mb-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#52ff1f] text-black font-semibold px-10 py-4 rounded-full shadow-[0_0_35px_rgba(82,255,31,0.22)] hover:scale-[1.02] transition-all"
                >
                  Create Free Account
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.p
                {...fadeUp}
                className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-3"
              >
                Client Feedback
              </motion.p>

              <motion.h2
                {...fadeUp}
                className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight"
              >
                What traders say
                <br className="hidden sm:block" />
                <span className="text-[#52ff1f]"> about Tredixo</span>
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${testimonialIndex * (100 / perView)}%` }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="flex"
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <div className="h-full rounded-[26px] border border-white/10 bg-gradient-to-br from-[#10151d] to-[#0a0d12] p-6 md:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                      <div className="flex gap-1 text-[#52ff1f] mb-5">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-sm" />
                        ))}
                      </div>

                      <p className="text-white/75 leading-7 text-sm md:text-base">
                        {item.text}
                      </p>

                      <div className="mt-6 pt-5 border-t border-white/10">
                        <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                        <p className="text-white/50 text-sm mt-1">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxDotIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTestimonialIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${testimonialIndex === index
                    ? 'w-8 bg-[#52ff1f]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* WHATSAPP FLOATING WIDGET */}
        <div className="fixed bottom-5 right-5 z-[9999]">
          <div className="relative flex flex-col items-end">
            {isWhatsAppOpen && (
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mb-3 w-[290px] rounded-[24px] overflow-hidden border border-white/10 bg-[#0b0f16] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="bg-[#25D366] text-black px-4 py-3 font-bold text-sm">
                  Tredixo
                </div>

                <div className="p-4 bg-[linear-gradient(180deg,#0d131b_0%,#0a0f14_100%)]">
                  <div className="rounded-2xl bg-white text-black px-4 py-3 text-sm leading-6 shadow-sm w-fit max-w-[220px]">
                    Hello How May I Help You?
                  </div>

                  <a
                    href="https://wa.me/919120010883"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] text-black font-semibold px-5 py-3 hover:scale-[1.01] transition-all duration-300"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}

            <button
              type="button"
              onClick={() => setIsWhatsAppOpen((prev) => !prev)}
              className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] flex items-center justify-center hover:scale-105 transition-all duration-300"
              aria-label="Open WhatsApp Chat"
            >
              <FaWhatsapp className="text-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;