"use client";

import { useState } from 'react';

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
      <section  className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div  className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* النص الرئيسي */}
            <div className="lg:w-1/2 text-center lg:text-right">
              <div className="mb-6">
                <span className="text-white font-bold text-xl bg-blue-600/90 px-4 py-2 rounded-lg">
                  AZ-Technology
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                استضافة ويب
                <span className="block text-right text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFOOFF] bg-clip-text text-transparent animate-gradient-x pt-2 pb-2">بمعايير احترافية</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                حلول استضافة متكاملة تجمع بين السرعة، الأمان، والموثوقية 
                لتنمية حضورك الرقمي
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-end mb-12">
                <button className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:bg-blue-700 text-blue font-semibold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg transform hover:scale-105">
                  ابدأ الآن
                </button>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-white">
                    تبدأ من <span className="text-blue-400 font-bold text-xl">$3.99</span>
                    <span className="text-gray-300">/شهرياً</span>
                  </p>
                </div>
              </div>

              {/* المميزات */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { text: "نطاق مجاني", icon: "🌐" },
                  { text: "SSL مجاني", icon: "🔒" },
                  { text: "دعم 24/7", icon: "⚡" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-end gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <span className="text-white">{item.text}</span>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* بطاقة العرض */}
            <div className="lg:w-2/5 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-blue py-4 px-4 rounded-full mb-4 text-sm font-semibold">
                    خصم 40% لفترة محدودة
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">العرض التأسيسي</h3>
                  <p className="text-gray-200">انطلق بموقعك بأفضل العروض</p>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { feature: "مساحة تخزين", value: "100GB SSD" },
                    { feature: "النطاق المجاني", value: "سنة كاملة" },
                    { feature: "البريد الإلكتروني", value: "غير محدود" },
                    { feature: "عرض النطاق", value: "غير محدود" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-blue-400 font-semibold">{item.value}</span>
                      <span className="text-gray-200">{item.feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:bg-blue-700 text-blue font-semibold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg transform hover:scale-105">
                  احصل على العرض
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain & Hosting Section */}
      <section className="py-20 bg-black from-gray-50 to-white mt-3 mb-2">
        <div className="container mx-auto px-4">
          
          {/* عنوان القسم */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
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
                    className="w-full px-6 py-4 text-lg border-0 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-right pr-12"
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
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
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
                        <button className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-blue font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
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
                          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
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
                  className={`bg-white rounded-xl p-4 text-center border-2 ${
                    domain.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                  } transition-all duration-300 hover:shadow-md cursor-pointer`}
                  onClick={() => {
                    setDomain(`example${domain.extension}`);
                    setSearchResults(null);
                  }}
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {domain.extension}
                  </div>
                  <div className="text-black font-semibold text-lg">
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
              <h2 className="text-4xl font-bold text-white mb-4">
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
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-500 transform ${
                    hoveredPlan === plan.id 
                      ? 'scale-105 shadow-2xl border-blue-500' 
                      : 'scale-100 border-transparent'
                  }`}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {/* شارة الأكثر شيوعاً */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-6 rounded-bl-2xl z-10 shadow-lg">
                      <span className="font-bold">الأكثر شيوعاً</span>
                    </div>
                  )}

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
                        <span className="text-gray-700">{plan.storage}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-gray-700">{plan.projects}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-gray-700">{plan.emails}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-gray-700">{plan.domains}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                        <span className="text-gray-700">{plan.support}</span>
                      </li>
                    </ul>

                    {/* زر الاشتراك */}
                    <button 
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        hoveredPlan === plan.id
                          ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg transform -translate-y-1'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      ابدأ الآن 😊
                    </button>
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

            {/* قسم إضافي للمميزات */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">أداء فائق</h3>
                  <p className="text-gray-600">خوادم عالية الأداء لتحميل أسرع لموقعك</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">حماية متكاملة</h3>
                  <p className="text-gray-600">أنظمة حماية متقدمة ضد الهجمات الإلكترونية</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">دعم فني 24/7</h3>
                  <p className="text-gray-600">فريق دعم فني متاح على مدار الساعة لمساعدتك</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              المميزات المتضمنة مع كل خطة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كل ما تحتاجه لنجاح موقعك متوفر في جميع خطط الاستضافة لدينا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "تثبيت ووردبريس بنقرة واحدة",
                description: "Excepter: sit occaecat cupidatan is problem, one sunt in culpa dui elit."
              },
              {
                icon: "🔄",
                title: "نقل مواقع مجاني",
                description: "Excepter: sit occaecat cupidatan is problem, one sunt in culpa dui elit."
              },
              {
                icon: "📊",
                title: "عرض نطاق غير محدود",
                description: "Excepter: sit occaecat cupidatan is problem, one sunt in culpa dui elit."
              },
              {
                icon: "🌐",
                title: "نطاق مجاني",
                description: "Excepter: sit occaecat cupidatan is problem, one sunt in culpa dui elit."
              },
              {
                icon: "💾",
                title: "نسخ احتياطي يومي",
                description: "Excepter: sit occaecat cupidatan is problem, one sunt in culpa dui elit."
              },
              {
                icon: "👨‍💼",
                title: "دعم عملاء 24/7",
                description: "Excepter: sit occaecat cupidatan is problem, one sunt in culpa dui elit."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <span className="text-2xl">{feature.icon}</span>
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
            <button className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-blue font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              ابدأ باستضافة موقعك الآن
            </button>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-20 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] relative overflow-hidden mb-2">
        {/* خلفية ديناميكية */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2000ms'}}></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4000ms'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* النص */}
            <div className="lg:w-1/2 text-center lg:text-right">
              <div className="mb-6">
                <span className="text-blue-300 font-bold text-lg bg-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  دعم محترف
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                دعم عملاء 24/7
                <span className="block text-blue-400">بإشراف محترفين</span>
              </h2>
              
             

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-end">
                <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
                  <span>اتصل بنا الآن!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <span className="text-blue font-semibold">متاح الآن للدعم الفوري</span>
                </div>
              </div>

              {/* إحصائيات */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {[
                  { number: "98%", label: "رضا العملاء" },
                  { number: "5 دقائق", label: "متوسط وقت الرد" },
                  { number: "24/7", label: "دعم مستمر" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* صورة أو أيقونة */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                    <div className="w-48 h-48 bg-white/30 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* عناصر عائمة */}
                <div className="absolute top-0 -right-4 bg-green-500 text-white py-2 px-4 rounded-full text-sm font-bold animate-bounce">
                  سريع
                </div>
                <div className="absolute bottom-8 -left-4 bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-bold animate-bounce" style={{animationDelay: '1000ms'}}>
                  محترف
                </div>
                <div className="absolute top-1/2 -right-8 bg-purple-500 text-white py-2 px-4 rounded-full text-sm font-bold animate-bounce" style={{animationDelay: '2000ms'}}>
                  متاح
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
}