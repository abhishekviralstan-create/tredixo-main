import { Helmet } from 'react-helmet-async';

const BecomeAnAffiliate = () => {
  return (
    <>
      <Helmet>
        <title>Become an Affiliate - Partner with Tredixo and Grow with Us</title>
        <meta
          name="description"
          content="Join the Tredixo affiliate program and explore partnership opportunities designed to help you grow with a trusted trading-focused platform."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ff6b4a] uppercase tracking-[3px] text-sm font-semibold mb-4">
            Partner With Tredixo
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Become an Affiliate</h1>
          <p className="text-white/75 text-lg leading-8 max-w-4xl">
            Tredixo offers affiliate partnership opportunities for individuals and businesses
            who want to grow with a modern trading-focused platform. Our affiliate network is
            designed to support visibility, expansion, and long-term collaboration.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              'Attractive partnership opportunity',
              'Growth-focused ecosystem',
              'Simple and scalable collaboration model',
            ].map((item) => (
              <div key={item} className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-6">
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                <p className="text-white/70 leading-7">
                  Join a partnership framework designed to support visibility, performance,
                  and long-term digital growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeAnAffiliate;