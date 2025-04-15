"use client"
import Hero from '@/components/hero/Hero'
import Image from 'next/image';
import React, { useState } from 'react'

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
      <div className="w-full px-32 pt-20 flex flex-col bg-white text-black gap-16">
        <div className="w-full flex items-center justify-between cursor-pointer ">
          <div className="w-[25%] flex items-center justify-between">
            <p
              className={`font-semibold text-xl uppercase pb-2 ${
                selected == "news"
                  ? "border-b-4 border-b-[#E07E27]"
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
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center gap-8">
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
}

const Card = ({item}) => {
  return <div className='w-[23%] h-80 rounded-md bg-black relative'>
    <Image src={item.imgUrl} width={1000} height={1000} className='w-full h-full object-cover absolute z-0' alt='img'/>
    <div className='w-full h-full flex items-end p-8 z-10 text-white justify-between relative'>
      <div className='w-[80%] flex flex-col justify-between '>
        <p className='font-bold text-xl'>{item.Title}</p>
        <p className='text-[#F6F9FF] text-base'>{item.subTitle}</p>
      </div>
      <div className='w-12 h-12 bg-[#D25F28E5] rounded-full flex items-center justify-center' >
        <Image src={"/images/latestUpdates/arrow.svg"} width={2} height={2} className='w-4 h-4'/>
      </div>
    </div>
  </div>
}

const DropDown = ({ label, options }) => {
  return (
    <>
      <div className="flex  items-center gap-2 w-[30%]">
        <label
          htmlFor="dropdown"
          className="text-base font-semibold uppercase text-[#6A6A6A] mb-2 w-[30%]"
        >
          {label}
        </label>
        <select
          id="dropdown"
          className="px-4 py-2 bg-white w-36 text-[#E07E27] border border-[#E07E27] text-sm"
        >
          <option value="" disabled>
            Select a Season
          </option>
          {options && options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default page