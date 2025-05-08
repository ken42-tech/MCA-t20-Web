"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TitleComponent from "../common/TitleComponent";
import Link from "next/link";
import routes from "@/utilis/route";

const items = [
  {
    type: "",
    title: "Final: SS vs NMP",
    date: "27 May, 2025",
    img: "/images/gallery/new1.jpg",
    views: 1289,
  },
  {
    type: "",
    title: "T20 Mumbai Promo",
    date: "",
    img: "/images/gallery/new2.jpg",
    views: 1500,
  },
  {
    type: "",
    title: "Match 19: NBB vs ETS",
    date: "22 May, 2025",
    img: "/images/gallery/new3.jpg",
  },
  {
    type: "",
    title: "Final: SS vs NMP",
    date: "27 May, 2025",
    img: "/images/gallery/new4.jpg",
    views: 1289,
  },
  {
    type: "",
    title: "T20 Mumbai Promo",
    date: "",
    img: "/images/gallery/new5.jpg",
    views: 1500,
  },
  {
    type: "",
    title: "Match 19: NBB vs ETS",
    date: "22 May, 2025",
    img: "/images/gallery/new6.jpg",
  },
];

const Gallery = () => {
  const validItems = Array.isArray(items) && items.length > 0 ? items : [];

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [layoutConfig, setLayoutConfig] = useState([
    [2, 3, 2],
    [1, 3, 3],
  ]);

  // Function to determine layout based on screen size
  const updateLayout = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        // Mobile layout - single column with all 11 images
        setLayoutConfig([[7], [7], [7]]);
      } else if (window.innerWidth < 1024) {
        // Tablet layout - simplified grid with all 11 images
        setLayoutConfig([
          [3, 4], // 2 images
          [4, 3], // 2 images
          [3, 4], // 2 images
        ]);
      } else {
        // Desktop layout - original complex grid
        setLayoutConfig([
          [2, 3, 2],
          [1, 3, 3],
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

  // If no valid items, return early
  if (validItems.length === 0) {
    return <div className="w-full p-3">No media items available</div>;
  }

  let renderedIndex = 0;

  const renderMediaGrid = (items) => {
    // If no valid items, return early
    const validItems = Array.isArray(items) && items.length > 0 ? items : [];

    if (validItems.length === 0) {
      return <div className="w-full p-3">No media items available</div>;
    }

    let renderedIndex = 0;

    return (
      <div className="w-full flex flex-col gap-3 p-3">
        {layoutConfig.map((row, rowIndex) => {
          // Stop rendering if we've shown all items
          if (renderedIndex >= validItems.length) {
            return null;
          }

          return (
            <div key={rowIndex} className="h-[300px] w-full">
              <div className="grid w-full h-full grid-cols-7 gap-2 md:gap-3 lg:gap-4">
                {row.map((span, colIndex) => {
                  // Stop rendering if we've shown all items
                  if (renderedIndex >= validItems.length) return null;
                  const item = validItems[renderedIndex];
                  const indexForModal = renderedIndex++;
                  if (!item?.img) return null;

                  return (
                    <div
                      key={colIndex}
                      className={`relative col-span-${span} overflow-hidden bg-white/30`}
                      onClick={() => {
                        setCurrentIndex(indexForModal);
                        setShowModal(true);
                      }}
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

  const ViewGalleryButton = () => (
    <Link href={routes.gallery}>
      <div
        className="  flex items-center justify-between py-3 px-6 gap-4"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #142A7C -11.26%, #344CA2 44.6%, #243FA3 100.45%)",
        }}
      >
        <p className="text-sm font-bold">View Gallery</p>
        <Image
          src="/images/home/hero/buttonIcon.svg"
          alt="button-icon"
          width={24}
          height={24}
          className="w-5 h-5"
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
          <div className="w-full flex flex-col gap-3 p-3">
            {layoutConfig.map((row, rowIndex) => {
              // Stop rendering if we've shown all items
              if (renderedIndex >= validItems.length) {
                return null;
              }

              return (
                <div key={rowIndex} className="h-[250px] w-full">
                  <div className="grid w-full h-full grid-cols-7 gap-2 md:gap-3 lg:gap-4">
                    {row.map((span, colIndex) => {
                      // Stop rendering if we've shown all items
                      if (renderedIndex >= validItems.length) return null;
                      const item = validItems[renderedIndex];
                      const indexForModal = renderedIndex++;
                      if (!item?.img) return null;

                      // Safety check
                      // if (!item || !item.img) {
                      //   console.warn(
                      //     "Invalid item or missing image at index:",
                      //     renderedIndex - 1
                      //   );
                      //   return null;
                      // }

                      return (
                        <div
                          key={colIndex}
                          className={`relative col-span-${span} overflow-hidden bg-white/30`}
                          onClick={() => {
                            setCurrentIndex(indexForModal);
                            setShowModal(true);
                          }}
                        >
                          {/* Use optional chaining and provide fallback for image */}
                          <Image
                            src={item.img}
                            alt={item.title || "Gallery image"}
                            fill
                            className="object-cover "
                            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 33vw"
                          />

                          {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-2">
                               <p className="text-sm font-semibold line-clamp-1">
                                 {item.title || "Untitled"}
                               </p>
                               {item.date && (
                                 <p className="text-xs text-gray-300">{item.date}</p>
                               )}
                             </div> */}

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

            {/* Hidden utility classes to ensure Tailwind includes them in the build */}
            {/* <div className="hidden col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7" /> */}
            {showModal && (
              <div
                className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-4"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative max-w-4xl w-full max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute -top-5 -right-5 bg-white text-black p-3 py-2 rounded-full text-sm z-50 font-bold"
                  >
                    ✕
                  </button>

                  {currentIndex > 0 && (
                    <button
                      className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-[#ffffff80] hover:bg-white text-black flex justify-center items-center rounded-full z-50 w-14 h-14"
                      onClick={() => setCurrentIndex((prev) => prev - 1)}
                    >
                      ◀
                    </button>
                  )}

                  {currentIndex < validItems.length - 1 && (
                    <button
                      className="absolute -right-20 top-1/2 transform -translate-y-1/2 bg-[#ffffff80] hover:bg-white text-black flex justify-center items-center rounded-full z-50 w-14 h-14"
                      onClick={() => setCurrentIndex((prev) => prev + 1)}
                    >
                      ▶
                    </button>
                  )}

                  <Image
                    src={validItems[currentIndex]?.img}
                    alt="popup"
                    width={1000}
                    height={800}
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center sm:hidden mt-4">
          <ViewGalleryButton />
        </div>
      </div>

      {/* Show the button only on mobile screens below the image section */}
    </div>
  );
};

export default Gallery;
