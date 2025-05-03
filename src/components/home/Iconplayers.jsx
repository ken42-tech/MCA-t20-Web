"use client";
import Image from "next/image";
import TitleComponent from "../common/TitleComponent";
import { SwiperSlide } from "swiper/react";
import useMediaQuery from "@/utilis/useMediaQuery";
import { Carousel } from "../Carousel";

const players = [
  {
    id: 1,
    name: "Suryakumar Yadav",
    image: "/images/home/players/player1.png",
    teamName: "Triumph Knights Mumbai North East",
    teamLogo: "/images/home/team/ipTriumphKnights.jpg",
  },
  {
    id: 2,
    name: "Shivam Dube",
    image: "/images/home/players/player2.png",
    teamName: "ARCS Andheri",
    teamLogo: "/images/home/team/arcsAndheri.jpg",
  },
  {
    id: 3,
    name: "Shreyas Iyer",
    image: "/images/home/players/player3.png",
    teamName: "SoBo Mumbai Falcons",
    teamLogo: "/images/home/team/ipmumbaifalcons.jpg",
  },
  {
    id: 4,
    name: "Ajinkya Rahane",
    image: "/images/home/players/player4.png",
    teamName: "Bandra Blasters",
    teamLogo: "/images/home/team/ipBandraBlasters.jpg",
  },
  {
    id: 5,
    name: "Prithvi Shaw",
    image: "/images/home/players/player5.png",
    teamName: "North Mumbai Panthers",
    teamLogo: "/images/home/team/ipNorthMumbaiPanther.jpg",
  },
  {
    id: 6,
    name: "Sarfaraz Khan",
    image: "/images/home/players/player6.png",
    teamName: "Aakash Tigers Mumbai Western Suburbs",
    teamLogo: "/images/home/team/aakashTigers.jpg",
  },
  {
    id: 7,
    name: "Tushar Deshpande",
    image: "/images/home/players/player7.png",
    teamName: "Mumbai South Central Maratha Royals",
    teamLogo: "/images/home/team/ipMarathaRoyals.jpg",
  },
  {
    id: 8,
    name: "Shardul Thakur",
    image: "/images/home/players/player8.png",
    teamName: "Eagle Thane Strikers",
    teamLogo: "/images/home/team/ipEagleThaneStrikers.jpg",
  },
];

const PlayerCard = ({ data }) => {
  return (
    <div className="relative   overflow-hidden rounded-lg  bg-[url('/images/home/players/bgTexture.png')] bg-cover bg-center bg-no-repeat flex flex-col">
      <div className=" w-full relative mt-auto">
        <div className="w-full  absolute bottom-0 left-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        <Image
          width={300}
          height={400}
          src={data?.image}
          alt={data?.name}
          className="w-full h-full"
        />
        <div className="bg-[#BF5800] border border-[#E07E27] text-white px-4 py-1 rounded-sm font-medium text-sm capitalize w-fit mx-auto absolute bottom-5 left-0 right-0">
          {data?.name}
        </div>
      </div>
      <div className="bg-[#08113F] w-full">
        <div className="w-full text-white flex  gap-2  mt-auto bg-gradient-to-r from-transparent via-white/30 to-transparent min-h-[50px]">
          <div className="bg-white   flex justify-center items-center">
            <img
              src={data?.teamLogo}
              alt="Team Logo"
              className="w-[50px] h-auto mx-auto max-h-[50px]"
            />
          </div>
          <h4 className="text-white 2xl:text-sm text-xs font-semibold py-[6px] flex items-center justify-start uppercase   w-[calc(100%-50px)] text-start">
            {data?.teamName}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default function IconPlayers() {
  return (
    <div className="section-width padding-top">
      <TitleComponent title={"Icon Players"} />
      <div className="sm:grid  lg:grid-cols-4 lg:gap-8 md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 hidden">
        {players.map((player) => (
          <PlayerCard data={player} key={player.id} />
        ))}
      </div>
      <div className="w-full sm:hidden block">
        <Carousel
          sectionName="clientLogo"
          sliderPerView={1}
          spaceBetween={50}
          loop={true}
        >
          {players.map((player, i) => (
            <SwiperSlide key={i}>
              <PlayerCard data={player} key={i} />
            </SwiperSlide>
          ))}
        </Carousel>
        {/* {teamsDataHomePage.map((item, i) => {
                return <TeamCard data={item} key={i} />;
              })} */}
      </div>
    </div>
  );
}
