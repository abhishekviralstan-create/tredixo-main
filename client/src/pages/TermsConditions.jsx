import { Helmet } from "react-helmet-async";
import {
  FiShield,
  FiFileText,
  FiAlertTriangle,
  FiRefreshCw,
  FiLock,
  FiUserCheck,
} from "react-icons/fi";

import termsHero from "../assests/terms.png";

const termsSections = [
  {
    icon: <FiFileText />,
    title: "Acceptance of Terms",
    desc: `By accessing and using Tredixo, you agree to comply with these Terms & Conditions, platform policies, and all applicable laws. If you do not agree with any part of these terms, you should discontinue use of the platform immediately.`,
  },

  {
    icon: <FiUserCheck />,
    title: "Eligibility",
    desc: `Users must be at least 18 years old to access or use Tredixo services. By using the platform, you confirm that you are legally eligible to enter into these terms.`,
  },

  {
    icon: <FiShield />,
    title: "Nature of Services",
    desc: `Tredixo provides educational content related to trading, financial markets, and market learning. We do not provide investment advice, trading signals, portfolio management, guaranteed profits, or brokerage services.`,
  },

  {
    icon: <FiLock />,
    title: "User Responsibilities",
    desc: `Users are responsible for maintaining the confidentiality of their account details and ensuring that all information provided to Tredixo is accurate and up to date. Users must not misuse, copy, distribute, or exploit platform content without written permission.`,
  },

  {
    icon: <FiAlertTriangle />,
    title: "Risk Disclosure",
    desc: `Trading in financial markets involves substantial risk. Users acknowledge that all trading and investment decisions are made independently and entirely at their own risk. Tredixo is not liable for any financial loss or damages resulting from market activities.`,
  },

  {
    icon: <FiRefreshCw />,
    title: "Changes to Terms",
    desc: `Tredixo reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the platform after updates constitutes acceptance of the revised terms.`,
  },
];

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>
          Terms & Conditions | Tredixo Trading Platform
        </title>

        <meta
          name="description"
          content="Read the official Terms & Conditions of Tredixo. Understand platform usage rules, responsibilities, legal policies, trading risks, and user obligations."
        />

        <meta
          name="keywords"
          content="Tredixo terms and conditions, Tredixo legal policy, trading platform rules, trading risk disclosure, Tredixo user agreement"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Terms & Conditions | Tredixo"
        />

        <meta
          property="og:description"
          content="Official Tredixo Terms & Conditions covering platform usage, legal policies, risk disclosure, and user responsibilities."
        />

        <meta
          property="og:url"
          content="http://tredixo.info/terms-and-conditions"
        />

        <meta
          property="og:image"
          content="http://tredixo.info/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Terms & Conditions | Tredixo"
        />

        <meta
          name="twitter:description"
          content="Read Tredixo Terms & Conditions, legal policies, and trading risk disclosures."
        />

        <link
          rel="canonical"
          href="http://tredixo.info/terms-and-conditions"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Tredixo Terms & Conditions",
            url: "http://tredixo.info/terms-and-conditions",
            description:
              "Official Terms & Conditions page for Tredixo trading education platform.",
            publisher: {
              "@type": "Organization",
              name: "Tredixo",
              url: "http://tredixo.info",
            },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-[#05070b] text-white overflow-hidden">

        {/* HERO SECTION */}

        <section className="relative overflow-hidden border-b border-white/5">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,190,255,0.10),transparent_26%)]" />

          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-[#52ff1f] mb-6">
                Tredixo Legal
              </span>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Terms &
                <br />
                <span className="text-[#52ff1f]">
                  Conditions
                </span>
              </h1>

              <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-2xl">
                Please read these Terms & Conditions carefully before
                using Tredixo. By accessing the platform, you agree
                to comply with our rules, policies, legal guidelines,
                and risk disclosures.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Legal Policies",
                  "Trading Risks",
                  "User Agreement",
                  "Platform Rules",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 hover:border-[#52ff1f]/40 hover:text-[#52ff1f] transition"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="flex justify-center">

              <div className="relative w-full max-w-[520px] flex items-center justify-center">

                <div className="absolute inset-0 rounded-full bg-[#52ff1f]/10 blur-3xl" />

                <img
                  src={termsHero}
                  alt="Tredixo Terms and Conditions"
                  className="relative z-10 w-full h-[360px] object-contain border-0 outline-none shadow-none"
                />

              </div>

            </div>

          </div>

        </section>

        {/* TERMS CARDS */}

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">

          <div className="grid md:grid-cols-2 gap-6">

            {termsSections.map((item, index) => (
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

          {/* DISCLAIMER */}

          <div className="mt-12 rounded-[28px] border border-[#52ff1f]/15 bg-[#08110d] p-6 md:p-8">

            <h3 className="text-2xl font-semibold text-[#52ff1f] mb-4">
              Trading Disclaimer
            </h3>

            <p className="text-gray-300 leading-8 text-sm md:text-base">
              Trading in financial markets carries significant risk and
              may not be suitable for all users. Tredixo provides
              educational content only and does not guarantee profits,
              returns, or financial success of any kind.
            </p>

          </div>

          <div className="mt-10 text-center text-white/40 text-sm">
            Last Updated: May 2026
          </div>

        </section>

      </main>
    </>
  );
};

export default TermsConditions;