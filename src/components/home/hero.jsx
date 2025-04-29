"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-[url('/images/home/hero/heroImgRohitPattern.png')] bg-cover bg-center relative pt-32 overflow-hidden">
        {/* <Image
          src="/images/home/bg2.png"
          alt="background"
          fill
          className="object-cover z-0"
        /> */}
        <div className="section-width pt-52 pb-32">
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
            <button className="btn-primary flex gap-4 items-center">
              View highlights
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

              <div className="w-full flex items-center justify-center gap-1 md:gap-2 xl:gap-4 py-6 bg-[#FDFDFD12]">
                <p className="font-bold text-xl xl:text-2xl text-[#E07E27]">
                  03
                </p>
                <p className="font-bold text-xl xl:text-xl">:</p>
                <p className="font-bold text-xl xl:text-2xl text-[#E07E27]">
                  10
                </p>
                <p className="font-bold text-xl xl:text-xl">:</p>
                <p className="font-bold text-xl xl:text-2xl text-[#E07E27]">
                  24
                </p>
              </div>

              <div
                className="py-3 w-full flex items-center justify-center rounded-bl-lg"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.48) 1.45%, rgba(0, 0, 0, 0.70) 100%), rgba(255, 255, 255, 0.09)",
                }}
              >
                <p className="text-xs xl:text-base">Upcoming Match</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
