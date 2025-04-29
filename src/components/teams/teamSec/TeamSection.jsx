"use client";

import React, { useState } from 'react';
import { teamDetails, teamsLogo } from './teamLogo';

const TeamSection = () => {

  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);

  const handleLogoClick = (index) => {
    setSelectedTeamIndex(index);
  };

  return (
    <div className=' w-full'>
      <div className="w-full bg-cover bg-center pt-40 pb-40 flex flex-col gap-8 relative px-8 md:px-32 "
          style={{ backgroundImage: "url('/images/teams/hero/teamsBg.svg')"}}
          >
            <div className="section-width">

              {/* teams carousel section */}
              <div className='w-full flex gap-6 flex-row justify-between my-6 p-8 bg-black bg-opacity-[0.6]'>
              {teamsLogo.map((logo, index) => (
                <TeamLogo
                  key={index}
                  image={logo.carouselLogo}
                  onClick={() => handleLogoClick(index)}
                  isSelected={index === selectedTeamIndex}
                />
              ))}
              </div>

              {/* team details display section */}
              <div className='w-full min-h-40 flex flex-row justify-between gap-6 my-6 p-4 bg-black bg-opacity-[0.6]'>
                <div className='flex flex-row'>
                  <TeamDetailLogo image={teamsLogo[selectedTeamIndex].teamLogo} />
                    <div className=" w-px m-2 bg-gray-500"></div>
                    <div className="flex flex-col justify-center text-white">
                      <h2 className="text-4xl font-bold mx-4 ">
                        {teamDetails[selectedTeamIndex].name.split('\n').map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                      ))}
                      </h2>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-4 mx-4">
                <div className="flex flex-row items-start gap-4 px-6">
                  <span className="text-md font-semibold text-[#E07E27]">
                    Captain
                  </span>
                  <span className="text-md text-white pr-4">
                    -
                  </span>
                  <span className="text-md text-white">
                    {teamDetails[selectedTeamIndex].captain}
                  </span>
                </div>
                <div className="w-full border-t border-gray-700"></div>
                <div className="flex flex-row items-start gap-4 px-6">
                  <span className="text-md font-semibold text-[#E07E27]">
                    Coach
                  </span>
                  <span className="text-md text-white pr-4">
                    -
                  </span>
                  <span className="text-md text-white">
                    {teamDetails[selectedTeamIndex].coach}
                  </span>
                </div>
                <div className="w-full border-t border-gray-700"></div>
                <div className="flex flex-row items-start gap-4 px-6">
                  <span className="text-md font-semibold text-[#E07E27]">
                    Owner
                  </span>
                  <span className="text-md text-white pr-4">
                    -
                  </span>
                  <span className="text-md text-white">
                    {teamDetails[selectedTeamIndex].owner}
                  </span>
                </div>
                </div>
              </div>

              <div className='text-2xl font-semibold my-16'>UPCOMING MACTHES</div>
            </div>
      </div>

      {/* upcoming matches card */}
      <div className="relative w-full bg-white pt-32 pb-16 boarder-[rgba(194, 194, 194, 1)]">
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 section-width w-[70%] -mt-[286px]">
            <MatchCard headerText="Match 1" />
            <MatchCard headerText="Match 2" />
            <MatchCard headerText="Match 3" />
          </div>
        </div>
      </div>

    </div>

  );
};

const TeamLogo = ({ image, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center rounded-[5.5px]`}
    >
      <img
        src={image}
        alt="team-logo"
        className={`w-full h-full rounded-[5.5px] object-contain cursor-pointer transition-all duration-300 border-[1px]
          ${isSelected
            ? "border-grey-700 shadow-[0_2px_10px_rgba(224,126,39,0.6)] scale-[1.1]"
            : "border-none hover:border-none hover:shadow-[0_2px_10px_rgba(224,126,39,0.6)] hover:scale-[1.1]"
          }`}
      />
    </div>
  );
};


const TeamDetailLogo = ({ image }) => {
  return (
    <div className='flex item-center'>
      <img
        src={image}
        alt="team-detail-logo"
        className="w-56 h-auto px-4 object-contain"
      />
    </div>
  );
};

const MatchCard = ({ date = "24 MAR, 2025", time = "7:30 pm IST", status = "UPCOMING" }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl justify-between border-[rgba(194,194,194,1)] border-[2px] rounded-lg h-80 flex flex-col">
      {/* Header */}
      <div className="relative h-1/4 w-full rounded-t-xl flex overflow-hidden">

        <div
          className="flex flex-col justify-center px-4 text-white w-[55%] h-full z-10 px-6 gap-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 1)",
                    clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)"

}}
        >
          <span className="text-lg font-semibold">{date}</span>
          <div className='flex flex-row gap-2'>
            <img src="/images/elements/moon.svg" alt="moon" style={{ height: "15px", marginTop: "1.5px"}}  />
            <span className="text-sm">{time}</span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 h-full flex items-center w-[60%] justify-center text-black text-lg font-semibold pl-8"
          style={{
            backgroundColor: "rgba(224, 126, 39, 1)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)"
          }}
        >
          {status}
        </div>
      </div>

      {/* Content */}
      <div className="flex h-3/4 flex-row justify-center gap-10 text-center items-center p-10">
        <div className='w-[33%] flex flex-col justify-center items-center gap-6'>
          <img src="/images/teams/hero/teamLogo/arcs.svg" alt="arcs" />
          <span className='text-sm font-semibold text-black'>ARCS ANDHERI</span>
        </div>
        <div className='w-[33%] flex flex-col justify-center items-center gap-6'>
          <span className='text-[rgba(224,126,39,1)] font-bold italic tracking-widest'>VS</span>
          <span className='text-[rgba(134,134,134,1)] text-xs font-semibold'>MATCH 25/74</span>
        </div>
        <div className='w-[33%] flex flex-col justify-center items-center gap-6'>
          <img src="/images/teams/hero/teamLogo/thane.svg" alt="arcs" />
          <span className='text-sm font-semibold text-black'>EAGLE THANE STRIKERS</span>
        </div>
      </div>
    </div>
  );
};




export default TeamSection;
