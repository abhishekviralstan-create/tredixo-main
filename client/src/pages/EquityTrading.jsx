import { Helmet } from 'react-helmet-async';

const EquityTrading = () => {
  return (
    <>
      <Helmet>
        <title>Equity Trading - Tredixo</title>
        <meta
          name="description"
          content="Explore equity trading with Tredixo and understand how traders participate in stock market opportunities through a smoother digital experience."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Equity Trading</h1>
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

export default EquityTrading;