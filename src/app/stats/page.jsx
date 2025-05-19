"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import PlayerDetailsHero from "@/components/stats/PlayerDetailsHero";
import { stats } from "@/utilis/stats/statsdata";

// Extract available seasons
const seasons = Object.keys(stats[Object.keys(stats)[0]].seasons);

// Build raw data (unsorted) for a category + season
const makeCategoryData = (category, season) => {
  return Object.values(stats)
    .map((p) => {
      const s = p.seasons[season]?.[category] || {};
      if (category === "batting") {
        return {
          player: p.name_full,
          team: "",
          teamLogo: "",
          playerImg: "",
          mat: s.matches_played || 0,
          no: s.not_outs || 0,
          runs: s.runs || 0,
          hs: s.highest_score || 0,
          ave: s.average || 0,
          sr: s.strike_rate || 0,
          hundreds: s.hundreds || 0,
          fifties: s.fifties || 0,
          fours: s.fours || 0,
          sixes: s.sixes || 0,
          ducks: 0,
        };
      }
      if (category === "bowling") {
        return {
          player: p.name_full,
          team: "",
          teamLogo: "",
          playerImg: "",
          mat: s.matches_played || 0,
          overs: +((s.balls_bowled || 0) / 6).toFixed(1),
          maidens: s.maidens || 0,
          runs: s.runs_conceded || 0,
          wkts: s.wickets || 0,
          bbi: `${s.wickets || 0}/${s.runs_conceded || 0}`,
          avg: s.average || 0,
          econ: s.economy_rate || 0,
          sr: s.strike_rate || 0,
          threeW: s.three_wickets || 0,
          fiveW: s.five_wickets || 0,
        };
      }
      if (category === "fielding") {
        const runOuts = (s.run_outs_direct || 0) + (s.run_outs_assisted || 0);
        const dismissals = (s.catches || 0) + (s.stumpings || 0) + runOuts;
        return {
          player: p.name_full,
          team: "",
          teamLogo: "",
          playerImg: "",
          mat: s.matches_played || 0,
          catches: s.catches || 0,
          dismissals,
          runOuts,
          stumpings: s.stumpings || 0,
        };
      }
      return null;
    })
    .filter(Boolean);
};

// Sort the raw data based on selected sort option and category, then assign positions
const sortData = (data, category, sortBy) => {
  const sorted = [...data];

  if (category === "batting") {
    switch (sortBy) {
      case "Most Runs":
        sorted.sort((a, b) => b.runs - a.runs);
        break;
      case "Least Runs":
        sorted.sort((a, b) => a.runs - b.runs);
        break;
      case "Most Centuries":
        sorted.sort((a, b) => b.hundreds - a.hundreds);
        break;
      case "Most Half Centuries":
        sorted.sort((a, b) => b.fifties - a.fifties);
        break;
    }
  } else if (category === "bowling") {
    switch (sortBy) {
      case "Most Wickets":
        sorted.sort((a, b) => b.wkts - a.wkts);
        break;
      case "Best Economy":
        sorted.sort((a, b) => a.econ - b.econ);
        break;
      case "Best Average":
        sorted.sort((a, b) => a.avg - b.avg);
        break;
      case "Best Strike Rate":
        sorted.sort((a, b) => a.sr - b.sr);
        break;
    }
  } else {
    switch (sortBy) {
      case "Most Catches":
        sorted.sort((a, b) => b.catches - a.catches);
        break;
      case "Most Run Outs":
        sorted.sort((a, b) => b.runOuts - a.runOuts);
        break;
      case "Most Stumpings":
        sorted.sort((a, b) => b.stumpings - a.stumpings);
        break;
    }
  }

  return sorted.map((row, i) => ({ pos: i + 1, ...row }));
};

