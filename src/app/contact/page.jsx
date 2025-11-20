"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا بتكون وظيفة الإرسال
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "اتصل بنا",
      details: "+01128465022",
      link: "tel:+01128465022",
      color: "text-blue-400",
    },
    {
      icon: FaWhatsapp,
      title: "واتساب",
      details: "+01128465022",
      link: "https://wa.me/01128465022",
      color: "text-green-400",
    },
    {
      icon: FaEnvelope,
      title: "الايميل",
      details: "info@a-ztechno.com",
      link: "mailto:info@Adsamy Yachts.com",
      color: "text-red-400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "موقعنا",
      details: "AZ-Technology",
      link: "https://maps.google.com/?q=Adsamy",
      color: "text-purple-400",
    },
    {
      icon: FaClock,
      title: "ساعات العمل",
      details: "من السبت الى الخميس",
      link: "#",
      color: "text-yellow-400",
    },
    {
      icon: FaFacebook,
      title: "تابعنا",
      details: "@AZ-Technology",
      link: "https://www.facebook.com/share/1CmdxQUe1m/",
      color: "text-white",
    },
  ];

  return (
    <div className=" bg-[#151922]">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/yachtphoto1.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 py-10 md:py-0">
  <div className="max-w-4xl">
    <h1
  className="text-4xl md:text-6xl font-bold mb-6 pb-4 text-white text-transparent"
>
  تواصل معنا
</h1>

    <p dir="rtl" className="text-xl md:text-2xl text-gray-300">
      لأي استفسار أو طلب خدمة، فريقنا جاهز لدعمك والإجابة على كل أسئلتك بسرعة واحترافية.
    </p>
  </div>
</div>

      </div>

      {/* Main Content */}
      <div className="relative -top-20 md:-top-32 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 dir="rtl" className="text-3xl font-bold text-white mb-8">
                  تواصل معنا
                </h2>

                <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div
                          className={`p-3 rounded-lg bg-blue/10 group-hover:scale-110 transition-transform ${item.color}`}
                        >
                          <IconComponent className="text-2xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">
                            {item.title}
                          </h3>
                          <p className="text-gray-300">{item.details}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                          موقعنا
                      </h3>
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

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 dir="rtl" className="text-3xl font-bold text-white mb-2">
                ارسل رسالة
              </h2>
              <p dir="rtl" className="text-gray-300 mb-8">
                سعداء بالرد عليك طوال اليوم
              </p>

              <form dir="rtl" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label  className="block text-white mb-2 font-semibold">
                      الاسم بالكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="ادخل اسمك"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-semibold">
                      الايميل *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-semibold">
                      رقم الموبيل
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="+201128465022"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-semibold">
                      الموضوع *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    >
                      <option className="bg-black" value="">
                        اختر موضوع
                      </option>
                      <option className="bg-black" value="yacht-booking">
                    برمجة
                      </option>
                      <option className="bg-black" value="corporate-event">
                        تسويق
                      </option>
                      <option className="bg-black" value="private-party">
                       مونتاج
                      </option>
                      <option className="bg-black" value="wedding-proposal">
                        استضافة ودومين
                      </option>
                      <option className="bg-black" value="general-inquiry">
                        اخرى
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-semibold">
                    ارسل رسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="اخبرنا بطلباتك....."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-white">
                  <FaPaperPlane className="text-lg text-white  " />
                  ارسل الان
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              الاسئلة الشائعة
            </h2>
            <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
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
                {
                  question: "هل بتوفروا دعم وصيانة بعد التسليم؟",
                  answer:
                    "نعم، بنوفر دعم فني مستمر وضمان مدى الحياة على الجودة والتحديثات.",
                },
                {
                  question: "إزاي ممكن نطور وجودنا الرقمي ونزيد المبيعات؟",
                  answer:
                    "نبدأ بتصميم موقع أو تطبيق يعكس هوية شركتك، ثم نحسن ظهورك في جوجل ونطلق حملات تسويقية فعّالة.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
