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
  FaChair,
  FaLightbulb,
   FaHandshake ,
  FaBrain,
  FaRocket,
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
      name: "💻 تصميم المواقع الإلكترونية",
      price: "نصمم مواقع احترافية بتجربة فريدة وأداء سريع.",
      image: "/images/w.jpg",
    },
    {
      id: 2,
      name: "📱 تطبيقات الهواتف",
      price: "نحول أفكارك لتطبيق يسهّل الوصول لعملائك.",
      image: "/images/m.jpg",
    },
    {
      id: 3,
      name: "🚀 تحسين نتائج البحث في جوجل (SEO)",
      price: "نرفع ظهورك في جوجل ونزيد زياراتك.",
      image: "/images/s.jpg",
    },
    {
      id: 4,
      name: "🎨 تصميم واجهات وتجربة المستخدم (UI/UX)",
      price: "نبتكر تصاميم عصرية وسهلة الاستخدام.",
      image: "/images/u.jpg",
    },
    {
      id: 5,
      name: "📢 التسويق الإلكتروني الشامل (Digital Marketing)",
      price: "نوصلك لجمهورك وتضاعف مبيعاتك بذكاء.",
      image: "/images/mr.jpg",
    },
    {
      id: 6,
      name: "🎬 المونتاج وصناعة المحتوى المرئي",
      price: "نحوّل أفكارك إلى فيديوهات احترافية تجذب وتؤثر.",
      image: "/images/v.jpg",
    },
   
  ];

  const leftFeatures = [
    {
      icon: <FaAnchor className="text-xl" />,
      title: " الأمان و النسخ الاحتياطى",
      description:
        "من اهم مباديء التصميم هى الامان و تشفير الاتصال من خلال تركيب شهادة الامان للموقع كما اننا نقدم نسخ احتياطية و تحديثات أمنية وبرمجية بشكل مستمر and well-maintained yachts for the ultimate sea experience",
    },
    {
      icon: <FaWater className="text-xl" />,
      title: "مبرمجين محترفين",
      description:
        "يدير عملك فريق متكامل من مبرمجين و مصممين و كتاب محتوى و مسوقين عبر السوشيال ميدياً لتركز فقط فى عملك.",
    },
    {
      icon: <FaStar className="text-xl" />,
      title: "تسويق يحقق النتائج",
      description:
        "نضع استراتيجيات تسويقية ذكية تزيد ظهورك وتجذب عملاءك المستهدفين بثقة.",
    },
  ];

  const rightFeatures = [
    {
      icon: <FaUmbrellaBeach className="text-xl" />,
      title: "تصميم واجهات وتجربة المستخدم",
      description:
        "نبتكر تصاميم عصرية وسهلة الاستخدام تضمن تجربة سلسة وجذابة، تجمع بين الإبداع والوظائف العملية لتلبي احتياجات المستخدمين.",
    },
    {
      icon: <FaCocktail className="text-xl" />,
      title: "فريق عمل متكامل",
      description:
        "يدير عملك فريق متكامل من مبرمجين و مصممين و كتاب محتوى و مسوقين عبر السوشيال ميدياً لتركز فقط فى عملك.",
    },
    {
      icon: <FaFish className="text-xl" />,
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
                 في AZ-Technology نؤمن أن المستقبل يصنعه الابتكار، لذلك نكرّس شغفنا وخبراتنا لتقديم حلول رقمية متكاملة تساعد الشركات على النمو بثقة. نحن شركة متخصصة في تطوير المواقع والتطبيقات والمنصات التعليمية والمتاجر الإلكترونية، بالإضافة إلى تقديم خدمات التسويق الرقمي التي تعزز الظهور وتجذب العملاء. نعمل بروح من الإبداع والالتزام لتقديم تجربة رقمية مميزة تجمع بين الجمال والوظيفة، هدفنا أن نكون شريكك التقني في رحلتك نحو النجاح والتميز في العالم الرقمي.
                  </p>

                  <p className="text-base sm:text-lg text-right">
                   نصنع الفارق من خلال الجمع بين الإبداع والتقنية، ونساعد عملاءنا على النمو وبناء حضور قوي في العالم الرقمي عبر حلول متكاملة مصممة خصيصًا لتناسب احتياجاتهم.

                  </p>
                  <div className="text-right pt-2">
                     <Link href="/contact">
                        <button className="bg-transparent cursor-pointer border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 ">
                           تواصل معنا
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
                  src="/images/p1 (3).jpg"
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
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-white mb-16">
          خدماتنا المتميزة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {yachts.map((yacht, index) => (
            <div
              key={yacht.id}
              className={`relative bg-transparent transition-all duration-300 ${
                index % 3 === 1 ? "-mt-8" : "mt-0"
              }`}
            >
              {/* Main Card Container */}
              <div className="bg-[#0f1218] text-white rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                {/* Image with Large Bottom Space */}
                <div className="h-48 w-full overflow-hidden relative mb-16">
                  <Image
                    src={yacht.image}
                    alt={yacht.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Card */}
                <div className="relative -top-12 mx-4">
                  <div className="bg-[#0f1218] rounded-xl border border-gray-700 shadow-lg p-5">
                    {/* Title */}
                    <h2 className="text-lg font-bold text-center mb-4 text-white" dir="rtl">
                      {yacht.name}
                    </h2>

                    {/* Price Section */}
                    <div className="flex justify-center items-baseline gap-3 mb-6 text-center" dir="rtl">
                      <span className="text-gray-400 line-through text-sm">
                        {yacht.oldPrice}
                      </span>
                      <span className="block text-right text-xl  bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFOOFF] bg-clip-text text-transparent animate-gradient-x pb-1">
                        {yacht.price}
                      </span>
                    </div>

                   

                    {/* Buttons */}
                    <div className="flex border-t border-gray-700 pt-4">
                     <Link href="/services">

                      <button className="flex-1 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition text-lg rounded-l-lg border border-gray-300">
                     عرض سابقة الاعمال
                      </button>
                     </Link>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >

                     <Link href="/contact">

                        <button className="w-full py-3 cursor-pointer bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:animate-gradient-x transition-all duration-500 font-semibold text-white text-lg shadow-lg hover:shadow-xl transform hover:scale-105 rounded-r-lg">
                         تواصل معنا
                        </button>
                      </Link>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Why Choose Our Yachts Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* العنوان الرئيسي */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
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
                <div className="text-[#f68b1e] mr-4 p-3 bg-[#1a1f2e] rounded-full">
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
                  src="/images/P1 (3).jpg"
                  alt="Luxury Yacht Experience"
                   width={400}
                    height={320}
                    className="object-cover rounded-2xl w-full h-full"
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
                <div className="text-[#f68b1e] mr-4 p-3 bg-[#1a1f2e] rounded-full">
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

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white pb-5"
>
            خبراتنا

          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200">
           دعنا نتحدث هل تواجه تحدياً؟

          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
    <Image
      src="/images/p1 (2).jpg"
      alt="Adsamy Yacht"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
  </div>
</div>


          {/* Right Column - Details */}
          <div dir="rtl" className="lg:w-1/2 w-full space-y-6">
            {/* Features Grid */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full">
              <h3 className="block text-right text-2xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFOOFF] bg-clip-text text-transparent animate-gradient-x pb-1">
                 نحوّل أفكارك إلى إنجازات ملموسة

              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors w-full"
                    >
                      <IconComponent className="text-yellow-400 text-lg flex-shrink-0" />
                      <span className="text-gray-200 text-sm sm:text-base">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section - في المنتصف تحت الصورة والمميزات */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
نبتكر الحلول الرقمية لنصنع المستقبل

            </h3>

            {/* Price (if available) */}
            <div className="mb-6 sm:mb-8">
              <p dir="rtl" className="text-white/80 text-xs sm:text-sm">شركة متخصصة في تطوير الحلول الرقمية والبرمجيات المبتكرة، نساعد الشركات على النمو من خلال تصميم مواقع احترافية، منصات تعليمية، ومتاجر إلكترونية متكاملة.

</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors w-full sm:w-auto min-w-[160px] sm:min-w-[200px]">
                  عرض سابقة الاعمال
                </button>
              </a>
              <Link href="/contact">
                <button className="bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto min-w-[160px] sm:min-w-[200px]">
                     تواصل معنا
                    </button>
              </Link>
            </div>

            <p dir="rtl" className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6">
              دعم العملاء على مدار الساعة طوال أيام الأسبوع • ضمان أفضل الأسعار
            </p>
          </div>
        </div>
        
      </div>


      <PeopleAlsoAsk />

      <Reviews />

      
    </main>
  );
}
