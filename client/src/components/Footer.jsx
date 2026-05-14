import { Link } from 'react-router-dom';
import PQR from '../assests/play-store-qr.png';
import IQR from '../assests/Qr for ios.png';
import logo from '../assests/logo.png';
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
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/tredixofb' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/tredixo_official/' },
    { icon: <FaTwitter />, href: 'https://x.com/tredixo' },
    { icon: <FaTelegramPlane />, href: 'https://t.me/Tredixo_official' },
  ];

  const aboutLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "Why Tredixo", path: "/why-tredixo" },
    { label: "Brokerage Calculator", path: "/brokerage-calculator" },
    { label: "Become An Affiliate", path: "/become-an-affiliate" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
  ];

  const knowledgeLinks = [
    { label: "Crypto Trading", path: "/crypto-trading" },
    { label: "NSE Trading", path: "/nse-trading" },
    { label: "MCX Trading", path: "/mcx-trading" },
    { label: "Forex Trading", path: "/forex-trading" },
    { label: "Margin Trading", path: "/margin-trading" },
    { label: "Dabba Trading", path: "/dabba-trading" },
    { label: "Intraday Trading", path: "/intraday-trading" },
    { label: "Comex Trading", path: "/comex-trading" },
    { label: "US Stocks", path: "/us-stock" },
    { label: "Live Markets", path: "/live-markets" },
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
            <div className="mb-6">
              <Link to="/">
                <img
                  src={logo}
                  alt="Tredixo"
                  className="h-6 md:h-8 w-auto object-contain cursor-pointer hover:opacity-80 transition"
                />
              </Link>
            </div>
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

            <div className="mt-6 flex flex-col gap-6">
              {/* IOS */}
              <div className="flex items-center justify-between bg-[#0b0b0b] border border-white/10 rounded-2xl px-5 py-4 hover:border-[#39FF14] transition-all duration-300">

                <a
                  href="https://shorturl.at/iwtWj"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <FaApple className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs text-white/50">Download on</p>
                    <h3 className="text-base font-semibold">App Store</h3>
                  </div>
                </a>

                <img
                  src={IQR}
                  alt="iOS QR"
                  className="w-[85px] h-[85px] rounded-lg border border-white/10 bg-white object-cover"
                />
              </div>

              {/* ANDROID */}
              <div className="flex items-center justify-between bg-[#0b0b0b] border border-white/10 rounded-2xl px-5 py-4 hover:border-[#39FF14] transition-all duration-300">

                <a
                  href="https://play.google.com/store/apps/details?id=com.tredixo.tredixo&pcampaignid=web_share"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <FaGooglePlay className="text-[#39FF14]" />
                  </div>

                  <div>
                    <p className="text-xs text-white/50">Get it on</p>
                    <h3 className="text-base font-semibold">Google Play</h3>
                  </div>
                </a>

                <img
                  src={PQR}
                  alt="Playstore QR"
                  className="w-[85px] h-[85px] rounded-lg border border-white/10 bg-white object-cover"
                />
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

        {/* Risk Notice */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-base md:text-lg font-semibold text-white mb-4">
            Risk Notice
          </h3>

          <div className="space-y-4 text-sm md:text-[15px] leading-7 text-white/70">
            <p>
              Trading CFDs involves a high degree of risk. Leveraged positions can
              magnify both gains and losses, and in some cases, losses may exceed
              your original investment. These products aren't suitable for everyone.
              Please consider your financial situation and experience before trading.
              We recommend reviewing your financial goals and understanding the
              mechanics and risks of CFD trading before proceeding. Past outcomes do
              not guarantee future performance. The information presented on this
              website is designed for general informational purposes only and should
              not be interpreted as personalized financial advice.
            </p>

            <p>
              Detailed explanations of risks and terms are available in our legal
              documentation. Tredixo services are not offered in countries where
              such activities may breach local regulations, including the United
              States, Singapore, Russia, and those under FATF or international
              sanctions. We operate under licensed entities that adhere to strict
              regulatory oversight within their respective jurisdictions.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-5 text-center text-white/50 text-sm">
          © 2026 Tredixo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;