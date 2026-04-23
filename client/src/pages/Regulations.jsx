import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    FiShield,
    FiLock,
    FiGlobe,
    FiFileText,
    FiCheckCircle,
    FiArrowRight,
} from 'react-icons/fi';

const registerLink =
    'https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real';

const cards = [
    {
        icon: <FiShield />,
        title: 'Licensed & Regulated',
        desc: 'Tredixo operates under strict financial standards ensuring global compliance.',
    },
    {
        icon: <FiLock />,
        title: 'Client Fund Security',
        desc: 'Funds are stored in segregated accounts with top-tier banking partners.',
    },
    {
        icon: <FiFileText />,
        title: 'Transparent Reporting',
        desc: 'We maintain clear financial reporting and regular audits.',
    },
    {
        icon: <FiCheckCircle />,
        title: 'Fair Trading',
        desc: 'No hidden fees, transparent pricing, and ethical execution.',
    },
    {
        icon: <FiGlobe />,
        title: 'Global Compliance',
        desc: 'We follow regulatory frameworks across multiple jurisdictions.',
    },
];

const Regulations = () => {
    return (
        <>
            <Helmet>
                <title>Tredixo Regulations | Trade with Confidence</title>
                <meta
                    name="description"
                    content="Understand Tredixo's compliance with global trading regulations. Trade securely with a platform that prioritizes transparency and reliability."
                />
                <meta
                    name="keywords"
                    content="Tredixo regulations, regulated trading platform, CFD trading compliance India, safe trading platform India, licensed trading platform"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.tredixo.com/blogs" />

                <meta property="og:title" content="Tredixo Regulations | Trade with Confidence" />
                <meta
                    property="og:description"
                    content="Understand Tredixo's compliance with global trading regulations. Trade securely with a platform that prioritizes transparency and reliability."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.tredixo.com/blogs" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tredixo Regulations | Trade with Confidence" />
                <meta
                    name="twitter:description"
                    content="Understand Tredixo's compliance with global trading regulations. Trade securely with a platform that prioritizes transparency and reliability."
                />
            </Helmet>

            <div className="bg-black text-white">

                {/* HERO */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-bold leading-tight"
                    >
                        Trade with Structure,
                        <span className="block text-lime-300">
                            Confidence & Clarity
                        </span>
                    </motion.h1>

                    <p className="mt-6 text-white/70 max-w-2xl text-lg">
                        Tredixo ensures transparency, security, and trust through strong
                        compliance frameworks.
                    </p>

                    <a
                        href={registerLink}
                        target="_blank"
                        className="mt-8 inline-block bg-lime-300 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
                    >
                        Open Account Now
                    </a>
                </section>

                {/* CARDS */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Regulatory Framework
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {cards.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-lime-300/40 transition"
                            >
                                <div className="text-lime-300 text-2xl mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-white/60 mt-3">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CLIENT PROTECTION */}
                <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl mb-4 text-lime-300">Fund Security</h3>

                        {[
                            'Segregated accounts',
                            'Negative balance protection',
                            'Investor protection schemes',
                            'Audits & transparency',
                        ].map((item, i) => (
                            <p key={i} className="text-white/70 mb-2">
                                ✔ {item}
                            </p>
                        ))}
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl mb-4 text-cyan-300">Data Protection</h3>

                        {[
                            'Encrypted data',
                            'Multi-factor authentication',
                            'GDPR compliance',
                            '24/7 monitoring',
                        ].map((item, i) => (
                            <p key={i} className="text-white/70 mb-2">
                                ✔ {item}
                            </p>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-24">
                    <h2 className="text-4xl font-bold">
                        Start Trading with Confidence
                    </h2>

                    <a
                        href={registerLink}
                        target="_blank"
                        className="mt-6 inline-block bg-lime-300 text-black px-14 py-5 rounded-full font-semibold hover:scale-105 transition"
                    >
                        Register Now
                    </a>
                </section>
            </div>
        </>
    );
};

export default Regulations;