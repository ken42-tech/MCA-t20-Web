"use client";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const CardData = [
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
    {
      imgUrl: "/images/latestUpdates/sachin.svg",
      Title: "Investors",
      subTitle: "VC funds, Angel Investors and networks",
    },
  ];
  const [selected, setSelected] = useState("news");
  return (
    <div className="w-full h-auto">
      <Hero
        imgUrl={"/images/stats/bg.svg"}
        heading="Latest Updates"
        subheading="Keep Up With Cricket"
      />
      <div className="w-full  mt-12 p-5 flex flex-col bg-white text-black gap-16 section-width">
        <div className="w-full flex items-center justify-between cursor-pointer ">
          <div className="w-[25%] sm:flex gap-5 items-center justify-between">
            <p
              className={`font-semibold text-xl uppercase pb-2 ${
                selected == "news"
                  ? "border-b-4 border-b-[#E07E27] "
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("news")}
            >
              News
            </p>
            <p
              className={`font-semibold text-xl uppercase pb-2 ${
                selected == "events"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("events")}
            >
              Events
            </p>
            <p
              className={`font-semibold text-xl uppercase pb-2 ${
                selected == "blogs"
                  ? "border-b-4 border-b-[#E07E27]"
                  : "text-[#6A6A6A]"
              }`}
              onClick={() => setSelected("blogs")}
            >
              Blogs
            </p>
          </div>
          <div className=" w-[60%] flex items-center  justify-end">
            <DropDown
              label={"Sort by"}
              options={["This Week", "This Month"]}
              bg={"white"}
            />
          </div>
        </div>

        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {CardData.slice(0, 12).map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <hr className="flex-grow border-gray-300" />
          <button className="px-8  border border-gray-400 rounded text-gray-600">
            View all
          </button>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="w-full h-[370px] bg-black rounded-md relative">
      <Image
        src={item.imgUrl}
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute z-0 rounded-md"
        alt="img"
      />
      <div className="w-full h-full flex items-end p-8 z-10 text-white justify-between relative">
        <div className="w-[80%] flex flex-col justify-between">
          <p className="font-bold text-xl">{item.Title}</p>
          <p className="text-[#F6F9FF] text-base">{item.subTitle}</p>
        </div>
        <div className="w-10 h-10 lg:w-12 lg:h-12 md:w-11 md:h-11 bg-[#D25F28E5] rounded-full flex items-center justify-center">
          <Image
            src={"/images/latestUpdates/arrow.svg"}
            width={10}
            height={10}
            className="w-3 h-3 lg:w-5 lg:h-5 md:h-4 md:w-4 sm:h-3 sm:w-3"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

const DropDown = ({ label, options, bg }) => {
  const bgColor = bg === "white" ? "bg-white" : "bg-[#E07E27]";
  const textColor = bg === "white" ? "text-[#E07E27]" : "text-white";

  return (
    <>
      <div className="flex items-center gap-2 w-60 relative">
        <label
          htmlFor="dropdown"
          className="text-sm font-semibold uppercase text-[#6A6A6A] mb-2 w-[50%]"
        >
          {label}
        </label>
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
            src={
              bg === "white"
                ? "/images/standings/dropdown.svg"
                : "/images/standings/dropdownwhite.svg"
            }
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
