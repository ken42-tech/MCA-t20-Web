"use client";
import Image from "next/image";
import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);
  return (
    <>
      <div className="w-full bg-[url('/images/home/hero/heroImgRohitPattern.png')] bg-cover bg-center  relative pt-32 overflow-hidden">
        {/* <Image
          src="/images/home/bg2.png"
          alt="background"
          fill
          className="object-cover z-0"
        /> */}
        <div className="section-width lg:pt-52 md:pt-32 sm:pt-24 pb-32">
          <div className="flex flex-col items-center sm:items-start gap-3 lg:gap-6">
            <p className="font-bold text-sm md:text-base xl:text-xl">
              T20 Mumbai Season 3
            </p>

            <h1 className="  font-extrabold max-w-3xl max-sm:text-center">
              Not just back. <br /> Back to build the next icon
            </h1>
            <p className="font-bold text-lg md:text-xl xl:text-2xl">
              #AalaReAglaStar
            </p>
            <button
              className="btn-primary flex gap-4 items-center"
              onClick={openVideo}
            >
              View Details
              <span>
                <Image
                  src="/images/home/hero/buttonIcon.svg"
                  alt="button-icon"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
              </span>
            </button>
          </div>

          <div className="absolute bottom-40 -right-0 hidden sm:block">
            <div className="w-full rounded-l-xl md:rounded-l-xl border-y-2 border-l-2  border-[#E07E27] shadow-2xl overflow-hidden">
              <div
                className="  w-full flex overflow-hidden items-center justify-evenly rounded-tl-lg gap-4"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.48) 1.45%, rgba(0, 0, 0, 0.70) 100%), rgba(255, 255, 255, 0.09)",
                }}
              >
                <div className="flex flex-col justify-between  py-6 px-12">
                  <p className="text-[#E07E27] text-base  xl:text-lg font-semibold leading-3 uppercase">
                    Season starts in
                  </p>
                </div>
              </div>
              <CountdownTimer targetDate="2025-05-26T00:00:00" />
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DFswpwcH68E?autoplay=1&rel=0"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 text-white bg-[#E07E27] rounded-full p-2 w-10 h-10 hover:bg-[#c86a1e]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
// https://youtu.be/DFswpwcH68E?si=oS6Fp-hBzKS0ds4g
