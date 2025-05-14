import Image from "next/image";
import TitleComponent from "../common/TitleComponent";
import CustomTable from "../common/CustomTable";
import Link from "next/link";
import routes from "@/utilis/route";

const headers = ["RANK", "TEAM", "MP", "NET RR", "PTS"];
const data = [
  {
    RANK: "02",
    TEAM: {
      name: "Sobo Supersonics",
      logo: "/images/home/team/soboSuperSonics.png",
    },
    MP: 5,
    "NET RR": "+0.662",
    PTS: 6,
  },
  {
    RANK: "03",
    TEAM: {
      name: "ARCS Andheri",
      logo: "/images/home/team/arcsAndheri.png",
    },
    MP: 5,
    "NET RR": "+0.143",
    PTS: 6,
  },
  {
    RANK: "04",
    TEAM: {
      name: "Bandra Blasters",
      logo: "/images/home/team/bandraBlasters.png",
    },
    MP: 5,
    "NET RR": "+0.277",
    PTS: 4,
  },
  {
    RANK: "05",
    TEAM: {
      name: "MSC Maratha Royals",
      logo: "/images/home/team/shivajiParkLions.png",
    },
    MP: 5,
    "NET RR": "+0.195",
    PTS: 4,
  },
];
// const headerStyles = {
//   RANK: { className: "bg-[#402010]" },
//   TEAM: { className: "bg-[#2B0F04]" },
//   MP: { className: "bg-[#2B0F04]" },
//   "NET RR": { className: "bg-[#2B0F04]" },
//   PTS: { className: "bg-[#2B0F04]" },
// };
const headerStyles = {
  className: "bg-[#2B0F04] text-white",
};

const customRenderers = {
  TEAM: (value) => (
    <div className="flex items-center gap-3">
      <img
        src={value.logo}
        alt={value.name}
        className="w-8 h-8 object-contain"
      />
      <span className="text-white">{value.name}</span>
    </div>
  ),
};
const HomeStandingsSection = () => {
  return (
    <div className="section-width padding-bottom">
      <TitleComponent title="standings" button buttonLink={routes.standing} />

      <div className="flex flex-row gap-8">
        <div className=" bg-black text-white rounded-xl w-full">
          <h2 className="text-xl font-bold text-left bg-[#E07E27] p-4">
            GROUP – B STANDINGS
          </h2>
          <CustomTable
            headers={headers}
            data={data}
            customRenderers={customRenderers}
            headerStyles={headerStyles}
          />
        </div>
        <div className="  bg-black text-white rounded-xl w-full">
          <h2 className="text-xl font-bold text-left bg-[#E07E27] p-4">
            GROUP – B STANDINGS
          </h2>
          <CustomTable
            headers={headers}
            data={data}
            customRenderers={customRenderers}
            headerStyles={headerStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeStandingsSection;
