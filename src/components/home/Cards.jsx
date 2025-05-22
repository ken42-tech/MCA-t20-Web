"use client";
import React, { useState } from "react";
// import { teamDetails, teamsLogo } from "./teamLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import TitleComponent from "../common/TitleComponent";
import routes from "@/utilis/route";
import { teamLogoBN, truncateTextSpells } from "@/utilis/helper";
import fixtures3 from "@/utilis/fixtures/fixtures3";
import Link from "next/link";
import Image from "next/image";

const TeamSection = () => {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);

  const handleLogoClick = (index) => {
    setSelectedTeamIndex(index);
  };

  // Sample data for the cards
  const matchData = [
    {
      date: "24 June, 2025",
      time: "10:30 am IST",
      status: "UPCOMING",
      team1: {
        name: "ARCS ANDHERI",
        logo: "/images/teams/hero/teamLogo/arcs.svg",
      },
      team2: {
        name: "Sobo Mumbai Falcons",
        logo: "/images/teams/hero/teamLogo/sobo.svg",
      },
    },
    {
      date: "04 June, 2025",
      time: "2:30 pm IST",
      status: "UPCOMING",
      team1: {
        name: "Aakash Tigers",
        logo: "/images/teams/hero/teamLogo/aakash.svg",
      },
      team2: {
        name: "Maratha Royals",
        logo: "/images/fixtures/Maratha Royals.svg",
      },
    },
    {
      date: "4 June, 2025",
      time: "5:30 pm IST",
      status: "UPCOMING",
      team1: {
        name: "Eagle Thane Strikers",
        logo: "/images/teams/hero/teamLogo/thane.svg",
      },
      team2: {
        name: "Triumph Knights",
        logo: "/images/teams/hero/teamLogo/triumph.svg",
      },
    },
  ];

  return (
    <div className="section-width  padding-top">
      {/* Background & Header */}

      {/* Match Cards Section */}
      <div className="relative w-full bg-white pt-3 pb-2">
        <TitleComponent
          title={"Upcoming Matches"}
          button
          buttonLink={routes.fixtures}
        />
        <div className="flex flex-col items-center gap-8   ">
          {/* Mobile View - Carousel */}
          <div className="block 2xl:hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {fixtures3.slice(0, 3).map((match, index) => (
                <SwiperSlide key={index}>
                  <MatchCard {...match} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden 2xl:grid grid-cols-1 2xl:grid-cols-3 gap-6 sm:gap-8 2xl:gap-12 w-full">
            {fixtures3.slice(0, 3).map((match, index) => {
              return <MatchCard key={index} {...match} />;
            })}
          </div>
        </div>
        <Link
          href={routes.fixtures || "#"}
          className="btn-blue md:hidden flex w-fit mx-auto mt-6"
        >
          View All
          <Image
            src="/images/home/hero/buttonIcon.svg"
            alt="button-icon"
            width={24}
            height={24}
            className="w-5 h-5"
          />
        </Link>
      </div>
    </div>
  );
};

const MatchCard = ({ date, time, home_team, away_team, venue }) => {
  const teamLogo1 = teamLogoBN[home_team] || "";
  const teamLogo2 = teamLogoBN[away_team] || "";
  return (
    <div className="bg-white shadow-lg rounded-xl justify-between border-[rgba(194,194,194,1)] border-[2px]     flex flex-col">
      {/* Header */}
      <div className="relative   w-full rounded-t-xl flex overflow-hidden bg-[#e07e27]">
        <div
          className="flex flex-col justify-center p-4 text-white w-[55%] h-full z-10  gap-1"
          // style={{
          //   backgroundColor: "rgba(0, 0, 0, 1)",
          //   clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
          // }}
        >
          <span className="text-lg font-semibold">{date}</span>
          <div className="flex flex-row gap-2">
            <img
              src="/images/elements/moon.svg"
              alt="moon"
              style={{ height: "15px", marginTop: "1.5px" }}
            />
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-3/4 flex-row justify-center gap-10 text-center items-center p-10">
        <div className="w-[33%] flex flex-col justify-center items-center gap-2">
          <img src={teamLogo1} className="h-20 w-auto" alt={home_team} />
          <span className="text-sm font-semibold text-black">{home_team}</span>
        </div>
        <div className="w-[33%] flex flex-col justify-center items-center gap-6">
          <span className="text-[rgba(224,126,39,1)] font-bold italic tracking-widest">
            VS
          </span>
          {/* <span className="text-[rgba(134,134,134,1)] text-xs font-semibold">
            MATCH 25/74
          </span> */}
        </div>
        <div className="w-[33%] flex flex-col justify-center items-center gap-2">
          <img src={teamLogo2} className="h-20 w-auto" alt={away_team} />
          <span className="text-sm font-semibold text-black">
            {truncateTextSpells(away_team, 18)}
          </span>
        </div>
      </div>
      <div>
        <p className="text-[#E07E27] text-sm text-center p-4 border-t border-[#C2C2C2]">
          {venue}
        </p>
      </div>
    </div>
  );
};

export default TeamSection;
