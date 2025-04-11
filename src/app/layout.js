import Footer from "@/components/layout/footer/footer";
import "./globals.css";
import Solutions from "@/components/home/Solutions/solution";

// import Metrics from "./metrics";


export const metadata = {
  openGraph: {
    images: "/images/logo/dac-logo-2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
          
     <Solutions/>
      <Footer />
        </>
      </body>
    </html>
  );
}
