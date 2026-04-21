import { Helmet } from 'react-helmet-async';
import { FiAlertTriangle, FiShield, FiGlobe } from 'react-icons/fi';

const RiskDisclosure = () => {
  return (
    <>
      <Helmet>
        <title>Risk Disclosure - Tredixo</title>
        <meta
          name="description"
          content="Understand the risks involved in CFD trading, leverage, and financial markets before engaging with Tredixo educational services."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">

        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,255,180,0.12),transparent_30%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
            <p className="text-red-400 text-xs uppercase tracking-[4px] font-semibold mb-4">
              Legal Disclosure
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Risk <span className="text-red-400">Disclosure</span>
            </h1>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Trading in financial markets carries significant risk. Please read
              this disclosure carefully before engaging with any trading-related
              activities or educational content provided by Tredixo.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 py-14 space-y-8">

          {/* MAIN WARNING */}
          <div className="rounded-[28px] border border-red-400/20 bg-red-400/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FiAlertTriangle className="text-red-400" size={22} />
              <h2 className="text-2xl font-semibold">High Risk Warning</h2>
            </div>

            <p className="text-white/75 leading-8">
              Trading CFDs involves a high degree of risk. Leveraged positions
              can magnify both gains and losses, and in some cases, losses may
              exceed your original investment. These products are not suitable
              for everyone.
            </p>
          </div>

          {/* DETAILS */}
          <div className="rounded-[28px] border border-white/10 bg-[#0b0f14] p-6 md:p-8 space-y-6">

            <h2 className="text-2xl font-semibold">Understanding the Risks</h2>

            <p className="text-white/75 leading-8">
              Please consider your financial situation, trading experience, and
              risk tolerance before participating in trading activities. You
              should carefully review your financial goals and understand the
              mechanics and risks of CFD trading before proceeding.
            </p>

            <p className="text-white/75 leading-8">
              Past performance does not guarantee future results. Market
              conditions can change rapidly, and trading decisions should be
              made independently or with guidance from a licensed professional.
            </p>

            <p className="text-white/75 leading-8">
              The information presented on this website is for general
              informational and educational purposes only and should not be
              interpreted as personalized financial advice.
            </p>

          </div>

          {/* LEGAL + RESTRICTIONS */}
          <div className="rounded-[28px] border border-white/10 bg-[#0b0f14] p-6 md:p-8 space-y-6">

            <div className="flex items-center gap-3">
              <FiShield className="text-cyan-300" size={20} />
              <h2 className="text-2xl font-semibold">Legal & Compliance</h2>
            </div>

            <p className="text-white/75 leading-8">
              Detailed explanations of risks, policies, and terms are available
              within our legal documentation. Users are encouraged to review
              them before engaging with any services.
            </p>

            <p className="text-white/75 leading-8">
              Tredixo services are not offered in countries where such
              activities may breach local regulations. This includes regions
              such as the United States, Singapore, Russia, and jurisdictions
              under FATF or international sanctions.
            </p>

            <p className="text-white/75 leading-8">
              We operate under licensed entities that follow strict regulatory
              standards within their respective jurisdictions.
            </p>

          </div>

          {/* FINAL NOTE */}
          <div className="text-center text-white/40 text-sm pt-6">
            By accessing or using Tredixo services, you acknowledge and accept
            the risks outlined in this disclosure.
          </div>

        </section>
      </div>
    </>
  );
};

export default RiskDisclosure;