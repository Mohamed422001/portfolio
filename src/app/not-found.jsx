"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaArrowLeft, FaShip, FaWater } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="pt-24 pb-8 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl mx-auto">
        {/* Animated Yacht Icon */}
        <div className="relative mb-8">
          <div className="text-8xl mb-4 animate-bounce">⛵</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-pulse">
            🌊
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Main Message */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Lost at Sea?</h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          The page you're looking for has sailed away into the horizon. Don't
          worry, we'll help you navigate back to safe waters.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
          >
            <FaArrowLeft className="text-lg" />
            Go Back
          </button>

          <Link
            href="/"
            className="flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaHome className="text-lg" />
            Return Home
          </Link>
        </div>

        {/* Fun Message */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <p className="text-gray-300 text-lg mb-2">
            ⚓ While you're here, why not explore our luxury yacht collection?
          </p>
          <p className="text-gray-400">
            The best sea adventures are just a click away!
          </p>
        </div>

        {/* Decorative Waves */}
        <div className="mt-12 relative">
          <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-8 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
