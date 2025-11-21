"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaUserTie,
  FaCheckCircle,
  FaStar,
  FaUmbrellaBeach,
  FaSmile,
  FaBed,
  FaBinoculars,
  FaCouch,
  FaLifeRing,
  FaChartLine,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
  FaChair,
  FaLightbulb,
  FaHandshake,
  FaFolderOpen,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaEye,
  FaHeadset,
  FaCode,
  FaBullseye,
  FaPencilRuler,
  FaUsers,
  FaMobileAlt,
  FaBlender,
  FaWind,
} from "react-icons/fa";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [yearsExp, setYearsExp] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [luxuryVessels, setLuxuryVessels] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  const testimonialSliderRef = useRef(null);
  const yachtSliderRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // عدادات الأرقام
    const startCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let yearsStep = 0;
      const yearsInterval = setInterval(() => {
        yearsStep++;
        setYearsExp(Math.floor((15 / steps) * yearsStep));
        if (yearsStep >= steps) clearInterval(yearsInterval);
      }, stepDuration);

      let clientsStep = 0;
      const clientsInterval = setInterval(() => {
        clientsStep++;
        setHappyClients(Math.floor((10000 / steps) * clientsStep));
        if (clientsStep >= steps) clearInterval(clientsInterval);
      }, stepDuration);

      let vesselsStep = 0;
      const vesselsInterval = setInterval(() => {
        vesselsStep++;
        setLuxuryVessels(Math.floor((40 / steps) * vesselsStep));
        if (vesselsStep >= steps) clearInterval(vesselsInterval);
      }, stepDuration);

      let satisfactionStep = 0;
      const satisfactionInterval = setInterval(() => {
        satisfactionStep++;
        setSatisfactionRate(Math.floor((98 / steps) * satisfactionStep));
        if (satisfactionStep >= steps) clearInterval(satisfactionInterval);
      }, stepDuration);
    };

    // تشغيل العدادات عند التمرير
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    const countersSection = document.querySelector(".counters-section");
    if (countersSection) {
      observer.observe(countersSection);
    }

    // السلايدر التلقائي للتستيمونيال
    const testimonialInterval = setInterval(() => {
      if (testimonialSliderRef.current) {
        const slider = testimonialSliderRef.current;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const currentScroll = slider.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 5000);

    // السلايدر التلقائي لليخوت
    const yachtInterval = setInterval(() => {
      if (yachtSliderRef.current) {
        const slider = yachtSliderRef.current;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const currentScroll = slider.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 336, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(yachtInterval);
    };
  }, []);

  const slideTestimonials = (direction) => {
    if (testimonialSliderRef.current) {
      testimonialSliderRef.current.scrollBy({
        left: direction * 400,
        behavior: "smooth",
      });
    }
  };

  const slideYachts = (direction) => {
    if (yachtSliderRef.current) {
      const scrollAmount = 336; // 320 (عرض الكارد) + 16 (الجاب)
      yachtSliderRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#151922]">
      {/* قسم من نحن */}
      <section className="py-24 px-4 h-[60vh] sm:h-[70vh] md:h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/images/yachtvideo.mp4"
            loading="lazy"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="object-cover w-full h-full pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center pt-28 text-center">
            <div className="mb-12 animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                <span dir="rtl" className="block mb-6">من نحن</span>
                <span className="block">AZ-Technology</span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] mx-auto mt-6 rounded-full"></div>
              <p dir="rtl" className="text-xl sm:text-xl md:text-xl font-bold text-white mt-5 mb-4">
                نؤمن بأن الإبداع هو أساس النجاح، لذا نعمل على تقديم حلول رقمية مبتكرة تساعد الشركات على النمو والتميز في عالم متغير بسرعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم Sail Beyond Luxury */}
      <section className="py-8 px-4 relative overflow-hidden mt-5 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* المحتوى النصي */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 dir="rtl" className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-right mb-1">
                قصتنا وخبراتنا {" "}
              </h1>
            
              <div className="space-y-4 text-white leading-relaxed">
                <p dir="rtl" className="text-2xl sm:text-lg text-right">
                  أكثر من 5 اعوام من مساعدة الشركات للوصول إلى افاق جديدة على الانترنت
                </p>
                <div className="flex items-center gap-2 justify-start">
                  <div className="p-[3px] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] inline-flex">
                    <FaLightbulb className="text-base text-white" />
                  </div>
                  <p className="text-base sm:text-lg text-right">
                    نحن في AZ-Technology نؤمن أن النجاح الحقيقي يبدأ من فكرة تُنفّذ بإبداع وتتحقق بالتكنولوجيا
                  </p>
                </div>

                <div className="flex items-center gap-2 justify-start">
                  <div className="p-[3px] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] inline-flex">
                    <FaPalette className="text-base text-white" />
                  </div>
                  <p className="text-base sm:text-lg text-right">
                    من هذا المبدأ انطلقت رحلتنا لتقديم حلول رقمية متكاملة تساعد الشركات والمؤسسات على النمو، التطور، والتألق في عالم رقمي سريع التغيّر.
                  </p>
                </div>

                <div className="flex items-center gap-2 justify-start">
                  <div className="p-[3px] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] inline-flex">
                    <FaHandshake className="text-base text-white" />
                  </div>
                  <p className="text-base sm:text-lg text-right">
                    نحن لا نُقدّم مجرد خدمات، بل نبني شراكات طويلة الأمد مبنية على الثقة، الجودة، والنتائج الملموسة.
                  </p>
                </div>
              </div>

              {/* الأزرار */}
              <div className="flex justify-start items-center pt-4 gap-3">
                {/* زرار الاتصال */}
                <a href="tel:01004813709">
                  <button
                    className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] flex items-center gap-2 cursor-pointer border-2 border-white text-white hover:bg-white font-bold 
                               py-4 px-5 sm:py-4 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 min-w-[160px] sm:min-w-[200px]"
                  >
                    <FaPhoneAlt className="text-white" size={18} />
                    تواصل معنا
                  </button>
                </a>

                {/* زرار سابقة الأعمال */}
                <Link href="/services">
                  <button
                    className="bg-transparent cursor-pointer border-2 border-white hover:bg-white hover:text-[#7D1C99] font-bold 
                               py-4 px-5 sm:py-4 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 min-w-[160px] sm:min-w-[200px] text-white">
                    عرض سابقة الاعمال
                  </button>
                </Link>
              </div>
            </div>

            {/* الصورة */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src="/images/22.jpg"
                  alt="Luxury Yacht"
                  width={600}
                  height={500}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم Beyond Ordinary */}
      <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* خلفية هندسية متحركة */}
        <div className="absolute inset-0 opacity-10">
          {/* دوائر متحركة */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-cyan-400/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 border-2 border-purple-400/30 rounded-full animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 border-2 border-blue-400/30 rounded-full animate-pulse-slow delay-2000"></div>

          {/* خطوط متقاطعة */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-shimmer-horizontal"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-shimmer-horizontal delay-1000"></div>
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-shimmer-vertical"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-shimmer-vertical delay-500"></div>
          </div>

          {/* أشكال هندسية عشوائية */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${
                i % 3 === 0 ? "w-8 h-8" : i % 2 === 0 ? "w-12 h-3" : "w-6 h-6"
              } 
              border-2 ${
                i % 4 === 0
                  ? "border-cyan-400/20"
                  : i % 3 === 0
                  ? "border-purple-400/20"
                  : "border-blue-400/20"
              }
              ${
                i % 3 === 0
                  ? "rounded-full"
                  : i % 2 === 0
                  ? "rounded-lg"
                  : "rotate-45"
              }
              animate-float-random`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + i * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* العنوان مع تصميم مميز */}
          <div className="text-center mb-20">
            <div className="inline-block relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
              <h1 className="relative text-4xl md:text-6xl font-black text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-cyan-200 to-purple-200">
                  حلولنا التقنية تساعدك على
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-text-shine text-right">
                  تحقيق أداء أفضل
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-right">
              نُقدّم حلولاً تقنية ذكية مصممة خصيصًا لتطوير 
              <span className="text-cyan-300 font-semibold">
                {" "}
                كفاءة أعمالك، وتحسين الإنتاجية،
              </span>{" "}
              وتعزيز حضورك الرقمي
              <span className="text-purple-300 font-semibold">
                {" "}
                بخطوات مدروسة نحو النجاح.
              </span>
            </p>
          </div>

          {/* شبكة البطاقات المائلة */}
          <div dir="rtl" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "الابتكار الرقمي",
                description:
                  "نسعى لابتكار حلول تقنية متطورة تجمع بين الإبداع والتجربة الفريدة.",
                icon: "🚀",
                gradient: "from-cyan-500 to-blue-500",
                rotation: "-rotate-2",
              },
              {
                title: "الرفاهية المستدامة",
                description:
                  "نجمع بين الفخامة والمسؤولية لنقدم جودة تدوم مع الزمن.",
                icon: "🌿",
                gradient: "from-emerald-500 to-green-500",
                rotation: "rotate-1",
              },
              {
                title: "الحِرفية العالية",
                description: "نصنع التفاصيل بإتقان لتروي كل لمسة حكاية تميز.",
                icon: "✨",
                gradient: "from-purple-500 to-pink-500",
                rotation: "-rotate-1",
              },
              {
                title: "شبكة عالمية",
                description: "اتصالات واسعة وخبرة محلية تجعلنا أقرب إلى عملائنا في كل مكان.",
                icon: "🌍",
                gradient: "from-orange-500 to-red-500",
                rotation: "rotate-2",
              },
              {
                title: "تصميم خالد",
                description: "نمزج الأناقة الكلاسيكية برؤية عصرية تواكب المستقبل.",
                icon: "🎨",
                gradient: "from-blue-500 to-cyan-500",
                rotation: "-rotate-3",
              },
              {
                title: "مجتمع النخبة",
                description: "انضم إلى عالم من القادة والمبدعين الذين يصنعون الفرق.",
                icon: "👑",
                gradient: "from-purple-500 to-indigo-500",
                rotation: "rotate-1",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`group relative ${card.rotation} hover:rotate-0 transition-all duration-700 hover:scale-105`}
              >
                {/* تأثير الخلفية */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${card.gradient} rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>

                {/* البطاقة الرئيسية */}
                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-600/50 p-8 h-full group-hover:border-slate-400/50 transition-all duration-500">
                  {/* الأيقونة */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                  >
                    <span className="text-2xl">{card.icon}</span>
                  </div>

                  {/* المحتوى */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* خط تفصيلي */}
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${card.gradient} rounded-full mt-6 transform group-hover:scale-x-150 transition-transform duration-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* قسم الـ CTA المختلف */}
          <div className="text-center ">
            <div className="relative inline-block">
              {/* تأثير الخلفية */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse-gentle"></div>

              {/* المحتوى */}
              <div dir="rtl" className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-600/50 p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  هل أنت {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    مستعد
                  </span>{" "}
                  للبدء ؟
                </h2>
                <p dir="rtl" className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  انضم إلى نخبة من رواد الأعمال والمبتكرين الذين يتطلعون لتجاوز المألوف.
                </p>

                <a
                  href="https://wa.me/201128465022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="group relative bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-500 transform hover:scale-105 border border-slate-500/50 hover:border-slate-400/50">
                    <span className="relative z-10 flex items-center gap-3">
                      <span>ابدأ رحلتك الآن</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* الأنيميشن المخصصة */}
        <style jsx>{`
          @keyframes text-shine {
            0%,
            100% {
              background-position: 0% 50%;
              filter: brightness(1);
            }
            50% {
              background-position: 100% 50%;
              filter: brightness(1.2);
            }
          }

          @keyframes float-random {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg) scale(1);
            }
            25% {
              transform: translateY(-20px) rotate(90deg) scale(1.1);
            }
            50% {
              transform: translateY(10px) rotate(180deg) scale(0.9);
            }
            75% {
              transform: translateY(-10px) rotate(270deg) scale(1.05);
            }
          }

          @keyframes shimmer-horizontal {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes shimmer-vertical {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }

          @keyframes pulse-gentle {
            0%,
            100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
          }

          .animate-text-shine {
            background-size: 200% auto;
            animation: text-shine 3s ease-in-out infinite;
          }

          .animate-float-random {
            animation: float-random 20s ease-in-out infinite;
          }

          .animate-shimmer-horizontal {
            animation: shimmer-horizontal 8s ease-in-out infinite;
          }

          .animate-shimmer-vertical {
            animation: shimmer-vertical 6s ease-in-out infinite;
          }

          .animate-pulse-gentle {
            animation: pulse-gentle 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* قسم Elite Experience */}
      <section className="relative py-20 px-4 overflow-hidden ">
        {/* خلفية متقدمة مع تأثيرات */}
        <div className="absolute inset-0">
          {/* تدرج متحرك */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
          </div>

          {/* شبكة متحركة */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>

          {/* جسيمات متحركة */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* العنوان الرئيسي مع تأثير مميز */}
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h1 className="relative text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-right mb-1">
                  حيث يتحول الإبداع إلى واقع
                </span>
              </h1>
            </div>
            <p dir="rtl" className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              حيث يلتقي <span className="text-from-purple-400 to-pink-400 font-bold">الإبداع بالحلول الرقمية،</span>{" "}
              لتصبح كل تجربة مشروعًا فريدًا لا يُنسى.
            </p>

            {/* شريط إحصائيات متحرك بإطار زجاجي */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  number: "5+",
                  label: "سنوات خبرة",
                  color: "from-emerald-400 to-cyan-400",
                  gradient: "bg-gradient-to-br from-emerald-500 to-cyan-500",
                  icon: <FaUserTie className="text-xl" />,
                },
                {
                  number: "200+",
                  label: "المشروعات المنجزة",
                  color: "from-purple-400 to-pink-400",
                  gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
                  icon: <FaCheckCircle className="text-xl" />,
                },
                {
                  number: "98%",
                  label: "رضا العملاء",
                  color: "from-orange-400 to-red-400",
                  gradient: "bg-gradient-to-br from-orange-500 to-red-500",
                  icon: <FaSmile className="text-xl" />,
                },
                {
                  number: "24/7",
                  label: "دعم مثالى",
                  color: "from-blue-400 to-indigo-400",
                  gradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
                  icon: <FaLifeRing className="text-xl" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group perspective-1000 transform-style-preserve-3d"
                >
                  <div className="relative transform transition-all duration-700 group-hover:rotate-x-12 group-hover:-translate-y-4">
                    {/* تأثير الإضاءة الخلفية */}
                    <div className={`absolute inset-0 ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                    
                    {/* البطاقة الزجاجية */}
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-2xl shadow-black/20 group-hover:shadow-cyan-500/10 group-hover:border-white/20 transition-all duration-500">
                      
                      {/* دائرة الأيقونة */}
                      <div className="relative inline-flex mb-4">
                        <div className={`absolute inset-0 ${stat.gradient} rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                        <div className="relative bg-slate-900/80 rounded-full p-3 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                          <span className="text-xl text-white">{stat.icon}</span>
                        </div>
                      </div>
                      
                      {/* الرقم مع تأثير توهج */}
                      <div className="relative mb-2">
                        <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          {stat.number}
                        </div>
                        {/* تأثير توهج خفيف */}
                        <div className={`absolute inset-0 ${stat.gradient} blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                      </div>
                      
                      {/* التسمية */}
                      <div className="text-blue-100 font-medium text-sm uppercase tracking-widest group-hover:text-white transition-colors duration-300 relative">
                        {stat.label}
                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${stat.gradient} group-hover:w-12 transition-all duration-500 rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* محتوى رئيسي مع تأثيرات 3D */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* نص مع تأثيرات */}
            <div className="space-y-8">
              <div className="group">
                <div dir="rtl" className="flex items-center gap-4 mb-6">
                  <div dir="rtl" className="w-3 h-12 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full transform group-hover:scale-y-150 transition-all duration-500"></div>
                  <h2 dir="rtl" className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-right mb-1">
                    نحو مستقبل{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-right">
                      رقمي متميز
                    </span>
                  </h2>
                </div>
                <p dir="rtl" className="text-lg text-blue-100 leading-relaxed">
                  نقدم حلولًا مبتكرة تجمع بين الإبداع والتقنية لتطوير أعمالك وتحقيق أهدافك بكفاءة واحترافية.
                </p>
              </div>

              {/* ميزات مع أيقونات متحركة */}
              <div dir="rtl" className="space-y-4">
                {[
                  {
                    icon: <FaBullseye className="text-xl" />,
                    title: "مهمتنا",
                    desc: "مهمتنا هي تقديم حلول مبتكرة في تكنولوجيا المعلومات تدعم نمو الأعمال، وتعزز الكفاءة، وتحوّل الأفكار إلى إنجازات ملموسة",
                  },
                  {
                    icon: <FaBinoculars className="text-xl" />,
                    title: "رؤيتنا",
                    desc: "رؤيتنا هي قيادة مستقبل الأعمال من خلال حلول تقنية مبتكرة تدعم التطور وتحقق النجاح المستدام.",
                  },
                  {
                    icon: <FaChartLine className="text-xl" />,
                    title: "نتائجنا",
                    desc: "نتائجنا تعكس التزامنا بالجودة، حيث نقدّم حلولًا تقنية ترفع الكفاءة وتحقق نجاحًا ملموسًا لعملائنا",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1"
                  >
                    <div className="relative bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full p-3 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                      <span className="text-xl text-white">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-blue-200 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* بطاقة الصورة مع تأثيرات 3D */}
            <div className="relative">
              <div className="relative group">
                {/* تأثير خلف البطاقة */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700"></div>

                {/* البطاقة الرئيسية */}
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
                  {/* الفيديو */}
                  <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl mb-6">
                    <video
                      src="/images/yachtvideo.mp4"
                      autoPlay
                      loop
                      muted
                      loading="lazy"
                      playsInline
                      preload="metadata"
                      className="object-cover w-full h-full pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* أزرار Call to Action متطورة */}
          <div className="flex items-center justify-center  ">
            <div
              className="bg-[#0f1218] text-center relative h-[50vh] w-full max-w-4xl bg-cover bg-center bg-no-repeat"
            >
              {/* Overlay غامق فوق الصورة */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* المحتوى */}
              <div className="relative z-10 bg-black/0 rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  مستعد لبدء مشروعك الرقمي؟
                </h3>
                <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                  دعنا نناقش فكرتك ونحولها إلى واقع ملموس يدفع عملك نحو النجاح
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/services">
                    <button className="bg-gradient-to-r flex items-center gap-2 from-[#00FFFF] to-[#FF00FF] text-white  px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] transform hover:-translate-y-1 min-w-[200px]">
                      <FaFolderOpen className="text-white" size={20} />
                      شاهد أعمالنا
                    </button>
                  </Link>

                  <a href="tel:01004813709">
                    <button className=" border-2 flex items-center gap-2 border-white  text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] transform hover:-translate-y-1 min-w-[200px] hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]">
                      <FaPhoneAlt className="text-white" size={20} />
                      تحدث مع خبير
                    </button>
                  </a>
                </div>

                <p className="text-white text-sm mt-6">
                  استشارة مجانية • خطة عمل مفصلة • أسعار تنافسية • دعم مستمر
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* الأنيميشن المخصصة */}
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* قسم السلايدر الاحترافي */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* العنوان */}
          <div dir="rtl" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              <span className="block   bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFOOFF] bg-clip-text text-transparent animate-gradient-x pb-1">
                قصص نجاح مع عملائنا
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              "استمع إلى تجارب عملائنا الذين اختبروا حلولنا الرقمية المبتكرة، واكتشف كيف ساعدناهم على تحقيق أهدافهم بنجاح."
            </p>
          </div>

          {/* السلايدر */}
          <div className="relative">
            {/* أزرار التنقل */}
            <div className="flex justify-end gap-4 mb-8">
              <button
                onClick={() => slideYachts(-1)}
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => slideYachts(1)}
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* حاوية السلايدر */}
            <div
              ref={yachtSliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* كروت اليخوت */}
              {[
                {
                  id: 1,
                  image: "/images/t1.jpg",
                  rating: 5.0,
                },
                {
                  id: 2,
                  image: "/images/t2.jpeg",
                  rating: 4.9,
                },
                {
                  id: 3,
                  image: "/images/yachtphoto3.jpg",
                  rating: 4.8,
                },
                {
                  id: 4,
                  image: "/images/yachtphoto4.jpg",
                  rating: 5.0,
                },
                {
                  id: 5,
                  image: "/images/yachtphoto5.jpg",
                  rating: 4.7,
                },
                {
                  id: 6,
                  image: "/images/yachtphoto1.jpg",
                  rating: 4.9,
                },
              ].map((yacht, index) => (
                <div
                  key={yacht.id}
                  className="flex-none w-80 snap-center group"
                >
                  {/* الكارد */}
                  <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2 h-full">
                    {/* الصورة */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={yacht.image}
                        alt={`Yacht ${yacht.id}`}
                        width={320}
                        height={192}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230ea5e9;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%238b5cf6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='white'%3ELuxury Yacht%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      {/* طبقة تدرج فوق الصورة */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                      {/* التقييم */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">⭐</span>
                          <span className="text-white text-sm font-bold">
                            {yacht.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* تأثير الـ Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* زر عرض المزيد */}
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="group relative cursor-pointer border-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] font-bold py-4 px-12 text-white rounded-full text-lg transition-all duration-500 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  عرض سابقة الاعمال
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* الأنيميشن المخصصة */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </div>
  );
}

<style jsx>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
  }
`}</style>;