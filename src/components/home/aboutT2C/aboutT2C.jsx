"use client";
import Image from "next/image";
// import "./style.css";
const AboutT2C = () => {
  return (
      <div className="pb-10 pt-10  h-auto w-full bg-white section-width">
      <div className=" w-full h-full px-32  text-black flex flex-col gap-4">
        <p className="text-4xl font-bold ">THE GAME IN NUMBERS</p>
        <p className="text-[#616161] text-base font-bold">View All Updates</p>
        <div className="w-full flex gap-5 mt-4">
          <div className="w-[38%]">
            <GroupsCard/>
            <GroupsCard/>
          </div>
          <div className="w-[60%] flex gap-4 ">
          <PlayerCard/>
          <PlayerCard/>
          </div>
        </div>
    </div>
    </div>
  );
};

const PlayerInfo = [{
  sl:"02",
  name:"Aditya Tare"
},
{
  sl:"03",
  name:"Jay Bista"
},
{
  sl:"04",
  name:"Akhil Herwadkar"
},
{
  sl:"05",
  name:"Parag Khanapurkar"
},
]

const GroupsCard = () => {
  return (
    <div className="w-full  h-[48vh]">
      <div className="w-full h-[20%] bg-[#E07E27] flex items-center px-7 py-6">
        <p className="text-blxck text-xl font-bold">GROUP - A STANDINGS</p>
      </div>
      <div className="w-full h-[80%] bg-black text-white">
        {PlayerInfo.map((item, index) => (
          <div key={index}>
            {" "}
            <div className="w-full h-[25%] flex items-center px-3 gap-6 py-[14px]" >
              <p>{item.sl}</p>
              <Image
                src={"/images/home/about/image 92.svg"}
                alt="img"
                width={100}
                height={100}
                className="w-10 h-10"
              />
              <p>{item.name}</p>
            </div>
            <div className="w-full h-px bg-gray-300 scale-y-[0.3] origin-top" />
          </div>
        ))}
      </div>
    </div>
  );
}
const PlayerCard = () => {
  return (
    <div className="w-1/2 h-[96vh] border-2 bg-[linear-gradient(180deg,_#14344F_0%,_#1C5C90_38.76%,_#14344F_77.52%)] flex flex-col items-center justify-between text-white overflow-hidden">
      <p className="py-4 text-xl font-bold">TOP BATSMAN</p>
      <div className="w-full h-[70%] px-10 pb-10">
        <div className="w-full  border border-[#E07E27]">
          <Image
            src={"/images/home/about/Player card.svg"}
            alt="img"
            width={100}
            height={100}
            className="w-full h-[70%] object-cover"
          />
          <div className="bg-black flex items-center justify-between px-6 py-4">
            <Image
              src={"/images/home/innovation/image 24.svg"}
              alt="img"
              width={10}
              height={10}
              className="w-8 h-8 object-cover"
            />
            Prithvi Shaw
            <Image
              src={"/images/home/about/BatIcon.svg"}
              alt="img"
              width={10}
              height={10}
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[30%] bg-black">
        {PlayerInfo.map((item, index) => (
          <div key={index}>
            {" "}
            <div className="w-full h-[25%] flex items-center px-3 gap-6 py-1">
              <p>{item.sl}</p>
              <Image
                src={"/images/home/about/image 92.svg"}
                alt="img"
                width={100}
                height={100}
                className="w-10 h-10"
              />
              <p>{item.name}</p>
            </div>
            <div className="w-full h-px bg-gray-300 scale-y-[0.3] origin-top" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutT2C;
