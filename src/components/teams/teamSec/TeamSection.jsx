"use client";

import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  return (
    <div>
      <div className="w-full bg-black py-10 mb-8 flex flex-col gap-8 relative px-32 section-width">
        <p className="text-4xl font-bold leading-snug text-white">TEAMS</p>

        <div className="w-full flex flex-col gap-7 relative">
          <div className="w-full overflow-x-auto py-8 scrollbar-hide">
            <div className="flex items-center gap-12 min-w-max">
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
            </div>
          </div>
          <div className="w-full flex justify-between py-4 absolute bottom-0">
            <Image
              src={"/images/teams/hero/line-md_arrow-up.svg"}
              width={10}
              height={10}
              className="w-4 h-4"
              alt="arrow-left"
            />
            <Image
              src={"/images/teams/hero/line-md_arrow-up (1).svg"}
              width={10}
              height={10}
              className="w-4 h-4"
              alt="arrow-right"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-6 gap-8">
          <p className="text-2xl font-bold uppercase text-white">upcoming matches</p>
          <div className="w-full flex gap-6">
            <Card isLive={true} />
            <Card isLive={true} />
            <Card isLive={true} />
            <Card isLive={true} />
            <Card isLive={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselCard = () => {
  return (
    <div>
      <div className="flex gap-5 group">
        <div className="w-24 h-24 rounded-full group-hover:bg-white transition-all duration-1000 bg-[#291C18] flex items-center justify-center p-4">
          <Image
            src={"/images/teams/hero/image 18.svg"}
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full"
            alt="Logo"
          />
        </div>
        <div className="w-auto h-28 flex items-center justify-center">
          <p className="text-[10px] uppercase leading-snug text-white">
            Aakash Tigers Mumbai <br /> Western Suburbs
          </p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ isLive }) => {
  return (
    <div className="w-[20%] h-28 border-[0.5px] rounded-lg overflow-hidden">
      <div className="w-full h-[20%] bg-[#E07E27] flex items-center justify-between px-6">
        <p className="font-bold text-white text-[8px] uppercase">SEASON 1 2025</p>
        <p className="font-bold text-white text-[8px] uppercase">3 MONTHS TO GO</p>
      </div>
      <div className={`w-full h-full text-white ${isLive ? "bg-black" : "bg-[#F5F5F5]"}`}>
        <div className="w-full h-[80%] flex items-center justify-between px-2">
          {/* Team A */}
          <div className="w-[35%] h-full flex flex-col items-center justify-between gap-2 py-2">
            <div className="flex h-[80%] flex-col items-center justify-center gap-2">
              <Image
                src={"/images/home/innovation/image 24.svg"}
                width={1}
                height={1}
                className="w-7 h-7"
                alt="team-a"
              />
              <p className={`text-[7.411px] font-medium leading-none text-center ${!isLive && "text-black"}`}>
                TRIUMPH KNIGHTS MUMBAI NORTH EAST
              </p>
            </div>
            <p className="text-[#E07E27] text-[6px] font-bold">MUMBAI, INDIA</p>
          </div>

          <div className="w-[20%] h-full flex flex-col items-center justify-center">
            <p className="text-[#E07E27] text-[6px]">vs</p>
          </div>

          <div className="w-[35%] h-full flex flex-col items-center justify-between gap-2 py-2">
            <div className="flex h-[80%] flex-col items-center justify-center gap-2">
              <Image
                src={"/images/home/innovation/image 19.svg"}
                width={1}
                height={1}
                className="w-7 h-7"
                alt="team-b"
              />
              <p className={`text-[7.411px] font-medium leading-none text-center ${!isLive && "text-black"}`}>
                Eagle THANE STRIKERS
              </p>
            </div>
            <p className="text-[#E07E27] text-[6px] font-bold">MATCH INFO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
