import Hero from "@/components/hero/Hero";
import PlayerProfile from "@/components/playerProfile/PlayerProfile";
import MeetMyTeam from "@/components/teams/meetMyTeam/MeetMyTeam";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        imgUrl={"/images/stats/bg.svg"}
        heading="Standings"
        subheading="Player Profile"
      />
      <PlayerProfile />
      <MeetMyTeam />
    </>
  );
};

export default page;
