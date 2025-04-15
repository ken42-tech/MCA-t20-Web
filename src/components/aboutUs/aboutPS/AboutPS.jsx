import Image from 'next/image'
import React from 'react'

const AboutPS = () => {
  return (
    <div className="w-full bg-white flex text-black">
      <div className="w-1/2 flex flex-col py-8 gap-4">
        <p className="text-4xl font-bold uppercase">About Probability Sports</p>
        <p className="text-lg text-[#616161]">
          Probability Sports is a Special Purpose Vehicle (SPV) between IIFL
          SEED VENTURES FUND 1 and Wizcraft, with Kadar Makani at the helm
          supported by a team of specialists.
        </p>
        <p className="text-lg text-[#616161]">
          Probability Sports will plan, market and execute T20 Mumbai League in
          its entirety, and ensure its grand success. With a vision to identify
          local talent in the cricket-rich city of Mumbai, Probability Sports
          will give aspiring cricketers in the city a platform to grow and
          better themselves as cricketers.
        </p>
      </div>

      <div className="w-1/2 p-20 flex items-start justify-center">
        <Image
          src={"/images/aboutUs/aboutPS/image 119.svg"}
          width={1000}
          height={100}
          className="w-full  object-cover"
          alt='img'
        />
      </div>
    </div>
  );
}

export default AboutPS