"use client";
import Image from "next/image";
// import "./style.css";
const AboutT2C = () => {
  return (
    <div className="bg-black px-6 sm:px-10 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto pt-16 sm:pt-24 lg:pt-48">
        {/* Card 1 */}
        <div className="text-white">
          <div>
            <h2 className="text-left mt-6 text-transparent bg-clip-text bg-text-gradient">
              About TSquaredC
            </h2>
          </div>
          <p className="text-[#909DC1] text-xl mt-8 text-left">
            Once you've selected or configured an agent team, begin chatting
            with your built-in project manager to describe your goal, provide
            relevant information, give feedback, and approve results.
            <br />
            <br />
            Gone are the days of doing the legwork yourself - just engage your
            on-demand AI workforce and relax as you watch your ideas come to
            life.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative">
          {/* Background blur effect */}
          <div className="w-[800px] sm:w-[100px] h-[400px] bg-[#041570] absolute left-0 right-0 top-0 bottom-10 m-auto blur-[200px] md:block hidden z-0"></div>
          <div className="p-8 rounded-xl text-white shadow-lg z-10">
            <Image
              src="/images/home/about/space .svg"
              alt="Feature 2"
              width={800}
              height={430}
              className="rounded-md w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutT2C;
