"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Technology = () => {

  const [selectedTab, setSelectedTab ]= useState("All")

  return (
    <div className="pb-10  h-[120vh] w-full bg-white section-width">
      <div className=" w-full h-full px-32 pt-10 text-black flex flex-col gap-4">
        <p className="text-4xl font-bold">LATEST UPDATES</p>
        <Link href={"/latestUpdates"}> <p className="text-[#616161] text-base font-bold">View all Updates</p></Link>

        <div className="w-full h-full flex flex-col justify-between  mt-4 bg-black">
          <div className="w-full h-24 text-white flex items-center cursor-pointer ">
            <div
              onClick={() => setSelectedTab("All")}
              className={`text-xl h-full flex items-center justify-center px-10  ${
                selectedTab == "All" ? "bg-[#E07E27]  text-black" : ""
              }`}
            >
              All
            </div>
            <div
              onClick={() => setSelectedTab("Latest")}
              className={`text-xl h-full flex items-center justify-center px-10 ${
                selectedTab == "Latest" ? "bg-[#E07E27] text-black" : ""
              }`}
            >
              Latest
            </div>
            <div
              onClick={() => setSelectedTab("Reviews")}
              className={`text-xl h-full flex items-center justify-center px-10  ${
                selectedTab == "Reviews" ? "bg-[#E07E27] text-black" : ""
              }`}
            >
              Reviews
            </div>
            <div
              onClick={() => setSelectedTab("NewSection")}
              className={`text-xl h-full flex items-center justify-center px-10  ${
                selectedTab == "NewSection" ? "bg-[#E07E27] text-black" : ""
              }`}
            >
              New Season{" "}
            </div>
          </div>
          <div className="w-full h-[85%] flex justify-between">
            <div className="w-[65%] relative">
              <Image
                src={"/images/home/tech/bg.svg"}
                width={100}
                height={100}
                className="w-full h-full object-cover absolute z-0"
                alt="img"
              />
              <div className="w-[50%] h-full z-10 flex flex-col  justify-end text-white relative p-10 ">
                <p className="text-3xl font-bold ">
                  Prithvi Shaw has helped improve my game.
                </p>
                <div className="w-[80%] flex items-center justify-between">
                  <p className="text-[#E07E27] pt-3 text-sm flex items-center justify-center gap-2">
                    <Image
                      src={"/images/home/tech/Dot.svg"}
                      width={10}
                      height={10}
                      className="h-1 w-1"
                      alt="img"
                    />{" "}
                    Sumeet Dhekale
                  </p>
                  <p className="text-[#E07E27] pt-3 text-sm flex items-center justify-center gap-2">
                    <Image
                      src={"/images/home/tech/Dot.svg"}
                      width={10}
                      height={10}
                      className="h-1 w-1"
                      alt="img"
                    />{" "}
                    12 Jan, 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full w-[35%]">
              <UpdatesCard />
              <UpdatesCard />
              <UpdatesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdatesCard = () => {
  return <div className="h-1/3 w-full group  transition-all duration-700 origin-right hover:scale-x-110 right-0  bg-[#121212C7] hover:bg-[#E07E27] border-l-4 border-transparent hover:border-l-[#1397C4] flex cursor-pointer">
      <div className="w-[65%] h-full p-6 text-white">
        <p className="text-lg font-bold">Suryakumar Yadav overcomes concussion scare, makes his</p>
        <button className="bg-[#E07E278A] group-hover:bg-[rgba(50,13,0,0.46)] transition-all duration-700 mt-3 text-[10px] flex items-center justify-center px-3 py-1 rounded-md">Read More</button>
      </div>
      <div className="w-[35%] h-full">
        <Image src={"/images/home/tech/img1.png"} width={100} height={100} className="w-full h-full object-cover" alt="img"/>
      </div>
  </div>
}

export default Technology;
