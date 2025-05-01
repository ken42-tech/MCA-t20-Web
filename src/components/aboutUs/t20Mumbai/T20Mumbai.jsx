import Image from "next/image";
import React from "react";

const T20Mumbai = () => {
  return (
    <div className="h-full lg:flex items-start text-black p-10 section-width mt-20 gap-12">
      <div className=" h-full w-full lg:w-[43%] flex flex-col gap-6  ">
        <h2 className="text-black">WHAT IS T20 MUMBAI</h2>
        <p className=" text-[#616161]">
          Aimed at bringing the best local cricket talent of Mumbai under a
          common umbrella, T20 Mumbai is a league to identify, develop and
          promote cricketers at the grassroots level. T20 Mumbai will provide
          more structure to the cricket scene in the city and endeavour to build
          a platform for bringing the future superstars of the sport together.
        </p>
        {/* <p className=" text-[#616161]">
          Conceptualised by the Mumbai Cricket Association (MCA), T20 Mumbai
          will see them partner with Wizcraft International Entertainment Pvt.
          Ltd., India Infoline Ltd. (IIFL) and Probability Sports.
        </p> */}
      </div>
      <div className=" w-full lg:w-[60%] pt-14 lg:pt-0 ">
        <Image
          src={"/images/aboutUs/T20Mumbai/image1.svg"}
          width={1000}
          height={1000}
          className="object-fill h-full"
          alt="img"
        />
      </div>
    </div>
  );
};

export default T20Mumbai;
