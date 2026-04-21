import { Helmet } from 'react-helmet-async';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Tredixo</title>
        <meta
          name="description"
          content="Review the Terms and Conditions of Tredixo to understand the rules, responsibilities, and usage guidelines for accessing the platform."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>

          <div className="space-y-8 text-white/75 leading-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Acceptance of Terms</h2>
              <p>
                By accessing Tredixo, users agree to follow the applicable terms,
                policies, and platform usage standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">User Responsibilities</h2>
              <p>
                Users are expected to use the platform responsibly, maintain accurate
                account-related information, and comply with all applicable usage rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Platform Access</h2>
              <p>
                Tredixo may update, adjust, or restrict certain services, features, or
                access points where necessary to maintain service quality and platform integrity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Changes to Terms</h2>
              <p>
                Terms and Conditions may be revised at any time. Continued platform use may
                indicate acceptance of updated terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;