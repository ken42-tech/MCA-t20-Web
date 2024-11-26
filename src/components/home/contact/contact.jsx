import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-6">
        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Ready to Build the Future?</h1>
            <p className="text-gray-400 mb-8">
              Your breakthrough idea deserves world-class execution. Partner with T²C and transform your vision into reality.
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email ID</label>
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1-202-555-0174"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
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
          {/* Right Information Boxes */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-blue-500 mr-2">📍</span> Location
              </h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-blue-500 mr-2">🎧</span> Contact Number
              </h3>
              <p className="text-gray-400">Lorem ipsum dolor</p>
              <p className="text-gray-400">Lorem ipsum dolor</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-blue-500 mr-2">📧</span> Email Address
              </h3>
              <p className="text-gray-400">Lorem ipsum dolor</p>
              <p className="text-gray-400">Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
