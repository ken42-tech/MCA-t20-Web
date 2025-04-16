import Image from "next/image";
import Link from "next/link";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <div className="bg-black px-8 sm:px-16 md:px-32 abso section-width">
        <div className="section-width  lg:py-14">
          <div className="lg:flex justify-between lg:gap-12 max-lg:space-y-12">
            <div className="max-w-md">
              <Image
                src="/images/home/logo.svg"
                alt="t20mumbai Logo"
                width={200}
                height={280}
                className="mb-6 pl-6"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 space-y-8 lg:space-y-0 mr-8 pl-24">
              <div className="flex flex-col gap-0.5">
                <h6 className="text-[#E07E27] text-sm font-normal font-Inter whitespace-nowrap mt-1">
                  LATEST UPDATES
                </h6>
                <ul className="leading-none">
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Standings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Fixtures
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h6 className="text-[#E07E27] text-sm font-normal font-Inter whitespace-nowrap mt-1">
                  TEAMS
                </h6>
                <ul className="leading-none">
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] whitespace-nowrap hover:text-white"
                    >
                      Aakash Tigers MWS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Arcs Andheri
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Eagle Thane Strikers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] whitespace-nowrap hover:text-white"
                    >
                      Namo Bandra Blasters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Sobo Supersonics
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-[#E07E27] text-sm font-normal font-Inter whitespace-nowrap mt-1">
                  POINTS TABLE
                </h6>
                <ul className="leading-none">
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Points Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Play Offs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-[#E07E27] text-sm font-normal font-Inter whitespace-nowrap mt-1">
                  STATISTICS
                </h6>
                <ul className="leading-none">
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Game Stats
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Player Stats
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      Overall Statistics
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-[#E07E27] text-sm font-normal font-Inter whitespace-nowrap mt-1 ">
                  ABOUT US
                </h6>
                <ul className="leading-none">
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px] hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light  text-[8px] hover:text-white"
                    >
                      We Stand For
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#FFFFFF] font-Inter font-light text-[8px]  whitespace-nowrap hover:text-white"
                    >
                      Code of Conduct
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center h-8 pt-3 items-center">
              <Link href="#">
                <Image
                  src="/images/footer/Link.svg"
                  width={110}
                  height={80}
                  alt="Zo"
                />
              </Link>

              <Link href="#">
                <Image
                  src="/images/footer/Image.svg"
                  width={110}
                  height={80}
                  alt="Zom"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center text-[8px] px-4">
            <div className="w-1/4 text-left pt-0.5">
              <p className="not-italic text-sm text-[#BCC3D7] mb-20 pr-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ac neque sit amet sem varius feugiat eget at quam.
              </p>
            </div>

            <div className="text-[8px] font-Inter font-thin text-xs text-center">
              Terms and Conditions | Privacy Policy | Contact Us
            </div>

            <div className="flex items-center gap-x-1.5 text-[8px] font-Inter font-thin text-xs">
              <span>Connect with us:</span>
              <Image
                src="/images/footer/mdi_instagram.svg"
                alt="Instagram Logo"
                width={17}
                height={17}
              />
              <Image
                src="/images/footer/line-md_twitter.svg"
                alt="Twitter Logo"
                width={17}
                height={17}
              />
              <Image
                src="/images/footer/line-md_youtube.svg"
                alt="YouTube Logo"
                width={17}
                height={17}
              />
            </div>

            <div className="font-Inter font-extralight text-[8px] text-xs text-right pr-18">
              © Copyright 2025 T20 Mumbai 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
