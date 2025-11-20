"use client";
import Image from "next/image";
import SliderHome from "./_components/sliderHome/page";
import {
  FaAnchor,
  FaWater,
  FaStar,
  FaUmbrellaBeach,
  FaCocktail,
  FaFish,
  FaSnowflake,
  FaBed,
  FaToilet,
  FaCouch,
  FaUtensils,
  FaSun,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
  FaChair,
  FaLightbulb,
   FaHandshake ,
  FaBrain,
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
import { TbToolsKitchen2 } from "react-icons/tb";
import { MdTableBar } from "react-icons/md";
import Reviews from "./_components/reviews/reviews";
import Stats from "./_components/stats/page";
import PeopleAlsoAsk from "./_components/ask/page";
import Link from "next/link";

export default function Home() {
  const phoneNumber = "201128465022";
  const whatsappMessage = "Hello, I would like to book with you!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const yachts = [
    {
      id: 1,
      name:  "   تصميم المواقع الإلكترونية  ",
      price: "نصمم مواقع احترافية بتجربة فريدة وأداء سريع.",
      image: "/images/w.jpg",
    },
    {
      id: 2,
      name: "    خدمات التسويق المتكامل 360° ",
      price: "نوصلك لجمهورك وتضاعف مبيعاتك بذكاء.",
      image: "/images/360.jpeg",
    },
   
    {
      id: 3,
      name: " تطبيقات الهواتف",
      price: "نحول أفكارك لتطبيق يسهّل الوصول لعملائك.",
      image: "/images/mob.jpeg",
    },
    {
      id: 4,
      name: " تحسين نتائج البحث في جوجل (SEO)",
      price: "نرفع ظهورك في جوجل ونزيد زياراتك.",
      image: "/images/seo.jpeg",
    },
    {
      id: 5,
      name: " تصميم واجهات وتجربة المستخدم (UI/UX)",
      price: "نبتكر تصاميم عصرية وسهلة الاستخدام.",
      image: "/images/ui.jpeg",
    },
     {
      id: 6,
      name: " محتوى يحقق أهدافك",
      price: "استضافة موثوقة وربط دومين احترافي",
      image: "/images/cont.avif",
    },
    {
      id: 7,
      name: " المونتاج وصناعة المحتوى المرئي",
      price: "نحوّل أفكارك إلى فيديوهات احترافية تجذب وتؤثر.",
      image: "/images/v.jpg",
    },
    {
      id: 8,
      name: " خطتك الإعلامية باحتراف",
      price: "خطة إعلامية ذكية لتحقيق أفضل نتائج لمشروعك",
      image: "/images/plan.jpeg",
    },
     {
      id: 9,
      name: " خطة إعلانات فعّالة",
      price: "خطة إعلانية ذكية تزيد من وصولك وتجذب عملائك بسرعة",
      image: "/images/ads.jpeg",
    },
   
   
  ];

  const leftFeatures = [
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: " الأمان و النسخ الاحتياطى",
      description:
        "من اهم مباديء التصميم هى الامان و تشفير الاتصال من خلال تركيب شهادة الامان للموقع كما اننا نقدم نسخ احتياطية و تحديثات أمنية وبرمجية بشكل مستمر and well-maintained yachts for the ultimate sea experience",
    },
    {
      icon: <FaCode className="text-xl" />,
      title: "مبرمجين محترفين  ",
      description:
        "يدير عملك فريق متكامل من مبرمجين و مصممين و كتاب محتوى و مسوقين عبر السوشيال ميدياً لتركز فقط فى عملك.",
    },
    {
      icon: <FaBullseye className="text-xl" />,
      title: "تسويق يحقق النتائج",
      description:
        "نضع استراتيجيات تسويقية ذكية تزيد ظهورك وتجذب عملاءك المستهدفين بثقة.",
    },
  ];

  const rightFeatures = [
    {
      icon: <FaPencilRuler className="text-xl" />,
      title: "تصميم واجهات وتجربة المستخدم",
      description:
        "نبتكر تصاميم عصرية وسهلة الاستخدام تضمن تجربة سلسة وجذابة، تجمع بين الإبداع والوظائف العملية لتلبي احتياجات المستخدمين.",
    },
    {
      icon: <FaUsers className="text-xl" />,
      title: "فريق عمل متكامل",
      description:
        "يدير عملك فريق متكامل من مبرمجين و مصممين و كتاب محتوى و مسوقين عبر السوشيال ميدياً لتركز فقط فى عملك.",
    },
    {
      icon: <FaMobileAlt className="text-xl" />,
      title: "تصميمات صديقة للموبايل",
      description:
        "الجيل الحالى هو جيل الهواتف و اوضحت الاحصائيات ان 90% من التصفح من خلال الموبايل ! لا تقلق نقوم بعمل تصميم مخصص كاملاً للعمل علي الموبايل.",
    },
  ];

  const features = [
    { icon: FaLightbulb, text: "حلول ذكية.. نتائج مضمونة" },
    { icon: FaRocket, text: "نبتكر المستقبل" },
    { icon: FaBrain, text: "حلول مبتكرة تصنع الفرق" },
    { icon: FaHandshake, text: "نجاحكم هو مهمتنا" },

    { icon: FaBed, text: "نحو مستقبل مبتكر" },
    { icon: FaChair, text: "حلول تصنع الفرق" },
    { icon: FaToilet, text: "ابتكار بلا حدود" },
    { icon: MdTableBar, text: "ذكاء في كل خطوة" },
    { icon: FaCouch, text: "الأفكار تتحول إلى نجاح" },
    { icon: FaSun, text: "ابتكر، نفذ، تفوق" },
    { icon: FaUtensils, text: "التكنولوجيا لخدمتكم" },
    { icon: FaSun, text: "أفكار تتحول إلى واقع" },
    { icon: TbToolsKitchen2, text: "حلول ذكية لمستقبل أفضل" },
    { icon: FaCouch, text: "نبتكر اليوم، لنغير الغد" },
  
  ];

  return (
    <main className="bg-[#151922]">
      <SliderHome />


       {/* قسم About Us */}
      <section  className="px-4 py-8 lg:py-30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
             {/* المحتوى */}
            <div className="w-full lg:w-1/2 text-left" dir="rtl">
              <div className="space-y-6 animate-fadeInUp">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
<span
  dir="rtl"
  className="block text-right text-4xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFOOFF] bg-clip-text text-transparent animate-gradient-x pb-1">
  من نحن
</span>



                   <span dir="rtl" className="text-white block text-right  pt-5">
                     قصتنا وخبراتنا
                  </span>
                </h2>

                <div className="space-y-4 text-white leading-relaxed">
                   <p dir="rtl" className="text-base sm:text-lg text-right">
في AZ-Technology نصنع حلولًا رقمية مبتكرة تساعد الشركات على النمو وبناء حضور قوي في العالم الرقمي، من خلال تجربة تجمع بين الإبداع والتقنية.                       </p>

  <div className="flex items-center gap-2 justify-start">
  <div className="p-[3px] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] inline-flex">
    <FaLightbulb className="text-base text-white" />
  </div>

  <p className="text-base sm:text-lg text-right">
    حلول رقمية مبتكرة تدعم نمو الشركات وتحقق حضور قوي في السوق.
  </p>
  </div>

    <div className="flex items-center gap-2 justify-start">
  <div className="p-[3px] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] inline-flex">
    <FaPalette className="text-base text-white" />
  </div>

  <p className="text-base sm:text-lg text-right">
تصميم وتطوير يجمع الإبداع والسرعة وتجربة استخدام مميزة.  </p>
    </div>

<div className="flex items-center gap-2 justify-start">
  <div className="p-[3px] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] inline-flex">
    <FaHandshake className="text-base text-white" />
  </div>

  <p className="text-base sm:text-lg text-right">
     شراكة تقنية مستمرة لضمان التطوير والتحسين ودعمك في كل مرحلة
  </p>
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
              </div>
            </div>

             {/* الصورة */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <img
                  src="/images/p1(3).jpg"
                  loading="lazy"
                  alt="Elite Pearl Yacht"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20 mix-blend-overlay"></div>
              </div>
            </div>
           
           
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}

      {/* Yachts Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
  <h2 className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-center mb-15">
    خدماتنا المتميزة
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
    {yachts.map((yacht, index) => (
      <div
        key={yacht.id}
        className="relative transition-all duration-300 h-full group"
      >
        {/* Main Card Container */}
        <div className="bg-[#0f1218] text-white rounded-2xl shadow-2xl overflow-hidden border border-gray-600/30 hover:border-from-[#00FFFF] to-[#FF00FF] transition-all duration-300 h-full flex flex-col min-h-[550px]">
          {/* Image Section with Hover Effect */}
          <div className="h-48 w-full overflow-hidden relative mb-16">
            <Image
              loading="lazy"
              src={yacht.image}
              alt={yacht.name}
              width={400}
              height={192}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </div>

          {/* Content Card */}
          <div className="relative -top-12 mx-4 flex-1 flex flex-col cursor-pointer">
            <div className="bg-[#0f1218] rounded-xl shadow-lg p-6 flex-1 flex flex-col ">
              {/* Title */}
              <h2 className="block text-3xl bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-2 text-center mb-4">
                {yacht.name}
              </h2>

              {/* Price Section */}
              <div className="flex justify-center items-baseline gap-3 mb-6 text-center" dir="rtl">
                <span className="text-gray-400 line-through text-sm">
                  {yacht.oldPrice}
                </span>
                <span className="text-xl text-white" dir="rtl">
                  {yacht.price}
                </span>
              </div>

              {/* Description (يمكن إضافته إذا كان موجوداً) */}
              {yacht.description && (
                <p className="text-gray-300 text-center mb-6 flex-1">
                  {yacht.description}
                </p>
              )}

              {/* Buttons Container - عمودي */}
              <div className="space-y-3 mt-auto">
                {/* زر عرض المزيد */}
                <Link href="/services" className="block">
                  <button className="w-full py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 text-lg rounded-lg border border-gray-300 cursor-pointer">
                  عرض سابقة الاعمال
                  </button>
                </Link>

                {/* زر تواصل معنا */}
                <a
                  href="https://wa.me/201128465022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button  className="w-full py-3 cursor-pointer bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:animate-gradient-x transition-all duration-500 font-semibold text-white text-lg shadow-lg hover:shadow-xl transform hover:scale-105 rounded-lg">
                    تواصل معنا
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


{/*  🌐 خدمات استضافة ودومينات*/}
<section className="py-5  from-blue-50 to-cyan-100 mb-3">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-center mb-1">  خدمات استضافة ودومينات</h2>
      <div className="w-24 h-1 
       mx-auto mb-6"></div>
      <p className="text-white text-lg max-w-2xl mx-auto">
        نقدم حلول متكاملة لاستضافة الويب وإدارة النطاقات بأعلى معايير الجودة
      </p>
    </div>

    <div className="bg-[#0f1218] rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-200">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          خدمات استضافة ودومينات
        </h3>
        <p className="text-white">
          استضافة موثوقة وربط دومين احترافي مع دعم فني متخصص
        </p>
      </div>

      {/* المميزات السريعة */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
  {[
    { icon: <FaRocket className="text-xl text-white" />, text: "سرعة فائقة" },
    { icon: <FaShieldAlt className="text-xl text-white" />, text: "أمان متقدم" },
    { icon: <FaEye className="text-xl text-white" />, text: "مراقبة مستمرة" },
    { icon: <FaHeadset className="text-xl text-white" />, text: "دعم فني 24/7" }
  ].map((item, index) => (
    <div key={index} className="text-center p-3 bg-white/5 rounded-lg border  md:border-white/50">
      <div className=" p-[10px] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] inline-flex justify-center items-center">
        {item.icon}
      </div>
      <div className="text-sm text-white font-medium pt-2">{item.text}</div>
    </div>
  ))}
</div>

      {/* الأزرار */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="tel:01004813709" className="w-full sm:w-auto">
    <button className="w-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      تواصل معنا
    </button>
  </a>

  <a href="/host" className="w-full sm:w-auto">
    <button className="w-full border-2 border-white text-white hover:bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:text-blue font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      عرض المزيد
    </button>
  </a>
</div>
    </div>

  </div>
</section>

      {/* Stats Section */}
      <Stats />

      {/* Why Choose Our Yachts Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* العنوان الرئيسي */}
        <div className="text-center">
          <h2 className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-center mb-1">
 ماذا نقدم لك ؟
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            نحوّل أفكارك إلى إنجازات ملموسة

          </p>
        </div>

        {/* محتوى الميزات مع الصورة في المنتصف */}
        <div dir="rtl" className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* الميزات اليسرى */}
          <div className="lg:w-2/5">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0f1218] border border-[#f68b1e]/30 md:border-gray-800 p-6 rounded-xl shadow-lg mb-6 flex items-start transition-all duration-300 hover:shadow-xl hover:border-[#f68b1e]/30"
              >
                <div className="text-white mr-4 p-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full ml-2">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* الصورة في المنتصف */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-full max-w-md h-80 overflow-hidden rounded-2xl border-2 ">
              {/* <Image
                src="/images/yachtphoto2.jpg"
                alt="Luxury Yacht Experience"
                fill
                className="object-cover"
              /> */}
            <div className="relative w-full max-w-md h-80 overflow-hidden rounded-2xl p-1 gradient-border">
               <Image
                  src="/images/P1(3).jpg"
                  alt="Luxury Yacht Experience"
                   width={400}
                    height={320}
                    className="object-cover rounded-2xl w-full h-full"
                    loading="lazy"
                   />
                 </div>


              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">AZ-Technology</h3>
                  <p className="text-gray-200">نبتكر حلولاً رقمية بروح من الإبداع والشغف، لنساعد الشركات على المضي قدماً بثقة.</p>
                </div>
              </div>
            </div>
          </div>

          {/* الميزات اليمنى */}
          <div className="lg:w-2/5">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0f1218] border border-[#f68b1e]/30 md:border-gray-800 p-6 rounded-xl shadow-lg mb-6 flex items-start transition-all duration-300 hover:shadow-xl hover:border-[#f68b1e]/30"
              >
                <div className="text-white mr-4 p-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full ml-2">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    <div className="container mx-auto px-4 py-2">
 

  {/* منهجية العمل */}
  <div className="flex justify-center">
  <div className="bg-white/5 rounded-3xl p-8 md:p-12 
   border border-white/10 backdrop-blur-sm mb-16">
    <div className="text-center mb-12">
      <h2 className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-center mb-1">
        كيف نعمل؟
      </h2>
      <p className="text-gray-300 text-lg">نهج منهجي يضمن تحقيق أفضل النتائج</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
      {/* خط التوصيل */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] transform -translate-y-1/2 z-0 mt-3"></div>

      {/* الخطوات */}
      <div className="relative z-10 text-center group ">
        <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg ">
          1
        </div>
        <h3 className="text-white font-bold mb-2 pt-5">التحليل والتخطيط</h3>
        <p className="text-gray-300 text-sm">نفهم احتياجاتك بدقة ونضع خطة عمل شاملة</p>
      </div>

      <div className="relative z-10 text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg">
          2
        </div>
        <h3 className="text-white font-bold mb-2 pt-5">التصميم والإبداع</h3>
        <p className="text-gray-300 text-sm">نصمم واجهات جذابة وتجربة مستخدم فريدة</p>
      </div>

      <div className="relative z-10 text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg">
          3
        </div>
        <h3 className="text-white font-bold mb-2 pt-5">التطوير والبرمجة</h3>
        <p className="text-gray-300 text-sm">نبني الحل بتقنيات حديثة وأفضل الممارسات</p>
      </div>

      <div className="relative z-10 text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg">
          4
        </div>
        <h3 className="text-white font-bold mb-2 pt-5">التسليم والدعم</h3>
        <p className="text-gray-300 text-sm">نسلم المشروع وندعمه لضمان استمراريته</p>
      </div>
    </div>
  </div>
</div>


  {/* دعوة للعمل */}
<div className="flex items-center justify-center  ">
  <div
    className="text-center relative h-[50vh] w-full max-w-4xl bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/so1.jpeg')"
    }}
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
        <a href="tel:01004813709">
          <button className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]">
            تحدث مع خبير
          </button>
        </a>

        <Link href="/services">
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] transform hover:-translate-y-1 min-w-[200px]">
            شاهد أعمالنا
          </button>
        </Link>
      </div>

      <p className="text-white text-sm mt-6">
        استشارة مجانية • خطة عمل مفصلة • أسعار تنافسية • دعم مستمر
      </p>
    </div>
  </div>
</div>



</div>

      <PeopleAlsoAsk />

      <Reviews />

      
    </main>
  );
}
