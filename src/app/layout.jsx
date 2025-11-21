

// 1. تحسين الخطوط: استيراد الخط باستخدام next/font
import { Almarai } from 'next/font/google';

// استيراد المكونات
import Footer from "./_components/footer/page";
import Navbar from "./_components/navbar/page";
import WhatsAppButton from "./_components/whatsAppButtom/page";
import LoadingWrapper from "./_components/LoadingWrapper";

// استيراد ملفات الأنماط (CSS)
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 2. إعداد الخط: تحديد الأوزان والمجموعات الفرعية المطلوبة فقط
const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'], // الأوزان التي تم تحديدها في ملف CSS الأصلي
  display: 'swap', // يضمن ظهور النص بخط احتياطي حتى يتم تحميل خط Almarai
});

// بيانات الموقع الوصفية (Metadata)
export const metadata = {
  title: "Az-technology",
  description: "az-technology website",
  icons: {
    icon: [{ url: "/favicon.svg" }],
    shortcut: "/favicon.svg",
  },
};

// المكون الرئيسي للتخطيط
export default function RootLayout({ children }) {
  return (
   
    <html lang="ar" dir="rtl" className={almarai.className}>
      <body>
        {/* 
          تم وضع المكونات داخل هيكل flex لضمان بقاء الـ Footer في الأسفل
          حتى لو كان محتوى الصفحة قصيرًا.
        */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow w-full mx-auto">
            <LoadingWrapper>{children}</LoadingWrapper>
          </main>
          <Footer />
        </div>
        
        {/* هذا المكون يمكن أن يبقى هنا لأنه يظهر فوق كل الصفحات */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
