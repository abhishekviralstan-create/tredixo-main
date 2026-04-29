import { Helmet } from 'react-helmet-async';
import { useMemo, useState } from 'react';
import {
  FiBarChart2,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiRefreshCw,
} from 'react-icons/fi';

const formatINR = (value) =>
  `₹${Number(value || 0).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const TABS = [
  { key: 'equity', label: 'Equity' },
  { key: 'equity_fo', label: 'Equity - F&O' },
  { key: 'currency', label: 'Currency' },
];

const PRODUCT_TABS = {
  equity: [
    { key: 'delivery', label: 'Delivery' },
    { key: 'intraday', label: 'Intraday' },
  ],
  equity_fo: [
    { key: 'futures', label: 'Futures' },
    { key: 'options', label: 'Options' },
  ],
  currency: [
    { key: 'currency_futures', label: 'Futures' },
    { key: 'currency_options', label: 'Options' },
  ],
};

const EXCHANGES = ['NSE', 'BSE'];
const BROKERAGE_RATE = 0.015;

const InfoCard = ({ icon, title, desc }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f16] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_18px_45px_rgba(82,255,31,0.08)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_50%)] opacity-60" />
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-[#52ff1f]/10 border border-[#52ff1f]/20 flex items-center justify-center mb-4 text-[#52ff1f]">
        {icon}
      </div>

      <h4 className="text-xl font-semibold mb-2 group-hover:text-[#52ff1f] transition-all">
        {title}
      </h4>

      <p className="text-gray-400 leading-7 text-sm">
        {desc}
      </p>
    </div>
  </div>
);

const BrokerageCalculator = () => {
  const [marketTab, setMarketTab] = useState('equity');
  const [productTab, setProductTab] = useState('delivery');
  const [buyPrice, setBuyPrice] = useState(100);
  const [sellPrice, setSellPrice] = useState(200);
  const [quantity, setQuantity] = useState(10);
  const [exchange, setExchange] = useState('NSE');

  const resetCalculator = () => {
    if (marketTab === 'equity') setProductTab('delivery');
    else if (marketTab === 'equity_fo') setProductTab('futures');
    else setProductTab('currency_futures');

    setBuyPrice(100);
    setSellPrice(200);
    setQuantity(10);
    setExchange('NSE');
  };

  const calc = useMemo(() => {
    const qty = Math.max(0, Number(quantity) || 0);
    const bp = Math.max(0, Number(buyPrice) || 0);
    const sp = Math.max(0, Number(sellPrice) || 0);

    const buyTurnover = bp * qty;
    const sellTurnover = sp * qty;
    const totalTurnover = buyTurnover + sellTurnover;
    const grossPnL = sellTurnover - buyTurnover;

    let brokerage = 0;
    let sttCtt = 0;
    let transactionCharges = 0;
    let ipftCharges = 0;
    let dpCharges = 0;
    let stampDuty = 0;
    let sebiTurnoverFees = 0;
    let gst = 0;
    let breakEven = 0;

    const nseCashTxRate = 307 / 10000000;
    const nseFuturesTxRate = 183 / 10000000;
    const nseOptionsTxRate = 3553 / 10000000;
    const sebiRate = 10 / 10000000;
    const currencyStampRate = 0.0001 / 100;

    if (productTab === 'delivery') {
      brokerage = (buyTurnover * BROKERAGE_RATE) / 100;
      sttCtt = (buyTurnover * 0.1) / 100 + (sellTurnover * 0.1) / 100;
      transactionCharges = totalTurnover * nseCashTxRate;
      ipftCharges = totalTurnover * (0.01 / 10000000);
      dpCharges = qty > 0 ? 20 : 0;
      stampDuty = (buyTurnover * 0.015) / 100;
      sebiTurnoverFees = totalTurnover * sebiRate;
      gst = (brokerage + transactionCharges + ipftCharges + dpCharges + sebiTurnoverFees) * 0.18;
      breakEven =
        qty > 0
          ? (brokerage + sttCtt + transactionCharges + ipftCharges + dpCharges + stampDuty + sebiTurnoverFees + gst) / qty
          : 0;
    }

    if (productTab === 'intraday') {
      brokerage = (buyTurnover * BROKERAGE_RATE) / 100 + (sellTurnover * BROKERAGE_RATE) / 100;
      sttCtt = (sellTurnover * 0.025) / 100;
      transactionCharges = totalTurnover * nseCashTxRate;
      ipftCharges = totalTurnover * (0.01 / 10000000);
      stampDuty = (buyTurnover * 0.003) / 100;
      sebiTurnoverFees = totalTurnover * sebiRate;
      gst = (brokerage + transactionCharges + ipftCharges + sebiTurnoverFees) * 0.18;
      breakEven =
        qty > 0
          ? (brokerage + sttCtt + transactionCharges + ipftCharges + stampDuty + sebiTurnoverFees + gst) / qty
          : 0;
    }

    if (productTab === 'futures') {
      brokerage = (buyTurnover * BROKERAGE_RATE) / 100 + (sellTurnover * BROKERAGE_RATE) / 100;
      sttCtt = (sellTurnover * 0.05) / 100;
      transactionCharges = totalTurnover * nseFuturesTxRate;
      ipftCharges = totalTurnover * (0.01 / 10000000);
      stampDuty = (buyTurnover * 0.002) / 100;
      sebiTurnoverFees = totalTurnover * sebiRate;
      gst = (brokerage + transactionCharges + ipftCharges + sebiTurnoverFees) * 0.18;
      breakEven =
        qty > 0
          ? (brokerage + sttCtt + transactionCharges + ipftCharges + stampDuty + sebiTurnoverFees + gst) / qty
          : 0;
    }

    if (productTab === 'options') {
      const premiumTurnover = totalTurnover;
      brokerage = (premiumTurnover * BROKERAGE_RATE) / 100;
      sttCtt = (sellTurnover * 0.15) / 100;
      transactionCharges = premiumTurnover * nseOptionsTxRate;
      ipftCharges = premiumTurnover * (0.01 / 10000000);
      stampDuty = (buyTurnover * 0.003) / 100;
      sebiTurnoverFees = premiumTurnover * sebiRate;
      gst = (brokerage + transactionCharges + ipftCharges + sebiTurnoverFees) * 0.18;
      breakEven =
        qty > 0
          ? (brokerage + sttCtt + transactionCharges + ipftCharges + stampDuty + sebiTurnoverFees + gst) / qty
          : 0;
    }

    if (productTab === 'currency_futures') {
      brokerage = (buyTurnover * BROKERAGE_RATE) / 100 + (sellTurnover * BROKERAGE_RATE) / 100;
      transactionCharges = totalTurnover * nseFuturesTxRate;
      ipftCharges = totalTurnover * (0.01 / 10000000);
      stampDuty = buyTurnover * currencyStampRate;
      sebiTurnoverFees = totalTurnover * sebiRate;
      gst = (brokerage + transactionCharges + ipftCharges + sebiTurnoverFees) * 0.18;
      breakEven =
        qty > 0
          ? (brokerage + transactionCharges + ipftCharges + stampDuty + sebiTurnoverFees + gst) / qty
          : 0;
    }

    if (productTab === 'currency_options') {
      const premiumTurnover = totalTurnover;
      brokerage = (premiumTurnover * BROKERAGE_RATE) / 100;
      transactionCharges = premiumTurnover * nseOptionsTxRate;
      ipftCharges = premiumTurnover * (0.01 / 10000000);
      stampDuty = buyTurnover * currencyStampRate;
      sebiTurnoverFees = premiumTurnover * sebiRate;
      gst = (brokerage + transactionCharges + ipftCharges + sebiTurnoverFees) * 0.18;
      breakEven =
        qty > 0
          ? (brokerage + transactionCharges + ipftCharges + stampDuty + sebiTurnoverFees + gst) / qty
          : 0;
    }

    const otherCharges =
      sttCtt +
      transactionCharges +
      ipftCharges +
      dpCharges +
      stampDuty +
      sebiTurnoverFees +
      gst;

    const totalTaxesAndCharges = brokerage + otherCharges;
    const netPnL = grossPnL - totalTaxesAndCharges;

    return {
      brokerage,
      otherCharges,
      breakEven,
      netPnL,
      sttCtt,
      transactionCharges,
      ipftCharges,
      dpCharges,
      stampDuty,
      sebiTurnoverFees,
      gst,
      totalTaxesAndCharges,
      netBuyValue: buyTurnover,
      netSellValue: sellTurnover,
      pointsToBreakeven: breakEven,
    };
  }, [buyPrice, sellPrice, quantity, productTab]);

  return (
    <>
      <Helmet>
        <title>Brokerage Calculator | Tredixo</title>
        <meta
          name="description"
          content="Dark theme brokerage calculator for equity, F&O and currency with live charges breakdown, taxes, breakeven and net P&L."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredixo.com/brokerage-calculator" />
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">
        {/* HERO */}
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
              Trading Tool
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Brokerage
              <br />
              <span className="text-[#52ff1f]">Calculator</span>
            </h1>

            <p className="text-gray-300 mt-6 max-w-2xl leading-7 text-base md:text-lg">
              Calculate brokerage, taxes, turnover, breakeven and net P&amp;L with a clean dark interface.
            </p>
          </div>
        </section>

        {/* CALCULATOR */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0f16] p-5 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_40%)]" />
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Brokerage Calculator
              </h2>

              <div className="flex flex-wrap gap-6 mb-6 border-b border-white/10">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => {
                      setMarketTab(tab.key);
                      setProductTab(PRODUCT_TABS[tab.key][0].key);
                    }}
                    className={`pb-3 text-sm md:text-base font-semibold transition-all ${marketTab === tab.key
                        ? 'text-[#52ff1f] border-b-2 border-[#52ff1f]'
                        : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-8">
                <div>
                  <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-white/10 mb-8">
                    {PRODUCT_TABS[marketTab].map((tab) => (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => setProductTab(tab.key)}
                        className={`py-4 text-sm font-semibold transition-all ${productTab === tab.key
                            ? 'bg-[#52ff1f] text-black'
                            : 'bg-transparent text-white hover:bg-white/5'
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ['Buy Price', buyPrice, setBuyPrice],
                      ['Sell Price', sellPrice, setSellPrice],
                      ['No. of Shares', quantity, setQuantity],
                    ].map(([label, value, setter]) => (
                      <div key={label}>
                        <label className="block text-sm text-gray-400 mb-2">{label}</label>
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => setter(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-[#0b0f16] px-4 py-4 text-white outline-none transition-all focus:border-[#52ff1f] focus:shadow-[0_0_25px_rgba(82,255,31,0.08)]"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Exchange</label>
                      <select
                        value={exchange}
                        onChange={(e) => setExchange(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#0b0f16] px-4 py-4 text-white outline-none transition-all focus:border-[#52ff1f]"
                      >
                        {EXCHANGES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mt-8">
                    <button
                      type="button"
                      className="rounded-xl bg-[#52ff1f] px-6 py-4 font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(82,255,31,0.25)]"
                    >
                      Calculate Brokerage
                    </button>

                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="rounded-xl border border-[#52ff1f]/40 px-6 py-4 font-semibold text-[#52ff1f] transition hover:bg-[#52ff1f]/10"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.10),transparent_50%)]" />

                    <div className="relative z-10">
                      <div className="bg-[#0f1620] px-5 py-4">
                        <h3 className="text-xl font-bold text-white">Charges</h3>
                      </div>

                      <div className="bg-[#0d131a]/90">
                        {[
                          ['Brokerage', calc.brokerage],
                          ['Other Charges', calc.otherCharges],
                          ['Breakeven', calc.breakEven],
                          ['Net P&L', calc.netPnL],
                        ].map(([label, value], index) => (
                          <div
                            key={label}
                            className={`grid grid-cols-[1.2fr_0.8fr] ${index !== 3 ? 'border-b border-white/10' : ''
                              }`}
                          >
                            <div className="px-5 py-5 text-gray-300">{label}</div>
                            <div className="px-5 py-5 border-l border-white/10 font-semibold text-white">
                              {formatINR(value)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BREAKUP */}
              <div className="mt-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Charges Breakup</h3>

                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.08),transparent_50%)]" />

                  <div className="relative z-10 bg-[#0d131a]/90">
                    {[
                      ['Brokerage (0.015%)', calc.brokerage],
                      ['STT/CTT', calc.sttCtt],
                      ['Transaction Charges', calc.transactionCharges],
                      ['IPFT Charges', calc.ipftCharges],
                      ['DP Charges', calc.dpCharges],
                      ['State Stamp Duty', calc.stampDuty],
                      ['SEBI Turnover Fees', calc.sebiTurnoverFees],
                      ['GST', calc.gst],
                      ['TOTAL TAXES AND CHARGES', calc.totalTaxesAndCharges],
                      ['NET BUY VALUE', calc.netBuyValue],
                      ['NET SELL VALUE', calc.netSellValue],
                      ['POINTS TO BREAKEVEN', calc.pointsToBreakeven],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="grid grid-cols-[1.2fr_1.3fr] border-b border-white/10 last:border-b-0"
                      >
                        <div className="px-5 py-5 text-gray-300">{label}</div>
                        <div className="px-5 py-5 border-l border-white/10 font-semibold text-white">
                          {formatINR(value)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* INFO CARDS */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <InfoCard
                  icon={<FiZap className="text-xl" />}
                  title="Fast Estimation"
                  desc="Instantly estimate brokerage, taxes and breakeven before placing a trade."
                />

                <InfoCard
                  icon={<FiBarChart2 className="text-xl" />}
                  title="Clear Breakdown"
                  desc="View brokerage, STT, GST, stamp duty, SEBI fee and net P&L in one place."
                />

                <InfoCard
                  icon={<FiShield className="text-xl" />}
                  title="Built for Traders"
                  desc="Designed for delivery, intraday, F&O and currency style calculations in a modern dark UI."
                />

                <InfoCard
                  icon={<FiTrendingUp className="text-xl" />}
                  title="Trade Smarter"
                  desc="Check real trade cost before entering and improve your risk-reward planning."
                />

                <InfoCard
                  icon={<FiRefreshCw className="text-xl" />}
                  title="Quick Reset"
                  desc="Switch segments fast and re-run calculations without leaving the page."
                />

                <InfoCard
                  icon={<FiBarChart2 className="text-xl" />}
                  title="Modern Dark Theme"
                  desc="Premium trading-style interface aligned with the rest of your Tredixo design."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrokerageCalculator;