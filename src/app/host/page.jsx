"use client";

import { useState } from 'react';
import {
  FaAnchor,
  FaWater,
  FaStar,
  FaGlobeAmericas,
  FaCocktail,
  FaFish,
  FaSnowflake,
  FaBed,
  FaToilet,
  FaCouch,
  FaRegHandPointer,
  FaSun,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
  FaChair,
  FaExchangeAlt,
   FaCalendarCheck ,
  FaHeadset,
  FaPalette,
  FaInfinity,
  FaShieldAlt,
  FaEye,
  FaCode,
  FaBullseye,
  FaPencilRuler,
  FaUsers,
  FaMobileAlt,
  FaBlender,
  FaWind,
} from "react-icons/fa";


export default function HostingPage() {
  const [domain, setDomain] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const handleSearch = async () => {
    if (!domain.trim()) return;
    
    setIsSearching(true);
    
    // محاكاة البحث عن النطاق (في التطبيق الحقيقي، ستكون هنا استدعاء API)
    setTimeout(() => {
      const isAvailable = Math.random() > 0.5; // محاكاة عشوائية لتوفر النطاق
      setSearchResults({
        domain: domain,
        available: isAvailable,
        price: isAvailable ? "$10.99" : null
      });
      setIsSearching(false);
    }, 1500);
  };

  const clearSearch = () => {
    setDomain('');
    setSearchResults(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // بيانات خطط الاستضافة
  const hostingPlans = [
    {
      id: 1,
      name: "BABY",
      price: "$9.9",
      period: "/ month",
      storage: "5 GB Storage",
      projects: "Unlimited projects",
      emails: "15 Email Accounts",
      domains: "2 Domain Hosted",
      support: "24/7 Full Support",
      popular: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "BUSINESS",
      price: "$11.9",
      period: "/ month",
      storage: "10 GB Storage",
      projects: "Unlimited projects",
      emails: "25 Email Accounts",
      domains: "2 Domain Hosted",
      support: "24/7 Full Support",
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "CORPORATE",
      price: "$21.9",
      period: "/ month",
      storage: "30 GB Storage",
      projects: "Unlimited projects",
      emails: "35 Email Accounts",
      domains: "2 Domain Hosted",
      support: "24/7 Full Support",
      popular: false,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      name: "UNLIMITED",
      price: "$41.9",
      period: "/ month",
      storage: "Unlimited GB Storage",
      projects: "Unlimited projects",
      emails: "Unlimited Email Accounts",
      domains: "Unlimited Domain Hosted",
      support: "24/7 Full Support",
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center py-12 lg:py-24 overflow-hidden">
  {/* الخلفية الذكية */}
  <div className="absolute inset-0 bg-[#0f1218]">
    {/* شبكة متجاوبة */}
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] lg:bg-[size:40px_40px]"></div>
    </div>

    {/* تأثيرات الضوء المتحركة */}
    <div className="absolute top-10 left-10 w-32 h-32 lg:w-96 lg:h-96 bg-cyan-500/5 rounded-full blur-xl lg:blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 lg:w-80 lg:h-80 bg-purple-500/5 rounded-full blur-xl lg:blur-3xl animate-pulse delay-1000"></div>
  </div>

  {/* المحتوى الرئيسي */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
      
      {/* الجزء الأيسر - المحتوى */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 lg:py-12">
        <div className="text-center lg:text-right space-y-6 lg:space-y-8">
          
          {/* شريط الحالة */}
     <div className="flex justify-center lg:justify-start items-center">
  <div className="flex items-center gap-2  backdrop-blur-lg rounded-2xl px-4 py-2 pt-12 sm:pt-8 lg:pt-2 border border-white/10">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    <span className="text-green-400 text-xs lg:text-sm font-semibold">مستعد للعمل</span>
  </div>
</div>


          {/* العنوان الرئيسي */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              استضافة ويب
              <span className="block text-center sm:text-right text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-1">
                بلمسة ذكية
              </span>
            </h1>
          </div>

          {/* الوصف */}
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light px-2 lg:px-0">
            نظام استضافة <span className="text-cyan-300 font-semibold">متكامل</span> يجمع بين 
            <span className="text-blue-300 font-semibold"> السرعة الفائقة</span> و
            <span className="text-purple-300 font-semibold"> الحماية الذكية</span>
          </p>

          {/* أزرار التحكم */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start px-2 lg:px-0">
  
  <a href="tel:01004813709" className="w-full sm:w-auto">
    <button className="w-full sm:w-64 lg:w-72 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-bold py-4 px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
      <FaPhoneAlt className="text-white" size={20} />
      ابدأ الآن
    </button>
  </a>

  <div className="w-full sm:w-auto lg:w-72 bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-3 border border-white/20">
    <p className="text-white text-center text-lg lg:text-xl">
      تبدأ من <span className="text-[#FF00FF] font-bold text-2xl lg:text-3xl">$2.99</span>
      <span className="text-gray-300 text-sm lg:text-base">/شهرياً</span>
    </p>
  </div>

</div>


          {/* المميزات السريعة */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 pt-6 px-2 lg:px-0">
            {[
              { text: "نطاق مجاني", icon: "🌐", desc: "سنة كاملة" },
              { text: "SSL مجاني", icon: "🔒", desc: "حماية كاملة" },
              { text: "دعم فني", icon: "⚡", desc: "24/7" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 lg:p-5 border border-white/10 hover:border-[#FF00FF] transition-all duration-300">
                <div className="flex items-center justify-center lg:justify-end gap-3">
                  <div className="text-2xl lg:text-3xl">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold text-base lg:text-lg">{item.text}</div>
                    <div className="text-[#FF00FF] text-sm lg:text-base">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* الجزء الأيمن - البطاقة */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 lg:py-12">
        <div className="relative h-full flex items-center justify-center">
          {/* تأثير الإشعاع */}
          <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
          
          {/* البطاقة الرئيسية */}
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl overflow-hidden w-full max-w-md lg:max-w-lg">
            
            {/* شارة الخصم */}
            <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4">
              <div className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 lg:py-3 lg:px-6 rounded-2xl font-bold text-sm lg:text-lg shadow-2xl transform rotate-12">
                <span>خصم 50%</span>
              </div>
            </div>

            {/* محتوى البطاقة */}
            <div className="space-y-6 lg:space-y-8">
              {/* العنوان */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 lg:px-4 lg:py-2 mb-3 lg:mb-4">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs lg:text-sm font-semibold">الأكثر طلباً</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">الباقة المميزة</h3>
                <p className="text-gray-300 text-sm lg:text-base">الحل الأمثل لجميع احتياجاتك</p>
              </div>

              {/* السعر */}
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl  lg:text-5xl font-black bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] bg-clip-text text-transparent">
                    $4.99
                  </span>
                  <span className="text-gray-400 text-base lg:text-lg">/شهرياً</span>
                </div>
                <div className="text-red-400 line-through text-base lg:text-lg mt-1">$9.99</div>
              </div>

              {/* المميزات */}
              <div className="space-y-3 lg:space-y-4">
                {[
                  { feature: "مساحة التخزين", value: "200GB SSD", icon: "💾" },
                  { feature: "النطاق المجاني", value: "مدى الحياة", icon: "🎯" },
                  { feature: "حسابات البريد", value: "غير محدود", icon: "📧" },
                  { feature: "عرض النطاق", value: "غير محدود", icon: "🚀" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 lg:p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-lg lg:text-xl">{item.icon}</span>
                      <span className="text-[#FF00FF] font-semibold text-[8px] lg:text-xs">{item.value}</span>
                    </div>
                    <span className="text-gray-200 text-sm lg:text-base text-right">{item.feature}</span>
                  </div>
                ))}
              </div>

              {/* زر الشراء */}
               <a
                    href="https://wa.me/201004813709"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
              <button className="w-full group relative bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95">
                <span className="relative flex items-center justify-center gap-2 text-base lg:text-lg">
                  <FaWhatsapp className="text-white" size={20} />
                  
                  اشترك الآن
                </span>
              </button>
               </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* مؤشر التمرير */}
  <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
    <div className="animate-bounce bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-2 lg:p-3 border border-cyan-400/30">
      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>

      {/* Domain & Hosting Section */}
      <section className="py-20 bg-black from-gray-50 to-white  mb-2">
        <div className="container mx-auto px-4">
          
          {/* عنوان القسم */}
          <div className="text-center mb-16">
            <h2 className="block text-center sm:text-center text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-1 mb-4 pb-5">
              ابحث عن النطاق المثالي لموقعك
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              اختر من بين مجموعة واسعة من امتدادات النطاقات بأسعار تنافسية
            </p>
          </div>

          {/* محرك البحث عن النطاقات */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-200">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-1">
                  <input 
                    type="text"
                    placeholder="أدخل اسم النطاق هنا..."
                    className="w-full px-6 py-4 text-lg border-0 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FF00FF]  focus:outline-none text-right pr-12"
                    dir="rtl"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  {domain && (
                    <button 
                      onClick={clearSearch}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                <button 
                  onClick={handleSearch}
                  disabled={isSearching || !domain.trim()}
                  className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] disabled:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  {isSearching ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري البحث...
                    </>
                  ) : (
                    "بحث"
                  )}
                </button>
              </div>
            </div>

            {/* عرض نتائج البحث */}
            {searchResults && (
              <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className={`w-4 h-4 rounded-full ${searchResults.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {searchResults.domain}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    {searchResults.available ? (
                      <>
                        <span className="text-green-600 font-bold text-lg">
                          متاح - {searchResults.price}
                        </span>
                        <button className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                          إضافة إلى السلة
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="text-red-600 font-bold text-lg">
                          محجوز
                        </span>
                        <button 
                          onClick={clearSearch}
                          className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                        >
                          بحث جديد
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* امتدادات النطاقات الشائعة */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { extension: ".com", price: "$10.98", popular: true },
                { extension: ".net", price: "$12.98", popular: false },
                { extension: ".org", price: "$11.98", popular: false },
                { extension: ".io", price: "$49.98", popular: true }
              ].map((domain, index) => (
                <div 
                  key={index}
                  className={`bg-[#0f1218] rounded-xl p-4 text-center  border-1 border-white transition-all duration-300 hover:shadow-md cursor-pointer`}
                  onClick={() => {
                    setDomain(`example${domain.extension}`);
                    setSearchResults(null);
                  }}
                >
                  <div className="text-2xl font-bold text-white mb-2">
                    {domain.extension}
                  </div>
                  <div className="text-white font-semibold text-sm">
                    {domain.price}
                  </div>
                  {domain.popular && (
                    <div className="text-xs text-black font-medium mt-2">
                      الأكثر شيوعاً
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* روابط إضافية */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <button className="text-white  font-semibold transition-colors duration-300 flex items-center gap-2">
                عرض قائمة أسعار النطاقات
                <span>←</span>
              </button>
              <button className="text-white  font-semibold transition-colors duration-300 flex items-center gap-2">
                بحث جماعي عن النطاقات
                <span>←</span>
              </button>
              <button className="text-white  font-semibold transition-colors duration-300 flex items-center gap-2">
                نقل النطاق
                <span>←</span>
              </button>
            </div>
          </div>

          {/* قسم خطط الاستضافة */}
          <div className="">
            <div className="text-center mb-16">
              <h2 className="block text-center sm:text-center pb-8 text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-3">
                خطط الاستضافة المميزة
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                اختر الخطة التي تناسب احتياجاتك من بين مجموعة واسعة من خطط الاستضافة المميزة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {hostingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative bg-[#0f1218] rounded-2xl shadow-lg overflow-hidden border-1 transition-all duration-500 transform ${
                    hoveredPlan === plan.id 
                      ? 'scale-105 shadow-2xl border-white-500' 
                      : 'scale-100 border-white'
                  }`}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  
                  {/* رأس البطاقة */}
                  <div className={`bg-gradient-to-r ${plan.color} text-white p-6 text-center relative overflow-hidden`}>
                    {/* تأثير أنيميشن عند التمرير */}
                    <div 
                      className={`absolute inset-0 bg-white/20 transition-all duration-500 ${
                        hoveredPlan === plan.id ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
                      }`}
                    ></div>
                    
                    <h3 className="text-2xl font-bold mb-2 relative z-10">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-1 relative z-10">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-white/80">{plan.period}</span>
                    </div>
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="p-6">
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-white">{plan.storage}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-white">{plan.projects}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-white">{plan.emails}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-white">{plan.domains}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-white">{plan.support}</span>
                      </li>
                    </ul>

                    {/* زر الاشتراك */}
                     <a href="tel:01004813709">
                    <button 
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        hoveredPlan === plan.id
                          ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border-1 border-white shadow-lg transform -translate-y-1'
                          : 'bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:bg-gray-200'
                      }`}
                    >
                      ابدأ الآن 😊
                    </button>
                    </a>
                  </div>

                  {/* تأثير إضافي عند التمرير */}
                  <div 
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${plan.color} transition-all duration-300 ${
                      hoveredPlan === plan.id ? 'h-2' : 'h-1'
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* قسم المميزات الفائق */}
<div className="relative pt-25 overflow-hidden bg-black">
  {/* خلفية متقدمة */}
  <div className="absolute inset-0 "></div>
  
  {/* تأثيرات ديناميكية */}
  <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
  <div className="absolute top-1/2 -right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
  <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>

  {/* خطوط شبكية */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* الهيدر */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1218] border border-blue-200 mb-6">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <span className="text-white font-medium text-sm">الحلول المتكاملة</span>
      </div>
      <h2  className="block  text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFOOFF] bg-clip-text text-transparent animate-gradient-x pb-5 text-center">
        تجربة استثنائية
      </h2>
      <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
        نعيد تعريف معايير الجودة في خدمات الاستضافة من خلال حلول متطورة 
        تجمع بين القوة والأمان والكفاءة في بيئة واحدة متكاملة
      </p>
    </div>

    {/* البطاقات */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      
      {/* بطاقة الأداء */}
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-[#0f1218] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
          <div className="flex items-start justify-between mb-6">
            <div className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] p-4 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span className="text-4xl font-bold text-[#FF00FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500">01</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">أداء استثنائي</h3>
          <p className="text-white leading-relaxed mb-6">
            خوادم فائقة السرعة مزودة بأحدث معالجات AMD EPYC™ مع تقنيات التخزين 
            NVMe وذاكرة عشوائية تصل إلى 512GB لتحميل فوري لمواقعك
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">سرعة تحميل تصل إلى 0.5 ثانية</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">نسبة تشغيل 99.99%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">شبكة عالمية 200Gbps</span>
            </div>
          </div>
        </div>
      </div>

      {/* بطاقة الأمان */}
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-[#0f1218] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
          <div className="flex items-start justify-between mb-6">
            <div className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] p-4 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <span className="text-4xl font-bold text-[#FF00FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500">02</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">حماية شاملة</h3>
          <p className="text-white leading-relaxed mb-6">
            نظام أمني متعدد الطبقات يشمل جدران حماية ذكية، كشف متقدم عن التهديدات، 
            وتشفير SSL 256-bit لحماية بياناتك من أي مخاطر محتملة
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">حماية DDoS متقدمة</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">مراقبة مستمرة 24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">نسخ احتياطية يومية</span>
            </div>
          </div>
        </div>
      </div>

      {/* بطاقة الدعم */}
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-[#0f1218] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
          <div className="flex items-start justify-between mb-6">
            <div className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] p-4 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span className="text-4xl font-bold text-[#FF00FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500">03</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">دعم فني متميز</h3>
          <p className="text-white leading-relaxed mb-6">
            فريق دعم فني متخصص متاح على مدار الساعة عبر قنوات متعددة مع متوسط 
            وقت استجابة أقل من دقيقتين لحل أي مشكلة تواجهك
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">دعم فني 24/7/365</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">متوسط استجابة  2 دقيقة</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
              <span className="text-white">فريق دعم متعدد اللغات</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="block text-center sm:text-center pb-8 text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-3">
              المميزات المتضمنة مع كل خطة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كل ما تحتاجه لنجاح موقعك متوفر في جميع خطط الاستضافة لدينا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaRegHandPointer className="text-xl" />,
                title: "تثبيت ووردبريس بنقرة واحدة",
                description: "ابدأ موقعك خلال ثواني مع تثبيت ووردبريس التلقائي بدون أي إعدادات معقدة."
              },
              {
                icon: <FaExchangeAlt className="text-xl" />,
                title: "نقل مواقع مجاني",
                description: "ننقل موقعك كامل مجانًا بدون توقف أو تعقيدات وبأعلى درجة أمان."
              },
              {
                icon: <FaInfinity className="text-xl" />,
                title: "عرض نطاق غير محدود",
                description: "احصل على عرض نطاق غير محدود يمنح موقعك مساحة كاملة للنمو بدون أي قيود."
              },
              {
                 icon: <FaGlobeAmericas className="text-xl" />,
                title: "نطاق مجاني",
                description: "احصل على دومين مجاني لنشر موقعك باحترافية من أول يوم."
              },
              {
                icon: <FaCalendarCheck className="text-xl" />,
                title: "نسخ احتياطي يومي",
                description: "حافظ على بيانات موقعك مع نسخ احتياطي يومي تلقائي وبأمان كامل."
              },
              {
                icon: <FaHeadset className="text-xl" />,
                title: "دعم عملاء 24/7",
                description: "فريق الدعم جاهز لمساعدتك على مدار الساعة طوال الأسبوع لضمان استمرارية موقعك."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-[#0f1218] backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <span className="text-2xl text-white">{feature.icon}</span>
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
  <a
    href="https://wa.me/201004813709"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
      
      <span className="flex items-center justify-center gap-2">
        <FaWhatsapp className="text-white" size={20} />
        ابدأ باستضافة موقعك الآن
      </span>

    </button>
  </a>
</div>

        </div>
      </section>

     
    </div>
  );
}