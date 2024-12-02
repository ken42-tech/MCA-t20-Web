"use client";
import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
  return (
    <div className="bg-black pb-20">
      <div className="text-center py-12">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#82AAFF] mb-4">
          Choose Your Solution <br /> For Emerging Businesses
        </h2>
        <p className="text-[#909DC1] max-w-2xl mx-auto">
          Propel your new age business forward with our Solutions:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-8 lg:px-16">
        {/* Plug and Play solutions */}
        <div className="flex-1 lg:max-w-[40%] rounded-xl border border-gray-700 flex flex-col">
          <div className="border-b border-gray-700">
            <Image
              src="/images/home/solution/f1.png"
              width={600}
              height={300}
              alt="Plug and Play solutions"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-12 gap-4 px-8 pt-6 pb-6">
            <div className="col-span-12 lg:col-span-7">
              <h6 className="text-white mb-4">Plug and Play solutions</h6>
              <p className="text-[#909DC1] text-sm sm:text-base">
                <b>Instant Integration, Immediate Impact:</b>
                <br />
                Dive into the market without delay, utilizing our fully
                integrated tech stack that meshes seamlessly with your
                operations.
              </p>
            </div>
            <div className="relative flex items-center justify-center px-2">
              <div className="h-full w-[0.1px] bg-gray-700"></div>
            </div>
            <div className="col-span-12 lg:col-span-4 pl-4 flex items-center justify-start">
              <Link
                href="/get-started"
                className="text-white bg-blue-700 px-4 py-2 rounded-full text-sm"
              >
                Customize Your Path
              </Link>
            </div>
          </div>
        </div>

        {/* Customizable Solutions */}
        <div className="flex-1 lg:max-w-[60%] rounded-xl border border-gray-700 flex flex-col">
          <div className="border-b border-gray-700">
            <Image
              src="/images/home/solution/i2.svg"
              width={600}
              height={300}
              alt="Customizable Solutions"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="grid grid-cols-12 gap-4 px-4 pt-6 pb-6">
            <div className="col-span-12 lg:col-span-8">
              <h6 className="text-white mb-4">Customizable Solutions</h6>
              <p className="text-[#909DC1] text-sm sm:text-base">
                Customizable Solutions designed for business's unique demands &
                growth trajectory.
              </p>
              <p className="text-[#909DC1] pt-2 text-sm sm:text-base">
                <strong>Build, Expand:</strong>
                <br />
                Engineered for long-term evolution, these solutions ensure your
                technology infrastructure grows as dynamically as your business.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="h-full w-[0.3px] bg-gray-700"></div>
            </div>
            <div className="col-span-12 lg:col-span-3 flex items-center justify-start">
              <Link
                href="/get-started"
                className="text-white bg-blue-700 px-4 py-2 rounded-full text-sm"
              >
                Accelerate with Plug & Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
