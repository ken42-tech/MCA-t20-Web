"use client"
import Card from '@/components/fixtures/card/Card';
import Hero from '@/components/hero/Hero';
import Image from 'next/image';
import React, { useState } from 'react';

const page = () => {
  return (
    <div className="w-full bg-white">
      <Hero
        imgUrl="/images/teams/hero/bg.svg"
        heading="Fixtures"
        subheading="Player Profile"
      />
      <div className="w-full px-32">
        <div className="w-full flex items-center justify-between text-black pt-20">
          <p className="text-4xl font-bold uppercase">Season 1 Fixtures</p>
          <div className="w-1/2 flex items-center gap-4 justify-end ">
            <p className='text-base text-[#616161] font-bold uppercase'>Filter By</p>
            <DropDown  options={["Season 1", "Season 2", "Season 3"]} bg={"white"} />
            <DropDown  options={["All teams", "Team 1", "Team 2"]}  />
          </div>
        </div>
        <div className='w-full'>
            <Card />
        </div>
      </div>
    </div>
  );
}

const DropDown = ({ options, bg }) => {
  const bgColor = bg === "white" ? "bg-white" : "bg-[#E07E27]";
  const textColor = bg === "white" ? "text-[#E07E27]" : "text-white";

  return (
    <>
      <div className="flex items-center gap-2 w-40 relative">
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


export default page;
