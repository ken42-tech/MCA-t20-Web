import Image from 'next/image';
import React from 'react';

const StandingTable = ({ heading, showSelect }) => {
  return (
    <div className='w-full text-black flex flex-col gap-12'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-4xl font-bold uppercase'>{heading}</p>
        {showSelect && (
          <div className='w-1/2 flex items-center justify-end gap-8'>
            <label
            htmlFor="dropdown"
            className="text-sm font-semibold uppercase text-[#6A6A6A] mb-2 "
          >
            FIlter By
          </label>
            <DropDown options={["Season 1", "Season 2", "Season 3", "Season 4"]} bg="white" />
            <DropDown options={["All Teams", "Team 1", "Team 2", "Team 3"]} bg="#E07E27" />
          </div>
        )}
      </div>
      <div>
        <PlayerTable />
      </div>
    </div>
  );
};

const DropDown = ({ label, options, bg }) => {
    const bgColor = bg === "white" ? "bg-white" : "bg-[#E07E27]";
    const textColor = bg === "white" ? "text-[#E07E27]" : "text-white";
  
    return (
      <div className="flex items-center gap-6 relative w-48">
        <div className={`relative w-full`}>
          <select
            id="dropdown"
            className={`appearance-none ${bgColor} ${textColor} px-4 py-4 w-full border border-[#E07E27] text-base rounded`}
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
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            {bg == "white" ? <Image src={"/images/standings/dropdown.svg"} width={10} height={10} alt='img'/> : <Image src={"/images/standings/dropdownwhite.svg"} width={10} height={10} alt='img'/>}
          </div>
        </div>
      </div>
    );
  };
  

const playerData = [
  { Rank: 1, Team: "ARCS Andheri", mat: 5, won: 0, tied: 43, lost: "27 VS SPL", nr: 10.60, netrr: 155.88, pts: 0 },
  { Rank: 2, Team: "Aditya Tare", mat: 5, won: 0, tied: 43, lost: "27 VS SPL", nr: 10.60, netrr: 155.88, pts: 0 },
  { Rank: 3, Team: "Jay Bista", mat: 5, won: 0, tied: 43, lost: "27 VS SPL", nr: 10.60, netrr: 155.88, pts: 0 },
  { Rank: 4, Team: "Akhil Herwadkar", mat: 5, won: 0, tied: 43, lost: "27 VS SPL", nr: 10.60, netrr: 155.88, pts: 0 },
  { Rank: 5, Team: "Parag Khanapurkar", mat: 5, won: 0, tied: 43, lost: "27 VS SPL", nr: 10.60, netrr: 155.88, pts: 0 },
];

const PlayerTable = () => {
  return (
    <div className="">
      <table className="min-w-full table-auto bg-black border-collapse text-sm">
        <thead className="text-black">
          <tr>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">Rank</th>
            <th className="py-4 px-4 text-left bg-[#E07E27] uppercase w-80">Team</th>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">MP</th>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">WON</th>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">Last</th>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">Tied</th>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">N/R</th>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">Net RR</th>
            <th className="py-4 px-4 text-center bg-[#E07E27] uppercase">pts</th>
          </tr>
        </thead>
        <tbody className="text-[#D8D8D8]">
          {playerData.map((player, index) => (
            <tr key={index} className="border-b border-[#222222]">
              <td className="py-5 px-4 border-r border-[#222222] text-center">{player.Rank}</td>
              <td className="py-5 px-4 border-r border-[#222222]">{player.Team}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px] text-center">{player.mat}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px] text-center">{player.won}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px] text-center">{player.tied}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px] text-center">{player.lost}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px] text-center">{player.nr}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px] text-center">{player.netrr}</td>
              <td className="py-5 px-4 border-r border-[#222222] text-[10px] text-center">{player.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingTable;
