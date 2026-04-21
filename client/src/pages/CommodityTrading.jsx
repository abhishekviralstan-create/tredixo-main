import { Helmet } from 'react-helmet-async';

const CommodityTrading = () => {
  return (
    <>
      <Helmet>
        <title>Commodity Trading - Tredixo</title>
        <meta
          name="description"
          content="Explore commodity trading with Tredixo and understand how traders engage with market movements across commodity-related opportunities."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Commodity Trading</h1>
          <p className="text-white/75 text-lg leading-8 max-w-4xl">
            Commodity trading involves market participation across assets such as metals,
            energy products, and other commodity-linked instruments. Tredixo provides a
            modern digital setting for users exploring market-based opportunities.
          </p>
        </div>
      </div>
    </>
  );
};

export default CommodityTrading;