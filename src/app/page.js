import Innovation from "@/components/home/Innovation/innovation";
import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar/navbar";
import Hero from "@/components/home/hero/hero";
import AboutT2C from "@/components/home/aboutT2C/aboutT2C.jsx";
import WhyT2C from "@/components/home/WhyT2C/whyT2C.jsx";
import Technology from "@/components/home/Technology/tech.jsx";
import Solutions from "@/components/home/Solutions/solution";
import Testimonial from "@/components/home/Testimonial/testimonial";
import Contact from "@/components/home/contact/contact.jsx";
export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
      <div >
      <Hero />
      <Innovation/>
      <Technology/>
      </div>
      <AboutT2C/>
     < WhyT2C/>
    
     <Solutions/>
      <Footer />
    </>
  );
}
