import { Helmet } from 'react-helmet-async';

const Trading = () => {
  return (
    <>
      <Helmet>
        <title>Trading - Explore Modern Trading with Tredixo</title>
        <meta
          name="description"
          content="Learn about trading with Tredixo, including tools, market access, and a smooth digital environment built for modern traders."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trading</h1>
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