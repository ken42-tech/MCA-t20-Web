"use client";
import Image from "next/image";
import Link from "next/link";

const fixturesData = [
  { id: 1, isLive: true },
  { id: 2, isLive: false },
  { id: 3, isLive: false },
];

const Fixtures = () => {
  return (
    <div className="w-full bg-white py-7 md:py-16 section-width">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">FIXTURES</h2>
        <Link
          href="/fixtures"
          className="self-start md:self-auto text-[#616161] text-base font-bold"
        >
          View all Fixtures
        </Link>
      </div>

      {/* Grid layout */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fixturesData.map(({ id, isLive }) => (
          <div
            key={id}
            className="flex flex-col h-64 border-2 rounded-lg overflow-hidden"
          >
            {/* Date bar */}
            <div className="h-1/5 bg-[#E07E27] flex items-center justify-between px-3 md:px-6">
              <span className="font-bold text-[10px] lg:text-sm text-black">
                24 MAR, 2025
              </span>
              <span className="font-bold text-[10px] lg:text-sm text-black">
                SEASON 1 2025
              </span>
            </div>

            {/* Match info */}
            <div
              className={`flex-1 flex items-center justify-between px-3 md:px-6
                ${isLive ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}
            >
              {/* Team A */}
              <div className="flex-1 flex flex-col items-center justify-between py-3">
                <Image
                  src="/images/home/innovation/image 24.svg"
                  alt="Team A"
                  width={56}
                  height={56}
                  className="w-10 h-10 xl:w-14 xl:h-14"
                />
                <p
                  className={`text-[9px] xl:text-[12px] font-medium text-center ${
                    !isLive ? "text-black" : ""
                  }`}
                >
                  TRIUMPH KNIGHTS MUMBAI NORTH EAST
                </p>
                {isLive && (
                  <>
                    <p className="text-xs xl:text-base">219/6 (20)</p>
                    <p className="text-[8px] xl:text-[10px] text-center leading-none">
                      WON BY 18 Runs
                    </p>
                  </>
                )}
                <p className="text-[#E07E27] text-[8px] xl:text-[10px] font-bold">
                  MUMBAI, INDIA
                </p>
              </div>

              {/* vs */}
              <div className="flex flex-col items-center justify-center px-2">
                <span className="text-[#E07E27] font-bold">vs</span>
                <span className="text-[#868686] text-[10px]">24 of 74</span>
              </div>

              {/* Team B */}
              <div className="flex-1 flex flex-col items-center justify-between py-3">
                <Image
                  src="/images/home/innovation/image 19.svg"
                  alt="Team B"
                  width={56}
                  height={56}
                  className="w-10 h-10 xl:w-14 xl:h-14"
                />
                <p
                  className={`text-[9px] xl:text-[12px] font-medium text-center ${
                    !isLive ? "text-black" : ""
                  }`}
                >
                  EAGLE THANE STRIKERS
                </p>
                {isLive && <p className="text-xs xl:text-base">201/5 (20)</p>}
                {isLive && (
                  <p className="text-[#E07E27] text-[8px] xl:text-[10px] font-bold">
                    MATCH INFO
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixtures;
