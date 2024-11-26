import React from "react";
import './style.css'; 
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="bg-[#090A0D] text-white min-h-screen flex justify-center items-center px-12">
      <div className="container mx-auto px-6">
        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Form - 65% width with custom grey thin border */}
          <div className="bg-gray-900 p-8 rounded-lg lg:col-span-2 custom-border card-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
  <h1 className="col-span-4 md:col-span-3 custom-heading mb-4 border-r border-gray-600 pl-8">
    Ready to Build the Future?<br /> Let’s Make It Happen
  </h1>
  <p className="col-span-4 md:col-span-3 text-gray-400 mb-8 text-[20px] text-center-justify mx-8">
    Your breakthrough idea deserves a world-class execution. Partner with T²C and transform your vision into reality.
  </p>
</div>
  <form className="mt-8 mx-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm mb-2">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 rounded custom-input focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 rounded custom-input focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Email ID</label>
        <input
          type="email"
          placeholder="Email ID"
          className="w-full px-4 py-2 rounded custom-input focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Phone Number</label>
        <input
          type="tel"
          placeholder="+1-202-555-0174"
          className="w-full px-4 py-2 rounded custom-input focus:outline-none"
        />
      </div>
    </div>
    <button
      type="submit"
      className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
    >
      Send Now
    </button>
  </form>
</div>


          {/* Right Information Boxes - 35% width with custom grey thin border */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-1">
  {/* First Card - Location */}
  <div className="bg-gray-900 p-6 rounded-lg custom-border card-background">
    <div className="grid grid-cols-4 gap-2 px-8">
      <div className="col-span-3 md:col-span-1">
      <Image
    src="/images/home/contact/Container.png"
    width={40}   
    height={40}  
    alt="Location"
    // className="w-12 h-12 object-cover"  
  />
      </div>
      <div className="col-span-4 md:col-span-3">
        <h3 className="text-[28px] font-semibold mb-2 flex items-center">
          Location
        </h3>
        <p className="text-gray-400 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-span-5 md:col-span-1"></div> {/* Blank Column */}
    </div>
  </div>

  {/* Second Card - Contact Number */}
  <div className="bg-gray-900 p-6 rounded-lg custom-border card-background">
    <div className="grid grid-cols-4 gap-2 px-8">
      <div className="col-span-3 md:col-span-1">
        <Image
          src="/images/home/contact/Contact.png"
          width={40}   
    height={40} 
          alt="Contact Number"
        //   className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        <h3 className="text-[28px] font-semibold mb-2 flex items-center">
          Contact Number
        </h3>
        <p className="text-gray-400 text-[16px]">Lorem ipsum dolor</p>
        <p className="text-gray-400 text-[16px]">Lorem ipsum dolor</p>
      </div>
      <div className="col-span-4 md:col-span-1"></div> {/* Blank Column */}
    </div>
  </div>

  {/* Third Card - Email Address */}
  <div className="bg-gray-900 p-6 rounded-lg custom-border card-background">
    <div className="grid grid-cols-4 gap-2 px-8">
      <div className="col-span-3 md:col-span-1">
        <Image
          src="/images/home/contact/Email.png"
          width={40}   
          height={40} 
          alt="Email Address"
        //   className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        <h3 className="text-[28px] font-semibold mb-2 flex items-center">
           Email Address
        </h3>
        <p className="text-gray-400 text-[16px]">Lorem ipsum dolor</p>
        <p className="text-gray-400 text-[16px]">Lorem ipsum dolor</p>
      </div>
      <div className="col-span-4 md:col-span-1"></div> {/* Blank Column */}
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
