import React from "react";
import Image from "next/image";

const matchData = [
  {
    season: "SEASON 1 2025",
    status: "COMPLETED",
    team1: {
      name: "TRIUMPH KNIGHTS MUMBAI NORTH EAST",
      logo: "/images/fixtures/image 24 (1).svg",
      score: "141",
      overs: "19.1 Overs",
    },
    team2: {
      name: "EAGLE THANE STRIKERS",
      logo: "images/fixtures/image 19 (1).svg",
      score: "164/7",
      overs: "20 Overs",
    },
    matchInfo: {
      result: "ARCS ANDHERI BEAT NORTH MUMBAI PANTHERS BY 23 RUNS",
      date: "24 MAR, 2025",
      location: "MUMBAI, INDIA",
    },
  },
  {
    season: "SEASON 1 2025",
    status: "COMPLETED",
    team1: {
      name: "TRIUMPH KNIGHTS MUMBAI NORTH EAST",
      logo: "/images/fixtures/image 24 (1).svg",
      score: "141",
      overs: "19.1 Overs",
    },
    team2: {
      name: "EAGLE THANE STRIKERS",
      logo: "images/fixtures/image 19 (1).svg",
      score: "164/7",
      overs: "20 Overs",
    },
    matchInfo: {
      result: "ARCS ANDHERI BEAT NORTH MUMBAI PANTHERS BY 23 RUNS",
      date: "24 MAR, 2025",
      location: "MUMBAI, INDIA",
    },
  },
  {
    season: "SEASON 1 2025",
    status: "COMPLETED",
    team1: {
      name: "TRIUMPH KNIGHTS MUMBAI NORTH EAST",
      logo: "/images/fixtures/image 24 (1).svg",
      score: "141",
      overs: "19.1 Overs",
    },
    team2: {
      name: "EAGLE THANE STRIKERS",
      logo: "images/fixtures/image 19 (1).svg",
      score: "164/7",
      overs: "20 Overs",
    },
    matchInfo: {
      result: "ARCS ANDHERI BEAT NORTH MUMBAI PANTHERS BY 23 RUNS",
      date: "24 MAR, 2025",
      location: "MUMBAI, INDIA",
    },
  },
  {
    season: "SEASON 1 2025",
    status: "COMPLETED",
    team1: {
      name: "TRIUMPH KNIGHTS MUMBAI NORTH EAST",
      logo: "/images/fixtures/image 24 (1).svg",
      score: "141",
      overs: "19.1 Overs",
    },
    team2: {
      name: "EAGLE THANE STRIKERS",
      logo: "images/fixtures/image 19 (1).svg",
      score: "164/7",
      overs: "20 Overs",
    },
    matchInfo: {
      result: "ARCS ANDHERI BEAT NORTH MUMBAI PANTHERS BY 23 RUNS",
      date: "24 MAR, 2025",
      location: "MUMBAI, INDIA",
    },
  },
  {
    season: "SEASON 1 2025",
    status: "COMPLETED",
    team1: {
      name: "TRIUMPH KNIGHTS MUMBAI NORTH EAST",
      logo: "/images/fixtures/image 24 (1).svg",
      score: "141",
      overs: "19.1 Overs",
    },
    team2: {
      name: "EAGLE THANE STRIKERS",
      logo: "images/fixtures/image 19 (1).svg",
      score: "164/7",
      overs: "20 Overs",
    },
    matchInfo: {
      result: "ARCS ANDHERI BEAT NORTH MUMBAI PANTHERS BY 23 RUNS",
      date: "24 MAR, 2025",
      location: "MUMBAI, INDIA",
    },
  },
  {
    season: "SEASON 1 2025",
    status: "COMPLETED",
    team1: {
      name: "TRIUMPH KNIGHTS MUMBAI NORTH EAST",
      logo: "/images/fixtures/image 24 (1).svg",
      score: "141",
      overs: "19.1 Overs",
    },
    team2: {
      name: "EAGLE THANE STRIKERS",
      logo: "images/fixtures/image 19 (1).svg",
      score: "164/7",
      overs: "20 Overs",
    },
    matchInfo: {
      result: "ARCS ANDHERI BEAT NORTH MUMBAI PANTHERS BY 23 RUNS",
      date: "24 MAR, 2025",
      location: "MUMBAI, INDIA",
    },
  },
];

const SeasonFixturesCard = () => {
  return (
    <div className=" py-6 md:py-8 bg-white flex flex-col gap-6 py-8">
  <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">
    SEASON 1 FIXTURES
  </h2>

  {matchData.map((match, index) => (
    <div key={index} className="rounded-md border overflow-hidden text-black">
      {/* Header */}
      <div className="relative bg-[#E07E27] text-white text-sm font-semibold px-4 py-2 flex justify-between  items-center">
        <span>{match.season}</span>
        <div className="absolute top-0 right-0 h-full w-[120px] md:w-[150px] bg-black text-white flex items-center justify-center clip-slant text-xs font-bold">
          {match.status}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Teams Info */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between  py-3">
          {/* Team 1 */}
          <div className="flex items-center gap-3 w-full md:w-[35%]">
            <Image
              src={match.team1.logo}
              alt="Team 1 Logo"
              width={50}
              height={60}
              className="object-contain h-28 w-28"
            />
            <div className="text-[10px] md:text-base font-semibold leading-3 uppercase">
              {match.team1.name}
            </div>
          </div>

          {/* Team 1 Score */}
          <div className="text-center">
            <div className="font-bold text-sm md:text-3xl text-[#894B14AB]">{match.team1.score}</div>
            <div className="text-[10px] md:text-xs text-[#894B14AB]">
              ({match.team1.overs})
            </div>
          </div>

          {/* VS Text */}
          <div className="text-sm md:text-lg font-semibold">vs</div>

          {/* Team 2 Score */}
          <div className="text-center">
            <div className="font-bold text-sm md:text-3xl text-[#E07E27]">
              {match.team2.score}
            </div>
            <div className="text-[10px] md:text-xs text-[#E07E27]">
              ({match.team2.overs})
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-3 w-full md:w-[30%] justify-end">
            <Image
              src={match.team2.logo}
              alt="Team 2 Logo"
              width={50}
              height={60}
              className="object-contain w-28 h-28"
            />
            <div className="text-[10px] md:text-base font-semibold uppercase ">
              {match.team2.name}
            </div>
          </div>
        </div>

        {/* Match Info */}
        <div className="w-full lg:w-[28%] bg-[#F5F5F5] px-12 py-8 flex flex-col justify-center">
          <div className="text-[10px] md:text-base font-bold text-[#E07E27] mb-1">
            MATCH INFO
          </div>
          <div className="text-base font-semibold leading-tight mb-1 pt-6">
            {match.matchInfo.result}
          </div>
          <div className="text-[10px] md:text-xs text-black flex flex-col sm:flex-row justify-between gap-1">
            <span>{match.matchInfo.date}</span>
            <span>{match.matchInfo.location}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
  )};
export default SeasonFixturesCard;
