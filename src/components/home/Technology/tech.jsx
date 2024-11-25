"use client";
import Image from "next/image";
import Link from "next/link";
//  import "./style.css";
const Technology = () => {
    return (
        <>
            <div className="bg-black pb-20">
                {/* Title Section */}
                <div className="text-center py-12">
                    <h2 className="text-transparent bg-clip-text bg-text-gradient mb-4">Technology, Turbocharged</h2>
                    <p className="text-[#909DC1;] max-w-2xl mx-auto">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 lg:px-20">
                    
                    <div className="">
                        <div className="rounded-xl border border-gray-700 relative">
                            {/* Image */}
                            <div className="mb-4">
                                <Image
                                    src="/images/home/tech/f1.png"
                                    width={600}
                                    height={300}
                                    alt="TurboSend"
                                    className=""
                                />
                            </div>
                            {/* Title and Paragraph */}
                            <div className="px-6">
                            <h5 className="text-left">TurboSend</h5>
                            <p className="text-color text-left mt-8">
                                Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.
                            </p>
                            {/* Check Now */}
                            <p href="#" className="text-color text-left mt-6 mb-4">
                                Check Now →
                            </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: TurboAuth */}
                    <div className="">
                        <div className="rounded-xl  text-white text-center border border-gray-700 flex flex-col items-center relative">
                            {/* Image */}
                            <div className="mb-4">
                                <Image
                                    src="/images/home/tech/f2.png"
                                    width={600}
                                    height={300}
                                    alt="TurboAuth"
                                    className="shadow-lg"
                                />
                            </div>
                            {/* Title and Paragraph */}
                            <div className="px-6">
                            <h5 className="text-left ">TurboAuth</h5>
                            <p className="text-color text-left mt-8">
                                From Google to OAuth, we integrate every major SSO option, ensuring secure, seamless access for all users.
                            </p>
                            {/* Check Now */}
                            <p  className="text-color text-left mt-6 mb-4">
                                Check Now →
                            </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: TurboStream */}
                    <div className="">
                        <div className="rounded-xl  text-white text-center border border-gray-700 flex flex-col items-center relative">
                            {/* Image */}
                            <div className="mb-4">
                                <Image
                                    src="/images/home/tech/f3.png"
                                    width={600}
                                    height={300}
                                    alt="TurboStream"
                                    className="shadow-lg"
                                />
                            </div>
                            {/* Title and Paragraph */}
                            <div className="px-6">
                            <h5 className="text-xl text-left">TurboStream</h5>
                            <p className="text-color text-left mt-8">
                                Deliver video content without lag or interruptions. TurboStream powers your platform with flawless video performance.
                            </p>
                            {/* Check Now */}
                            <p className="text-color text-left mt-6 mb-4">
                                Check Now →
                            </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: TurboCloud */}
                    <div className="">
                        <div className="rounded-xl  text-white text-center border border-gray-700 flex flex-col items-center relative">
                            {/* Image */}
                            <div className="mb-4">
                                <Image
                                    src="/images/home/tech/f4.png"
                                    width={600}
                                    height={300}
                                    alt="TurboStream"
                                    className="shadow-lg"
                                />
                            </div>
                            {/* Title and Paragraph */}
                            <div className="px-6">
                            <h5 className="text-xl text-left">TurboCloud</h5>
                            <p className="text-color text-left mt-8">
                            Monitor, optimize, and scale your cloud infrastructure effortlessly-TurboCloud ensures your system runs at peak efficiency
                            </p>
                            {/* Check Now */}
                            <p className="text-color text-left mt-6 mb-4">
                                Check Now →
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}

export default Technology;