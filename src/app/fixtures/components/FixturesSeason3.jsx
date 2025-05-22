"use client";

import React from "react";
import fixtures3 from "@/utilis/fixtures/fixtures3.js";
import { teamLogoBN } from "@/utilis/helper";

const FixturesSeason3 = () => {
  return (
    <div className="md:py-8 bg-white flex flex-col gap-6 py-8">
      {fixtures3.slice(0, -3).map((match, idx) => {
        const teamLogo1 = teamLogoBN[match?.home_team];
        const teamLogo2 = teamLogoBN[match?.away_team];
        return (
          <div
            key={idx}
            className="rounded-md border overflow-hidden text-black"
          >
            {/* Header */}
            <div className="relative bg-[#E07E27] text-white text-sm md:text-base lg:text-lg  font-semibold px-4 py-2 flex justify-between items-center">
              <span>Match {match.match_no} of 23</span>
              <div
                className="absolute top-0 right-0 h-full w-[200px] md:w-[250px] bg-black flex items-center justify-center text-xs md:text-sm lg:text-base  font-bold"
                style={{
                  clipPath: "polygon(20% 0%,100% 0%,100% 100%,0% 100%)",
                }}
              >
                {match.venue}
              </div>
            </div>
            {/* Teams & Scores */}
            <div className="flex flex-col lg:flex-row w-full">
              <div className="flex-1 flex flex-col md:flex-row items-center justify-between p-3">
                {/* Team 1 */}
                <div className="flex items-center gap-3 w-full md:w-[35%]">
                  <img
                    src={teamLogo1}
                    // alt={`${match.team1.name} logo`}
                    width={50}
                    height={60}
                    className="object-contain h-28 w-28"
                  />
                  <div className="text-[10px] sm:text-base font-semibold uppercase">
                    {match.home_team}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="text-sm sm:text-lg  font-semibold">vs</div>

                  <p>{`${match.match_no}/23`}</p>
                </div>

                {/* Team 2 */}
                <div className="flex items-center gap-3 w-full md:w-[30%]">
                  <img
                    src={teamLogo2}
                    alt={teamLogo2}
                    width={50}
                    height={60}
                    className="object-contain h-28 w-28"
                  />
                  <div className="text-[10px] sm:text-base font-semibold uppercase">
                    {match.away_team}
                  </div>
                </div>
              </div>
              {/* Match Info */}
              <div className="bg-[#F5F5F5] px-12 py-8 flex flex-col justify-center lg:w-1/4">
                <div className="text-xs sm:text-base font-bold text-[#E07E27]">
                  MATCH INFO
                </div>
                <div className="text-base font-semibold leading-tight mb-1 pt-2">
                  <p>{match.date}</p>
                  <p>{match.time}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FixturesSeason3;
