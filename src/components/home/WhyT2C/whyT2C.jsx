"use client";
import Image from "next/image";
import { useState } from "react";

const WhyT2C = () => {
  const images = [
    {
      type: 'image',
      src: '/images/home/whyT2C/Link.svg',
    },
    {
      type: 'image',
      src: '/images/t20mumbai.jpg',
    },
    {
      type: 'image',
      src: '/images/coming-soon.jpg',
    },
    {
      type: 'image',
      src: '/images/player1.jpg',
    },
    {
      type: 'image',
      src: '/images/batsman1.jpg',
    },
    {
      type: 'image',
      src: '/images/captain.jpg',
    }
  ];
  const [filter, setFilter] = useState('ALL');

  const filtered = images.filter(img => {
    if (filter === 'ALL') return true;
    if (filter === 'VIDEOS') return img.type === 'video';
    if (filter === 'IMAGES') return img.type === 'image';
    return true;
  });
  
  return (
    <>
      <div className="pb-10 pt-10  h-auto w-full bg-white ">
        <div className=" w-full h-full px-32  text-black flex flex-col gap-4">
          <p className="text-4xl font-bold ">GALLERY</p>
          <div className="bg-black">
            <div className="flex items-center gap-4 mb-6 p-4 text-white">
              <button
                className={`px-4 py-1 text-sm  ${
                  filter === "ALL" ? "bg-orange-500" : ""
                }`}
                onClick={() => setFilter("ALL")}
              >
                ALL
              </button>
              <button
                className={`px-4 py-1 text-sm  ${
                  filter === "VIDEOS" ? "bg-orange-500" : ""
                }`}
                onClick={() => setFilter("VIDEOS")}
              >
                VIEW VIDEOS
              </button>
              <button
                className={`px-4 py-1 text-sm  ${
                  filter === "IMAGES" ? "bg-orange-500" : ""
                }`}
                onClick={() => setFilter("IMAGES")}
              >
                VIEW IMAGES
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((item, idx) => (
                <div key={idx} className="relative w-full h-[250px] group">
                  <Image
                    src={item.src}
                    alt="gallery-img"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="">
              <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600">
                VIEW GALLERY
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default WhyT2C;
