import { Link } from 'react-router-dom';
import PQR from '../assests/play-store-qr.png';
import IQR from '../assests/Qr for ios.png';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaTelegramPlane />, href: '#' },
  ];

  const aboutLinks = [
    { label: 'Why Tredixo', path: '/why-tredixo' },
    { label: 'Become An Affiliate', path: '/become-an-affiliate' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-conditions' },
  ];

  const knowledgeLinks = [
    { label: 'Trading', path: '/trading' },
    { label: 'Equity Trading', path: '/equity-trading' },
    { label: 'Dabba Trading', path: '/dabba-trading' },
    { label: 'Commodity Trading', path: '/commodity-trading' },
    { label: 'Margin Trading', path: '/margin-trading' },
    { label: 'Intraday Trading', path: '/intraday-trading' },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'News & Blogs', path: '/blogs' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Regulations', path: '/regulations' },
    { label: 'Risk Notice', path: '/risk-disclosure' },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* LEFT SECTION */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Tredixo"
                className="h-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-white text-2xl font-extrabold">
                Tredi<span className="text-[#39FF14]">X</span>o
              </span>
            </div>

            {/* Social */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* APP DOWNLOAD + QR IN ONE LINE */}
            <div className="flex flex-wrap gap-4 items-start">
              {/* IOS */}
              <div className="flex items-start gap-3 bg-[#0f0f0f] border border-white/10 rounded-2xl px-4 py-4 hover:border-[#39FF14] transition-all duration-300">
                <a
                  href="https://shorturl.at/iwtWj"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 min-w-[170px]"
                >
                  <FaApple className="text-xl" />
                  <div>
                    <p className="text-xs text-white/50">Download on</p>
                    <h3 className="text-sm font-semibold">App Store</h3>
                  </div>
                </a>

                <a
                  href="https://shorturl.at/iwtWj"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[95px] h-[95px] rounded-xl overflow-hidden border border-white/10 bg-white shrink-0"
                >
                  <img
                    src={IQR}
                    alt="iOS QR"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>

              {/* ANDROID */}
              <div className="flex items-start gap-3 bg-[#0f0f0f] border border-white/10 rounded-2xl px-4 py-4 hover:border-[#39FF14] transition-all duration-300">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tredixo.tredixo&pcampaignid=web_share"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 min-w-[170px]"
                >
                  <FaGooglePlay className="text-[#39FF14]" />
                  <div>
                    <p className="text-xs text-white/50">Get it on</p>
                    <h3 className="text-sm font-semibold">Google Play</h3>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.tredixo.tredixo&pcampaignid=web_share"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[95px] h-[95px] rounded-xl overflow-hidden border border-white/10 bg-white shrink-0"
                >
                  <img
                    src={PQR}
                    alt="Playstore QR"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <div className="flex flex-col gap-3 text-white/70">
              {aboutLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-[#39FF14] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* KNOWLEDGE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Knowledge</h3>
            <div className="flex flex-col gap-3 text-white/70">
              {knowledgeLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-[#39FF14] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-white/70">
              {quickLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-[#39FF14] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5 text-center text-white/50 text-sm">
          © 2026 Tredixo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;