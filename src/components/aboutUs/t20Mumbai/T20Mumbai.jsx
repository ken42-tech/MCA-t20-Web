import Image from 'next/image';
import React from 'react'

const T20Mumbai = () => {
  return (
    <div className="w-full flex items-start justify-between text-black">
      <div className="w-[40%] flex flex-col gap-6 pb-24">
        <p className="text-4xl font-bold">WHAT IS T20 MUMBAI</p>
        <p className="text-lg text-[#616161]">
          Aimed at bringing the best local cricket talent of Mumbai under a
          common umbrella, T20 Mumbai is a league to identify, develop and
          promote cricketers at the grassroots level. T20 Mumbai will provide
          more structure to the cricket scene in the city and endeavour to build
          a platform for bringing the future superstars of the sport together.
        </p>
        <p className="text-lg text-[#616161]">
          Conceptualised by the Mumbai Cricket Association (MCA), T20 Mumbai
          will see them partner with Wizcraft International Entertainment Pvt.
          Ltd., India Infoline Ltd. (IIFL) and Probability Sports.
        </p>
      </div>
      <div className="w-[58%] ">
        <Image src={"/images/aboutUs/T20Mumbai/image1.svg"} width={1000} height={1000} className='w-full h-full object-cover'/>
      </div>
    </div>
  );
}

export default T20Mumbai