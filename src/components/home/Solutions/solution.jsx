"use client";
import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
    return (
        <div className="bg-black pb-20">
            {/* Title Section */}
            <div className="text-center py-12">
                <h2 className="text-transparent bg-clip-text bg-text-gradient  mb-4">
                    Choose Your Solution <br /> For Emerging Businesses
                </h2>
                <p className="text-[#909DC1] max-w-2xl mx-auto">
                    Propel your new age business forward with our Solutions:
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col lg:flex-row gap-6 px-8 lg:px-16">
                {/* Card 1 (30% Width) */}
                <div className="flex-1 lg:max-w-[40%]  rounded-xl border border-gray-700  flex flex-col justify-between">
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/images/home/solution/i1.svg"
                                width={600}
                                height={300}
                                alt="Plug and Play solutions"
                                className="mx-auto"
                            />
                        </div>
                        <div className="px-8">
                        <h5 className="text-white  mb-4">Plug and Play solutions</h5>
                        <p className="text-color">
                            <strong>Instant Integration, Immediate Impact:</strong>
                            <br/>
                             Dive into the market without delay, utilizing our fully integrated tech stack that meshes seamlessly with your operations.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center mt-6 pt-6 border-t border-gray-700">
                        <Link
                            href="/get-started"
                            className="text-white px-6 py-2 bg-blue-700 rounded-full ml-auto"
                        >
                            Customize Your Path
                        </Link>
                    </div>
                </div>

                {/* Card 2 (70% Width) */}
                <div className="flex-1 lg:max-w-[70%]  rounded-xl border border-gray-700  flex flex-col justify-between">
                    <div>
                        <div className="mb-8">
                            <Image
                                src="/images/home/solution/i2.svg"
                                width={600}
                                height={310}
                                alt="Customizable Solutions"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="px-8">
                        <h5 className="text-white mb-4">Customizable Solutions</h5>
                        </div>
                        <div className="px-8">
                        <p className="text-color mb-4">
                            Customizable Solutions designed for your business's unique demands & growth trajectory.
                        </p>
                        <p className="text-color">
                            <strong>Build, Expand: </strong>
                            <br/>
                            Engineered for long-term evolution, these solutions ensure your technology infrastructure grows as dynamically as your business.
                        </p>
                        

                    <div className="flex items-center mt-6 pt-6 border-t border-gray-700">
                        <Link
                            href="/get-started"
                            className="text-white px-6 py-2 bg-blue-700 rounded-full ml-auto"
                        >
                            Accelerate with Plug & Play
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    
    );
};

export default Solutions;
