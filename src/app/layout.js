import Footer from "@/components/layout/footer/footer";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Solutions from "@/components/home/solutions/Solution";

export const metadata = {
  openGraph: {
    images: "/images/logo/dac-logo-2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Solutions />
        <Footer />
      </body>
    </html>
  );
}
