import Image from 'next/image';
import React from 'react'

const AboutMCA = () => {
  return (
    <div className="w-full bg-black flex ">
      <div className="w-1/2 p-12 pb-20 pr-32 flex items-center justify-center">
      <Image src={"/images/aboutUs/aboutMCA/image 118.svg"} width={1000} height={100} className='w-full h-full object-cover' alt='img' /></div>
      <div className="w-1/2 flex flex-col py-8 gap-4">
        <p className="text-4xl font-bold uppercase">About MCA</p>
        <p className="text-lg text-[#B3B3B3]">
          Established in 1930, the Mumbai Cricket Association (MCA) is the
          governing body for cricket in Mumbai, Greater Mumbai and Thane
          districts. MCA is a permanent member of the Board of Control for
          Cricket in India (BCCI), and houses its headquarters within the
          Wankhede Stadium premises.
        </p>
        <p className="text-lg text-[#B3B3B3]">
          MCA has developed a rich cricket heritage in Mumbai. Such has been
          their influence that Mumbai has given the country more than 60 Test
          cricketers so far. There was even a time when the Indian playing
          eleven consisted of six to seven cricketers from Mumbai – a testament
          to how good they have been at the highest level.
        </p>
        <p className="text-lg text-[#B3B3B3]">
          MCA has taken on the onus of building new infrastructure for cricket.
          They have developed Recreation Centres at the Bandra Kurla Complex,
          and also in Kandivali where they house some of the best, cutting-edge
          sports facilities.
        </p>
      </div>
    </div>
  );
}

export default AboutMCA