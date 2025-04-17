"use client";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="bg-white w-full pt-6 pb-20 h-[80vh] px-32 section-width">
      <div className=" flex flex-col gap-[4px]">
        <div className="font-plusjakarta h-[40px]  font-bold text-[44.22px] leading-[85px] tracking-normal uppercase text-black">
          SPONSORSHIP
        </div>
        <div className="font-plusjakarta font-semibold text-[22px] leading-[85px] tracking-normal text-[#616161]">
          View all Sponsors
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black">
            OFFICIAL PARTNERS
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            <Image
              src="/images/home/sponsorship/image 77.svg"
              alt="Partner 1"
              width={213.36}
              height={134}
            />
            <Image
              src="/images/home/sponsorship/image 78.svg"
              alt="Partner 2"
              width={213.36}
              height={134}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 md:px-6 lg:px-8 xl:px-12 w-[90%]">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
    {/* OFFICIAL FANTASY GAME */}
    <div className="flex flex-col items-center text-center">
      <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
        OFICIAL FANTASY GAME
      </p>
      <div className="w-full flex justify-center  items-center h-[134px]">
        <Image
          src="/images/home/sponsorship/image 66.svg"
          alt="Dream11"
          width={213.36}
          height={134}
          className="max-w-full h-auto"
        />
      </div>
    </div>

    {/* Vertical line 1 */}
    <div className="hidden md:flex pt-[40px] items-center h-[134px]">
      <div className="w-px bg-black h-[109px]"></div>
    </div>

    {/* UMPIRE SPONSORS */}
    <div className="flex flex-col items-center text-center">
      <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
        UMPIRE SPONSORS
      </p>
      <div className="w-full flex justify-center items-center h-[134px]">
        <Image
          src="/images/home/sponsorship/image 67.svg"
          alt="Skoda"
          width={213.36}
          height={134}
          className="max-w-full h-auto"
        />
      </div>
    </div>

    {/* Vertical line 2 */}
    <div className="hidden pt-[40px] md:flex items-center h-[134px]">
      <div className="w-px bg-black h-[109px]"></div>
    </div>

    {/* ASSOCIATE SPONSORS */}
    <div className="flex flex-col items-center text-center ">
      <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
        ASSOCIATE SPONSORS
      </p>
      <div className="flex flex-row items-center h-[134px]">
        <div className="flex justify-center items-center">
          <Image
            src="/images/home/sponsorship/image 69.svg"
            alt="Atul Projects"
            width={213.36}
            height={134}
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex items-center h-[134px]">
          <div className="w-px bg-black h-[109px] mx-1"></div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/home/sponsorship/image 70.svg"
            alt="Wardwiz"
            width={213.36}
            height={134}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>

    {/* Vertical line 3 */}
    <div className="hidden pt-[40px] md:flex items-center h-[134px]">
      <div className="w-px bg-black h-[109px]"></div>
    </div>

    {/* HYDRATION PARTNER */}
    <div className="flex flex-col items-center text-center">
      <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
        HYDRATION PARTNER
      </p>
      <div className="w-full flex justify-center items-center h-[134px]">
        <Image
          src="/images/home/sponsorship/image 71.svg"
          alt="Bisleri"
          width={213.36}
          height={134}
          className="max-w-full h-auto"
        />
      </div>
    </div>

    {/* Vertical line 4 */}
    <div className="hidden md:flex pt-[40px] items-center h-[134px]">
      <div className="w-px bg-black h-[109px]"></div>
    </div>

    {/* TICKETING PARTNER */}
    <div className="flex flex-col items-center text-center">
      <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
        TICKETING PARTNER
      </p>
      <div className="w-full flex justify-center items-center h-[134px]">
        <Image
          src="/images/home/sponsorship/image 74.svg"
          alt="BookMyShow"
          width={213.36}
          height={134}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Solutions;
