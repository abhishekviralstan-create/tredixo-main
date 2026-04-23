import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 },
};

const GrowthMarketSVG = () => {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] rounded-[28px] overflow-hidden border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(26,188,254,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(82,255,31,0.12),transparent_30%),linear-gradient(180deg,#07111d_0%,#08131f_55%,#050b14_100%)] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <motion.div
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent blur-2xl"
        animate={{ x: ["0%", "420%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />

      <svg
        viewBox="0 0 900 520"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="barGrad" x1="0" y1="520" x2="0" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="lineGlow" x1="0" y1="0" x2="900" y2="0">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.3" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#86efac" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="lineMain" x1="0" y1="0" x2="900" y2="0">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>

          <linearGradient id="areaFill" x1="0" y1="120" x2="0" y2="520">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* background numbers */}
        <g opacity="0.12" fill="#dbeafe" fontSize="38" fontWeight="700">
          <text x="52" y="145">6.28%</text>
          <text x="360" y="90">2.95%</text>
          <text x="695" y="120">4.16%</text>
          <text x="338" y="415">19.08%</text>
          <text x="748" y="458">3.45%</text>
        </g>

        {/* small faint lines */}
        <g opacity="0.12" stroke="#dbeafe" strokeDasharray="6 10">
          <line x1="0" y1="120" x2="900" y2="120" />
          <line x1="0" y1="220" x2="900" y2="220" />
          <line x1="0" y1="320" x2="900" y2="320" />
          <line x1="0" y1="420" x2="900" y2="420" />
        </g>

        {/* bars */}
        <g opacity="0.95">
          {[
            { x: 110, y: 410, h: 110 },
            { x: 190, y: 370, h: 150 },
            { x: 270, y: 335, h: 185 },
            { x: 350, y: 280, h: 240 },
            { x: 430, y: 250, h: 270 },
            { x: 510, y: 225, h: 295 },
            { x: 590, y: 180, h: 340 },
            { x: 670, y: 135, h: 385 },
          ].map((bar, i) => (
            <g key={i}>
              <rect
                x={bar.x}
                y={bar.y}
                width="46"
                height={bar.h}
                rx="8"
                fill="url(#barGrad)"
                opacity="0.9"
              />
              <rect
                x={bar.x}
                y={bar.y}
                width="46"
                height={bar.h}
                rx="8"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
              />
            </g>
          ))}
        </g>

        {/* area under line */}
        <path
          d="M55 360 L150 265 L260 322 L390 214 L510 252 L640 170 L760 120 L840 42 L840 520 L55 520 Z"
          fill="url(#areaFill)"
        />

        {/* glow line */}
        <path
          d="M55 360 L150 265 L260 322 L390 214 L510 252 L640 170 L760 120 L840 42"
          fill="none"
          stroke="url(#lineGlow)"
          strokeWidth="14"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* main line */}
        <motion.path
          d="M55 360 L150 265 L260 322 L390 214 L510 252 L640 170 L760 120 L840 42"
          fill="none"
          stroke="url(#lineMain)"
          strokeWidth="5.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {/* points */}
        {[
          [55, 360],
          [150, 265],
          [260, 322],
          [390, 214],
          [510, 252],
          [640, 170],
          [760, 120],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5.5" fill="#dbeafe" filter="url(#soft)" />
        ))}

        {/* animated dot */}
        <motion.circle
          r="8"
          fill="#ffffff"
          filter="url(#glow)"
          animate={{
            cx: [55, 150, 260, 390, 510, 640, 760, 840],
            cy: [360, 265, 322, 214, 252, 170, 120, 42],
          }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* arrow head */}
        <g filter="url(#glow)">
          <path
            d="M820 46 L840 42 L834 62"
            fill="none"
            stroke="#86efac"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* floating tiny chart lines */}
        <g opacity="0.32" stroke="#93c5fd" strokeWidth="3" fill="none">
          <path d="M110 165 L140 152 L168 160 L196 134 L220 140" />
          <path d="M610 85 L640 70 L672 94 L705 58" />
        </g>
      </svg>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="py-8 md:py-10 border-b border-white/6 last:border-b-0">
    <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white">{title}</h2>
    <div className="space-y-4 text-white/72 text-[16px] md:text-[17px] leading-8">
      {children}
    </div>
  </section>
);