// Reusable dropdown component
const DropDown = ({ label, options, value, onChange, bg = "white" }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-60 relative">
    <label className="text-sm font-semibold uppercase text-[#6A6A6A] mb-1 md:mb-2 w-full md:w-[50%]">
      {label}
    </label>
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className={`appearance-none bg-${bg} text-[#E07E27] px-4 py-2 w-full border border-[#E07E27] text-base rounded`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.replace(/_/g, " ")}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <Image
          src="/images/standings/dropdown.svg"
          width={10}
          height={10}
          alt="Dropdown Icon"
        />
      </div>
    </div>
  </div>
);

// Table component driven by `data` prop instead of hardcoded arrays
const PlayerTable = ({ selected, onPlayerSelect, selectedPlayer, data }) => {
  // Table headers based on category
  const getTableHeaders = () => {
    if (selected === "batting")
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
    if (selected === "bowling")
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
  };

  // Table rows based on passed-in data
  const getTableRows = () =>
    data.map((player) => {
      const isSelected = player.player === selectedPlayer.player;
      const rowClass = isSelected
        ? "border-b bg-[#15243A] border-[#222222] cursor-pointer"
        : "border-b bg-[#0F1A2D] border-[#222222] hover:bg-[#15243A] cursor-pointer";

      return (
        <tr
          key={player.pos}
          className={rowClass}
          onClick={() => onPlayerSelect(player)}
        >
          <td className="py-2 px-4 border-r text-center border-[#222222]">
            {player.pos}
          </td>
          <td className="py-2 px-4 border-r border-[#222222]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-900 overflow-hidden relative">
                {player.playerImg && (
                  <Image
                    src={player.playerImg}
                    width={100}
                    height={100}
                    alt={player.player}
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <p className="font-semibold">{player.player}</p>
                {player.team && (
                  <div className="flex items-center gap-2 text-xs">
                    <Image
                      src={player.teamLogo}
                      width={16}
                      height={16}
                      alt={player.team}
                    />
                    <span className="text-gray-400">{player.team}</span>
                  </div>
                )}
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
              <td className="py-2 px-4 border-r text-center bg-[#0B1220] border-[#222222]">
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
              <td className="py-2 px-4 border-r text-center border-[#222222]">
                {player.wkts}
              </td>
              <td className="py-2 px-4 border-r text-center border-[#222222]">
                {player.bbi}
              </td>
              <td className="py-2 px-4 border-r text-center bg-[#0B1220] border-[#222222]">
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
              <td className="py-2 px-4 border-r text-center bg-[#0B1220] border-[#222222]">
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
      );
    });

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

export default function Stats() {
  const [selected, setSelected] = useState("batting");
  const [season, setSeason] = useState(seasons[0]);
  const [sortBy, setSortBy] = useState("Most Runs");

  // raw, unsorted data
  const rawData = useMemo(
    () => makeCategoryData(selected, season),
    [selected, season]
  );
  // sorted + positioned data
  const data = useMemo(
    () => sortData(rawData, selected, sortBy),
    [rawData, selected, sortBy]
  );

  const [selectedPlayer, setSelectedPlayer] = useState(data[0] || {});

  useEffect(() => {
    setSelectedPlayer(data[0] || {});
  }, [data]);

  return (
    <div className="w-full">
      <PlayerDetailsHero player={selectedPlayer} selectedTab={selected} />

      <div className="section-width py-12 flex flex-col gap-10 bg-white text-black">
        {/* Tabs + Season Selector */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {["batting", "bowling", "fielding"].map((tab) => (
            <p
              key={tab}
              onClick={() => setSelected(tab)}
              className={`font-semibold text-xl uppercase pb-2 whitespace-nowrap cursor-pointer ${
                selected === tab
                  ? "border-b-4 border-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
            >
              {tab}
            </p>
          ))}
          <DropDown
            label="Season"
            options={seasons}
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            bg="white"
          />
          <DropDown
            label="Sort by"
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
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            bg="white"
          />
          <DropDown
            label="Team"
            options={["All", "Team 1", "Team 2", "Team 3"]}
            bg="white"
          />
        </div>

        {/* Stats Table */}
        <PlayerTable
          selected={selected}
          onPlayerSelect={setSelectedPlayer}
          selectedPlayer={selectedPlayer}
          data={data}
        />
      </div>
    </div>
  );
}
