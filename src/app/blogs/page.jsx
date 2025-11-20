"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendar,
  FaUser,
  FaArrowRight,
  FaClock,
  FaSearch,
  FaTags,
} from "react-icons/fa";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "مصانع وشركات عامة",
      excerpt:"اكتشف معنا رؤى ملهمة ونصائح مهمة في مجالات التطوير، التصميم، وتحسين تجربة المستخدم.",
      image: "/images/co1.jpg",
      date: "2024-12-15",
      author: "محمد احمد",
      category: "destinations",
      tags: ["dubai", "luxury", "travel"],
    },
    {
      id: 2,
      title: "مصانع وشركات عامة",
      excerpt:"اكتشف معنا رؤى ملهمة ونصائح مهمة في مجالات التطوير، التصميم، وتحسين تجربة المستخدم.",
       image: "/images/co2.jpg",
      date: "2024-12-10",
      author: "محمد احمد",
      readTime: "7 min read",
      category: "events",
      tags: ["party", "events", "celebration"],
    },
    {
      id: 3,
       title: "مصانع وشركات عامة",
      excerpt:"اكتشف معنا رؤى ملهمة ونصائح مهمة في مجالات التطوير، التصميم، وتحسين تجربة المستخدم.",
       image: "/images/co3.jpg",
      date: "2024-12-10",
      author: "محمد احمد",
      readTime: "6 min read",
      category: "maintenance",
      tags: ["maintenance", "care", "tips"],
    },
    {
      id: 4,
       title: "مصانع وشركات عامة",
      excerpt:"اكتشف معنا رؤى ملهمة ونصائح مهمة في مجالات التطوير، التصميم، وتحسين تجربة المستخدم.",
       image: "/images/co8.jpg",
      date: "2024-12-10",
      author: "محمد احمد",
      readTime: "4 min read",
      category: "seasons",
      tags: ["weather", "seasons", "uae"],
    },
    {
      id: 5,
      title: "  متجر الكترونى",
      excerpt:"اكتشف معنا رؤى ملهمة ونصائح مهمة في مجالات التطوير، التصميم، وتحسين تجربة المستخدم.",
       image: "/images/ec.jpg",
      date: "2024-12-10",
      author: "محمد احمد",
      readTime: "8 min read",
      category: "luxury",
      tags: ["amenities", "luxury", "features"],
    },
    {
      id: 6,
       title: "  منصة تعليمية",
      excerpt:"اكتشف معنا رؤى ملهمة ونصائح مهمة في مجالات التطوير، التصميم، وتحسين تجربة المستخدم.",
       image: "/images/ed.jpg",
      date: "2024-12-10",
      author: "محمد احمد",
      date: "2024-11-15",
      author: "Business Consultant Lisa",
      readTime: "6 min read",
      category: "corporate",
      tags: ["corporate", "business", "events"],
    },
  ];

  const categories = [
    { id: "all", name: "جميع المقالات", count: blogPosts.length },
    {
      id: "destinations",
      name: "مصانع وشركات عامة",
      count: blogPosts.filter((post) => post.category === "destinations")
        .length,
    },
    {
      id: "events",
      name: "متاجر الكترونية",
      count: blogPosts.filter((post) => post.category === "events").length,
    },
    {
      id: "maintenance",
      name: "برمجة خاصة",
      count: blogPosts.filter((post) => post.category === "maintenance").length,
    },
    {
      id: "seasons",
      name: "تسويق الكترونى",
      count: blogPosts.filter((post) => post.category === "seasons").length,
    },
    {
      id: "luxury",
      name: "تطبيقات الهاتف",
      count: blogPosts.filter((post) => post.category === "luxury").length,
    },
    {
      id: "corporate",
      name: "مواقع حجوزات",
      count: blogPosts.filter((post) => post.category === "corporate").length,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className=" bg-[#151922] min-h-screen">
    {/* Hero Section */}
<div className="relative h-[380px] md:h-[480px] bg-cover bg-center bg-no-repeat">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/yachtphoto2.jpg')",
      
    }}
  />
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-3xl pt-20 pb-12 md:pt-28 md:pb-16">
     <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4 text-white">
              المدونة
            </h1>

      <p dir="rtl" className="text-lg md:text-2xl text-gray-300 leading-relaxed">
        "في مدونتنا ستجد محتوى قيّم يلخص خبراتنا في البرمجة، التصميم، والتسويق… بشكل مبسط وسهل تستفيد منه في مشروعك."
      </p>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div dir="rtl" className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div dir="rtl" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaSearch className="text-white" />
                ابحث عن مدونة
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">الاقسام</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-semibold"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.id
                            ? "bg-black/20"
                            : "bg-white/10"
                        }`}
                      >
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">
                المقالات الشائعة
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="flex gap-3 group cursor-pointer">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-semibold group-hover:text-white transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-400 text-xs mt-1">
                          <FaCalendar className="text-[#FF00FF]" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                     
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-[#FF00FF]" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUser className="text-[#FF00FF]" />
                          {post.author}
                        </div>
                        
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF00FF] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                     
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
