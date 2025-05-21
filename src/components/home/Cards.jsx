"use client";
import React, { useState } from "react";
// import { teamDetails, teamsLogo } from "./teamLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import TitleComponent from "../common/TitleComponent";
import routes from "@/utilis/route";

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
    <div className="w-full">
      {/* Background & Header */}
      <div className="w-full bg-cover bg-center pt-24 pb-40 overflow-x-auto md:overflow-visible md:pt-28 md:pb-40 flex flex-col gap-8 relative scrollbar-hide">
        <div className="section-width">
          <TitleComponent
            title={"Upcoming Matches"}
            button
            buttonLink={routes.fixtures}
          />

          {/* Upcoming Matches Heading */}
          <div className="text-xl sm:text-2xl font-semibold my-8 sm:my-16 text-white">
            UPCOMING MATCHES
          </div>
        </div>
      </div>

      {/* Match Cards Section */}
      <div className="relative w-full bg-white pt-3 pb-2">
        <div className="flex flex-col items-center gap-8 section-width -mt-[320px]">
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
              {matchData.map((match, index) => (
                <SwiperSlide key={index}>
                  <MatchCard {...match} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden 2xl:grid grid-cols-1 2xl:grid-cols-3 gap-6 sm:gap-8 2xl:gap-12 w-full">
            {matchData.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MatchCard = ({ date, time, status, team1, team2 }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl justify-between border-[rgba(194,194,194,1)] border-[2px] rounded-lg h-80 flex flex-col">
      {/* Header */}
      <div className="relative h-1/4 w-full rounded-t-xl flex overflow-hidden">
        <div
          className="flex flex-col justify-center px-4 text-white w-[55%] h-full z-10 px-6 gap-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
          }}
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

        <div
          className="absolute top-0 right-0 h-full flex items-center w-[60%] justify-center text-black text-lg font-semibold pl-8"
          style={{
            backgroundColor: "rgba(224, 126, 39, 1)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)",
          }}
        >
          {status}
        </div>
      </div>

      {/* Content */}
      <div className="flex h-3/4 flex-row justify-center gap-10 text-center items-center p-10">
        <div className="w-[33%] flex flex-col justify-center items-center gap-2">
          <img src={team1.logo} alt={team1.name} />
          <span className="text-sm font-semibold text-black">{team1.name}</span>
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
          <img src={team2.logo} alt={team2.name} />
          <span className="text-sm font-semibold text-black">{team2.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
