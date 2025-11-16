"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaUsers,
  FaClock,
  FaShip,
  FaUmbrellaBeach,
  FaCocktail,
  FaFish,
  FaCalendarAlt,
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
      icon: FaShip,
      link: "https://adsamy-yacht.vercel.app/",
      popular: true,
    },
    {
      id: 1,
      title: "موقع ويب لعيادة مستحضرات التجميل والعناية بالبشرة",
      image: "/images/be.jpg",
      category: "private",
      icon: FaShip,
      link: "https://beauty-clinic-gilt.vercel.app/",
      popular: true,
    },
    {
      id: 1,
      title: "أثاثي – الموقع الرسمي لمعرض الأثاث",
      image: "/images/fu.jpg",
      category: "private",
      icon: FaShip,
      link: "https://furniture-showroom-silk.vercel.app/",
      popular: true,
    },
    {
      id: 1,
      title: "كافيه مزاج – تجربة القهوة المثالية",
      image: "/images/caf.jpg",
      category: "private",
      icon: FaShip,
      link: "https://caffee-swart.vercel.app/",
      popular: true,
    },
    {
      id: 1,
      title: "ORGA – الطعم الفاخر من الطبيعة",
      image: "/images/or.jpg",
      category: "private",
      icon: FaShip,
      link: "https://orga-nine.vercel.app/",
      popular: true,
    },
    {
      id: 1,
      title: "متجرك للأناقة والموضة",
      image: "/images/ec.jpg",
      category: "private",
      icon: FaShip,
      link: "https://ecommerce-gilt-chi.vercel.app/",
      popular: true,
    },
    {
      id: 1,
      title: "منصة تعلم مبتكرة لكل الأعمار",
      image: "/images/ed.jpg",
      category: "private",
      icon: FaShip,
      link: "https://adsamy2.vercel.app/",
      popular: true,
    },
//------------------------------------ المتاجر الالكترونية------------------------------
    {
      id: 1,
      title: " متجر إلكتروني لبيع منتجات وأغذية الحيوانات الأليفة",
      image: "/images/ec2.jpg",
      category: "corporate",
      icon: FaShip,
      link: "https://greenlines-ae.com/",
      popular: true,
    },

      {
      id: 1,
      title: "متجرك للأناقة والموضة",
      image: "/images/ec.jpg",
      category: "corporate",
      icon: FaShip,
      link: "https://ecommerce-gilt-chi.vercel.app/",
      popular: true,
    },

//------------------------------------ المتاجر الالكترونية------------------------------

//------------------------------------  مصانع و شركات عامة------------------------------
     {
      id: 1,
      title: "medixarabia  ",
      image: "/images/co1.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://medixarabia.com/",
      popular: true,
    },
     {
      id: 1,
      title: " advancedarrow",
      image: "/images/co2.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://advancedarrow-om.com/",
      popular: true,
    },
     {
      id: 1,
      title: " ma-conex ",
      image: "/images/co3.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://ma-conex.com/",
      popular: true,
    },

     {
      id: 1,
      title: " emaarelwatan ",
      image: "/images/co4.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://emaarelwatan.com/",
      popular: true,
    },
     {
      id: 1,
      title: " dawaiy",
      image: "/images/co5.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://dawaiy.com/",
      popular: true,
    },
    {
      id: 1,
      title: "bestremedy",
      image: "/images/co6.jpg",
      category: "celebration",
      icon: FaShip,
      link: "http://bestremedy.net/",
      popular: true,
    },
      {
      id: 1,
      title: "promastar",
      image: "/images/co7.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://www.promastar.net/",
      popular: true,
    },
     {
      id: 1,
      title: "egyptianindustry",
      image: "/images/co9.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://egyptianindustry.com/",
      popular: true,
    },
     {
      id: 1,
      title: "egycompanies",
      image: "/images/co11.jpg",
      category: "celebration",
      icon: FaShip,
      link: "https://www.egycompanies.com/",
      popular: true,
    },
//------------------------------------  مصانع و شركات عامة------------------------------

//------------------------------------     حجوزات------------------------------

{
      id: 1,
      title: "thelandvillas",
      image: "/images/bo.jpg",
      category: "fishing",
      icon: FaShip,
      link: "https://thelandvillas.com/",
      popular: true,
    },
//------------------------------------     حجوزات------------------------------



//------------------------------------     موبيل ابليكيشن------------------------------

{
      id: 1,
      title: "MIA Card",
      image: "/images/mo1.jpg",
      category: "sightseeing",
      icon: FaShip,
      link: "https://play.google.com/store/apps/details?id=com.mia.mia_card",
      popular: true,
    },
{
         id: 1,
      title: "Triumph Hotel",
      image: "/images/mo2.jpg",
      category: "sightseeing",
      icon: FaShip,
      link: "https://play.google.com/store/apps/details?id=com.mia.triumph",
      popular: true,
    },

