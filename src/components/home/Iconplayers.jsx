"use client";
import Image from "next/image";
import TitleComponent from "../common/TitleComponent";
import { Carousel } from "../Carousel";
import { SwiperSlide } from "swiper/react";
import useMediaQuery from "@/utilis/useMediaQuery";

const PlayerCard = ({ image, name }) => {
  console.log(image);
  return (
    <div className="relative   overflow-hidden rounded-lg  bg-[url('/images/home/players/bgTexture.png')] bg-cover bg-center bg-no-repeat flex flex-col">
      <div className=" w-full relative mt-auto">
        <div className="w-full  absolute bottom-0 left-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        <Image
          width={300}
          height={400}
          src={image}
          alt={name}
          className="w-full h-full "
        />
      </div>

      <div className="bg-[#08113F] w-full p-4">
        <div className="  flex justify-center">
          <div className="bg-[#BF5800] border border-[#E07E27] text-white px-4 py-1 rounded-sm font-medium text-sm">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IconPlayers() {
  const isBelowMediumScreen = useMediaQuery("(max-width: 900px)");
  const players = [
    {
      id: 1,
      name: "Suryakumar Yadav",
      image: "/images/home/players/player1.png",
    },
    {
      id: 2,
      name: "Shivam Dube",
      image: "/images/home/players/player2.png",
    },
    { id: 3, name: "Shreyas Iyer ", image: "/images/home/players/player3.png" },
    {
      id: 4,
      name: "Ajinkya Rahane ",
      image: "/images/home/players/player4.png",
    },
    { id: 5, name: "Prithvi shaw ", image: "/images/home/players/player5.png" },
    {
      id: 6,
      name: "Sarfaraz Khan ",
      image: "/images/home/players/player6.png",
    },
    {
      id: 7,
      name: "Tushar Deshpande ",
      image: "/images/home/players/player7.png",
    },
    {
      id: 8,
      name: "Shardul Thakur ",
      image: "/images/home/players/player8.png",
    },
  ];

  return (
    <div className="section-width section-padding">
      <TitleComponent title={"Icon Players"} />
      <div className="sm:grid  lg:grid-cols-4 lg:gap-8 md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 hidden">
        {players.map((player) => (
          <PlayerCard key={player.id} image={player.image} name={player.name} />
        ))}
      </div>
      <div className="w-full sm:hidden block">
        <Carousel
          sectionName="clientLogo"
          sliderPerView={isBelowMediumScreen ? 1 : 5}
          spaceBetween={50}
          loop={true}
        >
          {players.map((player, i) => (
            <SwiperSlide key={i}>
              <PlayerCard image={player.image} name={player.name} key={i} />
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
