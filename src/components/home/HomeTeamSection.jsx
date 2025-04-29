"use client";
import Image from "next/image";
import React from "react";
import TeamCard from "../common/TeamCard";

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
    team: "Shivaji Park Lions",
    gradient: {
      from: "#000",
      to: "#F15A2C",
    },
  },
  {
    logo: "/images/home/team/soboSuperSonics.png",
    team: "SoBo SuperSonics",
    gradient: {
      from: "#010094",
      to: "#0000FF",
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
  return (
    <>
      <div className="section-width padding-top">
        <div className="relative h-fit px-8 py-2 bg-gradient-to-r from-black to-[#213375] xl:w-[480px] lg:w-[320px] rounded-md mb-12">
          <Image
            src={"/images/elements/header-element.png"}
            width={50}
            height={50}
            className="w-auto absolute h-full top-0 -left-0 rounded-l-md"
            alt="Logo"
          />
          <h2 className="text-white">Teams</h2>
        </div>

        <div className="w-full flex flex-col gap-7 relative">
          <div className="w-full overflow-x-auto py-8 scrollbar-hide">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-8 gap-5 ">
              {teamsDataHomePage.map((item, i) => {
                return <TeamCard data={item} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTeamSection;