//------------------------------------     موبيل ابليكيشن------------------------------

//------------------------------------     التسويق الالكترونى-----------------------------
{
      id: 1,
      title: "البورتفوليو",
      image: "/images/mar2.jpg",
      category: "wedding",
      icon: FaShip,
      link: "https://www.canva.com/design/DAGiMnjFEAw/RsS3nWHGNkhQC7dm0bL2uA/edit",
      popular: true,
  },

  {
      id: 1,
      title: "نماذج من شغلنا",
      image: "/images/mar1.jpg",
      category: "wedding",
      icon: FaShip,
      link: "https://www.canva.com/design/DAG374i8sy8/esiOmB-RSoKfQ4BVV46nQg/edit",
      popular: true,
  },



//------------------------------------     التسويق الالكترونى-----------------------------


//------------------------------------      المونتاج-----------------------------
{
      id: 1,
      title: "نماذج من اعمالنا",
      image: "/images/mon.jpg",
      category: "montag",
      icon: FaShip,
      link: "https://drive.google.com/drive/folders/1xAlYOPtNINoO7AwXjz0rvbKqK1OWobCY",
      popular: true,
  },

//------------------------------------      المونتاج-----------------------------


//------------------------------------    🎨 تصميم واجهات وتجربة المستخدم (UI/UX)-----------------------------


{
      id: 1,
      title: "نماذج من اعمالنا",
      image: "/images/mon.jpg",
      category: "ui",
      icon: FaShip,
      link: "https://drive.google.com/drive/folders/1xAlYOPtNINoO7AwXjz0rvbKqK1OWobCY",
      popular: true,
  },

//------------------------------------  🎨 تصميم واجهات وتجربة المستخدم (UI/UX)  -----------------------------


//------------------------------------  🎨      تحسين نتائج البحث في جوجل (SEO)  -----------------------------
{
      id: 1,
      title: "نماذج من اعمالنا",
      image: "/images/mon.jpg",
      category: "seo",
      icon: FaShip,
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
      icon: FaCocktail,
      count: services.filter((s) => s.category === "celebration").length,
    },
    {
      id: "fishing",
      name: "موقع حجوزات",
      icon: FaFish,
      count: services.filter((s) => s.category === "fishing").length,
    },
      {
      id: "private",
      name: "البرمجة الخاصة",
      icon: FaUsers,
      count: services.filter((s) => s.category === "private").length,
    },
    {
      id: "sightseeing",
      name: "تطبيقات الهواتف",
      icon: FaUmbrellaBeach,
      count: services.filter((s) => s.category === "sightseeing").length,
    },
  
    {
      id: "corporate",
      name: "المتاجر الالكترونية",
      icon: FaCalendarAlt,
      count: services.filter((s) => s.category === "corporate").length,
    },
    {
      id: "wedding",
      name: "التسويق الإلكترونى",
      icon: FaStar,
      count: services.filter((s) => s.category === "wedding").length,
    },

      {
      id: "montag",
      name: " المونتاج وصناعة المحتوى المرئي",
      icon: FaStar,
      count: services.filter((s) => s.category === "montag").length,
    },
 {
      id: "ui",
      name: "  تصميم واجهات وتجربة المستخدم (UI/UX)",
      icon: FaUmbrellaBeach,
      count: services.filter((s) => s.category === "ui").length,
    },

     {
      id: "seo",
      name: "   تحسين نتائج البحث في جوجل (SEO)",
      icon: FaUmbrellaBeach,
      count: services.filter((s) => s.category === "seo").length,
    },

   
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="bg-[#151922] min-h-screen">
      
      {/* HERO SECTION */}
     <div dir="rtl" className="relative bg-cover bg-center bg-no-repeat">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/yachtphoto1.jpg')" }}
  />
  <div className="absolute inset-0 bg-black/60"></div>

  {/* المحتوى */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-36 md:py-52">
    <div className="max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] bg-clip-text text-transparent">
        أخر ما تم تصميمة
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        استعرض أحدث أعمالنا في تصميم وتطوير المواقع والتطبيقات، مع تقديم تصميم جذاب...
      </p>
    </div>
  </div>
</div>


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
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black font-bold shadow-2xl scale-105"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                <IconComponent className="text-xl" />
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
            return (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-9">
                    {service.title}
                  </h3>

                  <div className="flex gap-3">
                    <a href={service.link} target="_blank" className="flex-1">
                      <button className="w-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black font-semibold py-3 px-4 rounded-lg border border-white/30 hover:bg-gray-200 transition">
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
