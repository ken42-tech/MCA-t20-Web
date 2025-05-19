"use client"; // This is required to mark this as a client-side component
import React, { useState } from "react";
import Image from "next/image";
import Hero from "@/components/hero/Hero";

function ScoreCard({ match }) {
  const homeId = match.Matchdetail.Team_Home;
  const awayId = match.Matchdetail.Team_Away;
  const teams = match.Teams;
  const innings = match.Innings || [];

  const homeTeam = teams[homeId];
  const awayTeam = teams[awayId];
  const homeTeamName = homeTeam?.Name_Full ?? "Unknown Team";
  const awayTeamName = awayTeam?.Name_Full ?? "Unknown Team";

  const homeLogo = `/images/fixtures/${homeTeam?.Name_Short?.toLowerCase()}.svg`;
  const awayLogo = `/images/fixtures/${awayTeam?.Name_Short?.toLowerCase()}.svg`;

  const homeInnings = innings.find((i) => i.Battingteam === homeId) || {};
  const awayInnings = innings.find((i) => i.Battingteam === awayId) || {};

  const [activeInnings, setActiveInnings] = useState("home"); // 'home' or 'away'

  const batting =
    (activeInnings === "home" ? homeInnings : awayInnings).Batsmen || [];
  const extras = {
    byes: Number(
      (activeInnings === "home" ? homeInnings : awayInnings).Byes || 0
    ),
    legByes: Number(
      (activeInnings === "home" ? homeInnings : awayInnings).Legbyes || 0
    ),
    wides: Number(
      (activeInnings === "home" ? homeInnings : awayInnings).Wides || 0
    ),
    noBalls: Number(
      (activeInnings === "home" ? homeInnings : awayInnings).Noballs || 0
    ),
    penalty: Number(
      (activeInnings === "home" ? homeInnings : awayInnings).Penalty || 0
    ),
  };
  extras.total = Object.values(extras).reduce((sum, v) => sum + v, 0);

  const fallOfWickets =
    (activeInnings === "home" ? homeInnings : awayInnings).FallofWickets || [];
  const partnerships =
    (activeInnings === "home" ? homeInnings : awayInnings).Partnerships || [];

  const switchTab = (inningsType) => {
    setActiveInnings(inningsType);
  };

  const getBowlerName = (bowlerId) => {
    const bowlerPlayer = Object.values(
      teams[activeInnings === "home" ? awayId : homeId].Players
    ).find((player) => player.Position === bowlerId);
    return bowlerPlayer?.Name_Full || "Unknown Bowler";
  };

  const didNotBat = batting.filter((p) => !p.Howout);

  const oppositeTeamName =
    activeInnings === "home" ? awayTeamName : homeTeamName;

  return (
    <>
      <Hero
        imgUrl="/images/teams/hero/bg.svg"
        heading="Fixtures"
        subheading="Player Profile"
      />
      <div className=" section-width">
        <div className="bg-[url('/images/scorecard/bgcardmain.svg')] bg-cover text-white mt-10 sm:mt-20 rounded-lg">
          <div className="bg-[#203376] text-center py-1 rounded-lg">
            <span className="text-sm font-medium uppercase">
              {match.Matchdetail.Equation}
            </span>
          </div>
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16">
            {/* Left Section: Home Team Logo and Score */}
            <div className="flex items-center space-x-3">
              <Image
                src={`/images/scorecard/${homeTeamName}.svg`}
                alt={homeTeamName}
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="font-semibold uppercase text-sm">
                {homeTeamName}
              </div>
            </div>

            {/* Center Section: Match Details */}
            <div className="py-4 flex flex-col items-center sm:flex-row sm:justify-center px-4 sm:px-16">
              <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
                {/* Home score */}
                <div className="flex items-baseline space-x-1 whitespace-nowrap">
                  <span className="text-2xl font-bold text-orange-400">
                    {homeInnings.Total}/{homeInnings.Wickets}
                  </span>
                  <span className="text-sm">({homeInnings.Overs} Overs)</span>
                </div>

                {/* VS */}
                <span className="my-2 sm:my-0 text-xl font-bold">VS</span>

                {/* Away score */}
                <div className="flex items-baseline space-x-1 whitespace-nowrap">
                  <span className="text-2xl font-bold text-orange-400">
                    {awayInnings.Total}/{awayInnings.Wickets}
                  </span>
                  <span className="text-sm">({awayInnings.Overs} Overs)</span>
                </div>
              </div>
            </div>

            {/* Right Section: Away Team Logo and Score */}
            <div className="flex items-center space-x-3">
              <div className="font-semibold uppercase text-sm text-right">
                {awayTeamName}
              </div>
              <Image
                src={`/images/scorecard/${awayTeamName}.svg`}
                alt={awayTeamName}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-sm font-medium uppercase bg-[#2D3F87] text-center py-1 rounded-lg px-2">
              {match.Matchdetail.Equation}
            </span>
          </div>
        </div>

        <div className="w-full overflow-x-auto ">
          <div className="w-full">
            <div className="min-w-[1000px]">
              {/* Tabs for switching innings */}
              <div className="flex justify-center mt-10 bg-transparent rounded-t-lg bg-gradient-to-r from-[#203376] via-black to-[#203376] min-w-[800px]">
                <button
                  onClick={() => switchTab("home")}
                  className={`flex-1 px-4 py-2 text-center ${
                    activeInnings === "home"
                      ? "text-orange-500 border-b-4 border-orange-500"
                      : "bg-transparent text-white"
                  }`}
                >
                  {homeTeamName}
                </button>
                <button
                  onClick={() => switchTab("away")}
                  className={`flex-1 px-4 py-2 text-center ${
                    activeInnings === "away"
                      ? "text-orange-500 border-b-4 border-orange-500"
                      : "bg-transparent text-white"
                  }`}
                >
                  {awayTeamName}
                </button>
              </div>

              {/* Scorecard */}
              <div className="bg-[#0F1A2D]  shadow-md mb-8 rounded-b-lg">
                <div className="flex items-center bg-[#0F1A2D] text-white px-6 py-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <Image
                      src={
                        activeInnings === "home"
                          ? `/images/scorecard/${homeTeamName}.svg`
                          : `/images/scorecard/${awayTeamName}.svg`
                      }
                      alt={
                        activeInnings === "home" ? homeTeamName : awayTeamName
                      }
                      width={100}
                      height={100}
                    />
                    <span className="uppercase font-medium">
                      {activeInnings === "home" ? homeTeamName : awayTeamName}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">
                      {
                        (activeInnings === "home" ? homeInnings : awayInnings)
                          .Total
                      }
                      /
                      {
                        (activeInnings === "home" ? homeInnings : awayInnings)
                          .Wickets
                      }
                    </span>
                    <span className="ml-2">
                      (
                      {
                        (activeInnings === "home" ? homeInnings : awayInnings)
                          .Overs
                      }{" "}
                      Overs)
                    </span>
                  </div>
                </div>

                {/* Batting Table */}
                <div className="overflow-x-auto bg-[#0F1A2D] text-white px-6 py-4 rounded-b-lg">
                  <div className="uppercase font-bold mb-2">Batting</div>
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-2">Batsman</th>
                        <th className="py-2">Dismissal</th>
                        <th className="py-2">R</th>
                        <th className="py-2">B</th>
                        <th className="py-2">4S</th>
                        <th className="py-2">6S</th>
                        <th className="py-2">S/R</th>
                      </tr>
                    </thead>
                    <tbody>
                      {batting
                        .filter((p) => p.Howout)
                        .map((p, i) => (
                          <tr key={i} className="border-b border-gray-800">
                            <td className="py-2">
                              {
                                teams[
                                  activeInnings === "home" ? homeId : awayId
                                ].Players[p.Batsman]?.Name_Full
                              }
                            </td>
                            <td className="py-2">{p.Howout}</td>
                            <td className="py-2">{p.Runs}</td>
                            <td className="py-2">{p.Balls}</td>
                            <td className="py-2">{p.Fours}</td>
                            <td className="py-2">{p.Sixes}</td>
                            <td className="py-2">{p.Strikerate}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Did Not Bat */}
                {didNotBat.length > 0 && (
                  <div className="bg-[#0F1A2D] text-white px-6 py-4 border-t border-gray-700 ">
                    <div className="uppercase font-bold mb-2">Did Not Bat</div>
                    <ul className="text-sm">
                      {didNotBat.map((p, i) => (
                        <li key={i} className="py-2">
                          {
                            teams[activeInnings === "home" ? homeId : awayId]
                              .Players[p.Batsman]?.Name_Full
                          }
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:my-20 my-10">
          {fallOfWickets.length > 0 && (
            <div className="bg-[#E5EBFF] px-4 rounded-lg pb-5">
              <div className="flex items-center">
                <Image
                  src={
                    activeInnings === "home"
                      ? `/images/scorecard/${homeTeamName}.svg`
                      : `/images/scorecard/${awayTeamName}.svg`
                  }
                  alt={activeInnings === "home" ? homeTeamName : awayTeamName}
                  width={100}
                  height={100}
                  className="my-5"
                />
                <h3 className="text-2xl font-semibold text-black uppercase">
                  Fall of Wickets
                </h3>
              </div>
              <div className="text-black">
                {fallOfWickets.map((wicket, index) => (
                  <span key={index}>
                    {wicket.Score} (
                    {
                      teams[activeInnings === "home" ? homeId : awayId].Players[
                        wicket.Batsman
                      ]?.Name_Full
                    }
                    , {wicket.Overs} Overs)
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full overflow-x-auto">
          <div className="w-full">
            {/* Bowling Stats */}
            <div className="bg-blue-900 text-white rounded-lg mb-10 min-w-[1000px]">
              <div className="flex items-center bg-[url('/images/scorecard/bgcard.svg')] rounded-t-lg">
                <Image
                  src={
                    activeInnings === "home"
                      ? `/images/scorecard/${awayTeamName}.svg`
                      : `/images/scorecard/${homeTeamName}.svg`
                  }
                  alt={activeInnings === "home" ? homeTeamName : awayTeamName}
                  width={100}
                  height={100}
                  className="my-5"
                />
                <h3 className="text-xl font-semibold mb-4">
                  {oppositeTeamName}
                </h3>
              </div>
              <div className=" px-3 sm:px-6 bg-[#0F1A2D] rounded-b-lg ">
                <table className="table-fixed w-full">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-center">Bowler</th>
                      <th className="py-2 px-4 text-center">O</th>
                      <th className="py-2 px-4 text-center">M</th>
                      <th className="py-2 px-4 text-center">R</th>
                      <th className="py-2 px-4 text-center">W</th>
                      <th className="py-2 px-4 text-center">NB</th>
                      <th className="py-2 px-4 text-center">WD</th>
                      <th className="py-2 px-4 text-center">E/R</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(activeInnings === "home"
                      ? homeInnings
                      : awayInnings
                    ).Bowlers?.map((bowler, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 text-center">
                          {
                            teams[activeInnings === "home" ? awayId : homeId]
                              .Players[bowler.Bowler]?.Name_Full
                          }
                        </td>
                        <td className="py-2 px-4 text-center">
                          {bowler.Overs}
                        </td>
                        <td className="py-2 px-4 text-center">
                          {bowler.Maidens}
                        </td>
                        <td className="py-2 px-4 text-center">{bowler.Runs}</td>
                        <td className="py-2 px-4 text-center">
                          {bowler.Wickets}
                        </td>
                        <td className="py-2 px-4 text-center">
                          {bowler.Noballs}
                        </td>
                        <td className="py-2 px-4 text-center">
                          {bowler.Wides}
                        </td>
                        <td className="py-2 px-4 text-center">
                          {bowler.Economyrate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScoreCard;
