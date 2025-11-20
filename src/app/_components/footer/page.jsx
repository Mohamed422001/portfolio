"use client";
import { FaInstagram, FaPhoneAlt, FaGlobe, FaEnvelope ,FaFacebook ,FaSearch,FaBullseye,FaTabletAlt,FaPencilRuler,FaVideo } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  // تعريف الروابط لكل عنصر في القائمة
  const menuLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "المدونة", path: "/blogs" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
    { name: "الاسئلة الشائعة", path: "#" },
  ];

  // روابط الخدمات
  const servicesLinks = [
    { 
      name: "تصميم المواقع الإلكترونية",
      path: "#",
      icon: <FaGlobe className="text-lg ml-2" />,
    },
    { 
      name: "تحسين نتائج البحث في جوجل (SEO)", 
      path: "#",
      icon: <FaSearch className="text-lg ml-2" />,
    },
    {
      name: "التسويق الإلكتروني الشامل (Digital Marketing)",
      path: "#",
      icon: <FaBullseye className="text-lg ml-2" />,
    },
    {
      name: "تطبيقات الهواتف",
      path: "#",
      icon: <FaTabletAlt className="text-lg ml-2" />,
    },
    { 
      name: "تصميم واجهات وتجربة المستخدم (UI/UX)", 
      path: "#",
      icon: <FaPencilRuler className="text-lg ml-2" />,
    },
    { 
      name: "المونتاج وصناعة المحتوى المرئي", 
      path: "#",
      icon: <FaVideo className="text-lg ml-2" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">AZ-Technology</h2>
            <p className="text-gray-300 mb-4 leading-relaxed" dir="rtl">
             "نقدم حلولاً رقمية مبتكرة ترتقي بأعمالك نحو التميز والنجاح المستدام في العالم الرقمي."
            </p>
         <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-300 group">
  <a
    href="https://www.facebook.com/share/1CmdxQUe1m/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
  >
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full">
      <FaFacebook size={16} className="text-white" />
    </div>
    <span className="text-gray-300 text-sm font-medium">@AZ-Technology</span>
  </a>
</div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              روابط هامة
            </h3>
            <ul className="space-y-2">
              {menuLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    {service.icon}
                    <span className="text-sm flex-1 group-hover:mr-1 transition-all">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Location Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              موقعنا
            </h3>

            <div className="mb-4">
              {/* Map Placeholder */}
              <div className="aspect-video bg-gray-700 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3434.848923047441!2d31.4935788848721!3d30.581809981689954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDM0JzU0LjUiTiAzMcKwMjknMjkuMCJF!5e0!3m2!1sar!2seg!4v1759568347152!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">

            {/* Contact Methods */}
            <div className="flex flex-row flex-wrap gap-3">
  <a
    href="tel:+201004813709"
    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-3 hover:scale-105"
  >
    <FaPhoneAlt className="text-[#00FFFF] text-lg" />
    <span className="text-sm font-medium">+201004813709</span>
  </a>

  <a
    href="mailto:info@a-ztechno.com"
    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-3 hover:scale-105"
  >
    <FaEnvelope className="text-[#FF00FF] text-lg" />
    <span className="text-sm font-medium">info@a-ztechno.com</span>
  </a>
</div>


            <div className="text-gray-400 text-sm  md:mb-0 mt-9 md:mt-0" dir="ltr">
               © 2025 AZ-Technology. جميع الحقوق محفوظة.
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  );
}