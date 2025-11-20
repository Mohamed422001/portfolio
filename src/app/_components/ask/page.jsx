"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function PeopleAlsoAsk() {
  const [activeCategory, setActiveCategory] = useState("individuals");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const individualsFAQs = [
    {
      question: "هل أقدر أعمل موقع شخصي بسيط يعرض خدماتي؟",
      answer:
        "طبعًا ان شاء الله! نقدر نصمم لك موقع شخصي احترافي يعرض خبراتك وأعمالك بأسلوب جذاب ومتجاوب مع جميع الأجهزة.",
    },
    {
      question: "هل الموقع أو التطبيق بيشتغل على الموبايل كمان؟",
      answer:
        "أكيد، كل المواقع والتطبيقات اللي بنصممها بتكون متجاوبة 100% وتشتغل بسلاسة على أي شاشة.",
    },
    {
      question: "لو معنديش خبرة تقنية، أقدر أتعامل معاكم؟",
      answer:
        "أكيد، إحنا بنهتم بكل التفاصيل التقنية، وانت بتتابع بس التنفيذ خطوة بخطوة.",
    },
    {
      question: "هل تقدروا تساعدوني في التسويق لمشروعي بعد تصميم الموقع؟",
      answer:
        "طبعًا، عندنا فريق تسويق رقمي يقدر يدير حملاتك ويزود تواجدك أونلاين.",
    },
  
  ];

  const companiesFAQs = [
    {
      question: "إزاي ممكن نطور وجودنا الرقمي ونزيد المبيعات؟",
      answer:
        "نبدأ بتصميم موقع أو تطبيق يعكس هوية شركتك، ثم نحسن ظهورك في جوجل ونطلق حملات تسويقية فعّالة.",
    },
    {
      question:
        "هل بتوفروا دعم وصيانة بعد التسليم؟",
      answer:
        "نعم، بنوفر دعم فني مستمر وضمان مدى الحياة على الجودة والتحديثات.",
    },
    {
      question:
        "هل تقدروا تربطوا الموقع بأنظمة الشركة الداخلية؟",
      answer:
        "طبعًا، نقدر نعمل تكامل مع أي نظام داخلي سواء إدارة العملاء أو الفواتير أو المخزون.",
    },
    {
      question:
        "كم المدة المتوقعة لتصميم موقع أو تطبيق لشركتنا؟",
      answer:
        "المدة بتختلف حسب حجم المشروع",
    },
    
  ];

  const currentFAQs =
    activeCategory === "individuals" ? individualsFAQs : companiesFAQs;

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
   {/* Header */}
<div className="text-center mb-12">
  <h1 className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-center mb-8">الاسئلة الشائعة</h1>

  {/* Category Tabs */}
  <div className="flex justify-center gap-3 mb-8">
    <button
      onClick={() => {
        setActiveCategory("individuals");
        setOpenIndex(null);
      }}
      className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 border-2 ${
        activeCategory === "individuals"
          ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white shadow-lg border-transparent"
          : "border-white text-white bg-transparent hover:bg-white hover:bg-opacity-10"
      }`}
    >
      الاشخاص
    </button>
    <button
      onClick={() => {
        setActiveCategory("companies");
        setOpenIndex(null);
      }}
      className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 border-2 ${
        activeCategory === "companies"
          ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white shadow-lg border-transparent"
          : "border-white text-white bg-transparent hover:bg-white hover:bg-opacity-10"
      }`}
    >
      الشركات
    </button>
  </div>
</div>

      {/* FAQs Grid */}
      <div className=" grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div dir="rtl" className=" space-y-6">
          {currentFAQs
            .slice(0, Math.ceil(currentFAQs.length / 2))
            .map((faq, index) => (
              <div
                key={index}
                className="bg-[#0f1218] rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg text-white"
              >
                <div
                  className="flex justify-between items-center p-6 cursor-pointer text-white"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className=" flex-shrink-0">
                    {openIndex === index ? (
                      <FaMinus size={18} />
                    ) : (
                      <FaPlus size={18} />
                    )}
                  </span>
                </div>

                {openIndex === index && (
                  <div className="px-6 pb-6" dir="rtl">
                    <div dir="rtl" className="w-12 h-1 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] mb-4 rounded-full"></div>
                    <p className="text-white leading-relaxed" dir="rtl" >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div dir="rtl" className="space-y-6">
          {currentFAQs
            .slice(Math.ceil(currentFAQs.length / 2))
            .map((faq, index) => {
              const actualIndex = index + Math.ceil(currentFAQs.length / 2);
              return (
                <div
                  key={actualIndex}
                  className="bg-[#0f1218] rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className="flex justify-between items-center p-6 cursor-pointer text-white"
                    onClick={() => toggleFAQ(actualIndex)}
                  >
                    <h3 dir="rtl" className="text-lg font-semibold text-white pr-4 text-white">
                      {faq.question}
                    </h3>
                    <span dir="rtl"  className=" flex-shrink-0">
                      {openIndex === actualIndex ? (
                        <FaMinus size={18} />
                      ) : (
                        <FaPlus size={18} />
                      )}
                    </span>
                  </div>

                  {openIndex === actualIndex && (
                    <div className="px-6 pb-6">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] mb-4 rounded-full"></div>
                      <p className="text-white leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
