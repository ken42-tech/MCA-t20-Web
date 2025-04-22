import Footer from "@/components/layout/footer/footer";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";

export const metadata = {
  openGraph: {
    images: "/images/logo/dac-logo-2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
