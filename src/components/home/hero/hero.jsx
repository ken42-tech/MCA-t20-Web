"use client";
import Image from "next/image";
import Navbar from "@/components/layout/navbar/navbar";
// import Innovation from "@/components/home/Innovation/innovation";

const Hero = () => {
  return (
    <div className="px-6 py-20 lg:px-20 lg:py-36 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6 mt-[8vh] lg:mt-[18vh] text-center lg:text-left">
          <h1 className="mb-10">
            The Future of Tech
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#82AAFF] pt-4">
              Starts Here
            </span>
          </h1>
          <p className="text-lg pb-8 w-full sm:w-[80%] mx-auto lg:mx-0">
            From concept to market, T&C supercharges your tech journey with
            top-tier talent, cutting-edge tools, and rapid execution. Let's
            build groundbreaking solutions that define tomorrow.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-2xl">
            Let's Build Something Extraordinary
          </button>

          {/* Hide Trusted by the Best section on mobile */}
          <h6 className="pt-40 hidden lg:block">TRUSTED BY THE BEST</h6>
          <div className="flex flex-wrap justify-start gap-8 hidden lg:flex">
            <Image
              src="/images/home/hero/ts-bridge-logo.svg"
              alt="TS Bridge"
              width={120}
              height={70}
              className="h-auto"
            />
            <Image
              src="/images/home/hero/pichain.svg"
              alt="pichain"
              width={120}
              height={70}
              className="h-auto"
            />
            <Image
              src="/images/home/hero/ken42.svg"
              alt="ken42"
              width={120}
              height={70}
              className="h-auto"
            />
            <Image
              src="/images/home/hero/optimile.svg"
              alt="optimile"
              width={120}
              height={70}
              className="h-auto"
            />
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="pb-8 flex justify-center m-2 sm:m-0 sm:pl-8 sm:ml-32">
          <picture>
            {/* For mobile screens, the srcset will serve the mobile image */}
            <source
              media="(max-width: 767px)"
              srcSet="/images/home/hero/mobileimage.png"
            />
            {/* For larger screens, this image will be used */}
            <Image
              src="/images/home/hero/hero1.png"
              alt="Tech Future"
              width={800}
              height={1273}
              className="rounded-md w-full sm:w-auto"
              style={{
                background: "transparent",
              }}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
