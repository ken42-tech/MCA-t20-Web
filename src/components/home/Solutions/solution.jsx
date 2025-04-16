"use client";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="bg-white w-full pt-6 pb-20 px-10 section-width">
      <div className="px-6 md:pl-24 flex flex-col gap-[4px]">
        <div className="font-semibold text-4xl md:text-[29.22px] uppercase text-black leading-none">
          SPONSORSHIP
        </div>
        <div className="font-thin text-base md:text-sm text-[#616161] leading-none mt-4">
          View all Sponsors
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase pl-2 text-black">
            Official Partners
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            <Image
              src="/images/home/sponsorship/image 77.svg"
              alt="Partner 1"
              width={160}
              height={80}
            />
            <Image
              src="/images/home/sponsorship/image 78.svg"
              alt="Partner 2"
              width={160}
              height={80}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 px-6 md:px-28 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start  md:pr-12">
          <div className="flex flex-col items-center gap-1 ">
            <p className="text-xs font-semibold uppercase text-black text-center leading-tight">
              Official Fantasy Game
            </p>
            <Image
              src="/images/home/sponsorship/image 66.svg"
              alt="Dream11"
              width={160}
              height={80}
            />
          </div>

          <div className="hidden md:block w-px bg-black h-16 self-center" />

          <div className="flex flex-col items-center gap-1 px-2">
            <p className="text-xs font-semibold uppercase text-black text-center leading-tight">
              Umpire Sponsor
            </p>
            <Image
              src="/images/home/sponsorship/image 67.svg"
              alt="Skoda"
              width={160}
              height={80}
            />
          </div>

          <div className="hidden md:block w-px bg-black h-16 self-center" />

          <div className="flex flex-col items-center gap-1 ">
            <p className="text-xs font-semibold uppercase text-black text-center leading-tight">
              Associate Sponsors
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image
                src="/images/home/sponsorship/image 69.svg"
                alt="Atul Projects"
                width={130}
                height={80}
              />
              <div className="block w-px bg-black h-16 self-center" />
              <Image
                src="/images/home/sponsorship/image 70.svg"
                alt="Wardwiz"
                width={130}
                height={80}
              />
            </div>
          </div>

          <div className="hidden md:block w-px bg-black h-16 self-center" />

          <div className="flex flex-col items-center gap-1 ">
            <p className="text-xs font-semibold uppercase text-black text-center leading-tight">
              Hydration Partner
            </p>
            <Image
              src="/images/home/sponsorship/image 71.svg"
              alt="Bisleri"
              width={160}
              height={80}
            />
          </div>

          <div className="hidden md:block w-px bg-black h-16 self-center" />

          <div className="flex flex-col items-center gap-1 ">
            <p className="text-xs font-semibold uppercase text-black text-center leading-tight">
              Ticketing Partner
            </p>
            <Image
              src="/images/home/sponsorship/image 74.svg"
              alt="BookMyShow"
              width={160}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
