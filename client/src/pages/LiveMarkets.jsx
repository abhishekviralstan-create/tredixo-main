import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import live from "../assests/live.png";
const Widget = ({ id, script }) => {
  useEffect(() => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = "";
    const scriptEl = document.createElement("script");
    scriptEl.src = "https://s3.tradingview.com/external-embedding/embed-widget-" + script + ".js";
    scriptEl.type = "text/javascript";
    scriptEl.async = true;

    if (script === "ticker-tape") {
      scriptEl.innerHTML = JSON.stringify({
        symbols: [
          { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
          { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
          { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
          { proName: "FX_IDC:USDINR", title: "USD/INR" },
          { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
          { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
          { proName: "TVC:GOLD", title: "Gold" },
          { proName: "TVC:SILVER", title: "Silver" },
          { proName: "TVC:USOIL", title: "Crude Oil" }
        ],
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: "adaptive",
        colorTheme: "dark",
        locale: "en"
      });
    }

    if (script === "market-overview") {
      scriptEl.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: true,
        showSymbolLogo: true,
        showFloatingTooltip: true,
        width: "100%",
        height: "620",
        plotLineColorGrowing: "rgba(82, 255, 31, 1)",
        plotLineColorFalling: "rgba(255, 92, 92, 1)",
        gridLineColor: "rgba(255,255,255,0.06)",
        scaleFontColor: "rgba(255,255,255,0.7)",
        belowLineFillColorGrowing: "rgba(82, 255, 31, 0.12)",
        belowLineFillColorFalling: "rgba(255, 92, 92, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(82, 255, 31, 0.02)",
        belowLineFillColorFallingBottom: "rgba(255, 92, 92, 0.02)",
        symbolActiveColor: "rgba(82, 255, 31, 0.18)",
        tabs: [
          {
            title: "Indices",
            symbols: [
              { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
              { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
              { s: "FOREXCOM:DJI", d: "Dow Jones" },
              { s: "INDEX:NIFTY", d: "Nifty 50" },
              { s: "BSE:SENSEX", d: "Sensex" }
            ]
          },
          {
            title: "Forex",
            symbols: [
              { s: "FX_IDC:EURUSD", d: "EUR/USD" },
              { s: "FX_IDC:GBPUSD", d: "GBP/USD" },
              { s: "FX_IDC:USDJPY", d: "USD/JPY" },
              { s: "FX_IDC:USDINR", d: "USD/INR" }
            ]
          },
          {
            title: "Crypto",
            symbols: [
              { s: "BINANCE:BTCUSDT", d: "BTC/USDT" },
              { s: "BINANCE:ETHUSDT", d: "ETH/USDT" },
              { s: "BINANCE:SOLUSDT", d: "SOL/USDT" },
              { s: "BINANCE:BNBUSDT", d: "BNB/USDT" }
            ]
          },
          {
            title: "Commodities",
            symbols: [
              { s: "TVC:GOLD", d: "Gold" },
              { s: "TVC:SILVER", d: "Silver" },
              { s: "TVC:USOIL", d: "Crude Oil" },
              { s: "TVC:NATGAS", d: "Natural Gas" }
            ]
          }
        ]
      });
    }

    if (script === "symbol-overview") {
      scriptEl.innerHTML = JSON.stringify({
        symbols: [

          ["BINANCE:BTCUSDT|1D"],
          ["TVC:GOLD|1D"],
          ["FX_IDC:USDINR|1D"]
        ],
        chartOnly: false,
        width: "100%",
        height: "500",
        locale: "en",
        colorTheme: "dark",
        autosize: true,
        showVolume: false,
        showMA: true,
        hideDateRanges: false,
        hideMarketStatus: false,
        hideSymbolLogo: false,
        scalePosition: "right",
        scaleMode: "Normal",
        fontFamily: "Inter, sans-serif",
        fontSize: "10",
        noTimeScale: false,
        valuesTracking: "1",
        changeMode: "price-and-percent",
        chartType: "area",
        maLineColor: "#52ff1f",
        maLineWidth: 2,
        maLength: 9,
        lineWidth: 2,
        lineType: 0,
        dateRanges: ["1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"]
      });
    }

    if (script === "advanced-chart") {
      scriptEl.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "30",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        allow_symbol_change: true,
        calendar: false,
        support_host: "https://www.tradingview.com"
      });
    }

    container.appendChild(scriptEl);
  }, [id, script]);

  return <div id={id} className="tradingview-widget-container h-full w-full" />;
};

const LiveMarkets = () => {
  return (
    <>
      <Helmet>
        <title>Advanced Trading Tools | Tredixo Platform</title>
        <meta
          name="description"
          content="Access real-time charts, indicators, live news feeds, and an economic calendar. Tredixo equips you with the tools for successful trading."
        />
        <meta
          name="keywords"
          content="trading tools India, real-time trading charts,economic calendar trading, technical indicators platform, live market news feed India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://tredixo.info/live-markets" />

        <meta property="og:title" content="Advanced Trading Tools | Tredixo Platform" />
        <meta
          property="og:description"
          content="Access real-time charts, indicators, live news feeds, and an economic calendar. Tredixo equips you with the tools for successful trading."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredixo.com/blogs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced Trading Tools | Tredixo Platform" />
        <meta
          name="twitter:description"
          content="Access real-time charts, indicators, live news feeds, and an economic calendar. Tredixo equips you with the tools for successful trading."
        />
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white">
        <section className="relative overflow-hidden border-b border-white/5">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,190,255,0.10),transparent_26%)]" />

          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}

            <div>

              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                Live Market Dashboard
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Live Trading Rates
                <br />
                <span className="text-[#52ff1f]">
                  Market Wise Overview
                </span>
              </h1>

              <p className="mt-6 text-white/70 max-w-2xl leading-8 text-base md:text-lg">
                Access real-time market rates and monitor live performance across Forex, Cryptocurrencies, Commodities, and Global Indices — all from one powerful trading dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Forex",
                  "Crypto",
                  "Commodities",
                  "Indices",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 hover:border-[#52ff1f]/40 hover:text-[#52ff1f] transition"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="flex justify-center">

              <div className="relative w-full max-w-[520px] flex items-center justify-center">

                {/* GLOW */}

                <div className="absolute inset-0 rounded-full bg-[#52ff1f]/10 blur-3xl" />

                {/* IMAGE */}

                <img
                  src={live}
                  alt="Live Trading Markets"
                  className="relative z-10 w-full h-[360px] object-contain border-0 outline-none shadow-none"
                />

              </div>

            </div>

          </div>

        </section>

        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <Widget id="ticker-tape-widget" script="ticker-tape" />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-[28px] border border-white/10 bg-[#0b0f14] p-4 md:p-6">
              <div className="mb-5">
                <h2 className="text-2xl md:text-3xl font-bold">Market Overview</h2>
                <p className="text-white/60 mt-2">
                  Kaunsi market gain me hai aur kaunsi loss me, live track karo.
                </p>
              </div>
              <Widget id="market-overview-widget" script="market-overview" />
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0b0f14] p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold">Top Movers</h2>
              <p className="text-white/60 mt-2 mb-5">
                Fast view for key trading instruments.
              </p>
              <Widget id="symbol-overview-widget" script="symbol-overview" />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
          <div className="rounded-[28px] border border-white/10 bg-[#0b0f14] p-4 md:p-6">
            <div className="mb-5">
              <h2 className="text-2xl md:text-3xl font-bold">Live Interactive Chart</h2>
              <p className="text-white/60 mt-2">
                Apna symbol change karo aur live chart dekh lo.
              </p>
            </div>
            <div className="h-[520px]">
              <Widget id="advanced-chart-widget" script="advanced-chart" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LiveMarkets;