"use client";

import {
  FaFacebook,
  FaGoogle,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

export default function Reviews() {
  const reviews = [
    {
       platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c1.jpg",

    },
    {
     platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c2.jpg",
    },
    {
      platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c3.jpg", 

    },
     {
      platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c4.jpg", 

    },
     {
      platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c5.jpg", 

    },
     {
      platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c6.jpg", 

    },
     {
      platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c7.jpg", 

    },
     {
      platform: "Trustpilot",
      icon: SiTrustpilot,
      reviewsCount: null,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      image: "/images/c8.jpg", 

    },
   
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-x pb-4 text-center mb-4" dir="rtl">
            شركاؤنا في رحلة التميز
          </h1>
          <p className="text-xl md:text-2xl text-white" dir="rtl">
            ثقة تُبنى.. ونجاح يستمر
          </p>
        </div>

<div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-2 md:grid-cols-3">
  {reviews.map((review, index) => {
    const IconComponent = review.icon;
    return (
      <div
        key={index}
        className={`${review.bgColor} ${review.borderColor} border-2 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col`}
      >
        {/* الصورة */}
        <div className="w-full h-40 overflow-hidden rounded-xl">
          <img
            src={review.image}
            alt={review.platform}
            className="w-full h-full object-contain"
          />
        </div>

        {/* محتوى الكارت */}
        <div className="mt-3 flex-1 flex flex-col">
          <div>
            <h3 className="text-base font-semibold">{review.name}</h3>
            <p className="text-gray-600 mt-1 text-xs">{review.comment}</p>
          </div>
        </div>
      </div>
    );
  })}
</div>




      </div>
    </div>
  );
}
