import { Helmet } from 'react-helmet-async';

const IntradayTrading = () => {
  return (
    <>
      <Helmet>
        <title>Intraday Trading - Tredixo</title>
        <meta
          name="description"
          content="Learn about intraday trading with Tredixo and explore a modern trading environment designed for active market engagement."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Intraday Trading</h1>
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

export default IntradayTrading;