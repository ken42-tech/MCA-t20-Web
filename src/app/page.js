import Fixtures from "@/components/home/Fixtures";
import Hero from "@/components/home/hero";
import AboutT2C from "@/components/home/aboutT2C";
import Gallery from "@/components/home/Gallery.jsx";
import LatestUpdates from "@/components/home/LatestUpdates.jsx";
import HomeTeamSection from "@/components/home/HomeTeamSection";
import Socials from "@/components/home/Socials";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <HomeTeamSection />
        <LatestUpdates />
        <Socials />
        <Gallery />

        {/* <Fixtures /> */}
        {/* <AboutT2C /> */}
      </div>
    </>
  );
}
