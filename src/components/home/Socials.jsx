import Image from "next/image";
import TitleComponent from "../common/TitleComponent";

const Socials = () => {
  return (
    <div className="section-width section-padding">
      <TitleComponent title={"Socials"} />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
        <Image
          src={"/images/home/social1.png"}
          width={400}
          height={400}
          alt="social img"
        />
        <Image
          src={"/images/home/social2.png"}
          width={400}
          height={400}
          alt="social img"
        />
        <Image
          src={"/images/home/social3.png"}
          width={400}
          height={400}
          alt="social img"
        />
        {/* <div className="">
          <div className="bg-[#E07E27] px-5 py-5 rounded-t-xl">
            <p>@t20mumbai</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Socials;
