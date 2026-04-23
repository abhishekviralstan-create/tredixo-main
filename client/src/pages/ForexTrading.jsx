import { Helmet } from 'react-helmet-async';

const ForexTrading = () => {
  return (
    <>
      <Helmet>
        <title>Forex Trading Platform | Major & Minor Currency Pairs — Tredixo</title>
        <meta
          name="description"
          content="Trade major, minor, and exotic Forex pairs on a fast, reliable platform. Advanced charting tools, competitive pricing, and free demo account. Start trading with Tredixo today."
        />
        <meta
          name="keywords"
          content="forex trading platform India, currency pair trading India, USD INR trading online, EUR USD trading India, forex demo account India, best forex app India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://tredixo.info/live-markets" />

        <meta property="og:title" content="Forex Trading Platform | Major & Minor Currency Pairs — Tredixo" />
        <meta
          property="og:description"
          content="Trade major, minor, and exotic Forex pairs on a fast, reliable platform. Advanced charting tools, competitive pricing, and free demo account. Start trading with Tredixo today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredixo.com/blogs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forex Trading Platform | Major & Minor Currency Pairs — Tredixo" />
        <meta
          name="twitter:description"
          content="Trade major, minor, and exotic Forex pairs on a fast, reliable platform. Advanced charting tools, competitive pricing, and free demo account. Start trading with Tredixo today."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Forex Trading</h1>
          <p className="text-white/75 text-lg leading-8 max-w-4xl">
            Equity trading focuses on market participation through stocks and related
            instruments. Tredixo helps users explore a cleaner and more accessible
            environment for managing equity-related trading activity.
          </p>
        </div>
      </div>
    </>
  );
};

export default ForexTrading;