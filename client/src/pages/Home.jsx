import { motion, animate, useInView } from 'framer-motion';
import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../assests/spinner/Spinner';
import { BsCurrencyBitcoin } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { MdOutlineContactSupport } from "react-icons/md";
import { Helmet } from 'react-helmet-async';
import upiIcon from '../assests/upi.png';
import cardIcon from '../assests/card.png';
import cryptoIcon from '../assests/crypto.png';
import binanceIcon from '../assests/binance.png';
import global from '../assests/global-comodities.png'
import nse from '../assests/nse-mcx.png';
import comex from '../assests/comex-forex.png';
import usIndi from '../assests/Us-Indices.png';
import cryptoA from '../assests/cypto.png';
import forex from '../assests/Forex-market.png';
import indian from '../assests/indian-market.png';
import option from '../assests/option-trading.png';
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
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

const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  startAnimation = false,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [value, startAnimation]);

  return (
    <span className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const StatCard = ({ item, fadeUp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <motion.div ref={ref} {...fadeUp} className="text-center md:text-left">
      <h3
        className={`text-3xl md:text-4xl font-bold ${item.green ? 'text-[#52ff1f]' : 'text-slate-100'
          }`}
      >
        <AnimatedCounter
          value={item.value}
          prefix={item.prefix || ''}
          suffix={item.suffix || ''}
          decimals={item.decimals || 0}
          startAnimation={isInView}
        />
      </h3>

      <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mt-2">
        {item.label}
      </p>
    </motion.div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const [withdrawalAmount, setWithdrawalAmount] = useState(12426);
  const [trustScore, setTrustScore] = useState(12.4);

  const [perView, setPerView] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeMarket, setActiveMarket] = useState('crypto');

  const marketOptions = [
    { label: 'crypto', path: '/crypto-trading' },
    { label: 'NSE Trading', path: '/nse-trading' },
    { label: 'Dabba Trading', path: '/dabba-trading' },
    { label: 'Live Market', path: '/live-markets' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ravi S ',
      role: 'Corporate Trainer & Traveler',
      text: "The whole process of getting into trading always felt complicated, especially since I'm often switching between different devices and time zones while training clients. I started with Tredixo's demo platform, and it immediately clicked. It's so clean and intuitive.",
    },
    {
      id: 2,
      name: 'Priya S',
      role: 'Small Business Owner',
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
      image: upiIcon,
      link: 'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real',
    },
    {
      id: 2,
      label: 'Card',
      sub: 'Visa / Mastercard',
      image: cardIcon,
      link: 'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real',
    },
    {
      id: 3,
      label: 'Crypto',
      sub: 'BTC / ETH / USDT',
      image: cryptoIcon,
      link: 'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real',
    },
    {
      id: 4,
      label: 'Binance Pay',
      sub: 'Fast wallet payments',
      image: binanceIcon,
      link: 'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real',
    },
  ];


  // New section images:
  // 1) Import your image at top, example:
  // import nseMarketImg from '../assests/nse-market.png';
  // 2) Put that imported variable in image field below, example:
  // image: nseMarketImg

  const marketAccessCards = [
    {
      title: 'NSE & MCX Futures',
      desc: 'Indian markets can be traded with max. 500× margin for the highest exposure.',
      image: nse,
    },
    {
      title: 'Comex & Forex',
      desc: "Don't miss out on global commodities and currency markets with powerful leverage options.",
      image: comex,
    },
    {
      title: 'Options Trading',
      desc: 'Use margin for your options strategies.',
      image: option,
    },
  ];

  const tradingInstrumentCards = [
    {
      title: 'Indian Markets (NSE & MCX)',
      desc: 'Futures, options, commodities',
      image: indian,
    },
    {
      title: 'Forex Markets',
      desc: 'Currency Pairs: Major, Minor and Exotic',
      image: forex,
    },
    {
      title: 'Global Commodities (Comex)',
      desc: 'Gold, silver, oil, and more',
      image: global,
    },
    {
      title: 'US Indices & Stocks',
      desc: 'S&P 500, Nasdaq, Dow Jones',
      image: usIndi,
    },
    {
      title: 'Crypto Assets',
      desc: 'Bitcoin, Ethereum, and more',
      image: cryptoA,
    },
  ];

  const howItWorksSteps = [
    {
      title: 'Sign Up in 10 Seconds',
      desc: 'Create your account quickly and enter the trading platform without complex steps.',
      image: null,
    },
    {
      title: 'Deposit Funds Instantly',
      desc: 'Fund your account quickly with fast and secure payment options.',
      image: null,
    },
    {
      title: 'Start Trading with High Leverage',
      desc: 'Access major markets and use powerful leverage for flexible trading practice.',
      image: null,
    },
  ];

  const platformFeatures = [
    {
      title: 'Fast & Secure Transactions',
      desc: 'Execution in an instant using encryption, a seamless list for safe and reliable transactions.',
      image: null,
    },
    {
      title: 'Advanced Trading Technology',
      desc: 'Next-gen tools that provide real-time data to advance your trading acumen.',
      image: null,
    },
    {
      title: 'User-First Platform Design',
      desc: 'Easy to access interface allowing for intuitive navigation and completed quickly.',
      image: null,
    },
    {
      title: 'Dedicated Support',
      desc: 'Get expert help at any hour of the day and without delays to keep you connected to your trading world.',
      image: null,
    },
  ];

  const maxDotIndex = Math.max(0, testimonials.length - perView);

  const handleMarketClick = (market) => {
    setActiveMarket(market.label);
    navigate(market.path);
  };

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
          content="no KYC trading platform, low brokerage trading platform, paper trading India, virtual trading platform, 500x leverage trading, zero commission trading, tredixo, trading in india, best trading app in india, top trading app, trending trading app"
        />
        <meta property="og:title" content="Low Brokerage & No KYC Trading Platform | Tredixo" />
        <meta
          property="og:description"
          content="Access global markets with Tredixo's no KYC, low brokerage platform. Enjoy 500X leverage, zero commissions, and instant deposits. Start trading today!"
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

      <div className="bg-[#05070b] text-white min-h-screen overflow-x-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(57,255,20,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(0,180,255,0.08),_transparent_22%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-20 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5 text-center lg:text-left"
            >
              <p className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.26em] uppercase text-cyan-300 font-semibold">
                Free Demo for Financial Markets
              </p>

              <h1 className="text-[2rem] leading-[1.02] sm:text-[2.5rem] md:text-5xl lg:text-6xl font-bold">
                <span className="text-slate-100">TRADE SMARTER</span>
                <br />
                <span className="text-[#52ff1f]">GROW FASTER</span>
              </h1>

              <p className="text-sm sm:text-[15px] md:text-base text-gray-300 max-w-xl leading-7 mx-auto lg:mx-0">
                Enter international markets with lightning speed, no brokerage and up to 500× leverage, all on one powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start items-center">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto min-w-[190px] items-center justify-center bg-[#52ff1f] text-black font-semibold px-8 py-3.5 rounded-full shadow-[0_0_35px_rgba(82,255,31,0.22)] hover:scale-[1.02] transition-all"
                >
                  Start Trading Now
                </a>

                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto min-w-[190px] items-center justify-center bg-[#52ff1f] text-black font-semibold px-8 py-3.5 rounded-full shadow-[0_0_35px_rgba(82,255,31,0.22)] hover:scale-[1.02] transition-all"
                >
                  Demo Account
                </a>
              </div>

              <div className="flex items-center gap-3 pt-3 text-gray-400 text-xl justify-center lg:justify-start flex-wrap">
                <Link
                  to="/crypto-trading"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-[#52ff1f] hover:border-[#52ff1f]/40 hover:bg-[#52ff1f]/10 transition-all duration-300"
                  aria-label="Crypto Trading"
                  title="Crypto Trading"
                >
                  <BsCurrencyBitcoin />
                </Link>

                <Link
                  to="/live-markets"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-[#52ff1f] hover:border-[#52ff1f]/40 hover:bg-[#52ff1f]/10 transition-all duration-300"
                  aria-label="Live Markets"
                  title="Live Markets"
                >
                  <FiBarChart2 />
                </Link>

                <Link
                  to="/blogs"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-[#52ff1f] hover:border-[#52ff1f]/40 hover:bg-[#52ff1f]/10 transition-all duration-300"
                  aria-label="Blogs"
                  title="Blogs"
                >
                  <ImBlog />
                </Link>

                <Link
                  to="/contact"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-[#52ff1f] hover:border-[#52ff1f]/40 hover:bg-[#52ff1f]/10 transition-all duration-300"
                  aria-label="Contact Support"
                  title="Contact Support"
                >
                  <MdOutlineContactSupport />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: -1.5 }}
              transition={{ duration: 0.9 }}
              className="relative max-w-[560px] mx-auto w-full"
            >
              <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 bg-[radial-gradient(circle,_rgba(82,255,31,0.15),_transparent_55%)] blur-2xl" />

              <div className="relative rounded-[24px] sm:rounded-[28px] border border-[#193126] bg-gradient-to-br from-[#081018] to-[#0d1117] p-3 sm:p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <div className="rounded-[20px] sm:rounded-[22px] overflow-hidden border border-white/5 bg-[#0a0f14]">
                  <div className="h-10 px-4 flex items-center gap-2 border-b border-white/5 bg-[#0e1319]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <span className="text-xs text-gray-400 ml-3">Tredixo</span>
                  </div>

                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4">
                      {marketOptions.map((item) => {
                        const isActive = activeMarket === item.label;

                        return (
                          <motion.button
                            key={item.label}
                            type="button"
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleMarketClick(item)}
                            className={`rounded-xl border px-2 py-2.5 sm:p-3 text-center text-[10px] sm:text-xs transition-all duration-300 ${isActive
                                ? 'bg-[#52ff1f]/10 border-[#52ff1f]/40 text-[#52ff1f] shadow-[0_0_18px_rgba(82,255,31,0.12)]'
                                : 'bg-white/[0.03] border-white/5 text-gray-300 hover:border-white/15 hover:bg-white/[0.05]'
                              }`}
                            aria-pressed={isActive}
                          >
                            <span className="block truncate">{item.label}</span>
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl bg-gradient-to-b from-[#10161d] to-[#0b1016] border border-white/5 overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                        <span className="text-[10px] sm:text-xs text-white/80 bg-black/40 border border-white/10 px-3 py-1 rounded-full">
                          {activeMarket}
                        </span>
                      </div>

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
                        className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/70 border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <p className="text-[10px] sm:text-xs text-gray-300">Latest Withdrawal</p>
                        <p className="text-xs sm:text-sm text-white font-semibold">
                          Success:{' '}
                          <span className="text-[#52ff1f] tabular-nums">
                            {formatMoney(withdrawalAmount)}
                          </span>
                        </p>
                      </motion.div>

                      <motion.div
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/10 border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 backdrop-blur-sm"
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
                        <p className="text-[9px] sm:text-[11px] text-gray-300 uppercase">Trustscore</p>
                        <p className="text-xs sm:text-sm font-bold text-[#52ff1f] tabular-nums">
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
              <StatCard key={index} item={item} fadeUp={fadeUp} />
            ))}
          </div>
        </section>

        {/* BUILT FOR HIGH STAKES */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <motion.p
            {...fadeUp}
            className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3"
          >
          TRUST SECTION
          </motion.p>

          <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold text-slate-100 mb-10">
           Trusted by traders worldwide.
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              {...fadeUp}
              className="lg:col-span-2 rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] overflow-hidden"
            >
              <div className="p-7 md:p-8">
                <FiTrendingUp className="text-white text-2xl mb-4" />
                <h3 className="text-3xl font-bold mb-3">Become A Part</h3>
                <p className="text-gray-300 max-w-xl leading-7 text-sm md:text-base">
                 of an emerging ecosystem of traders who value speed, accuracy and security. Tredixo provides a trading experience that suits both beginners and professionals.

                </p>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#52ff1f]/40 hover:bg-[#52ff1f]/10 hover:text-[#52ff1f]"
                  >
                  Connect Now <FiArrowRight />
                  </Link>
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
              <h3 className="text-2xl font-bold mb-3">100K+ Active Traders</h3>
              <p className="text-gray-300 text-sm leading-7">
                Become part of a community with over 100K active worldwide traders
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: <GiTakeMyMoney className="text-xl text-white" />,
                title: 'Fast Withdrawals',
                desc: 'Fast, smooth and easy withdrawals from safe and stable systems',
              },
              {
                icon: <BsGraphUpArrow className="text-xl text-[#52ff1f]" />,
                title: 'Advanced Trading Technology',
                desc: 'Leverage fast, accurate and enterprise-grade trading technology',
              },
              {
                icon: <MdOutlineSupportAgent className="text-xl text-white" />,
                title: '24/7 Support',
                desc: 'Available support dedicated anytime with a responsive customer service 24/7',
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

        {/* MARKET ACCESS / OFFERINGS */}
        <section className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
                Market Access / Offerings
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
                Access Global Markets on a Single Platform
              </h2>

              <p className="text-sm md:text-base text-gray-400 mt-5 leading-7">
                Trade on top exchanges & asset classes with extreme flexibility and leverage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {marketAccessCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative rounded-[26px] border border-white/10 bg-gradient-to-br from-[#101722] to-[#0a0f14] p-6 min-h-[300px] overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_38%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#52ff1f]/5 blur-3xl group-hover:bg-[#52ff1f]/12 transition-all duration-300" />

                  <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-[26px] border border-white/10 bg-white/[0.04] flex items-center justify-center mb-6 overflow-hidden group-hover:border-[#52ff1f]/40 transition-all duration-300">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                      ) : (
                        <FiGlobe className="text-4xl text-[#52ff1f]" />
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#52ff1f] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-7">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRADING INSTRUMENTS */}
        <section className="border-t border-white/5 bg-[#06090f]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-3">
                Trading Instruments
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
                Trade All Major Markets
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tradingInstrumentCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.7, delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 min-h-[260px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 rounded-2xl border border-white/10 bg-black/20 flex items-center justify-center mb-5 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-14 h-14 object-contain" />
                    ) : (
                      <FiBarChart2 className="text-3xl text-[#52ff1f]" />
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
                How It Works
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
                Start Trading in Seconds
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {howItWorksSteps.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="relative rounded-[26px] border border-white/10 bg-[#0b0f16] p-6 min-h-[310px] text-center overflow-hidden"
                >
                  <span className="absolute top-5 left-5 text-5xl font-bold text-white/[0.04]">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-[#52ff1f]/25 bg-[#52ff1f]/10 flex items-center justify-center mb-6 overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                      ) : (
                        <span className="text-3xl font-bold text-[#52ff1f]">
                          0{index + 1}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-t border-white/5 bg-[#06090f]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-12">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-3">
                Features
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
                Built for Fast, Secure & Smarter Practice
              </h2>

              <p className="text-sm md:text-base text-gray-400 mt-5 leading-7">
                Tredixo is an advanced simulated trading platform that provides real-time market data and professional tools for practice. Not a broker, it allows you to switch to safe partner status for reasonable regulated live trading/execution/fund management.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformFeatures.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.7, delay: index * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#10151d] to-[#0a0d12] p-6 min-h-[300px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-5 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-14 h-14 object-contain" />
                    ) : (
                      <FiShield className="text-3xl text-[#52ff1f]" />
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
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
                Deposit
              </p>

              <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-bold text-slate-100 leading-[1.15]">
                Quick Deposit
                <br className="hidden sm:block" />
                <span className="text-[#52ff1f]"> with local payment options</span>
              </h2>

              <p className="text-sm md:text-base text-gray-400 mt-5 leading-7 px-2">
                Choose your preferred payment method for fast and secure deposits.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
              {paymentOptions.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-[24px] border border-white/10 bg-gradient-to-br from-[#101722] to-[#0a0f14] p-5 md:p-6 min-h-[215px] md:min-h-[250px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.28)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.10),transparent_35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-white/5 rounded-[24px]" />
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#52ff1f]/5 blur-2xl group-hover:bg-[#52ff1f]/10 transition-all duration-300" />

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] rounded-[20px] border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden mb-5 group-hover:border-[#52ff1f]/30 group-hover:bg-white/[0.07] transition-all duration-300">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-9 h-9 md:w-11 md:h-11 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#52ff1f] transition-colors duration-300">
                      {item.label}
                    </h3>

                    <p className="text-sm md:text-base text-gray-400 mt-3 leading-7 max-w-[220px]">
                      {item.sub}
                    </p>

                    <div className="mt-6">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-5 py-2.5 text-sm font-semibold text-[#52ff1f] transition-all duration-300 hover:bg-[#52ff1f] hover:text-black"
                      >
                        Deposit Now
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[28px] md:rounded-[34px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] min-h-[320px] flex items-center justify-center text-center px-5 sm:px-6 md:px-10 py-12 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.12),transparent_35%)]" />
            <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-10 right-10 h-48 w-48 rounded-full bg-[#52ff1f]/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Start in Seconds
              </span>

              <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mt-5">
                Ready to join the
                <br />
                <span className="text-[#52ff1f] drop-shadow-[0_0_20px_rgba(82,255,31,0.22)]">
                  precisionists?
                </span>
              </h2>

              <p className="text-gray-200 text-sm md:text-base leading-7 mt-5 max-w-2xl mx-auto">
                Sign up in 30 seconds and get a ₹10,000 demo account to practice your
                strategies with real-time market data.
              </p>

              <div className="mt-8 mb-2 flex justify-center">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto min-w-[230px] items-center justify-center rounded-full bg-[#52ff1f] px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_rgba(82,255,31,0.28)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(82,255,31,0.38)]"
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
                What Our Traders Say
              </motion.p>

              <motion.h2
                {...fadeUp}
                className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight"
              >
                What Our Traders Say
                <br className="hidden sm:block" />
                <span className="text-[#52ff1f]">about Tredixo</span>
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