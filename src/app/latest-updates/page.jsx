"use client";
import Hero from "@/components/hero/Hero";
import UpdatesCard from "@/components/LatestUpdateComponents/UpdatesCard";
import { CardData } from "./data";
import { useRouter } from "next/navigation";
import { formatTitleForURL } from "@/utilis/helper";
import routes from "@/utilis/route";

const page = () => {
  const router = useRouter();

  const handleLatestUpdateClick = (title) => {
    router.push(`${routes.latestUpdates}/${formatTitleForURL(title)}`);
  };
  return (
    <div className="w-full h-auto">
      <Hero imgUrl={"/images/stats/bg.svg"} heading="Latest Updates" />
      <div className="flex flex-col text-black gap-16 section-width section-padding margin-bottom">
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {[...CardData]
            .sort((a, b) => {
              const dateA = new Date(a.date.replace(/^.*?,\s*/, ""));
              const dateB = new Date(b.date.replace(/^.*?,\s*/, ""));
              return dateB - dateA;
            })
            .map((item, index) => (
              <UpdatesCard
                data={item}
                key={index}
                onClick={() => handleLatestUpdateClick(item.title)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
