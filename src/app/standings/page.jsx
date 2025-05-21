import Hero from "@/components/hero/Hero";
import StandingTable from "@/components/standings/StandingTable";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-white">
      <Hero
        imgUrl={"/images/stats/bg.svg"}
        heading="Standings"
        subheading="Player Profile"
      />
      <div className="section-width section-padding flex flex-col gap-20">
        <StandingTable heading="gROUP a STANDINGS" showSelect={true} />
        <StandingTable heading="gROUP b STANDINGS" showSelect={false} />
      </div>
    </div>
  );
};

export default page;
