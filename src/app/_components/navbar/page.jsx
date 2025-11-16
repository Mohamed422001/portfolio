"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

 const navItemClass = (path) => `
  relative px-3 py-1 font-medium transition-all duration-300 
  ${pathname === path ? "active-link" : ""}
  hover:gradient-text
`;


  const phoneNumber = "201095435168";
  const whatsappMessage = "Hello, I would like to book a yacht!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <nav className="bg-black text-white shadow-md z-50 fixed top-0 right-0 left-0 w-full">
      <div className="w-full flex items-center justify-between py-2 px-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo1.png"
            alt="Real Estate Logo"
            width={100}
            height={100}
            className="object-cover"
          />
        </Link>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-4 px-2 sm:hidden">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center space-x-4">
               <div>
                <FaWhatsapp size={20} className="text-green-600" />
              </div>
              <button dir="rtl" className="cursor-pointer">احجز الان</button>
             
            </div>
          </a>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none cursor-pointer"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div  className="hidden sm:flex items-center justify-between w-full">
          {/* Center Links */}
          <div dir="rtl" className="flex space-x-4 mx-auto">
            <Link href="/" className={navItemClass("/")}>
              الرئيسية
            </Link>
            <Link href="/about" className={navItemClass("/about")}>
              من نحن
            </Link>
            <Link href="/services" className={navItemClass("/services")}>
              نماذج من اعمالنا
            </Link>
            <Link href="/host" className={navItemClass("/host")}>
              خدامات الاستضافة
            </Link>
            <Link href="/blogs" className={navItemClass("/blogs")}>
              المدونة
            </Link>
            <Link href="/contact" className={navItemClass("/contact")}>
              تواصل معنا
            </Link>
          </div>

          {/* Right Icons */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center space-x-4">
              <button className="cursor-pointer">احجز الان</button>
              <div>
                <FaWhatsapp size={20} className="text-green-600" />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-0 right-0 h-full w-2/3 min-w-[200px] bg-black shadow-lg z-50 p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white mb-4"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={navItemClass("/")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className={navItemClass("/about")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              من نحن
            </Link>
            <Link
              href="/services"
              className={navItemClass("/services")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              نماذج من اعمالنا
            </Link>
            <Link href="/host" className={navItemClass("/host")}>
              خدامات الاستضافة
            </Link>
            <Link
              href="/blogs"
              className={navItemClass("/blogs")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              المدونة
            </Link>
            <Link
              href="/contact"
              className={navItemClass("/contact")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
