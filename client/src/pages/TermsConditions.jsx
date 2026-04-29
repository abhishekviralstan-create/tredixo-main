import { Helmet } from 'react-helmet-async';
import { FiFileText, FiUser, FiSettings, FiRefreshCw } from 'react-icons/fi';

// hero image yaha change kar sakte ho
import termsHero from '../assests/crypto.png';

const termsData = [
  {
    icon: <FiFileText />,
    title: 'Acceptance of Terms',
    desc: 'By accessing Tredixo, users agree to follow the applicable terms, policies, and platform usage standards.',
  },
  {
    icon: <FiUser />,
    title: 'User Responsibilities',
    desc: 'Users are expected to use the platform responsibly, maintain accurate account-related information, and comply with all applicable usage rules.',
  },
  {
    icon: <FiSettings />,
    title: 'Platform Access',
    desc: 'Tredixo may update, adjust, or restrict certain services, features, or access points where necessary to maintain service quality and platform integrity.',
  },
  {
    icon: <FiRefreshCw />,
    title: 'Changes to Terms',
    desc: 'Terms and Conditions may be revised at any time. Continued platform use may indicate acceptance of updated terms.',
  },
];

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Tredixo</title>
        <meta
          name="description"
          content="Review the Terms and Conditions of Tredixo to understand the rules, responsibilities, and usage guidelines."
        />
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                Tredixo Legal
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Terms &
                <br />
                <span className="text-[#52ff1f]">Conditions</span>
              </h1>

              <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-xl">
                Understand the rules, responsibilities, and usage guidelines for accessing and using the Tredixo platform.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[360px]">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <img
                  src={termsHero}
                  alt="Terms and Conditions"
                  className="relative z-10 w-full h-[360px] object-contain"
                />
              </div>
            </div>

          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

            {termsData.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f16] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_18px_45px_rgba(82,255,31,0.08)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.10),transparent_50%)] opacity-60" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-11 w-11 rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 flex items-center justify-center text-[#52ff1f] text-xl">
                      {item.icon}
                    </span>

                    <h2 className="text-2xl font-semibold group-hover:text-[#52ff1f] transition">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-gray-400 leading-8 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* NOTE */}
          <div className="mt-12 text-center text-white/40 text-sm">
            By using the platform, you acknowledge and agree to these terms.
          </div>

        </section>
      </div>
    </>
  );
};

export default TermsConditions;