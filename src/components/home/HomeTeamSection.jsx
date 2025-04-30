"use client";
import Image from "next/image";
import React from "react";
import TeamCard from "../common/TeamCard";
import TitleComponent from "../common/TitleComponent";

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
        <TitleComponent title={"Teams"} />
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
