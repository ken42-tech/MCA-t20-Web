import Image from 'next/image';
import React from 'react';

const PlayerProfile = () => {
  return (
    <div className='w-full '>
    <div className='w-full text-black flex flex-col gap-10'>
      <div className='w-full flex flex-col gap-4'>
        <p className='text-4xl font-bold uppercase'>Player Profile</p>
      </div>
      <div className=" overflow-hidden flex items-stretch justify-between bg-black">
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
    <div className="w-[70%] flex flex-col  text-white bg-black overflow-hidden">
      <div className='  px-6 py-2'>
        <p className='text-2xl font-bold py-3 uppercase'>Player Details</p>
        <div className='w-full flex flex-wrap gap-4'>
          {playerDataArray.map((item, index) => (
            <div key={index} className='flex items-center  lg:w-[30%]'>
              <p className='text-base'>{item.label}</p>
              <p className='text-base'>:{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-full flex flex-col bg-black '>
      <Table/>
      <Table/>
      </div>
      
    </div>
  );
};

const Table = () => {
    return <div className="h-1/2 w-full">
    <table className=" w-full h-full bg-black ">
      <thead className="text-black">
        <tr className='text-sm '>
          <th className=" py-5 text-left px-4   bg-[#E07E27] uppercase w-60">bATTING & FIELDING</th>
          <th className=" text-center  bg-[#E07E27]">MAT</th>
          <th className=" text-center  bg-[#E07E27]">NO</th>
          <th className=" text-center  bg-[#E07E27]">RUNS</th>
          <th className=" text-center  bg-[#E07E27]">HS</th>
          <th className=" text-center  bg-[#E07E27]">AVE</th>
          <th className=" text-center  bg-[#E07E27]">S/R</th>
          <th className=" text-center  bg-[#E07E27]">100S</th>
          <th className=" text-center  bg-[#E07E27]">50S</th>
          <th className=" text-center  bg-[#E07E27]">6S</th>
          <th className=" text-center  bg-[#E07E27]">4S</th>
          <th className=" text-center  bg-[#E07E27]">CT</th>
          <th className=" text-center  bg-[#E07E27]">ST</th>
        </tr>
      </thead>
      <tbody className="text-[#D8D8D8]">
        {battingData.map((player, index) => (
          <tr key={index} className="border-b border-[#222222] ">
            <td className=" px-4 text-left border-r text-sm  border-[#222222]">{player.season}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.mat}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.no}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.runs}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.hs}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.ave}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.sr}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.hundreds}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.fifties}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.sixes}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.fours}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.ct}</td>
            <td className=" text-center border-r text-[10px] border-[#222222]">{player.st}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

const PlayerCard = () => {
  return (
    <div className="w-[30%]  text-white flex flex-col items-center justify-center ">
      <div
        className="w-full px-10 py-6 flex flex-col justify-between gap-0 "
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
      <div className='w-full'>
        <div className='w-full  bg-[#141414] text-center text-xl font-semibold py-3'>
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
