"use client";
import Image from "next/image";

const ClientSlider = () => {
  const clients = [
    "/images/clients/client1.jpg",
    "/images/clients/client2.jpg", 
    "/images/clients/client3.jpg",
    "/images/clients/client4.jpg",
    "/images/clients/client5.jpg",
    "/images/clients/client6.jpg",
  ];

  return (
    <section className="py-16 bg-[#0f1218]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            عملاؤنا
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            شركاء النجاح الذين وثقوا بخدماتنا
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="w-40 h-40 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 mx-4 flex-shrink-0"
              >
                <div className="relative w-32 h-32">
                  <Image
                    src={client}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-contain rounded-xl"
                    onError={(e) => {
                      e.target.src = "/images/placeholder-client.jpg";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "50+", label: "عميل راضي" },
            { number: "100+", label: "مشروع مكتمل" },
            { number: "5+", label: "سنوات خبرة" },
            { number: "98%", label: "رضا العملاء" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#151922] rounded-2xl border border-gray-800 hover:border-[#f68b1e] transition-colors duration-300"
            >
              <h3 className="text-3xl font-bold text-[#f68b1e] mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;