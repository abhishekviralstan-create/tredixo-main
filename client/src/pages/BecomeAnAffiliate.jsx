import { Helmet } from 'react-helmet-async';
import {
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
  FiBarChart2,
  FiZap,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
} from 'react-icons/fi';
 import heroimg from "../assests/becomeaffiliate.png";
const BecomeAnAffiliate = () => {
  const benefits = [
    'Attractive partnership opportunity',
    'Growth-focused ecosystem',
    'Simple and scalable collaboration model',
  ];
 
  const steps = [
    { icon: <FiUsers />, title: 'Apply', desc: 'Submit your affiliate interest and basic details.' },
    { icon: <FiShield />, title: 'Get Approved', desc: 'Our team reviews your profile and partnership fit.' },
    { icon: <FiTrendingUp />, title: 'Promote', desc: 'Share Tredixo with your audience using approved assets.' },
    { icon: <FiDollarSign />, title: 'Grow', desc: 'Build long-term performance with a scalable model.' },
  ];

  return (
    <>
      <Helmet>
        <title>Become an Affiliate - Partner with Tredixo and Grow with Us</title>
        <meta
          name="description"
          content="Join the Tredixo affiliate program and explore partnership opportunities designed to help you grow with a trusted trading-focused platform."
        />
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">
        {/* HERO */}
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                Partner With Tredixo
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Become an
                <br />
                <span className="text-[#52ff1f]">Affiliate</span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-xl leading-8 text-base md:text-lg">
                Tredixo offers affiliate partnership opportunities for individuals and businesses
                who want to grow with a modern trading-focused platform.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52ff1f] px-8 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(82,255,31,0.25)] transition hover:scale-105"
                >
                  Apply Now <FiArrowRight />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#52ff1f]/40 bg-[#52ff1f]/10 px-8 py-3.5 font-semibold text-[#52ff1f] transition hover:bg-[#52ff1f] hover:text-black"
                >
                  Contact Team
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[380px]">

                {/* glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />

                {/* grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <img
                  src= {heroimg} // 👉 yaha apni image daalna
                  alt="Affiliate Program"
                  className="relative z-10 w-full h-[380px] object-contain"
                />
              </div>
            </div>

          </div>
        </section>
        {/* BENEFITS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
              Why Join
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Grow With a Powerful
              <br />
              <span className="text-[#52ff1f]">Trading Ecosystem</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0f16] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_22px_55px_rgba(82,255,31,0.10)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_45%)] opacity-70" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 text-[#52ff1f]">
                    <FiCheckCircle className="text-xl" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#52ff1f] transition">
                    {item}
                  </h3>

                  <p className="text-gray-400 leading-7 text-sm">
                    Join a partnership framework designed to support visibility, performance,
                    and long-term digital growth.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative border-y border-white/5 bg-[#05060a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.09),transparent_35%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
                Process
              </p>

              <h2 className="text-3xl md:text-5xl font-bold">
                Start Your Affiliate
                <br />
                <span className="text-[#52ff1f]">Journey Easily</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-[#0b0f16] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#52ff1f]/40 hover:bg-[#0e151d]"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl text-[#52ff1f] group-hover:border-[#52ff1f]/40 group-hover:bg-[#52ff1f]/10 transition">
                    {item.icon}
                  </div>

                  <span className="text-[#52ff1f] text-sm font-bold">0{index + 1}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM HIGHLIGHTS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0f16] p-6 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_42%)]" />
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#52ff1f] font-semibold mb-3">
                  Affiliate Advantage
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Built for Long-Term
                  <br />
                  <span className="text-[#52ff1f]">Partnership Growth</span>
                </h2>

                <p className="text-gray-300 mt-5 leading-8">
                  Use this section to explain your affiliate commission model, lead tracking,
                  marketing support, dashboard access, payout process, or special partner benefits.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <FiBarChart2 />, title: 'Performance Tracking' },
                  { icon: <FiZap />, title: 'Fast Onboarding' },
                  { icon: <FiTrendingUp />, title: 'Scalable Growth' },
                  { icon: <FiDollarSign />, title: 'Reward Model' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#52ff1f]/40 hover:bg-[#52ff1f]/10"
                  >
                    <div className="text-[#52ff1f] text-2xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#21451f] bg-[linear-gradient(135deg,#1b1f24_0%,#102914_45%,#0a2508_100%)] px-6 md:px-10 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.12),transparent_35%)]" />
            <div className="absolute -bottom-10 right-10 h-48 w-48 rounded-full bg-[#52ff1f]/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52ff1f]">
                Become Partner
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5">
                Ready To Partner
                <br />
                <span className="text-[#52ff1f]">With Tredixo?</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Start your affiliate journey with Tredixo and build a growth-focused partnership.
              </p>

              <div className="mt-8">
                <a
                  href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#52ff1f] px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_rgba(82,255,31,0.28)] transition hover:scale-[1.04]"
                >
                  Apply For Affiliate
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BecomeAnAffiliate;