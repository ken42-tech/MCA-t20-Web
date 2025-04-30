"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TitleComponent from "../common/TitleComponent";
import Link from "next/link";

const Gallery = () => {
  const tabs = ["All", "View Videos", "View Images"];
  const [activeTab, setActiveTab] = useState("All");

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

  const filteredItems =
    activeTab === "All"
      ? items
      : activeTab === "View Videos"
      ? items.filter((item) => item.type === "video")
      : items.filter((item) => item.type === "image");

  const [layoutConfig, setLayoutConfig] = useState([
    [1, 3, 1, 2],
    [1, 3, 3],
    [1, 3, 1, 2],
  ]);

  // Function to determine layout based on screen size
  const updateLayout = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        // Mobile layout - single column with all images
        setLayoutConfig([[7], [7], [7]]);
      } else if (window.innerWidth < 1024) {
        // Tablet layout - simplified grid
        setLayoutConfig([
          [3, 4], // 2 images
          [4, 3], // 2 images
          [3, 4], // 2 images
          [4, 3], // 2 images
          [3, 4], // 2 images
          [7], // 1 image
        ]);
      } else {
        // Desktop layout - original complex grid
        setLayoutConfig([
          [1, 3, 1, 2], // 4 images
          [1, 3, 3], // 3 images
          [1, 3, 1, 2], // 4 images
        ]);
      }
    }
  };

  // Set up resize listener with SSR safety check
  useEffect(() => {
    updateLayout();

    // Add resize listener only on client side
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);

  const renderMediaGrid = (itemsToRender) => {
    // If no valid items, return early
    const validItems =
      Array.isArray(itemsToRender) && itemsToRender.length > 0
        ? itemsToRender
        : [];

    if (validItems.length === 0) {
      return <div className="w-full p-3">No media items available</div>;
    }

    let currentIndex = 0;

    return (
      <div className="w-full flex flex-col gap-3 p-3">
        {layoutConfig.map((row, rowIndex) => {
          // Stop rendering if we've shown all items
          if (currentIndex >= validItems.length) {
            return null;
          }

          return (
            <div key={rowIndex} className="h-[30vh] w-full">
              <div className="grid w-full h-full grid-cols-7 gap-2 md:gap-3 lg:gap-4">
                {row.map((span, colIndex) => {
                  // Stop rendering if we've shown all items
                  if (currentIndex >= validItems.length) {
                    return null;
                  }

                  const item = validItems[currentIndex];
                  currentIndex++;

                  // Safety check
                  if (!item || !item.img) {
                    console.warn(
                      "Invalid item or missing image at index:",
                      currentIndex - 1
                    );
                    return null;
                  }

                  return (
                    <div
                      key={colIndex}
                      className={`relative col-span-${span} overflow-hidden bg-white/30`}
                    >
                      <Image
                        src={item.img}
                        alt={item.title || "Gallery image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 33vw"
                      />

                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/images/home/whyT2C/vidLogo.svg"
                            width={100}
                            height={100}
                            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                            alt="Video"
                          />
                        </div>
                      )}

                      {item.views && item.type === "image" && (
                        <div className="absolute top-2 right-2">
                          <Image
                            src="/images/home/whyT2C/imgIcon.svg"
                            width={100}
                            height={100}
                            alt="Image"
                            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                          />
                        </div>
                      )}

                      {item.type === "coming-soon" && (
                        <div className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded font-semibold">
                          COMING SOON
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // View Gallery button component
  const ViewGalleryButton = () => (
    <Link href={"/media"}>
      <div className="w-48 bg-[#E07E27] flex items-center justify-between py-3 px-6">
        <p className="text-sm font-bold">View Gallery</p>
        <Image
          src={"/images/home/whyT2C/octicon_play-24 (1).svg"}
          width={100}
          height={100}
          className="w-6 h-6"
          alt="img"
        />
      </div>
    </Link>
  );

  return (
    <div className="bg-[url('/images/home/latestUpdateBg.png')] bg-cover bg-center bg-no-repeat py-20">
      <div className="section-width sm:flex sm:justify-between sm:items-start">
        <TitleComponent orange title={"Gallery"} />

        {/* Only show the button on non-mobile screens */}
        <div className="hidden sm:block">
          <ViewGalleryButton />
        </div>
      </div>

      <div className="flex flex-col gap-6 section-width">
        <div className="w-full bg-black">
          <div className="w-full flex items-center">
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
          </div>
          <div className="w-full flex items-center justify-center">
            {renderMediaGrid(filteredItems)}
          </div>
        </div>

        {/* Show the button only on mobile screens below the image section */}
        <div className="flex justify-center sm:hidden mt-4">
          <ViewGalleryButton />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
