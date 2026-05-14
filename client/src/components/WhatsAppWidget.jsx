import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = ({
  phone = "447598697995",
  brandName = "Tredixo",
  message = "Hello How May I Help You?",
  defaultText = "Hi, I want to start trading.",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div className="relative flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="mb-3 w-[290px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0f16] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            >
              <div className="bg-[#25D366] px-4 py-3 text-sm font-bold text-black">
                {brandName}
              </div>

              <div className="bg-[linear-gradient(180deg,#0d131b_0%,#0a0f14_100%)] p-4">
                <div className="w-fit max-w-[220px] rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-black shadow-sm">
                  {message}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.01]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105"
          aria-label="Open WhatsApp Chat"
        >
          <FaWhatsapp className="text-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;