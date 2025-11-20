"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaUsers,
  FaClock,
  FaShip,
  FaCode,
  FaIndustry,
  FaFish,
  FaCalendarAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaShoppingCart,
  FaBuilding,
  FaHotel,
  FaMobile,
  FaBullhorn,
  FaVideo,
  FaPalette,
  FaSearch
} from "react-icons/fa";

export default function ServicesPage() {
  const phoneNumber = "201095435168";
  const whatsappMessage = "Hello, I would like to book a yacht!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "تصميم وتطوير موقع لحجز اليخوت والرحلات البحرية",
      image: "/images/ya.jpg",
      category: "private",
      icon: FaCode,
      link: "https://adsamy-yacht.vercel.app/",
      popular: true,
    },
    {
      id: 2,
      title: "موقع ويب لعيادة مستحضرات التجميل والعناية بالبشرة",
      image: "/images/be.jpg",
      category: "private",
      icon: FaCode,
      link: "https://beauty-clinic-gilt.vercel.app/",
      popular: true,
    },
    {
      id: 3,
      title: "أثاثي – الموقع الرسمي لمعرض الأثاث",
      image: "/images/fu.jpg",
      category: "private",
      icon: FaCode,
      link: "https://furniture-showroom-silk.vercel.app/",
      popular: true,
    },
    {
      id: 4,
      title: "كافيه مزاج – تجربة القهوة المثالية",
      image: "/images/caf.jpg",
      category: "private",
      icon: FaCode,
      link: "https://caffee-swart.vercel.app/",
      popular: true,
    },
    {
      id: 5,
      title: "ORGA – الطعم الفاخر من الطبيعة",
      image: "/images/or.jpg",
      category: "private",
      icon: FaCode,
      link: "https://orga-nine.vercel.app/",
      popular: true,
    },
    {
      id: 6,
      title: "متجرك للأناقة والموضة",
      image: "/images/ec.jpg",
      category: "private",
      icon: FaCode,
      link: "https://ecommerce-gilt-chi.vercel.app/",
      popular: true,
    },
    {
      id: 7,
      title: "منصة تعلم مبتكرة لكل الأعمار",
      image: "/images/ed.jpg",
      category: "private",
      icon: FaCode,
      link: "https://adsamy2.vercel.app/",
      popular: true,
    },
    //------------------------------------ المتاجر الالكترونية------------------------------
    {
      id: 8,
      title: " متجر إلكتروني لبيع منتجات وأغذية الحيوانات الأليفة",
      image: "/images/ec2.jpg",
      category: "corporate",
      icon: FaShoppingCart,
      link: "https://greenlines-ae.com/",
      popular: true,
    },
    {
      id: 9,
      title: "متجرك للأناقة والموضة",
      image: "/images/ec.jpg",
      category: "corporate",
      icon: FaShoppingCart,
      link: "https://ecommerce-gilt-chi.vercel.app/",
      popular: true,
    },
    //------------------------------------ المتاجر الالكترونية------------------------------

    //------------------------------------  مصانع و شركات عامة------------------------------
    {
      id: 10,
      title: "medixarabia  ",
      image: "/images/co1.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://medixarabia.com/",
      popular: true,
    },
    {
      id: 11,
      title: " advancedarrow",
      image: "/images/co2.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://advancedarrow-om.com/",
      popular: true,
    },
    {
      id: 12,
      title: " ma-conex ",
      image: "/images/co3.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://ma-conex.com/",
      popular: true,
    },
    {
      id: 13,
      title: " emaarelwatan ",
      image: "/images/co4.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://emaarelwatan.com/",
      popular: true,
    },
    {
      id: 14,
      title: " dawaiy",
      image: "/images/co5.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://dawaiy.com/",
      popular: true,
    },
    {
      id: 15,
      title: "bestremedy",
      image: "/images/co6.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "http://bestremedy.net/",
      popular: true,
    },
    {
      id: 16,
      title: "promastar",
      image: "/images/co7.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://www.promastar.net/",
      popular: true,
    },
    {
      id: 17,
      title: "egyptianindustry",
      image: "/images/co9.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://egyptianindustry.com/",
      popular: true,
    },
    {
      id: 18,
      title: "egycompanies",
      image: "/images/co11.jpg",
      category: "celebration",
      icon: FaIndustry,
      link: "https://www.egycompanies.com/",
      popular: true,
    },
    //------------------------------------  مصانع و شركات عامة------------------------------

    //------------------------------------     حجوزات------------------------------
    {
      id: 19,
      title: "thelandvillas",
      image: "/images/bo.jpg",
      category: "fishing",
      icon: FaHotel,
      link: "https://thelandvillas.com/",
      popular: true,
    },
    //------------------------------------     حجوزات------------------------------

    //------------------------------------     موبيل ابليكيشن------------------------------
    {
      id: 20,
      title: "MIA Card",
      image: "/images/mo1.jpg",
      category: "sightseeing",
      icon: FaMobile,
      link: "https://play.google.com/store/apps/details?id=com.mia.mia_card",
      popular: true,
    },
    {
      id: 21,
      title: "Triumph Hotel",
      image: "/images/mo2.jpg",
      category: "sightseeing",
      icon: FaMobile,
      link: "https://play.google.com/store/apps/details?id=com.mia.triumph",
      popular: true,
    },
    //------------------------------------     موبيل ابليكيشن------------------------------

    //------------------------------------     التسويق الالكترونى-----------------------------
    {
      id: 22,
      title: "البورتفوليو",
      image: "/images/mar2.jpg",
      category: "wedding",
      icon: FaBullhorn,
      link: "https://www.canva.com/design/DAGiMnjFEAw/RsS3nWHGNkhQC7dm0bL2uA/edit",
      popular: true,
    },
    {
      id: 23,
      title: "نماذج من شغلنا",
      image: "/images/mar1.jpg",
      category: "wedding",
      icon: FaBullhorn,
      link: "https://www.canva.com/design/DAG374i8sy8/esiOmB-RSoKfQ4BVV46nQg/edit",
      popular: true,
    },
    //------------------------------------     التسويق الالكترونى-----------------------------

    //------------------------------------      المونتاج-----------------------------
    {
      id: 24,
      title: "نماذج من اعمالنا",
      image: "/images/mon.jpg",
      category: "montag",
      icon: FaVideo,
      link: "https://drive.google.com/drive/folders/1xAlYOPtNINoO7AwXjz0rvbKqK1OWobCY",
      popular: true,
    },
    //------------------------------------      المونتاج-----------------------------

    //------------------------------------    🎨 تصميم واجهات وتجربة المستخدم (UI/UX)-----------------------------
    {
      id: 25,
      title: "نماذج من اعمالنا",
      image: "/images/mon.jpg",
      category: "ui",
      icon: FaPalette,
      link: "https://drive.google.com/drive/folders/1xAlYOPtNINoO7AwXjz0rvbKqK1OWobCY",
      popular: true,
    },
    //------------------------------------  🎨 تصميم واجهات وتجربة المستخدم (UI/UX)  -----------------------------

    //------------------------------------  🎨      تحسين نتائج البحث في جوجل (SEO)  -----------------------------
    {
      id: 26,
      title: "نماذج من اعمالنا",
      image: "/images/mon.jpg",
      category: "seo",
      icon: FaSearch,
      link: "https://drive.google.com/drive/folders/1xAlYOPtNINoO7AwXjz0rvbKqK1OWobCY",
      popular: true,
    },
    //------------------------------------  🎨      تحسين نتائج البحث في جوجل (SEO)  -----------------------------
  ];

  const categories = [
    { id: "all", name: "كل المشاريع", icon: FaShip, count: services.length },
    {
      id: "celebration",
      name: "مصانع و شركات عامة",
      icon: FaIndustry,
      count: services.filter((s) => s.category === "celebration").length,
    },
    {
      id: "fishing",
      name: "موقع حجوزات",
      icon: FaHotel,
      count: services.filter((s) => s.category === "fishing").length,
    },
    {
      id: "private",
      name: "البرمجة الخاصة",
      icon: FaCode,
      count: services.filter((s) => s.category === "private").length,
    },
    {
      id: "sightseeing",
      name: "تطبيقات الهواتف",
      icon: FaMobile,
      count: services.filter((s) => s.category === "sightseeing").length,
    },
    {
      id: "corporate",
      name: "المتاجر الالكترونية",
      icon: FaShoppingCart,
      count: services.filter((s) => s.category === "corporate").length,
    },
    {
      id: "wedding",
      name: "التسويق الإلكترونى",
      icon: FaBullhorn,
      count: services.filter((s) => s.category === "wedding").length,
    },
    {
      id: "montag",
      name: " المونتاج وصناعة المحتوى المرئي",
      icon: FaVideo,
      count: services.filter((s) => s.category === "montag").length,
    },
    {
      id: "ui",
      name: "  تصميم واجهات وتجربة المستخدم (UI/UX)",
      icon: FaPalette,
      count: services.filter((s) => s.category === "ui").length,
    },
    {
      id: "seo",
      name: "   تحسين نتائج البحث في جوجل (SEO)",
      icon: FaSearch,
      count: services.filter((s) => s.category === "seo").length,
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  // دالة للحصول على اسم الفئة من الـ id
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : "";
  };

  return (
    <div className="bg-[#151922] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-gray-950">
        {/* الخلفية التكنولوجية المتقدمة */}
        <div className="absolute inset-0">
          {/* شبكة نقاط متقدمة */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px, rgba(59,130,246,0.15)_1px, transparent_0)] bg-[size:40px_40px]"></div>
          </div>
          
          {/* خطوط بيانات متحركة */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute top-40 right-0 w-0.5 h-64 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-700"></div>
          </div>

          {/* تأثيرات Holographic */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float delay-4000"></div>

          {/* خطوط متقاطعة */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[size:20px_20px]"></div>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="relative z-50 flex items-center justify-center min-h-screen px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* شريط الحالة التكنولوجي */}
            <div className="flex justify-center items-center gap-6 mb-16">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-mono tracking-widest">SYSTEM ONLINE</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="text-cyan-300 text-xs font-mono">v2.0.1</div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="text-blue-300 text-xs font-mono">AI_ENGAGED</div>
            </div>

            {/* العنوان الرئيسي مع تأثير Matrix */}
           <div className="mb-12">
  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tighter">
    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
      -AZ
    </span>
    <br />
    <span className="text-white drop-shadow-2xl mt-3 inline-block">
      TECHNOLOGY
    </span>
  </h1>
</div>


            {/* الوصف المتطور */}
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light tracking-wide">
                نبتكر <span className="text-cyan-300 font-semibold">حلولاً ذكية</span> تجمع بين 
                <span className="text-blue-300 font-semibold">  التسويق</span> و
                <span className="text-purple-300 font-semibold"> براعة البرمجة</span>
              </p>
            </div>

            {/* شبكة الخدمات التكنولوجية */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              {[
                { 
                  icon: "🤖", 
                  title: "حلول ذكية", 
                  desc: "أنظمة ذكاء اصطناعي متقدمة",
                  color: "from-cyan-500 to-blue-500"
                },
                { 
                  icon: "☁️", 
                  title: "استضافة موثوقة", 
                  desc: "خوادم آمنة وسريعة",
                  color: "from-blue-500 to-purple-500"
                },
                { 
                  icon: "🔐", 
                  title: "برمجة ذكية", 
                  desc: "حلول تقنية متطورة",
                  color: "from-purple-500 to-pink-500"
                },
                { 
                  icon: "📱", 
                  title: "تسويق رقمي", 
                  desc: "زيادة المبيعات بذكاء",
                  color: "from-pink-500 to-red-500"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* تأثير الخلفية المتحرك */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

           {/* أزرار التحكم المتطورة */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">

  <a
    href="https://wa.me/201128465022"
    target="_blank"
    rel="noopener noreferrer"
    className="w-[85%] sm:w-auto"
  >
    <button className="w-full group relative bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-500 overflow-hidden border border-cyan-400/30">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      <span className="relative flex items-center gap-3">
        <FaWhatsapp className="text-white" size={20} />
        ابدأ مشروعك الآن
      </span>
    </button>
  </a>

  <a href="tel:01004813709" className="w-[85%] sm:w-auto">
    <button className="w-full group relative border-2 border-white text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 backdrop-blur-lg transform hover:scale-105 transition-all duration-500 overflow-hidden">
      <span className="relative flex items-center gap-3">
        <FaPhoneAlt className="text-white" size={20} />
        احجز استشارة مجانية
      </span>
    </button>
  </a>

</div>


          </div>
        </div>

        {/* مؤشر التمرير المتطور */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="animate-bounce bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white backdrop-blur-lg rounded-full p-4 border border-cyan-400/30 hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer group">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* كود متحرك في الخلفية */}
        <div className="absolute bottom-20 right-10 opacity-5 font-mono text-sm pointer-events-none">
          <div className="animate-pulse">
            {`class FutureTech {\n  constructor() {\n    this.innovation = true;\n    this.ai = "active";\n  }\n  \n  buildFuture() {\n    return "Code The Future";\n  }\n}`}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div dir="rtl" className="max-w-7xl mx-auto px-4 py-16">

        {/* CATEGORY FILTER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-bold shadow-2xl scale-105"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                <IconComponent className="text-xl text-white" />
                <span>{category.name}</span>
                <span className="px-2 py-1 text-xs rounded-full bg-white/10">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            const categoryName = getCategoryName(service.category);
            
            return (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    loading="lazy"
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* شريط الفئة والأيقونة أعلى الصورة */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white py-2 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className="text-white" />
                      <span className="font-bold text-sm">{categoryName}</span>
                    </div>
                   
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-center font-bold text-white mb-9">
                    {service.title}
                  </h3>

                  <div className="flex gap-3">
                    <a href={service.link} target="_blank" className="flex-1">
                      <button className="w-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black font-semibold py-3 px-4 rounded-lg border text-white border-white/30 hover:bg-gray-200 transition">
                        زيارة المشروع
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}