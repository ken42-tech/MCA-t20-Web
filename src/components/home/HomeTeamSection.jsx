"use client";
import Image from "next/image";
import React from "react";
import TeamCard from "../common/TeamCard";
import TitleComponent from "../common/TitleComponent";
import useMediaQuery from "@/utilis/useMediaQuery";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "../Carousel";

const teamsDataHomePage = [
  {
    logo: "/images/home/team/aakashTigers.png",
    team: "Aakash Tigers MWS",
    gradient: {
      from: "#FD7E00",
      to: "#0244AA",
    },
  },
  {
    logo: "/images/home/team/arcsAndheri.png",
    team: "ARCS Andheri",
    gradient: {
      from: "#263C90",
      to: "#8C2B8E",
    },
  },
  {
    logo: "/images/home/team/eagleThaneStrikers.png",
    team: "Eagle Thane Strikers",
    gradient: {
      from: "#FBC92E",
      to: "#262262",
    },
  },
  {
    logo: "/images/home/team/bandraBlasters.png",
    team: "NaMo Bandra Blasters",
    gradient: {
      from: "#4B1C86",
      to: "#E51C21",
    },
  },
  {
    logo: "/images/home/team/northMumbaiPanthers.png",
    team: "North Mumbai Panthers",
    gradient: {
      from: "#FEB713",
      to: "#845C00",
    },
  },
  {
    logo: "/images/home/team/shivajiParkLions.png",
    team: "Mumbai South Central Maratha Royals",
    gradient: {
      from: "#1000A1",
      to: "#B84124",
    },
  },
  {
    logo: "/images/home/team/soboSuperSonics.png",
    team: "SoBo SuperSonics",
    gradient: {
      from: "#FFF4E9",
      to: "#882626",
    },
  },
  {
    logo: "/images/home/team/triumphKnights.png",
    team: "Triumph Knights MNE",
    gradient: {
      from: "#E8D273",
      to: "#9E7437",
    },
  },
];

const HomeTeamSection = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <div className="section-width padding-top">
        <TitleComponent title={"Teams"} />
        <div className="w-full flex flex-col gap-7 relative">
          <div className="w-full overflow-x-auto py-8 scrollbar-hide">
            <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-8 gap-5 hidden">
              {teamsDataHomePage.map((item, i) => {
                return <TeamCard data={item} key={i} />;
              })}
            </div>
            <div className="w-full sm:hidden block">
              <Carousel
                sectionName="clientLogo"
                sliderPerView={isBelowMediumScreen ? 1 : 5}
                spaceBetween={50}
                loop={true}
              >
                {teamsDataHomePage.map((item, i) => (
                  <SwiperSlide key={i}>
                    <TeamCard data={item} key={i} />
                  </SwiperSlide>
                ))}
              </Carousel>
              {/* {teamsDataHomePage.map((item, i) => {
                return <TeamCard data={item} key={i} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTeamSection;
