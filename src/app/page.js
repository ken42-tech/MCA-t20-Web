import Fixtures from "@/components/home/Fixtures";
import Hero from "@/components/home/hero";
import AboutT2C from "@/components/home/aboutT2C";
import Gallery from "@/components/home/Gallery.jsx";
import LatestUpdates from "@/components/home/LatestUpdates.jsx";
import HomeTeamSection from "@/components/home/HomeTeamSection";
import Socials from "@/components/home/Socials";
import News from "@/components/home/News";
import TopPlayers from "@/components/home/TopPlayers";
import Sponsorship from "@/components/home/Sponsorship";
import IconPlayers from "@/components/home/Iconplayers";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <HomeTeamSection />
        <IconPlayers />
        <LatestUpdates />
        <Socials />
        <Gallery />

        {/* <News /> */}

        {/* <Sponsorship /> */}

        {/* <TopPlayers/> */}

        {/* <Fixtures />
        <AboutT2C /> */}
      </div>
    </>
  );
}
