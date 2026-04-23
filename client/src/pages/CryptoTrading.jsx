import { Helmet } from 'react-helmet-async';

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
          content="crypto trading platform India, Bitcoin trading India,Ethereum trading India, zero fee crypto trading, crypto demo account India, simulate Bitcoin trading"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://tredixo.info/live-markets" />

        <meta property="og:title" content="Crypto Trading Platform | Bitcoin, Ethereum & More — Tredixo" />
        <meta
          property="og:description"
          content="Trade Bitcoin, Ethereum, Litecoin, Ripple & top cryptocurrencies with zero brokerage on Tredixo. High leverage, instant execution & 24/7 support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredixo.com/blogs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MCX TradinCrypto Trading Platform | Bitcoin, Ethereum & More — Tredixo" />
        <meta
          name="twitter:description"
          content="Trade Bitcoin, Ethereum, Litecoin, Ripple & top cryptocurrencies with zero brokerage on Tredixo. High leverage, instant execution & 24/7 support."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Crypto Trading</h1>
          <p className="text-white/75 text-lg leading-8 max-w-4xl">
            Trading involves buying and selling market instruments with the objective of
            capturing movement and opportunities. Tredixo supports a modern trading
            experience with a smoother interface, better usability, and a platform-focused
            approach for active market participants.
          </p>
        </div>
      </div>
    </>
  );
};

export default Trading;