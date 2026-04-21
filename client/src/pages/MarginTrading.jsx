import { Helmet } from 'react-helmet-async';

const MarginTrading = () => {
  return (
    <>
      <Helmet>
        <title>Margin Trading - Tredixo</title>
        <meta
          name="description"
          content="Understand margin trading with Tredixo and explore a smoother platform experience designed for modern market participants."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Margin Trading</h1>
          <p className="text-white/75 text-lg leading-8 max-w-4xl">
            Margin trading is a market concept used by active traders looking to expand
            their participation strategies. Tredixo offers a streamlined experience for
            traders who value speed, clarity, and platform usability.
          </p>
        </div>
      </div>
    </>
  );
};

export default MarginTrading;