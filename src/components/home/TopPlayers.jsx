import Image from "next/image";
import TitleComponent from "../common/TitleComponent";

const TopPlayers = () => {
  const newsData = [
    {
      img: "/images/home/news1.png",
      title: "Wankhede stadium to host T20 Mumbai 2025",
    },
    {
      img: "/images/home/news2.png",
      title: "Rohit Sharma Unveils the 2025 T20 Trophy",
    },
    {
      img: "/images/home/news3.png",
      title:
        "Two new teams will be entering the T20 series in the upcoming series",
    },
  ];
  return (
    <div className="section-width section-padding">
      <TitleComponent title={"Top Players"} />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  mx-auto">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="relative h-[400px] bg-cover bg-no-repeat bg-center rounded-xl"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            {/* If you prefer using <Image> instead of background-image: */}
            {/* <Image src={item.img} fill className="rounded-xl object-cover" alt="social img" /> */}

            <div className="bg-black h-24 from-black from-[50%] to-transparent to-[10%] mt-auto p-5   rounded-b-xl absolute bottom-0 w-full">
              <h6 className="text-white text-center max-w-sm mx-auto 2xl:text-xl md:text-base text- font-normal">
                {item.title}
              </h6>
            </div>
          </div>
        ))}

        {/* <div className="">
          <div className="bg-[#E07E27] px-5 py-5 rounded-t-xl">
            <p>@t20mumbai</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TopPlayers;
