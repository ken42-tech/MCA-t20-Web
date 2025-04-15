import Image from 'next/image';
import React from 'react';

const PlayerProfile = () => {
  return (
    <div className='w-full px-32 py-20'>
    <div className='w-full text-black flex flex-col gap-10'>
      <div className='w-full flex flex-col gap-4'>
        <p className='text-4xl font-bold uppercase'>Player Profile</p>
        <p className='text-base text-[#616161] font-semibold'>View all Stats</p>
      </div>
      <div className="w-full h-full flex">
        <PlayerCard />
        <PlayerTable />
      </div>
    </div>
    </div>
  );
};

const playerDataArray = [
  { label: "Team", value: "ARCS Andheri" },
  { label: "Batting Style", value: "Left handed" },
  { label: "Bowling Style", value: "Off Break" },
  { label: "Born", value: "31 Oct, 1994" },
  { label: "T20 Debut", value: "2018" }
];

const battingData = [
  {
    season: "Season 1",
    mat: 5,
    no: 0,
    runs: 43,
    hs: "27 VS SPL",
    ave: 10.60,
    sr: 155.88,
    hundreds: 0,
    fifties: 0,
    sixes: 7,
    fours: 2,
    ct: 2,
    st: 0
  },
  {
    season: "Season 2",
    mat: 5,
    no: 0,
    runs: 43,
    hs: "27 VS SPL",
    ave: 10.60,
    sr: 155.88,
    hundreds: 0,
    fifties: 0,
    sixes: 7,
    fours: 2,
    ct: 2,
    st: 0
  },
  {
    season: "OVERALL",
    mat: 5,
    no: 0,
    runs: 43,
    hs: "27 VS SPL",
    ave: 10.60,
    sr: 155.88,
    hundreds: 0,
    fifties: 0,
    sixes: 7,
    fours: 2,
    ct: 2,
    st: 0
  }
];

const PlayerTable = () => {
  return (
    <div className="w-[70%] h-[35%] flex flex-col items-start justify-start text-white bg-black overflow-hidden">
      <div className='w-full h-1/5 px-6 py-2'>
        <p className='text-2xl font-bold py-3'>Player Details</p>
        <div className='w-full flex flex-wrap gap-6 py-6'>
          {playerDataArray.map((item, index) => (
            <div key={index} className='flex items-center  w-[30%] gap-10'>
              <p className='text-sm'>{item.label}</p>
              <p className='text-sm'>:{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-full flex flex-col bg-black pb-[1.5px]'>
      <Table/>
      <Table/>
      </div>
      
    </div>
  );
};

const Table = () => {
    return <div className="w-full h-full">
    <table className="min-w-full table-auto bg-black border-collapse ">
      <thead className="text-black">
        <tr className='text-sm'>
          <th className="py-[13px] text-left px-4  bg-[#E07E27] uppercase w-80">bATTING & FIELDING</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">MAT</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">NO</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">RUNS</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">HS</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">AVE</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">S/R</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">100S</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">50S</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">6S</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">4S</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">CT</th>
          <th className="py-[13px] text-center px-4  bg-[#E07E27]">ST</th>
        </tr>
      </thead>
      <tbody className="text-[#D8D8D8]">
        {battingData.map((player, index) => (
          <tr key={index} className="border-b border-[#222222] ">
            <td className="py-2 px-4 text-left border-r text-sm  border-[#222222]">{player.season}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.mat}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.no}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.runs}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.hs}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.ave}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.sr}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.hundreds}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.fifties}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.sixes}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.fours}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.ct}</td>
            <td className="py-2 px-4 text-center border-r text-[10px] border-[#222222]">{player.st}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

const PlayerCard = () => {
  return (
    <div className="w-[30%] h-full text-white flex flex-col items-center justify-center ">
      <div
        className="w-full h-[60%] px-10 py-6 flex flex-col gap-0 "
        style={{
          background: "linear-gradient(180deg, #14344F 0%, #1C5C90 38.76%, #14344F 77.52%)",
        }}
      >
        <Image
          src={"/images/playerProfile/Player card (1).svg"}
          height={100}
          width={100}
          className="h-full w-full "
          alt='img'
        />
        <div className="bg-black flex items-center justify-between px-6 py-4">
          <Image
            src={"/images/home/innovation/image 24.svg"}
            width={10}
            height={10}
            className="w-8 h-8"
            alt='img'
          />
          Prithvi Shaw
          <Image
            src={"/images/home/about/BatIcon.svg"}
            width={10}
            height={10}
            className="w-8 h-8"
            alt='img'
          />
        </div>
      </div>
      <div className='w-full h-full'>
        <div className='w-full h-[30%] bg-[#141414] text-center text-xl font-semibold py-3'>
          Batsman
        </div>
        <div className='w-full flex items-center justify-around bg-black py-6'>
          <div className='flex flex-col items-center justify-center gap-2 '>
            <p className='text-xl font-semibold'>34</p>
            <p className='text-sm'>Matches</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2 py-4'>
            <p className='text-xl font-semibold'>235</p>
            <p className='text-sm'>Runs</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2 py-4'>
            <p className='text-xl font-semibold'>12</p>
            <p className='text-sm'>Wickets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