const DabbaTrading = () => {
  return (
    <>
            <Helmet>
        <title>Dabba Trading</title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://tredixo.info/live-markets" />

        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="Do intraday trading on NSE, MCX & Forex with 500X leverage and zero brokerage on Tredixo. Real-time charts, economic calendar & live news feed built in."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredixo.com/blogs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta
          name="twitter:description"
          content=""
        />
      </Helmet>


      <div className="min-h-screen bg-[#05070b] text-white overflow-x-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.07),transparent_24%),radial-gradient(circle_at_top_right,rgba(82,255,31,0.06),transparent_20%)]" />

        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-14 md:pt-20 pb-8 md:pb-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <motion.div {...fadeUp}>
              <p className="text-cyan-300/90 uppercase tracking-[0.28em] text-[11px] font-bold mb-4">
                Trading
              </p>

              <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[74px] font-extrabold leading-[0.95] tracking-[-0.04em]">
                Dabba Trading
              </h1>

              <p className="mt-6 text-white/72 text-base md:text-[19px] leading-8 md:leading-[1.9] max-w-3xl">
                Dabba Trading is an expedited version of conventional market trading
                and is tailored for those with speed and simplicity in the forefront
                of their needs along with direct market access. It tracks market prices
                in real-time but without the complicated layers of brokerages, making
                for a streamlined, volatile, quick trading experience for contemporary
                traders who want to jump immediately on each opportunity.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <GrowthMarketSVG />
            </motion.div>
          </div>
        </section>

        {/* ARTICLE CONTENT - NO CARDS */}
        <main className="relative max-w-4xl mx-auto px-4 md:px-8 lg:px-0 pb-16 md:pb-24">
          <motion.div {...fadeUp}>
            <Section title="What is Dabba Trading?">
              <p>
                Dabba trading is where the many informal trades are made beyond official
                stock exchanges and they enter hardly any order in NSE or BSE, but all
                trading through a Dabba Trading Platform is done within the system.
              </p>
              <p>
                In layman's language, Dabba Trading enables the traders to bet on the stock
                price movement without actually executing the trade on the exchange.
              </p>
            </Section>
          </motion.div>

          <motion.div {...fadeUp}>
            <Section title="Key Characteristics of Dabba Trading">
              <ul className="space-y-2 pl-0">
                <li>• Trades are executed off-market</li>
                <li>• No official exchange transaction</li>
                <li>• Higher leverage opportunities</li>
                <li>• Faster trade execution</li>
                <li>• Lower margin requirements</li>
              </ul>
              <p>
                So, because of these features, most of the traders would prefer the Online
                Dabba Trading Platform rather than using the traditional brokerage.
              </p>
              <p>
                Today, modern Dabba Trading Apps provide an easy interface through which
                users can trade stocks, indices and commodities instantly.
              </p>
              <p>
                Tredixo aims to offer a Dabba Trading Platform to the traders with
                reliability which is equipped with tools having advancement and accessibility
                that is easy.
              </p>
            </Section>
          </motion.div>

          <motion.div {...fadeUp}>
            <Section title="How Dabba Trading Works">
              <p>
                <span className="text-white font-semibold">Account Setup:</span> A trader
                registers with a Dabba Trading Platform such as Tredixo.
              </p>
              <p>
                <span className="text-white font-semibold">Deposit Trading Capital:</span>{" "}
                Funds are deposited by the users in their trading wallet on the Online Dabba
                Trading Platform.
              </p>
              <p>
                <span className="text-white font-semibold">Trade Execution:</span> Buy and
                sell orders are placed by the trader through the Dabba Trading App.
              </p>
              <p>
                <span className="text-white font-semibold">Profit or Loss Settlement:</span>{" "}
                Profits and losses are calculated based on the actual price movement in the
                market.
              </p>
              <p>
                This system enables traders to have fast order execution through a Top
                Dabba Trading Platform.
              </p>
            </Section>
          </motion.div>

          <motion.div {...fadeUp}>
            <Section title="Why Traders Like Dabba Trading">
              <p>
                <span className="text-white font-semibold">Fast Execution:</span> A striking
                Dabba Trading App fulfils your order instantly, with zero exchange delay.
              </p>
              <p>
                <span className="text-white font-semibold">High Leverage:</span> A number of
                well-known Offline & Online Dabba Trading Platforms also allow traders to
                trade with high leverage.
              </p>
              <p>
                <span className="text-white font-semibold">Simple Interface:</span> Compared
                to a traditional brokerage platform, a Dabba Trading Platform is usually much
                simpler.
              </p>
              <p>
                <span className="text-white font-semibold">Mobile Accessibility:</span> Dabba
                trading app is the most used mobile application in today’s trading
                environment.
              </p>
              <p>
                <span className="text-white font-semibold">Lower Transaction Cost:</span>{" "}
                Some of the best Dabba Trading Platforms provide a discount on trading fees
                when compared to the brokers.
              </p>
              <p>
                That said, what every trader needs is the Best Dabba Trading Platform that
                would offer fast execution, dependable stability and advanced tools.
              </p>
            </Section>
          </motion.div>

          <motion.div {...fadeUp}>
            <Section title="Dabba Trading vs Stock Market Trading">
              <p>
                Dabba Trading Platform is meant for traders who crave speed over everything
                else, while conventional markets offer regulated transparency.
              </p>
              <p>
                Due to increasing demand, many Online Dabba Trading Platforms are upgrading
                their infrastructure to provide an enhanced trading experience.
              </p>
              <p>
                Platforms like Tredixo are prioritising to deliver a professional Dabba
                Trading App experience for the contemporary trader.
              </p>
            </Section>
          </motion.div>
          {/* COMPARISON TABLE */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full border border-white/10 text-left text-sm md:text-base">
              <thead className="bg-white/5 text-white/80">
                <tr>
                  <th className="p-4 border border-white/10">Feature</th>
                  <th className="p-4 border border-white/10">Dabba Trading</th>
                  <th className="p-4 border border-white/10">Stock Market Trading</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                <tr>
                  <td className="p-4 border border-white/10">Trade Location</td>
                  <td className="p-4 border border-white/10">Off-market</td>
                  <td className="p-4 border border-white/10">NSE/BSE</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">Regulation</td>
                  <td className="p-4 border border-white/10">Informal</td>
                  <td className="p-4 border border-white/10">SEBI regulated</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">Speed</td>
                  <td className="p-4 border border-white/10">Faster</td>
                  <td className="p-4 border border-white/10">Exchange dependent</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">Leverage</td>
                  <td className="p-4 border border-white/10">Higher</td>
                  <td className="p-4 border border-white/10">Limited</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">Brokerage</td>
                  <td className="p-4 border border-white/10">Often lower</td>
                  <td className="p-4 border border-white/10">Standard charges</td>
                </tr>
              </tbody>
            </table>
          </div>

          <motion.div {...fadeUp}>
            <Section title="Key Features of the Best Dabba Trading Platform">
              <p>
                <span className="text-white font-semibold">Live Market Data:</span> A Best
                Dabba Trading Platform must have live market prices that are right on the
                money.
              </p>
              <p>
                <span className="text-white font-semibold">Simple to Use:</span> A good Dabba
                Trading App has fast order execution.
              </p>
              <p>
                <span className="text-white font-semibold">Efficient Order Execution:</span>{" "}
                Dabba Trading is all about speed and the platform must be built to accommodate
                high trading volume.
              </p>
              <p>
                <span className="text-white font-semibold">Safe Transactions:</span> Trusted
                Dabba Trading Websites also guarantee security of your money.
              </p>
              <p>
                <span className="text-white font-semibold">Advanced Trading Tools:</span>{" "}
                Top tiers should at least be able to handle technical charts, indicators,
                stop-loss options and tracking margins.
              </p>
              <p>
                Platforms such as Tredixo are gaining traction due to their ability to
                integrate these features within one powerful Dabba Trading Platform.
              </p>
            </Section>
          </motion.div>

          <motion.div {...fadeUp}>
            <Section title="Advantages of Using Dabba Trading App">
              <p>
                <span className="text-white font-semibold">Trade Anywhere:</span> You can
                keep tabs on the market with a Dabba Trading App from virtually any mobile
                device.
              </p>
              <p>
                <span className="text-white font-semibold">Instant Notifications:</span> Live
                notification alerts are delivered instantly in most online Dabba Trading
                Platforms.
              </p>
              <p>
                <span className="text-white font-semibold">Market Insights:</span> Nowadays,
                a standard Dabba Trading Platform on the Internet provides price charts and
                analytical services.
              </p>
              <p>
                <span className="text-white font-semibold">Faster Decision Making:</span>{" "}
                Constant live updates help traders act quickly without waiting for broker
                calls or delayed inputs.
              </p>
              <p>
                <span className="text-white font-semibold">Simplified Trading:</span> New
                traders can use a Best Dabba Trading Platform with more confidence because of
                its easy flow.
              </p>
              <p>
                <span className="text-white font-semibold">Unmatched Trading Speed:</span>{" "}
                Products such as Tredixo are now offering a seamless Dabba Trading App
                experience created around speed and efficiency for traders.
              </p>
            </Section>
          </motion.div>

          <motion.div {...fadeUp}>
            <Section title="The Risks and Legal Implications">
              <p>
                <span className="text-white font-semibold">No Regulation:</span> The Dabba
                Trading Platforms are largely unregulated by any official body.
              </p>
              <p>
                <span className="text-white font-semibold">Counterparty Risk:</span> Traders
                rely on platform credibility because trading takes place within the Online
                Dabba Trading Platform.
              </p>
              <p>
                <span className="text-white font-semibold">Market Volatility:</span> As with
                all trading, there is risk in Dabba Trading.
              </p>
              <p>
                <span className="text-white font-semibold">Platform Reliability:</span> The
                best Dabba Trading Platform would ensure stability and Dabba Trading execution
                fairness.
              </p>
              <p>
                Anyone choosing a Dabba Trading Platform should always do research. Far too
                many people don’t, and they end up investing in a bad Dabba Trading Platform.
              </p>
              <p>
                Tredixo is one of those platforms that takes confidentiality and
                trustworthiness seriously among a number of Online Dabba Trading Platform.
              </p>
            </Section>

            {/* EXTRA CONTENT SECTION */}
            <div className="space-y-12 mt-16">

              {/* WHAT TO LOOK FOR */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What to Look for in a Good Dabba Trading Platform
                </h2>

                <p className="text-white/70 leading-8">
                  There is a lot to consider when selecting a Best Dabba Trading Platform.
                  Traders should always check platform reputation and read real user experiences.
                </p>

                <ul className="mt-4 space-y-2 text-white/70 leading-8">
                  <li>• Confirm Technology – Fast execution and minimal downtime</li>
                  <li>• Use Trading Tools – Advanced charts and indicators</li>
                  <li>• Customer Service – Quick and responsive support</li>
                  <li>• Safe Payment System – Smooth deposits and withdrawals</li>
                </ul>

                <p className="mt-4 text-white/70 leading-8">
                  With numerous platforms emerging, Tradex1.live is gaining attention as a
                  modern trading platform combining advanced technology with user-friendly design.
                </p>
              </div>

              {/* RISKS */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Risks and Legal Implications
                </h2>

                <p className="text-white/70 leading-8">
                  Although Dabba Trading has its advantages, traders must understand the risks involved.
                </p>

                <ul className="mt-4 space-y-2 text-white/70 leading-8">
                  <li>• No Regulation – Not controlled by official authorities</li>
                  <li>• Counterparty Risk – Depends on platform credibility</li>
                  <li>• Market Volatility – High risk due to price fluctuations</li>
                  <li>• Platform Reliability – Stability and fairness may vary</li>
                </ul>

                <p className="mt-4 text-white/70 leading-8">
                  Always research before choosing any platform. Many traders ignore this
                  and end up selecting unreliable platforms.
                </p>
              </div>

              {/* HOW TO CHOOSE */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  How to Choose a Good Dabba Trading Platform
                </h2>

                <ul className="space-y-2 text-white/70 leading-8">
                  <li>• Check platform reputation and reviews</li>
                  <li>• Ensure fast and reliable technology</li>
                  <li>• Use platforms with advanced tools</li>
                  <li>• Verify customer support quality</li>
                  <li>• Ensure secure payment systems</li>
                </ul>
              </div>

              {/* STEP BY STEP */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  How to Start Dabba Trading
                </h2>

                <ul className="space-y-2 text-white/70 leading-8">
                  <li>• Choose a trusted platform like Tredixo</li>
                  <li>• Register your account</li>
                  <li>• Deposit funds</li>
                  <li>• Analyse the market</li>
                  <li>• Place your first trade</li>
                  <li>• Always manage risk with stop-loss</li>
                </ul>
              </div>

              {/* WHY TREDIXO */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Tredixo is the Best Dabba Trading Platform
                </h2>

                <ul className="space-y-2 text-white/70 leading-8">
                  <li>• Advanced trading interface</li>
                  <li>• Fast execution engine</li>
                  <li>• Mobile trading experience</li>
                  <li>• Safe and secure transactions</li>
                  <li>• Growing trader community</li>
                </ul>
              </div>

              {/* CONCLUSION */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Conclusion
                </h2>

                <p className="text-white/70 leading-8">
                  Financial technology has introduced new ways of trading, and Dabba Trading
                  is emerging as an alternative to traditional systems. While it offers speed
                  and accessibility, choosing the right platform is crucial.
                </p>

                <p className="mt-4 text-white/70 leading-8">
                  Platforms like Tredixo are becoming popular due to their performance,
                  reliability, and modern trading tools. With proper research and discipline,
                  traders can explore new opportunities in financial markets.
                </p>
              </div>

            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default DabbaTrading;