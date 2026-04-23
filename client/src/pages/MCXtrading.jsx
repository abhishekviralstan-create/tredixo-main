import { Helmet } from 'react-helmet-async';

const MCXtrading = () => {
  return (
    <>
      <Helmet>
        <title>MCX Trading Platform | Gold, Silver & Commodity Trading — Tredixo</title>
        <meta
          name="description"
          content="Access Gold, Silver, Crude Oil and more with fast execution and flexible trading on Tredixo. Low fees, powerful tools, and free demo account."
        />
        <meta
          name="keywords"
          content="gold silver trading platform, MCX crude oil trading, commodity futures demo account,MCX trading platform India, commodity trading India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://tredixo.info/live-markets" />

        <meta property="og:title" content="MCX Trading Platform | Gold, Silver & Commodity Trading — Tredixo" />
        <meta
          property="og:description"
          content="Access Gold, Silver, Crude Oil and more with fast execution and flexible trading on Tredixo. Low fees, powerful tools, and free demo account."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredixo.com/blogs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MCX Trading Platform | Gold, Silver & Commodity Trading — Tredixo" />
        <meta
          name="twitter:description"
          content="Access Gold, Silver, Crude Oil and more with fast execution and flexible trading on Tredixo. Low fees, powerful tools, and free demo account."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MCX Trading</h1>
          <p className="text-white/75 text-lg leading-8 max-w-4xl">
            Intraday trading refers to market activity that takes place within the same
            trading session. Tredixo supports users with a cleaner, faster, and more
            focused digital interface for active market engagement.
          </p>
        </div>
      </div>
    </>
  );
};

export default MCXtrading;