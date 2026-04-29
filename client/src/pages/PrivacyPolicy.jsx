import { Helmet } from 'react-helmet-async';
import { FiShield, FiLock, FiGlobe, FiMail, FiDatabase, FiEye } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';

// apni hero image yaha import karo
import privacyHero from '../assests/crypto.png';

const sections = [
  {
    icon: <HiOutlineDocumentText size={20} />,
    title: 'About Tredixo',
    content: [
      'Tredixo is an educational platform that provides knowledge-based content related to financial markets, trading concepts, and general market learning.',
      'Tredixo does not provide investment advice, broking services, trading recommendations, or guaranteed returns of any kind.',
    ],
  },
  {
    icon: <FiDatabase size={20} />,
    title: 'Information We Collect',
    content: [
      'We may collect personal information such as your name, email address, phone number, and details submitted through forms, WhatsApp, or direct inquiries.',
      'We may also collect technical details such as IP address, browser type, operating system, device identifiers, and referral source information.',
      'Usage-related information may include pages visited, time spent on pages, click interactions, and engagement with our website or advertisements.',
      'Marketing and communication data may include campaign interaction details, ad engagement information, and communication preferences.',
    ],
  },
  {
    icon: <FiEye size={20} />,
    title: 'How We Use Your Information',
    content: [
      'Your information may be used to respond to inquiries, provide requested educational content, improve user experience, optimize website design, and analyse communication or campaign performance.',
      'We may also use your data to communicate through WhatsApp, SMS, calls, or email where consent has been provided, and to comply with applicable legal or regulatory obligations.',
      'We do not use your data for automated decision-making or unsolicited promotional communication without your consent.',
    ],
  },
  {
    icon: <FiMail size={20} />,
    title: 'Communication & Consent',
    content: [
      'By submitting your details through our website, forms, ads, WhatsApp, or any related channel, you consent to receive communication from Tredixo.',
      'This communication may include WhatsApp messages, SMS, phone calls, and emails.',
      'You may opt out of communication at any time by replying “STOP” or contacting us at admin@tredixo.co.in.',
    ],
  },
  {
    icon: <FiGlobe size={20} />,
    title: 'Cookies & Tracking Technologies',
    content: [
      'Tredixo may use cookies, Google Analytics, Meta Pixel, and similar technologies to understand user behavior, measure ad performance, and improve the overall website experience.',
      'You may control or disable cookies through your browser settings at any time, although some site functions may be affected.',
    ],
  },
  {
    icon: <FiShield size={20} />,
    title: 'Data Sharing & Disclosure',
    content: [
      'Tredixo does not sell or rent your personal information.',
      'We may share information only with service providers supporting analytics, advertising, hosting, or communication, with legal or regulatory authorities when required, or with trusted partners under confidentiality obligations.',
      'All third-party service relationships are expected to follow applicable data protection and privacy standards.',
    ],
  },
  {
    icon: <FiLock size={20} />,
    title: 'Data Retention, Rights & Security',
    content: [
      'We retain information only for as long as necessary to fulfil the purposes stated in this policy or to meet legal, regulatory, and operational requirements.',
      'You may request access, correction, deletion, withdrawal of communication consent, or raise a privacy-related concern by contacting admin@tredixo.co.in.',
      'We use reasonable technical and organizational safeguards such as secure systems, access controls, and monitoring practices, although no online transmission method can be guaranteed to be fully secure.',
    ],
  },
  {
    icon: <HiOutlineDocumentText size={20} />,
    title: 'External Links, Updates & Contact',
    content: [
      'Our website may contain links to third-party websites. Tredixo is not responsible for their content, privacy practices, or policies.',
      'This Privacy Policy may be updated from time to time to reflect legal, technical, or service-related changes. Updated versions will be posted on this page.',
      'For privacy-related questions or requests, you can contact us at admin@tredixo.co.in.',
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Tredixo Privacy Policy | Your Data, Our Priority</title>
        <meta
          name="description"
          content="Read Tredixo's privacy policy to learn how we protect your data and ensure a secure trading experience."
        />
        <meta
          name="keywords"
          content="Tredixo privacy policy, trading platform data security,trading platform GDPR, safe data trading app, trading account privacy India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredixo.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.08),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-cyan-300 font-semibold mb-4">
                Tredixo Legal & Privacy
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Privacy
                <br />
                <span className="text-[#52ff1f]">Policy</span>
              </h1>

              <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-3xl">
                This page explains how Tredixo collects, uses, stores, shares, and safeguards
                personal information when users visit the website, interact with ads, submit
                forms, or communicate with us through any channel.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Educational Platform', 'Data Protection Focus', 'Last reviewed for website use'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#52ff1f]/25 bg-[#52ff1f]/10 px-4 py-2 text-sm text-[#52ff1f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] rounded-[30px] overflow-hidden flex items-center justify-center min-h-[380px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.16),transparent_55%)]" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <img
                  src={privacyHero}
                  alt="Tredixo privacy policy"
                  className="relative z-10 w-full h-[380px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            <aside className="relative overflow-hidden h-fit lg:sticky lg:top-28 rounded-[28px] border border-white/10 bg-[#0b0f16] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.12),transparent_45%)]" />
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-5 text-[#52ff1f]">Policy Highlights</h2>
                <div className="space-y-4 text-sm text-gray-400 leading-7">
                  <p>Tredixo provides educational market-learning content only.</p>
                  <p>User information may be collected through forms, website activity, and ad interactions.</p>
                  <p>Communication is consent-based and opt-out remains available.</p>
                  <p>Tredixo does not sell or rent personal data.</p>
                  <p>Users may contact admin@tredixo.co.in for privacy-related concerns.</p>
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f16] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#52ff1f]/40 hover:bg-[#0e151d] hover:shadow-[0_18px_45px_rgba(82,255,31,0.08)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.10),transparent_50%)] opacity-60" />
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-11 w-11 rounded-xl border border-[#52ff1f]/25 bg-[#52ff1f]/10 flex items-center justify-center text-[#52ff1f]">
                        {section.icon}
                      </span>

                      <h2 className="text-2xl font-semibold text-white group-hover:text-[#52ff1f] transition">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-400 leading-8 text-sm md:text-base">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="relative overflow-hidden rounded-[28px] border border-[#52ff1f]/25 bg-[#52ff1f]/5 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,255,31,0.12),transparent_45%)]" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Contact for Privacy Requests
                  </h3>

                  <p className="text-gray-300 leading-8">
                    For any privacy-related questions, correction requests, deletion requests,
                    or communication preferences, please contact:
                  </p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                      <p className="text-sm text-white/50 mb-1">Email</p>
                      <p className="text-[#52ff1f] font-medium">admin@tredixo.co.in</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                      <p className="text-sm text-white/50 mb-1">Website</p>
                      <p className="text-cyan-300 font-medium">www.tredixo.co.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-white/40 text-sm pt-4">
                By using the website or submitting your information, you acknowledge the
                privacy practices described on this page.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;