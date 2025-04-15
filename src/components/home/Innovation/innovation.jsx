"use client";
import Image from "next/image";
import "./style.css";

const Innovation = () => {
  return (
    <div className="w-full  bg-white">
      <div className=" w-full px-32 py-16 text-black flex flex-col gap-4">
        <p className="text-4xl font-bold">FIXTURES</p>
        <p className="text-[#616161] text-base font-bold">View all  Fixtures</p>
        
      <div className="w-full flex justify-between items-center mt-4">
          <Card isLive={true}/>
          <Card/>
          <Card/>
      </div>
      </div>

    </div>
  );
};

const Card = ({isLive}) => {
  return (
    <div className="w-[32%] h-64 border-2 rounded-lg overflow-hidden">
      <div className={`w-full h-[20%] bg-[#E07E27]  flex items-center justify-between px-6`}>
        <p className="font-bold text-black text-sm">24 MAR, 2025</p>
        <p className="font-bold text-black text-sm">SEASON 1 2025</p>
      </div>
      <div
        className={`w-full h-full  text-white ${isLive ? "bg-black" : "bg-[#F5F5F5]"}`}
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
                className="w-14 h-14"
              />
              <p
                className={` text-[12px] font-medium leading-none text-center ${
                  !isLive && "text-black"
                }`}
              >
                TRIUMPH KNIGHTS MUMBAI NORTH EAST
              </p>
              {isLive && (
                <>
                  <p className="text-base">219/6 (20)</p>
                  <p className=" text-[10px] leading-none text-center">
                    WON BY 18 Runs
                  </p>{" "}
                </>
              )}
            </div>
            <div>
              <p className="text-[#E07E27] text-[10px] font-bold">MUMBAI, INDIA</p>
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
                className="w-14 h-14"
              />
              <p
                className={` text-[12px] font-medium leading-none text-center ${
                  !isLive && "text-black"
                }`}
              >
                Eagle THANE STRIKERS
              </p>
              {isLive && (
                <>
                  <p className="text-base">201/5 (20)</p>
                </>
              )}
            </div>
            <div>
              <p className="text-[#E07E27] text-[10px] font-bold">MATCH INFO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovation;
