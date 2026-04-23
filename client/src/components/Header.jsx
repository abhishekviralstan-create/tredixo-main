import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoChevronDownOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const [mobileKnowledgeOpen, setMobileKnowledgeOpen] = useState(false);
    const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
    const [desktopKnowledgeOpen, setDesktopKnowledgeOpen] = useState(false);

    const dropdownRef = useRef(null);
    const location = useLocation();

    const closeAllMenus = () => {
        setMobileOpen(false);
        setMobileAboutOpen(false);
        setMobileKnowledgeOpen(false);
        setDesktopAboutOpen(false);
        setDesktopKnowledgeOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDesktopAboutOpen(false);
                setDesktopKnowledgeOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        closeAllMenus();
    }, [location.pathname]);

    const navBtnClass =
        "text-white font-semibold hover:text-[#ff6b4a] transition-all duration-200";

    const activeBtnClass =
        "text-[#ff6b4a] underline underline-offset-4";

    const normalBtnClass =
        "px-3 py-3";

    const ctaBtnClass =
        "border border-white/15 bg-transparent text-white px-6 xl:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black";

    const aboutLinks = [
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
        { label: "Live Markets", path: "/live-markets" },
    ];

    const isAboutActive = aboutLinks.some((item) => location.pathname === item.path);
    const isKnowledgeActive = knowledgeLinks.some((item) => location.pathname === item.path);

    return (
        <nav className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-6" ref={dropdownRef}>
                <div className="h-[80px] md:h-[92px] flex items-center justify-between gap-4">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 shrink-0"
                        onClick={closeAllMenus}
                    >
                        <img
                            src="/logo.png"
                            alt="Tredixo"
                            className="h-10 md:h-12 object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />
                        <span className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
                            Tredi<span className="text-lime-300">X</span>o
                        </span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-3 xl:gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${navBtnClass} ${isActive ? activeBtnClass : normalBtnClass}`
                            }
                        >
                            Home
                        </NavLink>

                        {/* Desktop About */}
                        <div className="relative">
                            <div className="flex items-center">
                                <NavLink
                                    to="/about-us"
                                    className={`${navBtnClass} ${isAboutActive ? activeBtnClass : normalBtnClass}`}
                                >
                                    About Us
                                </NavLink>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setDesktopAboutOpen(!desktopAboutOpen);
                                        setDesktopKnowledgeOpen(false);
                                    }}
                                    className={`pr-3 py-3 transition-all duration-200 ${isAboutActive ? "text-[#ff6b4a]" : "text-white hover:text-[#ff6b4a]"
                                        }`}
                                >
                                    <IoChevronDownOutline
                                        size={16}
                                        className={`transition-transform duration-200 ${desktopAboutOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>

                            {desktopAboutOpen && (
                                <div className="absolute top-full left-0 w-60 bg-black border border-white/10 rounded-xl shadow-xl py-2 z-50">
                                    {aboutLinks.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="block px-5 py-3 text-white hover:bg-white/10 transition-colors"
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Desktop Knowledge */}
                        <div className="relative">
                            <div className="flex items-center">
                                <NavLink
                                    to="/trading"
                                    className={`${navBtnClass} ${isKnowledgeActive ? activeBtnClass : normalBtnClass}`}
                                >
                                    Knowledge Center
                                </NavLink>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setDesktopKnowledgeOpen(!desktopKnowledgeOpen);
                                        setDesktopAboutOpen(false);
                                    }}
                                    className={`pr-3 py-3 transition-all duration-200 ${isKnowledgeActive ? "text-[#ff6b4a]" : "text-white hover:text-[#ff6b4a]"
                                        }`}
                                >
                                    <IoChevronDownOutline
                                        size={16}
                                        className={`transition-transform duration-200 ${desktopKnowledgeOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>

                            {desktopKnowledgeOpen && (
                                <div className="absolute top-full left-0 w-64 bg-black border border-white/10 rounded-xl shadow-xl py-2 z-50">
                                    {knowledgeLinks.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="block px-5 py-3 text-white hover:bg-white/10 transition-colors"
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                `${navBtnClass} ${isActive ? activeBtnClass : normalBtnClass}`
                            }
                        >
                            News & Blogs
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `${navBtnClass} ${isActive ? activeBtnClass : normalBtnClass}`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    {/* Right buttons */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        <a
                            href="https://crm.tredixo.co.in/auth-pages/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ctaBtnClass}
                        >
                            Sign In
                        </a>

                        <a
                            href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ctaBtnClass}
                        >
                            Register Now
                        </a>
                    </div>

                    {/* Mobile button */}
                    <button
                        type="button"
                        className="lg:hidden text-white shrink-0"
                        onClick={() => {
                            const nextOpen = !mobileOpen;
                            setMobileOpen(nextOpen);

                            if (!nextOpen) {
                                setMobileAboutOpen(false);
                                setMobileKnowledgeOpen(false);
                            }

                            setDesktopAboutOpen(false);
                            setDesktopKnowledgeOpen(false);
                        }}
                    >
                        {mobileOpen ? <AiOutlineClose size={28} /> : <RxHamburgerMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden pb-5 flex flex-col gap-1 border-t border-white/10 pt-4">
                        <NavLink
                            to="/"
                            className="text-white font-semibold py-2"
                        >
                            Home
                        </NavLink>

                        {/* Mobile About */}
                        <div className="border-b border-white/10 pb-2">
                            <div className="w-full flex items-center justify-between gap-2">
                                <NavLink
                                    to="/about-us"
                                    className={`font-semibold py-2 ${isAboutActive ? "text-[#ff6b4a]" : "text-white"}`}
                                >
                                    About Us
                                </NavLink>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setMobileAboutOpen(!mobileAboutOpen);
                                        setMobileKnowledgeOpen(false);
                                    }}
                                    className={`py-2 ${isAboutActive ? "text-[#ff6b4a]" : "text-white"}`}
                                >
                                    <IoChevronDownOutline
                                        size={18}
                                        className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>

                            {mobileAboutOpen && (
                                <div className="pl-4 mt-1 flex flex-col">
                                    {aboutLinks.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="text-white/90 py-2 text-sm"
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Knowledge */}
                        <div className="border-b border-white/10 pb-2">
                            <div className="w-full flex items-center justify-between gap-2">
                                <NavLink
                                    to="/trading"
                                    className={`font-semibold py-2 ${isKnowledgeActive ? "text-[#ff6b4a]" : "text-white"}`}
                                >
                                    Knowledge Center
                                </NavLink>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setMobileKnowledgeOpen(!mobileKnowledgeOpen);
                                        setMobileAboutOpen(false);
                                    }}
                                    className={`py-2 ${isKnowledgeActive ? "text-[#ff6b4a]" : "text-white"}`}
                                >
                                    <IoChevronDownOutline
                                        size={18}
                                        className={`transition-transform duration-200 ${mobileKnowledgeOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>

                            {mobileKnowledgeOpen && (
                                <div className="pl-4 mt-1 flex flex-col">
                                    {knowledgeLinks.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="text-white/90 py-2 text-sm"
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/blogs"
                            className="text-white font-semibold py-2"
                        >
                            News & Blogs
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className="text-white font-semibold py-2"
                        >
                            Contact Us
                        </NavLink>

                        {/* Mobile CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <a
                                href="https://crm.tredixo.co.in/auth-pages/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${ctaBtnClass} text-center`}
                            >
                                Sign In
                            </a>

                            <a
                                href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${ctaBtnClass} text-center`}
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;