import Innovation from "@/components/home/Innovation/innovation";
import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar/navbar";
import Hero from "@/components/home/hero/hero";
import AboutT2C from "@/components/home/aboutT2C/aboutT2C.jsx";
import WhyT2C from "@/components/home/WhyT2C/whyT2C.jsx";
import Technology from "@/components/home/Technology/tech.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Innovation/>
      <AboutT2C/>
     < WhyT2C/>
     <Technology/>
      <Footer />
    </>
  );
}
