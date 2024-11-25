"use client";
import Image from "next/image";
//  import "./style.css";
const WhyT2C = () => {
    return (
        <>
            <div className="bg-black pb-20">
                {/* Title Section */}
                <div className="text-center py-12">
                    <h2 className="text-transparent bg-clip-text bg-text-gradient mb-4">Why Choose TSquaredC</h2>
                    <p className="text-[#909DC1;] max-w-2xl mx-auto">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 lg:px-20 ">
                    {/* Card 1: Tech & Talent Unified */}
                    <div className="card-bg">
                        <div
                            className="rounded-xl p-6 text-white text-center  flex flex-col relative"
                            style={{ mixBlendMode: "luminosity" }}
                        >
                            {/* Icon and Title */}
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/images/home/whyT2C/icon.svg"
                                    width={22}
                                    height={22}
                                    alt="Tech & Talent Unified"
                                />
                                <h3 className="text-xl">Tech & Talent Unified</h3>
                            </div>
                            {/* Paragraph */}
                            <p className="text-[#A7B2CF] text-left mt-4">
                                Access every technology, every skill set, and every tool – fully integrated and ready to execute.
                            </p>
                            {/* Image Below */}
                            <div className="mt-6 absolute top-[150px]">
                                <Image
                                    src="/images/home/whyT2C/i1.svg"
                                    width={300}
                                    height={350}
                                    alt="Card Illustration"
                                    className="shadow-lg"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Card 2: Scale Right, Scale Fast */}
                    <div className="card-bg">
                        <div className="rounded-xl  p-6 text-white text-center flex flex-col  relative"
                        style={{ mixBlendMode: "luminosity" }}>
                            {/* Icon and Title */}
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/images/home/whyT2C/icon.svg"
                                    width={22}
                                    height={22}
                                    alt="Tech & Talent Unified"
                                />
                                <h3 className="text-xl ">Scale Right, Scale Fast</h3>
                            </div>
                            {/* Paragraph */}
                            <p className="text-[#A7B2CF] text-left mt-4">
                                Access every technology, every skill set, and every tool - fully integrated and ready to execute.
                            </p>
                            {/* Image Below (Slightly Out of the Box) */}
                            <div className="mt-6 absolute top-[150px] pr-3">
                                <Image
                                    src="/images/home/whyT2C/i2.svg"
                                    width={300}
                                    height={300}
                                    alt="Card Illustration"
                                    className="shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: AI-Powered Innovation */}
                    <div className="card-bg">
                        <div className="rounded-xl  p-6 text-white text-center  flex flex-col  relative"
                        style={{ mixBlendMode: "luminosity" }}>
                            {/* Icon and Title */}
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/images/home/whyT2C/icon.svg"
                                    width={22}
                                    height={22}
                                    alt="Tech & Talent Unified"
                                />
                                <h3 className="text-xl">AI-Powered Innovation</h3>
                            </div>
                            {/* Paragraph */}
                            <p className="text-[#A7B2CF] text-left mt-4">
                                Access every technology, every skill set, and every tool - fully integrated and ready to execute.
                            </p>
                            
                            <div className="mt-6 absolute top-[150px]">
                                <Image
                                    src="/images/home/whyT2C/i3.svg"
                                    width={300}
                                    height={300}
                                    alt="Card Illustration"
                                    className="shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Supercharge Your Product */}
                    <div className="card-bg">
                        <div className="rounded-xl  p-6 text-white text-center flex flex-col  relative"
                        style={{ mixBlendMode: "luminosity" }} >
                            {/* Icon and Title */}
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/images/home/whyT2C/icon.svg"
                                    width={22}
                                    height={22}
                                    alt="Tech & Talent Unified"
                                />
                                <h3 className="text-xl">Supercharge Your Product</h3>
                            </div>
                            {/* Paragraph */}
                            <p className="text-[#A7B2CF] text-left mt-4">
                                Access every technology, every skill set, and every tool - fully integrated and ready to execute.
                            </p>
                            {/* Image Below (Slightly Out of the Box) */}
                            <div className="mt-6">
                                <Image
                                    src="/images/home/whyT2C/i4.svg"
                                    width={300}
                                    height={300}
                                    alt="Card Illustration"
                                    className="shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default WhyT2C;