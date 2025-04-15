"use client";
import Image from "next/image";
import Navbar from "@/components/layout/navbar/navbar";

const Hero = () => {
  return (
    <div className="w-full h-[120vh] relative">
      <Image
        src="/images/home/bg.svg"
        alt="background"
        fill
        className="object-cover z-0"
      />
      <div className="relative z-10 px-6 py-8 h-full w-full flex-col overflow-hidden lg:px-20 justify-end text-white flex">
        <div className="w-full h-[50%] flex items-center justify-between ">
          <div className="w-[60%] h-full flex flex-col gap-6 px-10">
            <p className="font-bold text-xl">01 Jul, 2025</p>
            <p className="text-5xl font-extrabold leading-snug">
              Mumbai won two tournaments in three years because of T20 Mumbai
            </p>
            <button className="bg-[#E07E27] w-52 h-12 flex items-center justify-evenly">
              View highlights{" "}
              <span>
                <Image
                  src="/images/home/hero/buttonIcon.svg"
                  alt="button icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </span>
            </button>
          </div>

          <div className="w-[50%] h-full flex items-start justify-end">
            <div className="rounded-l-xl border-l-[2.5px] border-t-[2px] border-b-[2px] border-[#E07E27] h-60 w-72 -mr-20 flex flex-col">
              <div
                className="h-[30%] w-full flex overflow-hidden items-center rounded-tl-lg"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.48) 1.45%, rgba(0, 0, 0, 0.70) 100%), rgba(255, 255, 255, 0.09)",
                }}
              >
                <Image
                  src="/images/home/hero/image 51.svg"
                  alt="team icon"
                  width={64}
                  height={64}
                  className="w-28 h-28"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-[#E07E27] text-sm">North MUMBAI PANTHERS</p>
                  <p
                    className="text-[10px] font-extralight"
                    style={{ fontStyle: "italic" }}
                  >
                    VS
                  </p>
                  <p className="text-sm">AAkash Tigers</p>
                </div>
              </div>

              <div className="h-[50%] w-full flex items-center justify-center gap-4 ">
                <p className="font-bold text-2xl text-[#E07E27]">03</p>
                <p className="font-bold text-xl">:</p>
                <p className="font-bold text-2xl text-[#E07E27]">10</p>
                <p className="font-bold text-xl">:</p>
                <p className="font-bold text-2xl text-[#E07E27]">24</p>
                <p className="font-bold text-xl">:</p>
                <p className="font-bold text-2xl text-[#E07E27]">36</p>
              </div>

              <div
                className="h-[20%] w-full flex items-center justify-center rounded-bl-lg"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.48) 1.45%, rgba(0, 0, 0, 0.70) 100%), rgba(255, 255, 255, 0.09)",
                }}
              >
                <p>Upcoming Match</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
