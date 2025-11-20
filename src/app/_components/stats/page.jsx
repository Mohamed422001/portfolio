"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaShip, FaUserTie, FaCalendarAlt } from "react-icons/fa";

export default function Stats() {
  const statsData = [
    {
      value: 200000,
      label: "عميل سعيد",
      icon: FaUsers,
      color: "text-blue-400",
    },
    {
      value: 100,
      label: "المشروعات المنجزة",
      icon: FaShip,
      color: "text-green-400",
    },
    {
      value: 5000,
      label: "سنوات خبرة",
      icon: FaUserTie,
      color: "text-yellow-400",
    },
    {
      value: 600000,
      label: "إبداع بلا حدود",
      icon: FaCalendarAlt,
      color: "text-purple-400",
    },
  ];

  // Stats Section Component
  const StatsSection = () => {
    const sectionRef = useRef(null);
    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCounts(statsData.map(() => 0));

              const intervals = statsData.map((stat, idx) => {
                const stepTime = Math.max(20, Math.floor(2000 / stat.value));
                return setInterval(() => {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    if (newCounts[idx] < stat.value) {
                      newCounts[idx] = Math.min(
                        newCounts[idx] + Math.ceil(stat.value / 100),
                        stat.value
                      );
                    }
                    return newCounts;
                  });
                }, stepTime);
              });

              setTimeout(
                () => intervals.forEach((i) => clearInterval(i)),
                2100
              );
            }
          });
        },
        { threshold: 0.5 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);

      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, []);

    return (
      <div className="w-full flex justify-center">
        <section
          ref={sectionRef}
          className="relative w-full max-w-7xl py-20 bg-cover bg-center bg-fixed rounded-2xl mx-4"
          style={{
            backgroundImage: "url('/images/yachtphoto1.jpg')",
          }}
        >
          {/* Overlay لوني لتخفيف التباين */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 rounded-2xl"></div>

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl text-white text-center border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/15 hover:scale-105"
                  >
                    {/* الأيقونة في الأعلى */}
                    <div className="mb-4">
                      <IconComponent className={`text-5xl ${stat.color}`} />
                    </div>

                    {/* القيمة والتسمية تحتها */}
                    <div className="flex flex-col">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {stat.value >= 1000
                          ? `${(counts[idx] / 1000).toFixed(0)}K+`
                          : counts[idx].toLocaleString()}
                      </h3>
                      <p className="text-gray-200 text-lg">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  };
  return (
    <>
      <StatsSection />
    </>
  );
}