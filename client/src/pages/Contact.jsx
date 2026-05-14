import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import contactHero from "../assests/contact-us.png";
import {
  FiMapPin,
  FiMail,
  FiClock,
  FiPhone,
  FiSend,
} from 'react-icons/fi';
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwMp2vXRmnTe5KiX04V7Ztq6c4V2V0a1l4-Plv0djWRYU_X8g1i1pqJtX0BvQr9ZlQN/exec';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '',
    countryName: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => {
    const clean = name.trim().replace(/\s+/g, ' ');
    if (!clean) return 'Please enter your full name.';
    if (clean.length < 3) return 'Name must be at least 3 characters.';
    if (clean.length > 50) return 'Name must be under 50 characters.';
    if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(clean)) {
      return 'Please enter a valid name.';
    }
    if ((clean.match(/[A-Za-z]/g) || []).length < 3) {
      return 'Name must contain real letters.';
    }
    return '';
  };

  const validateEmail = (email) => {
    const clean = email.trim().toLowerCase();
    if (!clean) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean)) {
      return 'Please enter a valid email address.';
    }

    const blocked = ['test@test.com', 'abc@gmail.com', 'demo@gmail.com'];
    if (blocked.includes(clean)) {
      return 'Please use your real email address.';
    }

    return '';
  };

  const validatePhone = (phone, countryCode = '') => {
    const digits = String(phone || '').replace(/\D/g, '');
    const dialCode = String(countryCode || '').replace(/\D/g, '');

    if (!digits) return 'Please enter your contact number.';
    if (digits.length < 8 || digits.length > 15) {
      return 'Phone number must be 8 to 15 digits.';
    }

    if (/^(\d)\1+$/.test(digits)) {
      return 'Phone number cannot contain all same digits.';
    }

    const blockedNumbers = [
      '1234567890',
      '0123456789',
      '9876543210',
      '1111111111',
      '2222222222',
      '3333333333',
      '4444444444',
      '5555555555',
      '6666666666',
      '7777777777',
      '8888888888',
      '9999999999',
      '0000000000',
      '1122334455',
      '1212121212',
      '1010101010',
      '5454545454',
    ];

    if (blockedNumbers.includes(digits)) {
      return 'Please enter a valid phone number.';
    }

    if (dialCode && digits.startsWith(dialCode)) {
      const localNumber = digits.slice(dialCode.length);

      if (localNumber.length < 6) {
        return 'Please enter a valid local phone number.';
      }

      if (/^(\d)\1+$/.test(localNumber)) {
        return 'Please enter a valid local phone number.';
      }
    }

    return '';
  };

  const validateSubject = (subject) => {
    const clean = subject.trim().replace(/\s+/g, ' ');
    if (!clean) return 'Please enter a subject.';
    if (clean.length < 5) return 'Subject must be at least 5 characters.';
    if (clean.length > 100) return 'Subject must be under 100 characters.';
    return '';
  };

  const validateMessage = (message) => {
    const clean = message.trim().replace(/\s+/g, ' ');
    if (!clean) return 'Please enter your message.';
    if (clean.length < 20) return 'Message must be at least 20 characters.';
    if (clean.length > 1000) return 'Message must be under 1000 characters.';

    const lettersCount = (clean.match(/[A-Za-z]/g) || []).length;
    if (lettersCount < 12) {
      return 'Please enter a meaningful message.';
    }

    const weirdRatio =
      ((clean.match(/[^A-Za-z0-9\s.,!?@()\-]/g) || []).length || 0) / clean.length;

    if (weirdRatio > 0.2) {
      return 'Message contains too many invalid characters.';
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateName(formData.fullName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone, formData.countryCode),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message),
    };

    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitStatus({ type: '', message: '' });

    let error = '';
    if (name === 'fullName') error = validateName(value);
    if (name === 'email') error = validateEmail(value);
    if (name === 'subject') error = validateSubject(value);
    if (name === 'message') error = validateMessage(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handlePhoneChange = (value, country) => {
    const dialCode = country?.dialCode || '';
    const countryName = country?.name || '';

    setFormData((prev) => ({
      ...prev,
      phone: value,
      countryCode: dialCode,
      countryName,
    }));

    setSubmitStatus({ type: '', message: '' });

    const error = validatePhone(value, dialCode);
    setErrors((prev) => ({
      ...prev,
      phone: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors before submitting the form.',
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        countryCode: formData.countryCode.trim(),
        countryName: formData.countryName.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        source: 'Tredixo Website Contact Form',
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your message has been submitted successfully.',
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '',
        countryName: '',
        subject: '',
        message: '',
      });

      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    {
      title: 'Address',
      value:
        "2nd floor, College House, 17 King Edward's Road, Ruislip, London, HA4 7AE, United Kingdom",
      icon: <FiMapPin />,
      accent: 'from-[#0f1720] to-[#0a0d12]',
      href: 'https://maps.google.com/?q=2nd+floor,+College+House,+17+King+Edward%27s+Road,+Ruislip,+London,+HA4+7AE,+United+Kingdom',
    },
    {
      title: 'Email',
      value: 'admin@tredixo.co.in',
      icon: <FiMail />,
      accent: 'from-[#101923] to-[#0a0d12]',
      href: 'mailto:admin@tredixo.co.in',
    },
    {
      title: 'Market Hours',
      value: '24/7 Market Hours',
      icon: <FiClock />,
      accent: 'from-[#10151e] to-[#0a0d12]',
      href: null,
    },
    {
      title: 'Call Us',
      value: '+44 7598 697995',
      icon: <FiPhone />,
      accent: 'from-[#111823] to-[#0a0d12]',
      href: 'tel:+447598697995',
    },
    {
      title: 'WhatsApp',
      value: '+44 7598 697995',
      icon: <FaWhatsapp />,
      accent: 'from-[#0f1b14] to-[#0a0d12]',
      href: 'https://wa.me/447598697995',
    },
  ];

  const socials = [
    { label: 'Telegram', icon: <FaTelegramPlane />, href: 'https://t.me/Tredixo_official' },
    { label: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/tredixo_official/' },
    { label: 'Facebook', icon: <FaFacebookF />, href: 'https://www.facebook.com/tredixofb' },
  ];

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-[#0b0f14] px-4 py-3.5 outline-none focus:border-[#52ff1f] text-white placeholder:text-white/35';
  const inputErrorClass = 'border-red-400 focus:border-red-400';

  return (
    <>
      <Helmet>
        <title>Contact Tredixo | Trading Support, Email & WhatsApp Help</title>

        <meta
          name="description"
          content="Contact Tredixo for trading account support, platform guidance, market-related queries, WhatsApp assistance, email support and customer service."
        />

        <meta
          name="keywords"
          content="contact Tredixo, Tredixo support, trading platform support, WhatsApp trading support, Tredixo email, trading customer service, online trading help, Tredixo contact number, trading account support"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="Tredixo" />
        <meta name="publisher" content="Tredixo" />

        <link rel="canonical" href="https://tredixo.info/contact" />

        <meta property="og:title" content="Contact Tredixo | Trading Support & Customer Assistance" />
        <meta
          property="og:description"
          content="Reach out to Tredixo for account guidance, platform support, WhatsApp help, email assistance and trading-related queries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredixo.info/contact" />
        <meta property="og:site_name" content="Tredixo" />
        <meta property="og:image" content="https://tredixo.info/images/tredixo-contact-og.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Tredixo | Trading Support & Assistance" />
        <meta
          name="twitter:description"
          content="Need help with Tredixo? Contact our team for trading platform support, account guidance, WhatsApp help and email assistance."
        />
        <meta name="twitter:image" content="https://tredixo.info/images/tredixo-contact-og.jpg" />

        {/* Contact Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Tredixo",
            url: "https://tredixo.info/contact-us",
            description:
              "Contact Tredixo for trading platform support, account guidance, market-related queries and customer assistance.",
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              name: "Tredixo",
              url: "https://tredixo.info",
            },
            publisher: {
              "@type": "Organization",
              name: "Tredixo",
              url: "https://tredixo.info",
              logo: {
                "@type": "ImageObject",
                url: "https://tredixo.info/images/tredixo-logo.png",
              },
            },
          })}
        </script>

        {/* Organization Contact Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tredixo",
            url: "https://tredixo.info",
            logo: "https://tredixo.info/images/tredixo-logo.png",
            email: "admin@tredixo.co.in",
            telephone: "+44 7598 697995",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2nd floor, College House, 17 King Edward's Road",
              addressLocality: "Ruislip",
              addressRegion: "London",
              postalCode: "HA4 7AE",
              addressCountry: "GB",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+44 7598 697995",
              contactType: "customer support",
              email: "admin@tredixo.co.in",
              availableLanguage: ["English", "Hindi"],
            },
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://tredixo.info",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: "https://tredixo.info/contact",
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="relative overflow-hidden bg-[#05070b] text-white pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(57,255,20,0.08),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(0,180,255,0.08),_transparent_20%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 mb-12 md:mb-16">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/5 px-5 py-2 mb-7">
                <span className="text-[10px] md:text-xs font-semibold tracking-wide text-[#52ff1f]">
                  Contact Tredixo
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
                Let’s Connect
                <br />
                <span className="text-[#52ff1f]">With Our Team</span>
              </h1>

              <p className="mt-6 text-white/70 text-base md:text-lg leading-8 max-w-2xl">
                Reach out for account guidance, platform support, trading-related queries,
                or general assistance.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white">
                  Account Support
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white">
                  Platform Help
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white">
                  Trading Queries
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 m-auto h-[260px] w-[260px] md:h-[380px] md:w-[380px] rounded-full bg-[#52ff1f]/10 blur-[90px]" />

              <img
                src={contactHero}
                alt="Tredixo contact support"
                className="relative z-10 w-full max-w-[340px] md:max-w-[460px] lg:max-w-[520px] drop-shadow-[0_35px_80px_rgba(82,255,31,0.18)]"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 xl:gap-10">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {infoCards.map((item, index) => {
                  const isAddress = item.title === "Address";
                  const isWhatsapp = item.title === "WhatsApp";

                  const content = (
                    <div
                      className={`group relative h-full rounded-[24px] border border-white/10 bg-gradient-to-br ${item.accent} 
        ${isAddress ? "sm:col-span-2 min-h-[150px]" : "min-h-[145px]"} 
        p-5 md:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:border-[#52ff1f]/30 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(82,255,31,0.08),transparent_45%)]" />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#52ff1f]/20 bg-[#52ff1f]/10 text-[#52ff1f] text-xl">
                          {item.icon}
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>

                        <p className="text-white/70 leading-7 text-sm md:text-base break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className={`${isAddress ? "sm:col-span-2" : ""} ${isWhatsapp ? "sm:col-span-2 lg:col-span-1" : ""} block`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={index}
                      className={`${isAddress ? "sm:col-span-2" : ""} block`}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#10161d] to-[#0b1016] p-6 md:p-7 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
                <h3 className="text-2xl font-bold mb-5">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-white/80 hover:bg-[#52ff1f] hover:text-black transition-all duration-300"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0d1117] to-[#070b10] p-6 md:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold">Send Us a Message</h3>
                <p className="text-white/65 mt-3 leading-7">
                  Fill out the form below and our team will get back to you.
                </p>
              </div>

              {submitStatus.message && (
                <div
                  className={`mb-5 rounded-2xl px-4 py-3 ${submitStatus.type === 'success'
                    ? 'border border-[#52ff1f]/20 bg-[#52ff1f]/10 text-[#b8ff9c]'
                    : 'border border-red-400/20 bg-red-500/10 text-red-300'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-white/70 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`${inputClass} ${errors.fullName ? inputErrorClass : ''}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-white/70 mb-2 block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`${inputClass} ${errors.email ? inputErrorClass : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white/70 mb-2 block">Phone Number</label>

                  <div className={`${errors.phone ? 'contact-phone-error' : ''}`}>
                    <PhoneInput
                      country={'gb'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      enableSearch
                      disableSearchIcon={false}
                      countryCodeEditable={false}
                      preferredCountries={['gb', 'in', 'ae', 'us']}
                      placeholder="Enter phone number"
                      inputStyle={{
                        width: '100%',
                        height: '56px',
                        background: '#0b0f14',
                        color: '#ffffff',
                        borderRadius: '16px',
                        border: errors.phone
                          ? '1px solid #f87171'
                          : '1px solid rgba(255,255,255,0.10)',
                        paddingLeft: '58px',
                        fontSize: '15px',
                        boxShadow: 'none',
                      }}
                      buttonStyle={{
                        background: '#0b0f14',
                        borderTopLeftRadius: '16px',
                        borderBottomLeftRadius: '16px',
                        border: errors.phone
                          ? '1px solid #f87171'
                          : '1px solid rgba(255,255,255,0.10)',
                        borderRight: 'none',
                      }}
                      dropdownStyle={{
                        background: '#0b0f14',
                        color: '#ffffff',
                        border: '1px solid rgba(255,255,255,0.10)',
                        borderRadius: '14px',
                      }}
                      searchStyle={{
                        background: '#0b0f14',
                        color: '#ffffff',
                        border: '1px solid rgba(255,255,255,0.10)',
                      }}
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                  )}

                  <p className="text-white/40 text-xs mt-2">
                    Selected country: {formData.countryName || 'Not selected'}{' '}
                    {formData.countryCode ? `( +${formData.countryCode} )` : ''}
                  </p>
                </div>

                <div>
                  <label className="text-sm text-white/70 mb-2 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className={`${inputClass} ${errors.subject ? inputErrorClass : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-2">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-white/70 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`${inputClass} resize-none ${errors.message ? inputErrorClass : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 bg-[#52ff1f] text-black font-semibold px-8 py-4 rounded-full shadow-[0_0_35px_rgba(82,255,31,0.22)] hover:scale-[1.02] transition-all disabled:opacity-70"
                >
                  <FiSend />
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* small custom fixes for phone dropdown */}
        <style>{`
          .react-tel-input .country-list .country {
            background: #0b0f14;
            color: white;
          }

          .react-tel-input .country-list .country:hover {
            background: #111827;
          }

          .react-tel-input .country-list .country.highlight {
            background: #111827;
          }

          .react-tel-input .selected-flag:hover,
          .react-tel-input .selected-flag:focus {
            background: transparent !important;
          }

          .react-tel-input .form-control:focus {
            box-shadow: none !important;
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;