import Image from "next/image";
import React from "react";

const AboutPS = () => {
  return (
    <div className="w-full bg-white lg:flex text-black p-10 gap-12 section-width">
      <div className="lg:w-[50%] w-full flex flex-col py-8 gap-4">
        <h2 className="">About Probability Sports</h2>
        <p className="  text-[#616161]">
          Probability Sports is a Special Purpose Vehicle (SPV) between IIFL
          SEED VENTURES FUND 1 and Wizcraft, with Kadar Makani at the helm
          supported by a team of specialists.
        </p>
        <p className=" text-[#616161]">
          Probability Sports will plan, market and execute T20 Mumbai League in
          its entirety, and ensure its grand success. With a vision to identify
          local talent in the cricket-rich city of Mumbai, Probability Sports
          will give aspiring cricketers in the city a platform to grow and
          better themselves as cricketers.
        </p>
      </div>

      <div className="lg:w-[40%] w-full flex items-start justify-center">
        <Image
          src={"/images/aboutUs/aboutPS/image 119.svg"}
          width={1000}
          height={100}
          className="w-full  object-cover"
          alt="img"
        />
      </div>
    </div>
  );
};

export default AboutPS;
