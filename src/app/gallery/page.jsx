"use client";

import Hero from "@/components/hero/Hero";
import React, { useState } from "react";
import MediaAll from "@/components/media/MediaAll";

const tabs = ["All", "View Videos", "View Images"];

const items = [
  {
    type: "video",
    title: "Final: SS vs NMP",
    date: "27 May, 2025",
    img: "/images/media/video1.svg",
    views: 1289,
  },
  {
    type: "",
    title: "T20 Mumbai Promo",
    date: "",
    img: "/images/media/image1.svg",
    views: 1500,
  },
  {
    type: "image",
    title: "Match 19: NBB vs ETS",
    date: "22 May, 2025",
    img: "/images/media/image2.svg",
  },
  {
    type: "image",
    title: "Dreams do come true:",
    date: "27 May, 2025",
    img: "/images/media/g4.svg",
  },
  {
    type: "image",
    title: "T20 Mumbai Promo",
    date: "",
    img: "/images/media/g5.jpg",
    views: 1500,
  },
  {
    type: "image",
    title: "Match 19: NBB vs ETS",
    date: "22 May, 2025",
    img: "/images/media/g6.jpg",
  },
  {
    type: "video",
    title: "Dreams do come true:",
    date: "27 May, 2025",
    img: "/images/media/g7.svg",
  },
  {
    type: "video",
    title: "Final: SS vs NMP",
    date: "27 May, 2025",
    img: "/images/media/video1.svg",
    views: 1289,
  },
  {
    type: "image",
    title: "T20 Mumbai Promo",
    date: "",
    img: "/images/media/g9.svg",
    views: 1500,
  },
  {
    type: "image",
    title: "Match 19: NBB vs ETS",
    date: "22 May, 2025",
    img: "/images/media/g10.svg",
  },
  {
    type: "image",
    title: "Dreams do come true:",
    date: "27 May, 2025",
    img: "/images/media/g11.svg",
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filteredItems =
    activeTab === "All"
      ? items
      : activeTab === "View Videos"
      ? items.filter((item) => item.type === "video")
      : items.filter((item) => item.type === "image");

  return (
    <div className="w-full ">
      <Hero imgUrl={"/images/stats/bg.svg"} heading="Gallery" subheading="" />
      {/* <p className="text-4xl py-20 font-bold mb-4 text-black uppercase  section-width ">
        GALLERY
      </p> */}
      <div className="flex flex-col gap-6 section-width section-padding ">
        <div className="w-full bg-black">
          {/* <div className="w-full flex items-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`h-full cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#E07E27] text-white"
                    : "text-[#E07E27]"
                } border-l border-[#E07E27] px-6 m-2 py-1 uppercase`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div> */}
          <div className="w-full flex items-center justify-center">
            <MediaAll items={filteredItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
