"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="w-full py-[26rem] relative">
        <Image
          src="/images/home/bg2.png"
          alt="background"
          fill
          className="object-cover z-0"
        />
          <div className=" section-width">
            <div className="absolute top-2/4 flex flex-col items-center md:items-start gap-3 lg:gap-6">
              <p className="font-bold text-sm md:text-base xl:text-xl">01 Jul, 2025</p>
              <p className="text-2xl md:text-3xl lg:text-5xl font-extrabold w-2/5">
                Mumbai won two tournaments in three years because of T20 Mumbai
              </p>
              <button className="bg-[#E07E27] w-28 h-8 md:w-44 md:h-10 xl:w-52 xl:h-12 flex items-center justify-evenly text-xs md:text-base">
                View highlights{" "}
                <span>
                  <Image
                    src="/images/home/hero/buttonIcon.svg"
                    alt="button-icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </span>
              </button>
            </div>

            <div className=" absolute bottom-40 -right-6">
              <div className="w-full rounded-xl md:rounded-l-xl border md:border-[2.5px] border-[#E07E27] md:h-44 xl:h-60 h-32 overflow-hidden">
                <div
                  className="h-[30%] w-full flex overflow-hidden items-center justify-evenly rounded-tl-lg gap-4"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.48) 1.45%, rgba(0, 0, 0, 0.70) 100%), rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Image
                    src="/images/home/hero/tigers.svg"
                    alt="team icon"
                    width={64}
                    height={64}
                    className="xl:w-28 md:w-16 md:h-16 xl:h-28"
                  />
                  <div className="flex flex-col justify-between  py-1">
                    <p className="text-[#E07E27] text-[6px]  xl:text-sm leading-3">North MUMBAI PANTHERS</p>
                    <p
                      className="text-[6px] xl:text-[10px] font-extralight leading-3"
                      style={{ fontStyle: "italic" }}
                    >
                      VS
                    </p>
                    <p className="text-[6px] xl:text-sm leading-3">AAkash Tigers</p>
                  </div>
                </div>

                <div className="h-[50%] w-full flex items-center justify-center gap-1 md:gap-2 xl:gap-4 ">
                  <p className="font-bold text-xl xl:text-2xl text-[#E07E27]">03</p>
                  <p className="font-bold text-xl xl:text-xl">:</p>
                  <p className="font-bold text-xl xl:text-2xl text-[#E07E27]">10</p>
                  <p className="font-bold text-xl xl:text-xl">:</p>
                  <p className="font-bold text-xl xl:text-2xl text-[#E07E27]">24</p>
                  <p className="font-bold text-xl xl:text-xl">:</p>
                  <p className="font-bold text-xl xl:text-2xl text-[#E07E27]">36</p>
                </div>

                <div
                  className="h-[20%] w-full flex items-center justify-center rounded-bl-lg"
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
    </div>
  );
};

export default Hero;
