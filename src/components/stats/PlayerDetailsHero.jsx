"use client";
import Image from "next/image";
import React from "react";

const PlayerDetailsHero = ({ player, selectedTab }) => {
  const getPlayerStats = () => {
    if (selectedTab === "batting") {
      return [
        { label: "Runs", value: player.runs },
        { label: "Matches", value: player.mat },
        { label: "Average", value: player.ave },
        { label: "Strike rate", value: player.sr },
        { label: "H.S Score", value: player.hs?.split(" ")[0] || "" },
      ];
    } else if (selectedTab === "bowling") {
      return [
        { label: "Wickets", value: player.wkts },
        { label: "Matches", value: player.mat },
        { label: "Economy", value: player.econ },
        { label: "Average", value: player.avg },
        { label: "Best", value: player.bbi?.split(" ")[0] || "" },
      ];
    } else {
      return [
        { label: "Dismissals", value: player.dismissals },
        { label: "Matches", value: player.mat },
        { label: "Catches", value: player.catches },
        { label: "Run Outs", value: player.runOuts },
        { label: "Stumpings", value: player.stumpings },
      ];
    }
  };

  const stats = getPlayerStats();

  return (
    <div className="relative w-full h-[28rem] bg-[url('/images/stats/bg.svg')] bg-no-repeat bg-center bg-cover flex justify-center items-end overflow-hidden">
      {/* Background Number */}
      <div className="absolute left-[20%]  bottom-0 z-0 flex items-start justify-start leading-none">
        <span className="text-[120px]   font-extrabold italic items-start justify-start text-[#3188b1] opacity-70 ">
          #
        </span>
        <span className="text-[350px] h-full flex justify-end items-end font-extrabold italic text-[#3188b1]  opacity-70">
          {player.pos}
        </span>
      </div>

      {/* Player Image */}
      <div className="absolute left-[27%] bottom-0 z-10">
        <Image
          src={player.playerImg || "/images/stats/player-img.svg"}
          width={300}
          height={300}
          alt={player.player}
          className="object-contain"
        />
      </div>

      {/* Player Details */}
      <div className="relative z-20 ml-[20rem] mb-6 text-white text-left">
        <h1 className="text-5xl font-bold mb-2">{player.player}</h1>
        <div className="flex items-center gap-3 mb-8">
          <Image
            src={player.teamLogo || "/images/stats/l1.svg"}
            width={24}
            height={24}
            alt={player.team}
          />
          <p className="text-xl">{player.team}</p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap rounded-lg overflow-hidden border border-gray-700 divide-x divide-gray-600 bg-black bg-opacity-60">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="py-3 px-6 min-w-24 flex flex-col items-center justify-center text-white"
            >
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsHero;
//ginal
