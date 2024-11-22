"use client";
import Image from "next/image";
import "./style.css";

const Innovation = () => {
    return (
        <div className="bg-black">
            <div className="">
            <h3 className="text-center text-transparent bg-clip-text bg-text-gradient  ">
                    Innovation in Action
                </h3>
                <p className="text-[#909DC1] text-center mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet <br/>
                    suscipit in, fermentum id est. Suspendisse consequat ornare elit.
                </p>
                </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                {/* Card 1 */}
                <div className="bg-gradient-to-b from-black to-[#173068] p-8 rounded-xl text-white shadow-lg border-[lightBlue] border-2">
                    <Image
                        src="/images/home/innovation/ken42.svg"
                        alt="Feature 1"
                        width={700}
                        height={400}
                        className="rounded-md"
                    />
                    <div className="px-6">
                    <h4 className="text-center mt-6">
                        Revolutionized Kenverse’s AI capabilities in just 6 months
                    </h4>
                    </div>
                    <p className="text-gray-400 mt-4 text-center">
                    From concept to deployment, T²C engineered an AI transformation that positioned Kenverse as a market leader.
                    </p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-gradient-to-b from-black to-[#173068] p-8 rounded-xl text-white shadow-lg border-[lightBlue] border-2">
                    <Image
                        src="/images/home/innovation/ken421.svg"
                        alt="Feature 2"
                        width={700}
                        height={400}
                        className="rounded-md"
                    />
                    <h4 className="text-center mt-6">
                        Optimized PiChain’s onboarding to reduce friction & boost efficiency
                    </h4>
                    <p className="text-gray-400 mt-4 text-center">
                        We automated their workflows and integrated powerful AI tools, resulting in seamless user experiences.
                    </p>
                </div>
            </div>
            </div>
            
        
    );
}

export default Innovation;
