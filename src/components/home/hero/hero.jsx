"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-bg px-6 lg:px-20 py-36 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl">
            The Future of Tech
            <br />
            <span className="text-color pt-4">Starts Here</span>
          </h1>
          <p className="text-lg pb-8">
            From concept to market, T&C supercharges your tech journey with
            top-tier talent, cutting-edge tools, and rapid execution. Let's
            build groundbreaking solutions that define tomorrow.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-2xl">
            Let's Build Something Extraordinary
          </button>

          <h3 className="text-lg pt-40">Trusted by the Best</h3>
          <div className="flex space-x-24">
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
        {/* <div>
          <Image
            src="/images/home/hero/cards.svg"
            alt="Tech Future"
            width={500}
            height={400}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
