import Image from "next/image";

const TeamCard = ({ data }) => {
  return (
    <div
      // bg-gradient-to-b from-[${item.gradient.from}] to-[${item.gradient.to}]
      className={`p-4 rounded-xl  flex justify-center relative `}
      style={{
        background: `linear-gradient(to bottom, ${data.gradient.from}, ${data.gradient.to})`,
      }}
    >
      <Image
        src={"/images/elements/teamCardRoundElement.png"}
        width={100}
        height={100}
        className="w-full h-full absolute top-0 left-0 rounded-xl opacity-60"
        alt="Logo"
      />
      <Image
        src={"/images/elements/teamCardElement.png"}
        width={100}
        height={100}
        className="w-full h-full absolute top-0 left-0 rounded-xl"
        alt="Logo"
      />
      <div className="relative">
        <Image
          src={data.logo}
          width={100}
          height={100}
          className="w-auto xl:h-32 h-28 mx-auto"
          alt="Logo"
        />
        {data.team && (
          <p className="text-white text-center mt-10">{data.team}</p>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
