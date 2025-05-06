import Navbar from "@/components/layout/navbar/navbar";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import Table from "@/components/common/Table";
import Image from "next/image";

const page = () => {
  const battingData = [
    {
      POS: 1,
      PLAYER: "Prithvi Shaw",
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
      POS: 2,
      PLAYER: "Aditya Tare",
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
      POS: 3,
      PLAYER: "Jay Bista",
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
      POS: 4,
      PLAYER: "Akhil Herwadkar",
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
      POS: 5,
      PLAYER: "Parag Khanapurkar",
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
      POS: 6,
      PLAYER: "Hersh Tank",
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
      POS: 7,
      PLAYER: "Suryakumar Yadav",
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
      POS: 8,
      PLAYER: "Shubham Ranjane",
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
      POS: 9,
      PLAYER: "Aakarshit Gomel",
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
      POS: 10,
      PLAYER: "Sujit Nayak",
      team: "Bandra Blasters",
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
  const battingHeaders = [
    "POS",
    "PLAYER",
    "MAT",
    "NO",
    "RUNS",
    "HS",
    "AVE",
    "S/R",
    "100S",
    "50S",
    "4S",
    "6S",
    "DUCKS",
  ];
  const battingKeys = [
    "pos",
    "player",
    "mat",
    "no",
    "runs",
    "hs",
    "ave",
    "sr",
    "hundreds",
    "fifties",
    "fours",
    "sixes",
    "ducks",
  ];
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
      team: "Bandra Blasters",
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
      team: "Bandra Blasters",
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
  const battingRenderers = {
    player: (value, row) => (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-900 overflow-hidden relative">
          <Image
            src={row.playerImg}
            width={50}
            height={50}
            alt={value}
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{value}</p>
          <div className="flex items-center gap-2 text-xs">
            <Image src={row.teamLogo} width={16} height={16} alt={row.team} />
            <span className="text-gray-400">{row.team}</span>
          </div>
        </div>
      </div>
    ),
  };

  const bowlingHeaders = [
    "POS",
    "PLAYER",
    "MAT",
    "OVERS",
    "MAIDENS",
    "RUNS",
    "WKTS",
    "BBI",
    "AVG",
    "ECON",
    "S/R",
    "3W",
    "5W",
  ];
  const bowlingKeys = [
    "pos",
    "player",
    "mat",
    "overs",
    "maidens",
    "runs",
    "wkts",
    "bbi",
    "avg",
    "econ",
    "sr",
    "threeW",
    "fiveW",
  ];
  const bowlingRenderers = {
    player: (value, row) => (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-900 overflow-hidden relative">
          <Image
            src={row.playerImg}
            width={50}
            height={50}
            alt={value}
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{value}</p>
          <div className="flex items-center gap-2 text-xs">
            <Image src={row.teamLogo} width={16} height={16} alt={row.team} />
            <span className="text-gray-400">{row.team}</span>
          </div>
        </div>
      </div>
    ),
  };
  return (
    <>
      <AboutHero />
      <section className="section-width">
        <Table
          headers={battingHeaders}
          data={battingData}
          rowKeys={battingKeys}
          customRenderers={battingRenderers}
        />
      </section>
      <Table
        headers={bowlingHeaders}
        data={bowlingData}
        rowKeys={bowlingKeys}
        customRenderers={bowlingRenderers}
      />
    </>
  );
};

export default page;
