"use client";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import React, { useState } from "react";

const Stats = () => {
  const [selected, setSelected] = useState("batting");
  return (
    <div className="w-full ">
      <Hero imgUrl={"/images/stats/bg.svg"} heading=" Stats"/>
      <div className="w-full px-32 py-12 flex flex-col gap-10 bg-white text-black">
        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="w-[30%] flex items-center justify-between">
            <p
              className={`font-semibold text-xl uppercase pb-2 ${
                selected == "batting"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("batting")}
            >
              batting
            </p>
            <p
              className={`font-semibold text-xl uppercase pb-2 ${
                selected == "bowling"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("bowling")}
            >
              bowling
            </p>
            <p
              className={`font-semibold text-xl uppercase pb-2 ${
                selected == "fielding"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("fielding")}
            >
              fielding
            </p>
          </div>
          <div className=" w-[60%] flex items-center  justify-between">
            <DropDown
              label={"filter by"}
              options={["Season 1", "Season 2", "Season 3", "Season 4"]}
              bg={"white"}
            />
            <DropDown 
            label={"sort by"}
            options = {["Most Runs", "Least Runs", "Most Centuries", "Most Half Centuries"]}
            bg={"white"}

            />
            <DropDown
            label={"team"}
            options={["All", "Team 1", "Team 2", "Team 3"]}
            bg={"white"}
             />
          </div>
        </div>
        <div>
        <PlayerTable/>
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
      <div className="flex items-center gap-2 w-60 relative">
        <label
          htmlFor="dropdown"
          className="text-sm font-semibold uppercase text-[#6A6A6A] mb-2 w-[50%]"
        >
          {label}
        </label>
        <select
          id="dropdown"
          className={`appearance-none ${bgColor} ${textColor} px-4 py-2 w-full border border-[#E07E27] text-base rounded`}
        >
          <option value="" disabled>
            Select a Season
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
            src={bg === "white" ? "/images/standings/dropdown.svg" : "/images/standings/dropdownwhite.svg"}
            width={10}
            height={10}
            alt="Dropdown Icon"
          />
        </div>
      </div>
    </>
  );
};


const playerData = [
  { pos: 1, player: "Prithvi Shaw", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 2 },
  { pos: 2, player: "Aditya Tare", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 0 },
  { pos: 3, player: "Jay Bista", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 0 },
  { pos: 3, player: "Akhil Herwadkar", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 0 },
  { pos: 3, player: "Parag Khanapurkar", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 0 },
  { pos: 3, player: "Hersh Tank", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 2 },
  { pos: 3, player: "Suryakumar Yadav", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 0 },
  { pos: 3, player: "Shubham Ranjane", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 2 },
  { pos: 3, player: "Aakarshit Gomel", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 0 },
  { pos: 3, player: "Sujit Nayak", mat: 5, no: 0, runs: 43, hs: "27 VS SPL", ave: 10.60, sr: 155.88, hundreds: 0, fifties: 0, sixes: 7, fours: 2, ducks: 2 },
];

const PlayerTable = () => {
  return (
    <div className="">
      <table className="min-w-full table-auto bg-black border-collapse text-sm ">
        <thead className="text-black">
          <tr>
            <th className="py-4 px-4 text-left bg-[#E07E27]">POS</th>
            <th className="py-4 px-4 text-left bg-[#E07E27] w-80">PLAYER</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">MAT</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">NO</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">RUNS</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">HS</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">AVE</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">S/R</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">100S</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">50S</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">6S</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">4S</th>
            <th className="py-4 px-4 text-left bg-[#E07E27]">DUCKS</th>
          </tr>
        </thead>
        <tbody className="text-[#D8D8D8]">
          {playerData.map((player, index) => (
            <tr key={index} className="border-b border-[#222222]">
              <td className="py-5 px-4 border-r border-[#222222]">{player.pos}</td>
              <td className="py-5 px-4 border-r border-[#222222]">{player.player}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.mat}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.no}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.runs}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.hs}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.ave}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.sr}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.hundreds}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.fifties}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.sixes}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.fours}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px]">{player.ducks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default Stats;
