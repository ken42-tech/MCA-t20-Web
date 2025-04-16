"use client";

import Hero from '@/components/hero/Hero';
import React, { useState } from 'react';
import MediaAll from '@/components/media/MediaAll';

const tabs = ["All", "View Videos", "View Images"];

const items = [
  {
    type: 'video',
    title: 'Final: SS vs NMP',
    date: '27 May, 2025',
    img: '/images/media/video1.svg',
    views: 1289,
  },
  {
    type: 'image',
    title: 'T20 Mumbai Promo',
    date: '',
    img: '/images/media/image1.svg',
    views: 1500,
  },
  {
    type: 'image',
    title: 'Match 19: NBB vs ETS',
    date: '22 May, 2025',
    img: '/images/media/image2.svg',
  },
  {
    type: 'video',
    title: 'Dreams do come true:',
    date: '27 May, 2025',
    img: '/images/media/image3.svg',
  },
  {
    type: 'image',
    title: 'T20 Mumbai Promo',
    date: '',
    img: '/images/media/image4.svg',
    views: 1500,
  },
  {
    type: 'image',
    title: 'Match 19: NBB vs ETS',
    date: '22 May, 2025',
    img: '/images/media/video1.svg',
  },
  {
    type: 'video',
    title: 'Dreams do come true:',
    date: '27 May, 2025',
    img: '/images/media/video1.svg',
  },
  {
    type: 'video',
    title: 'Final: SS vs NMP',
    date: '27 May, 2025',
    img: '/images/media/video1.svg',
    views: 1289,
  },
  {
    type: 'image',
    title: 'T20 Mumbai Promo',
    date: '',
    img: '/images/media/image1.svg',
    views: 1500,
  },
  {
    type: 'image',
    title: 'Match 19: NBB vs ETS',
    date: '22 May, 2025',
    img: '/images/media/image2.svg',
  },
  {
    type: 'video',
    title: 'Dreams do come true:',
    date: '27 May, 2025',
    img: '/images/media/image3.svg',
  },
  {
    type: 'image',
    title: 'Match 19: NBB vs ETS',
    date: '22 May, 2025',
    img: '/images/media/video1.svg',
  },
  {
    type: 'video',
    title: 'Dreams do come true:',
    date: '27 May, 2025',
    img: '/images/media/video1.svg',
  },
  {
    type: 'image',
    title: 'T20 Mumbai Promo',
    date: '',
    img: '/images/media/video1.svg',
    views: 1500,
  },
  {
    type: 'image',
    title: 'Match 19: NBB vs ETS',
    date: '22 May, 2025',
    img: '/images/media/video1.svg',
  },
  {
    type: 'video',
    title: 'Dreams do come true:',
    date: '27 May, 2025',
    img: '/images/media/video1.svg',
  },
  {
    type: 'image',
    title: 'T20 Mumbai Promo',
    date: '',
    img: '//images/media/video1.svg',
    views: 1500,
  },
  {
    type: 'image',
    title: 'Match 19: NBB vs ETS',
    date: '22 May, 2025',
    img: '/images/coming-soon.jpg',
  },
  {
    type: 'video',
    title: 'Dreams do come true:',
    date: '27 May, 2025',
    img: '/images/dhoni-thumb.jpg',
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
    <div className="w-full bg-white">
      <Hero
        imgUrl={"/images/stats/bg.svg"}
        heading="Videos"
        subheading="Gallery"
      />

      <div className="px-32 py-20 flex flex-col gap-6">
        <p className="text-4xl font-bold mb-4 text-black uppercase">GALLERY</p>

        <div className="w-full bg-black">
          <div className="w-full flex items-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`h-full cursor-pointer ${
                  activeTab === tab ? "bg-[#E07E27] text-white" : "text-[#E07E27]"
                } border-l border-[#E07E27] px-6 m-2 py-1 uppercase`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <MediaAll items={filteredItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
