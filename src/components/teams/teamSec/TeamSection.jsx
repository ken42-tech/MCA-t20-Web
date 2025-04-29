"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { teamDetails, teamsLogo } from './teamLogo';

const TeamSection = () => {

  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);

  const handleLogoClick = (index) => {
    setSelectedTeamIndex(index);
  };

  return (
    <div>
      <div className="w-full bg-cover bg-center pt-40 pb-16 flex flex-col gap-8 relative px-8 md:px-32 "
          style={{ backgroundImage: "url('/images/teams/hero/teamsBg.svg')"}}
          >
            <div className="section-width">
              <div className='w-full flex gap-2 flex-row justify-between my-6 p-8 bg-black bg-opacity-[0.6]'>
              {teamsLogo.map((logo, index) => (
                <TeamLogo
                  key={index.id}
                  image={logo.carouselLogo}
                  onClick={() => handleLogoClick(index)}
                  isSelected={index === selectedTeamIndex}
                />
              ))}
              </div>
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
            </div>

      </div>
      
    </div>
  );
};

const TeamLogo = ({ image, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center rounded-[4.5px] cursor-pointer transition-all duration-300
    border-2 ${isSelected ? "border-[#E07E27] shadow-[0_0_10px_#E07E27]" : "border-transparent hover:border-[#E07E27] hover:shadow-[0_0_6px_#E07E27]"}`}
    >
      <img
        src={image}
        alt="team-logo"
        className="w-full h-full object-contain"
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



export default TeamSection;
