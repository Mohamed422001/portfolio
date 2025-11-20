"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/yachtvideo.mp4",
    title: "برمجة بتقنيات حديثة.. وتسويق بنتائج ملموسة",
    description: "نربط بين الإبداع البرمجي والاستراتيجيات التسويقية لنوصل علامتك التجارية إلى جمهورك المستهدف بأفضل شكل.",
    button: "احجز الان",
  },
  {
    image: "/images/2.jpg",
    title: "حلول رقمية تُحرك أعمالك نحو النمو",
    description: "من تصميم المواقع والمتاجر إلى إدارة الحملات التسويقية، نساعدك على تحقيق أهدافك وزيادة مبيعاتك بذكاء.",
    button: "احجز الان",
  },
  {
    image: "/images/3.jpg",
    title: "شريكك التقني نحو التميز",
    description: "نقدّم خدمات متكاملة من تطوير البرمجيات، تصميم الواجهات، وتحسين محركات البحث، لنكون شريكك في النجاح الرقمي.",
    button: "احجز الان",
  },
  {
    image: "/images/7.jpg",
    title: "موقعك – تطبيقك – نجاحك بين يديك",
    description: "نصمم مواقع احترافية وتطبيقات ذكية تدعم هوية شركتك وتُحقق لك أقصى أداء وتسويق رقمي فعّال.",
    button: "احجز الان",
  },
  {
    image: "/images/6.jpg",
    title: "ابتكار رقمي يدفع أعمالك للأمام",
    description: "نصنع تجارب رقمية متكاملة من تصميم مواقع وتطبيقات إلى استراتيجيات تسويقية مبتكرة، لنساعد شركتك على التميز والنمو في السوق الرقمي.",
    button: "احجز الان",
  },
  {
    image: "/images/so3.jpeg",
    title: " نصنع المستقبل بالحلول الرقمية",
    description: "نبتكر حلولاً رقمية مبتكرة تدفع أعمالك للأمام.",
    button: "احجز الان",
  },
];

export default function SliderHome() {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  const phoneNumber = "201095435168";
  const whatsappMessage = "Hello, I would like to book a yacht!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-screen">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
        simulateTouch={true}
        allowTouchMove={true}
        shortSwipes={true}
        longSwipes={true}
        followFinger={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[70vh] md:h-full">
              {/* خلفية: صورة أو فيديو */}
              {slide.image.endsWith(".mp4") ? (
                <video
                  loading="lazy"
                  src={slide.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full pointer-events-none"
                />
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  fill
                  className="object-cover pointer-events-none"
                />
              )}

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* المحتوى - تم تعديل المحاذاة */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 pointer-events-none">
                <div className="max-w-2xl mx-auto pointer-events-auto flex flex-col items-center justify-center h-full">
                  <h2 dir="rtl" className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 px-4">
                    {slide.title}
                  </h2>
                  <p dir="rtl" className="text-base md:text-lg lg:text-xl mb-6 px-4 max-w-xl mx-auto">
                    {slide.description}
                  </p>
                  <a
                    href="https://wa.me/201128465022"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:animate-gradient-x cursor-pointer transition-all duration-500 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                      {slide.button}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل - تم تعديل المواقع */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-10 pointer-events-none">
        <button className="custom-prev bg-white/10 hover:bg-white cursor-pointer p-2 md:p-3 lg:p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2">
          <FaArrowLeft className="text-base md:text-lg lg:text-xl" />
        </button>
        <button className="custom-next bg-white/10 hover:bg-white cursor-pointer p-2 md:p-3 lg:p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2">
          <FaArrowRight className="text-base md:text-lg lg:text-xl" />
        </button>
      </div>
    </section>
  );
}