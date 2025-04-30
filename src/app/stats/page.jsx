"use client";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import React, { useState } from "react";

const Stats = () => {
  const [selected, setSelected] = useState("batting");
  return (
    <div className="w-full">
      <Hero imgUrl={"/images/stats/bg.svg"} heading=" Stats" />
      <div className="section-width py-12 flex flex-col gap-10 bg-white text-black">
        {/* Tab and Filter Section */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer">
          {/* Tabs Section */}
          <div className="w-full md:w-[30%] flex items-center justify-start gap-4 md:gap-2 overflow-x-auto">
            <p
              className={`font-semibold text-xl uppercase pb-2 whitespace-nowrap ${
                selected == "batting"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("batting")}
            >
              batting
            </p>
            <p
              className={`font-semibold text-xl uppercase pb-2 whitespace-nowrap ${
                selected == "bowling"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("bowling")}
            >
              bowling
            </p>
            <p
              className={`font-semibold text-xl uppercase pb-2 whitespace-nowrap ${
                selected == "fielding"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("fielding")}
            >
              fielding
            </p>
          </div>

          {/* Filters Section */}
          <div className="w-full md:w-[60%] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2">
            <DropDown
              label={"filter by"}
              options={["Season 1", "Season 2", "Season 3", "Season 4"]}
              bg={"white"}
            />
            <DropDown
              label={"sort by"}
              options={
                selected === "batting"
                  ? [
                      "Most Runs",
                      "Least Runs",
                      "Most Centuries",
                      "Most Half Centuries",
                    ]
                  : selected === "bowling"
                  ? [
                      "Most Wickets",
                      "Best Economy",
                      "Best Average",
                      "Best Strike Rate",
                    ]
                  : ["Most Catches", "Most Run Outs", "Most Stumpings"]
              }
              bg={"white"}
            />
            <DropDown
              label={"team"}
              options={["All", "Team 1", "Team 2", "Team 3"]}
              bg={"white"}
            />
          </div>
        </div>

        {/* Table Section with Horizontal Scroll on Mobile */}
        <div className="w-full overflow-x-auto">
          <PlayerTable selected={selected} />
        </div>
      </div>
    </div>
  );
};

const DropDown = ({ label, options, bg }) => {
  const bgColor = bg === "white" ? "bg-white" : "bg-[#E07E27]";
  const textColor = bg === "white" ? "text-[#E07E27]" : "text-white";

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-60 relative">
        <label
          htmlFor="dropdown"
          className="text-sm font-semibold uppercase text-[#6A6A6A] mb-1 md:mb-2 w-full md:w-[50%]"
        >
          {label}
        </label>
        <div className="relative w-full">
          <select
            id="dropdown"
            className={`appearance-none ${bgColor} ${textColor} px-4 py-2 w-full border border-[#E07E27] text-base rounded`}
          >
            <option value="" disabled>
              Select Option
            </option>
            {options &&
              options.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center justify-center">
            <Image
              src={
                bg === "white"
                  ? "/images/standings/dropdown.svg"
                  : "/images/standings/dropdownwhite.svg"
              }
              width={10}
              height={10}
              alt="Dropdown Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Batting data
const battingData = [
  {
    pos: 1,
    player: "Prithvi Shaw",
    team: "North Mumbai Panthers",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    no: 1,
    runs: 249,
    hs: "76 VS AA",
    ave: 49.8,
    sr: 149.1,
    hundreds: 0,
    fifties: 3,
    fours: 25,
    sixes: 9,
    ducks: 0,
  },
  {
    pos: 2,
    player: "Aditya Tare",
    team: "Eagle Thane Strikers",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    no: 0,
    runs: 244,
    hs: "71 VS NMP",
    ave: 48.8,
    sr: 138.63,
    hundreds: 0,
    fifties: 3,
    fours: 31,
    sixes: 3,
    ducks: 0,
  },
  {
    pos: 3,
    player: "Jay Bista",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    no: 0,
    runs: 242,
    hs: "110 VS ATMWS",
    ave: 34.57,
    sr: 132.96,
    hundreds: 1,
    fifties: 0,
    fours: 27,
    sixes: 5,
    ducks: 0,
  },
  {
    pos: 4,
    player: "Akhil Herwadkar",
    team: "ARCS Andheri",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    no: 1,
    runs: 231,
    hs: "27 VS SPL",
    ave: 46.2,
    sr: 129.77,
    hundreds: 0,
    fifties: 3,
    fours: 20,
    sixes: 8,
    ducks: 1,
  },
  {
    pos: 5,
    player: "Parag Khanapurkar",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    no: 0,
    runs: 229,
    hs: "96 VS AA",
    ave: 38.16,
    sr: 133.91,
    hundreds: 0,
    fifties: 1,
    fours: 19,
    sixes: 8,
    ducks: 0,
  },
  {
    pos: 6,
    player: "Hersh Tank",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    no: 0,
    runs: 226,
    hs: "93 VS ATMWS",
    ave: 32.28,
    sr: 152.7,
    hundreds: 0,
    fifties: 1,
    fours: 22,
    sixes: 9,
    ducks: 0,
  },
  {
    pos: 7,
    player: "Suryakumar Yadav",
    team: "Triumph Knights Mumbai North East",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    no: 2,
    runs: 202,
    hs: "90* VS ATMWS",
    ave: 67.33,
    sr: 129.48,
    hundreds: 0,
    fifties: 2,
    fours: 13,
    sixes: 9,
    ducks: 0,
  },
  {
    pos: 8,
    player: "Shubham Ranjane",
    team: "ARCS Andheri",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    no: 2,
    runs: 197,
    hs: "71* VS NMP",
    ave: 49.25,
    sr: 141.72,
    hundreds: 0,
    fifties: 2,
    fours: 12,
    sixes: 7,
    ducks: 0,
  },
  {
    pos: 9,
    player: "Aakarshit Gomel",
    team: "Aakash Tigers Mumbai Western Suburbs",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    no: 0,
    runs: 183,
    hs: "43 VS SS",
    ave: 36.6,
    sr: 127.08,
    hundreds: 0,
    fifties: 0,
    fours: 16,
    sixes: 6,
    ducks: 0,
  },
  {
    pos: 10,
    player: "Sujit Nayak",
    team: "NaMo Bandra Blasters",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    no: 2,
    runs: 167,
    hs: "54 VS SPL",
    ave: 55.66,
    sr: 150.45,
    hundreds: 0,
    fifties: 2,
    fours: 6,
    sixes: 10,
    ducks: 0,
  },
];

// Bowling data (based on the image provided)
const bowlingData = [
  {
    pos: 1,
    player: "Prashant Solanki",
    team: "Eagle Thane Strikers",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 2,
    overs: 7,
    maidens: 0,
    runs: 50,
    wkts: 5,
    bbi: "4/31 VS AA",
    avg: 10.0,
    econ: 7.14,
    sr: 8.4,
    threeW: 1,
    fiveW: 0,
  },
  {
    pos: 2,
    player: "Parag Khanapurkar",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    overs: 11,
    maidens: 0,
    runs: 70,
    wkts: 7,
    bbi: "2/9 VS NBB",
    avg: 10.0,
    econ: 6.36,
    sr: 9.42,
    threeW: 0,
    fiveW: 0,
  },
  {
    pos: 3,
    player: "Sarfaraz Khan",
    team: "Eagle Thane Strikers",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    overs: 0,
    maidens: 242,
    runs: 110,
    wkts: 34.57,
    bbi: "VS ATMWS",
    avg: 132.96,
    econ: 1.0,
    sr: 0,
    threeW: 27,
    fiveW: 5,
  },
  {
    pos: 4,
    player: "Anjdeep Lad",
    team: "Aakash Tigers Mumbai Western Suburbs",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    overs: 1,
    maidens: 231,
    runs: 27,
    wkts: 46.2,
    bbi: "VS SPL",
    avg: 129.77,
    econ: 0,
    sr: 3,
    threeW: 20,
    fiveW: 8,
  },
  {
    pos: 5,
    player: "Dhrumil Matkar",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    overs: 0,
    maidens: 229,
    runs: 96,
    wkts: 38.16,
    bbi: "VS AA",
    avg: 133.91,
    econ: 0,
    sr: 1,
    threeW: 19,
    fiveW: 8,
  },
  {
    pos: 6,
    player: "Sujit Nayak",
    team: "NaMo Bandra Blasters",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    overs: 0,
    maidens: 226,
    runs: 93,
    wkts: 32.28,
    bbi: "VS ATMWS",
    avg: 152.7,
    econ: 0,
    sr: 1,
    threeW: 22,
    fiveW: 9,
  },
  {
    pos: 7,
    player: "Mohit Avasthi",
    team: "Triumph Knights Mumbai North East",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    overs: 2,
    maidens: 202,
    runs: 90,
    wkts: 67.33,
    bbi: "* VS ATMWS",
    avg: 129.48,
    econ: 0,
    sr: 2,
    threeW: 13,
    fiveW: 9,
  },
  {
    pos: 8,
    player: "Karsh Kothari",
    team: "NaMo Bandra Blasters",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    overs: 2,
    maidens: 197,
    runs: 71,
    wkts: 49.25,
    bbi: "* VS NMP",
    avg: 141.72,
    econ: 0,
    sr: 2,
    threeW: 12,
    fiveW: 7,
  },
  {
    pos: 9,
    player: "Royston Dias",
    team: "Triumph Knights Mumbai North East",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    overs: 0,
    maidens: 183,
    runs: 43,
    wkts: 36.6,
    bbi: "VS SS",
    avg: 127.08,
    econ: 0,
    sr: 0,
    threeW: 16,
    fiveW: 6,
  },
  {
    pos: 10,
    player: "Deepak Shetty",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    overs: 2,
    maidens: 167,
    runs: 54,
    wkts: 55.66,
    bbi: "VS SPL",
    avg: 150.45,
    econ: 0,
    sr: 2,
    threeW: 6,
    fiveW: 10,
  },
];

// Fielding data (based on the image provided)
const fieldingData = [
  {
    pos: 1,
    player: "Prashant Solanki",
    team: "Eagle Thane Strikers",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    catches: 8,
    dismissals: 8,
    runOuts: 0,
    stumpings: 0,
  },
  {
    pos: 2,
    player: "Parag Khanapurkar",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    catches: 11,
    dismissals: 0,
    runOuts: 70,
    stumpings: 7,
  },
  {
    pos: 3,
    player: "Sarfaraz Khan",
    team: "Eagle Thane Strikers",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    catches: 0,
    dismissals: 242,
    runOuts: 110,
    stumpings: 34.57,
  },
  {
    pos: 4,
    player: "Anjdeep Lad",
    team: "Aakash Tigers Mumbai Western Suburbs",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    catches: 1,
    dismissals: 231,
    runOuts: 27,
    stumpings: 46.2,
  },
  {
    pos: 5,
    player: "Dhrumil Matkar",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    catches: 0,
    dismissals: 229,
    runOuts: 96,
    stumpings: 38.16,
  },
  {
    pos: 6,
    player: "Sujit Nayak",
    team: "NaMo Bandra Blasters",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 7,
    catches: 0,
    dismissals: 226,
    runOuts: 93,
    stumpings: 32.28,
  },
  {
    pos: 7,
    player: "Mohit Avasthi",
    team: "Triumph Knights Mumbai North East",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    catches: 2,
    dismissals: 202,
    runOuts: 90,
    stumpings: 67.33,
  },
  {
    pos: 8,
    player: "Karsh Kothari",
    team: "NaMo Bandra Blasters",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 6,
    catches: 2,
    dismissals: 197,
    runOuts: 71,
    stumpings: 49.25,
  },
  {
    pos: 9,
    player: "Royston Dias",
    team: "Triumph Knights Mumbai North East",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    catches: 0,
    dismissals: 183,
    runOuts: 43,
    stumpings: 36.6,
  },
  {
    pos: 10,
    player: "Deepak Shetty",
    team: "SoBo SuperSonics",
    teamLogo: "/images/stats/l1.svg",
    playerImg: "/images/stats/player-img.svg",
    mat: 5,
    catches: 2,
    dismissals: 167,
    runOuts: 54,
    stumpings: 55.66,
  },
];

const PlayerTable = ({ selected }) => {
  // Determine which data to use based on selected tab
  const playerData =
    selected === "batting"
      ? battingData
      : selected === "bowling"
      ? bowlingData
      : fieldingData;

  // Define table headers based on selected tab
  const getTableHeaders = () => {
    if (selected === "batting") {
      return (
        <tr>
          <th className="py-4 px-4 text-center bg-[#E07E27]">POS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27] w-80">PLAYER</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">MAT</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">NO</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">RUNS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">HS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">AVE</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">S/R</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">100S</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">50S</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">4S</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">6S</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">DUCKS</th>
        </tr>
      );
    } else if (selected === "bowling") {
      return (
        <tr>
          <th className="py-4 px-4 text-center bg-[#E07E27]">POS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27] w-80">PLAYER</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">MAT</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">OVERS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">MAIDENS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">RUNS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">WKTS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">BBI</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">AVG</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">ECON</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">S/R</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">3W</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">5W</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className="py-4 px-4 text-center bg-[#E07E27]">POS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27] w-80">PLAYER</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">MAT</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">CATCHES</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">DISMISSALS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">RUN OUTS</th>
          <th className="py-4 px-4 text-center bg-[#E07E27]">STUMPINGS</th>
        </tr>
      );
    }
  };

  // Define table rows based on selected tab
  const getTableRows = () => {
    return playerData.map((player, index) => (
      <tr key={index} className="border-b border-[#222222]">
        <td className="py-2 px-4 border-r text-center border-[#222222]">
          {player.pos}
        </td>
        <td className="py-2 px-4 border-r border-[#222222]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-900 overflow-hidden relative">
              <Image
                src={player.playerImg}
                width={100}
                height={100}
                alt={player.player}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">{player.player}</p>
              <div className="flex items-center gap-2 text-xs">
                <Image
                  src={player.teamLogo}
                  width={16}
                  height={16}
                  alt={player.team}
                />
                <span className="text-gray-400">{player.team}</span>
              </div>
            </div>
          </div>
        </td>
        <td className="py-2 px-4 border-r text-center border-[#222222]">
          {player.mat}
        </td>

        {selected === "batting" && (
          <>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.no}
            </td>
            <td className="py-2 px-4 border-r text-center bg-[#420202d3] border-[#222222]">
              {player.runs}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.hs}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.ave}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.sr}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.hundreds}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.fifties}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.fours}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.sixes}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.ducks}
            </td>
          </>
        )}

        {selected === "bowling" && (
          <>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.overs}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.maidens}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.runs}
            </td>
            <td className="py-2 px-4 border-r text-center bg-[#420202d3] border-[#222222]">
              {player.wkts}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.bbi}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.avg}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.econ}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.sr}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.threeW}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.fiveW}
            </td>
          </>
        )}

        {selected === "fielding" && (
          <>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.catches}
            </td>
            <td className="py-2 px-4 border-r text-center bg-[#420202d3] border-[#222222]">
              {player.dismissals}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.runOuts}
            </td>
            <td className="py-2 px-4 border-r text-center border-[#222222]">
              {player.stumpings}
            </td>
          </>
        )}
      </tr>
    ));
  };

  return (
    <div className="w-full">
      <div className="min-w-[1000px]">
        <table className="w-full table-auto bg-black border-collapse text-sm">
          <thead className="text-black">{getTableHeaders()}</thead>
          <tbody className="text-[#D8D8D8]">{getTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
