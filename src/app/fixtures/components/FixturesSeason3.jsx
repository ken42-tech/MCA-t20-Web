"use client";

import React from "react";
import Image from "next/image";
import fixtures3 from "@/utilis/fixtures/fixtures3.js";
import { teamLogoBN } from "@/utilis/helper";

const FixturesSeason3 = () => {
  console.log(fixtures3);
  return (
    <div className="md:py-8 bg-white flex flex-col gap-6 py-8">
      {/* Display the current match out of total
      {upcomingMatches > 0 && (
        <div className="text-center py-4 text-gray-500">
          <strong>{upcomingMatches}</strong> / <strong>{totalMatches}</strong>{" "}
          match(es) remaining.
        </div>
      )} */}
      {fixtures3.slice(0, -3).map((match, idx) => {
        const teamLogo1 = teamLogoBN[match?.home_team];
        const teamLogo2 = teamLogoBN[match?.away_team];
        return (
          <div
            key={idx}
            className="rounded-md border overflow-hidden text-black"
          >
            {/* Header */}
            <div className="relative bg-[#E07E27] text-white text-sm font-semibold px-4 py-2 flex justify-between items-center">
              <span>Match {match.match_no} of 23</span>
              <div
                className="absolute top-0 right-0 h-full w-[120px] md:w-[150px] bg-black flex items-center justify-center text-xs font-bold"
                style={{
                  clipPath: "polygon(20% 0%,100% 0%,100% 100%,0% 100%)",
                }}
              >
                Upcoming
                {/* {match.status} */}
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
                  <div className="text-sm sm:text-lg font-semibold">vs</div>

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
                  {/* {match.matchInfo.result.split(" @").map((part, idx) => (
                    <span key={idx} className={idx === 0 ? "" : "block"}>
                      <p>{part}</p>
                    </span>
                  ))} */}
                </div>
                {/* 
                <Link href={`/scores/${match.game_id}`}>
                  <span className="mt-4 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold">
                    Match center
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M9.33333 3.33333L13.3333 7.33333M13.3333 7.33333L9.33333 11.3333M13.3333 7.33333H2.66667"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FixturesSeason3;
