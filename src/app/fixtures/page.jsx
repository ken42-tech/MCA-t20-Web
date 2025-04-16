import Card from '@/components/fixtures/card/Card';
import Hero from '@/components/hero/Hero'
import React from 'react'

const page = () => {
  return (
    <div className="w-full bg-white">
      <Hero
        imgUrl="/images/teams/hero/bg.svg"
        heading="Fixtures"
        subheading="Player Profile"
      />
      <div className="w-full  px-32">
        <div className="w-full flex items-center justify-between text-black pt-20">
          <p className="text-4xl font-bold uppercase">Season 1 Fixtures</p>
          <div className="w-1/2  flex items-center  gap-4 justify-end ">
          <p className='text-base text-[#616161] font-bold uppercase'>Filter By</p>
            <DropDown selectedOpt="seson1" />
            <DropDown selectedOpt="All teams" />
          </div>
        </div>
        <div className='w-full'>
            <Card/>
        </div>
      </div>
    </div>
  );
}

const DropDown = ({ selectedOpt, options , }) => {
    return (
      <>
        <div className="flex  items-center gap-2 w-40">
          <select
            id="dropdown"
            className={`px-6 w-full py-4 bg-white text-[#E07E27] border border-[#E07E27] text-base uppercase`}
          >
            <option value="" disabled>
              Select a Season
            </option>
            <option value="" selected className=''>{selectedOpt}</option>
            {options && options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };
export default page