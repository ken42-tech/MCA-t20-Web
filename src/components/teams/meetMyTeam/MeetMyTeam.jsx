import Image from 'next/image';
import React from 'react';

const MeetMyTeam = () => {
  const teamData = [
    { id: '02', name: 'Aditya Tare', points: '89', role: 'Batsman' },
    { id: '03', name: 'Jay Bista', points: '', role: 'All Rounder' },
    { id: '04', name: 'Akhil Herwadkar', points: '', role: 'Batsman' },
    { id: '05', name: 'Parag Khanapurkar', points: '', role: 'Wicket Keeper' },
    { id: '02', name: 'Aditya Tare', points: '', role: 'All Rounder' },
    { id: '02', name: 'Aditya Tare', points: '522', role: 'Bowler' },
    { id: '03', name: 'Jay Bista', points: '', role: 'Batsman' },
    { id: '04', name: 'Akhil Herwadkar', points: '', role: 'All Rounder' },
    { id: '05', name: 'Parag Khanapurkar', points: '', role: 'Batsman' },
  ];

  return (
    <div className="w-full px-32 bg-white py-20 flex flex-col gap-12">
      <div className="w-full">
        <p className="w-full uppercase text-black text-4xl font-bold">
          Meet The Team
        </p>
      </div>
      <div className="overflow-x-auto flex gap-[2px]">
        <table className="w-1/2 bg-black text-white ">
          <tbody>
            {teamData.map((player, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-4">{player.id}</td>
                <td className="">
                  <div className="h-12 w-12 rounded-full bg-[#242424] flex items-center justify-center overflow-hidden">
                    <Image
                      src={"/images/teams/meetmyteam/image 117.svg"}
                      width={20}
                      height={20}
                      className="w-full h-full"
                      alt='img'
                    />
                  </div>
                </td>
                <td className="py-2 px-4 text-lg">{player.name}</td>
                <td className="py-2 px-4 text-center">
                  <Image
                    src={"/images/teams/meetmyteam/Layer_1 (1).svg"}
                    width={35}
                    height={35}
                    className="w-10 h-10"
                    alt='img'
                  />
                </td>
                <td className="py-2 pl-16 text-lg">{player.role}</td>
                <td className="py-2 px-4 flex justify-end">
                  <div className="h-10 w-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src={"/images/teams/meetmyteam/uil_arrow.svg"}
                      width={20}
                      height={20}
                      className="w-full h-full"
                      alt='img'
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-1/2 bg-black text-white ">
          <tbody>
            {teamData.map((player, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-4">{player.id}</td>
                <td className="">
                  <div className="h-12 w-12 rounded-full bg-[#242424] flex items-center justify-center overflow-hidden">
                    <Image
                      src={"/images/teams/meetmyteam/image 117.svg"}
                      width={20}
                      height={20}
                      className="w-full h-full"
                      alt='img'
                    />
                  </div>
                </td>
                <td className="py-2 px-4 text-lg">{player.name}</td>
                <td className="py-2 px-4 text-center">
                  <Image
                    src={"/images/teams/meetmyteam/Layer_1 (1).svg"}
                    width={35}
                    height={35}
                    className="w-10 h-10"
                    alt='img'
                  />
                </td>
                <td className="py-2 pl-16 text-lg">{player.role}</td>
                <td className="py-2 px-4 flex justify-end">
                  <div className="h-10 w-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src={"/images/teams/meetmyteam/uil_arrow.svg"}
                      width={20}
                      height={20}
                      className="w-full h-full"
                      alt='img'
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetMyTeam;
