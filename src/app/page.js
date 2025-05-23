import Fixtures from "@/components/home/Fixtures";
import Hero from "@/components/home/hero";
import Cards from "@/components/home/Cards";
import AboutT2C from "@/components/home/aboutT2C";
import Gallery from "@/components/home/Gallery.jsx";
import LatestUpdates from "@/components/home/LatestUpdates.jsx";
import HomeTeamSection from "@/components/home/HomeTeamSection";
import Socials from "@/components/home/Socials";
import News from "@/components/home/News";
import TopPlayers from "@/components/home/TopPlayers";
import Sponsorship from "@/components/home/Sponsorship";
import IconPlayers from "@/components/home/Iconplayers";
import HomeStandingsSection from "@/components/home/HomeStandingsSection";
import mixpanel from "mixpanel-browser";

export default function Home() {
  mixpanel.init("7efcdff383b20dd11013e3914fe0df66", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });

  return (
    <>
      <div>
        <Hero />
        <Cards />
        <HomeTeamSection />
        <LatestUpdates />
        <IconPlayers />
        <Socials />
        <Gallery />
        {/* <TopPlayers /> */}
        {/* <HomeStandingsSection /> */}

        {/* <News /> */}

        {/* <Sponsorship /> */}

        {/* <Fixtures /> */}
        {/*    <AboutT2C /> */}
      </div>
    </>
  );
}
