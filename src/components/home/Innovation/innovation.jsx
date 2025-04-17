"use client";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Innovation = () => {
  return (
    <div className="w-full bg-white section-width">
      <div className="w-full px-8 py-7 md:px-16 lg:px-32 md:py-16 text-black flex flex-col md:gap-4">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold">FIXTURES</p>
        <Link href={"/fixtures"}>
          <p className="text-[#616161] text-base font-bold">View all Fixtures</p>
        </Link>

        <div className="w-full overflow-x-auto md:overflow-visible mt-4">
          {/* Desktop layout */}
          <div className="hidden sm:flex flex-nowrap justify-between gap-4 md:gap-2 items-center">
            <Card isLive={true} />
            <Card />
            <Card />
          </div>

          <div className="flex sm:hidden w-full">
            <Swiper spaceBetween={16} slidesPerView={1}>
              <SwiperSlide>
                <Card isLive={true} />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};



const Card = ({isLive}) => {
  return (
    <div className="w-full h-52 xl:h-64 border-2 rounded-lg overflow-hidden">
      <div
        className={`w-full h-[20%] bg-[#E07E27]  flex items-center justify-between md:px-6 px-2`}
      >
        <p className="font-bold text-black text-[10px] lg:text-sm">
          24 MAR, 2025
        </p>
        <p className="font-bold text-black text-[10px] lg:text-sm">
          SEASON 1 2025
        </p>
      </div>
      <div
        className={`w-full h-full  text-white ${
          isLive ? "bg-black" : "bg-[#F5F5F5]"
        }`}
      >
        <div className="w-full h-[80%] flex items-center justify-between px-4">
          <div className="w-[35%] h-full flex flex-col items-center justify-between gap-2 py-2">
            <div className="flex h-[80%] flex-col items-center justify-center gap-2">
              {" "}
              <Image
                src={"/images/home/innovation/image 24.svg"}
                alt="background"
                width={20}
                height={20}
                className="xl:w-14 w-10 h-10 xl:h-14"
              />
              <p
                className={`text-[9px] xl:text-[12px] font-medium leading-none text-center ${
                  !isLive && "text-black"
                }`}
              >
                TRIUMPH KNIGHTS MUMBAI NORTH EAST
              </p>
              {isLive && (
                <>
                  <p className="text-xs xl:text-base">219/6 (20)</p>
                  <p className="text-[8px] xl:text-[10px] leading-none text-center">
                    WON BY 18 Runs
                  </p>{" "}
                </>
              )}
            </div>
            <div>
              <p className="text-[#E07E27] text-[8px] xl:text-[10px] font-bold">
                MUMBAI, INDIA
              </p>
            </div>
          </div>
          <div className="w-[20%] h-full flex flex-col items-center justify-center">
            <p className=" text-[#E07E27] ">vs</p>
            <p className="text-[#868686] text-[10px]">24 out of 74</p>
          </div>
          <div className="w-[35%] h-full flex flex-col items-center justify-between gap-2 py-2">
            <div className="flex h-[80%] flex-col items-center justify-center gap-2">
              {" "}
              <Image
                src={"/images/home/innovation/image 19.svg"}
                alt="img"
                width={20}
                height={20}
                className="xl:w-14 w-10 h-10 xl:h-14"
              />
              <p
                className={`text-[9px] xl:text-[12px] font-medium leading-none text-center ${
                  !isLive && "text-black"
                }`}
              >
                Eagle THANE STRIKERS
              </p>
              {isLive && (
                <>
                  <p className="text-xs xl:text-base">201/5 (20)</p>
                </>
              )}
            </div>
            <div>
              <p className="text-[#E07E27] text-[8px] xl:text-[10px] font-bold">
                MATCH INFO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovation;
