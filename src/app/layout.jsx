import Footer from "./_components/footer/page";
import Navbar from "./_components/navbar/page";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppButton from "./_components/whatsAppButtom/page";
import LoadingWrapper from "./_components/LoadingWrapper";

export const metadata = {
  title: "Az-technology",
  description: "az-technology website",
  icons: {
    icon: [{ url: "/favicon.svg" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Navbar />
        <div className="flex flex-col justify-between min-h-screen">
          <div className="w-full mx-auto">
            {" "}
            <LoadingWrapper>{children}</LoadingWrapper>
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
