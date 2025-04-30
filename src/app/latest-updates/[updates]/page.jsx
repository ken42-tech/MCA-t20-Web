import TitleComponent from "@/components/common/TitleComponent";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import { CardData } from "../data";
import UpdatesCard from "@/components/LatestUpdateComponents/UpdatesCard";

const page = () => {
  return (
    <>
      <Hero imgUrl={"/images/stats/bg.svg"} heading="Latest Updates" />
      <div className="section-width section-padding text-black">
        <div>
          <div className="mb-8">
            <p>18 April, 2025</p>
            <h2 className="max-w-5xl mb-4">
              Iconic Wankhede Stadium to Host T20 Mumbai League Season 3 from
              May 26 to June 8
            </h2>
            <p className="  ">
              The Mumbai Cricket Association will invite underprivileged
              children and students from BMC schools to experience the
              excitement of the 14-day tournament live from the stands
            </p>
          </div>

          <Image
            src={"/images/latestUpdates/iconicWankhedeStadium.jpg"}
            width={1000}
            height={1000}
            className="w-full h-full"
            alt="img"
          />
          <div className="section-padding">
            <p>
              The Mumbai Cricket Association (MCA) on Tuesday officially
              announced the iconic Wankhede Stadium as the host venue for the
              highly anticipated T20 Mumbai League 2025. The league, among
              India’s top domestic T20 franchise tournaments, marks its return
              with Season 3 all set to get underway from May 26 to June 8.
              <br />
              <br />
              The T20 Mumbai League provides a competitive platform for emerging
              talent, aiming to discover the next generation of cricketing
              stars. In its previous two editions, the league has witnessed the
              rise of players like Shivam Dube, Tushar Deshpande, Shams Mulani
              among others — setting new benchmarks in India’s domestic T20
              landscape.
              <br />
              <br />
              In a special gesture, the MCA will invite underprivileged children
              and students from Brihanmumbai Municipal Corporation (BMC) schools
              to attend the matches, giving them access to the thrilling action
              across the 14-day tournament featuring eight teams. <br />
              <br />
              “The T20 Mumbai League has been a game-changer not just for
              cricket in the city, but also for Indian cricket. The last two
              editions saw several players impressing with remarkable
              performances and making their mark on the national stage. Watching
              star players live is incredibly inspiring for the next generation,
              and we want to use this opportunity to bring underprivileged
              children and BMC school students to the stadium — encouraging them
              to get inspired and dream big,” said MCA President Ajinkya Naik.{" "}
              <br />
              <br />
              “Wankhede Stadium is the pride of Mumbai and one of the most
              iconic cricket venues in the world. It has witnessed countless
              unforgettable moments in both, domestic and international cricket.
              The stadium’s electrifying atmosphere makes it the ideal stage for
              Season 3. The response from fans in the previous editions was
              overwhelming, and we look forward to seeing even more fans in the
              stands this year as we promise to deliver thrilling action,”
              commented MCA Secretary Abhay Hadap. <br />
              <br />
              Recently, the MCA unveiled India’s captain and Mumbai’s very own
              Rohit Sharma as the official face of Season 3, adding star power
              to the tournament’s return. Season 3 has already seen over 2,800
              player registrations, reflecting the enthusiasm and anticipation
              within Mumbai’s cricketing community. <br />
              <br />
              The tournament will continue to feature eight franchises: North
              Mumbai Panthers (Horizon Sports India Private Limited), ARCS
              Andheri (Arcs Sports & Entertainment Private Limited), Triumph
              Knights Mumbai North East (Transcon Triumph Knights Private
              Limited), Namo Bandra Blasters (Pk Sports Ventures Private
              Limited), Eagle Thane Strikers (Eagle Infra India Ltd.) and Aakash
              Tigers Mumbai Western Suburbs (World Star Premier League LLP)
              along with two new teams SoBo Mumbai Falcons (Roadway Solutions
              India Infra Ltd.) and Mumbai South Central Maratha Royals (Royal
              Edge Sports & Entertainment).
            </p>
          </div>
          <div>
            <TitleComponent title={"Latest Updates"} />
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              {CardData.slice(0).map((item, index) => (
                <UpdatesCard data={item} key={index} />
                // <Card item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
