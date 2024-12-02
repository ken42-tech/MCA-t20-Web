"use client";
import Image from "next/image";
import "./style.css";

const Innovation = () => {
  return (
    <div className="mt-0">
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-[#82AAFF]">
        Innovation in Action
      </h2>
      <p className="text-[#909DC1] text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla
        velit, maximus sit amet <br />
        suscipit in, fermentum id est. Suspendisse consequat ornare elit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-black to-[#173068] p-8 rounded-xl text-white shadow-lg border-l-[1px] border-r-[1px] border-b-[1px] border-[#fff]">
          <Image
            src="/images/home/innovation/ken42.svg"
            alt="Feature 1"
            width={700}
            height={400}
            className="rounded-md w-full h-auto"
          />
          <div className="px-6">
            <h4 className="text-center mt-6 px-8">
              Revolutionized Kenverse’s AI capabilities in just 6 months
            </h4>
          </div>
          <p className="text-gray-400 mt-4 text-center">
            From concept to deployment, T²C engineered an AI transformation that
            positioned Kenverse as a market leader.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-black to-[#173068] p-8 rounded-xl text-white shadow-lg">
          <Image
            src="/images/home/innovation/ken421.svg"
            alt="Feature 2"
            width={700}
            height={400}
            className="rounded-md w-full h-auto"
          />
          <h4 className="text-center mt-6 px-8">
            Optimized PiChain’s onboarding to reduce friction & boost efficiency
          </h4>
          <p className="text-gray-400 mt-4 text-center">
            We automated their workflows and integrated powerful AI tools,
            resulting in seamless user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
