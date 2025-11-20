"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
      {/* زر الواتس */}
      <a
        href="https://wa.me/01128465022"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110"
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* زر الرجوع لأعلى */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer transition hover:scale-110"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default WhatsAppButton;
