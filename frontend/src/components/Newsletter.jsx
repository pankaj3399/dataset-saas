import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-[#EBF2E6] py-10 px-12 rounded-lg flex justify-between items-center max-w-5xl mx-auto -mb-12 shadow-sm">
      {/* Left Text Section */}
      <div className="text-[#74856C] text-xl font-medium leading-snug">
        <p>
          All the news straight to your inbox.{" "}
          <span className="text-[#0C4A43] font-semibold">
            Signup weekly newsletter
          </span>
        </p>
      </div>

      {/* Right Input Section */}
      <div className="flex items-center bg-white rounded-xl px-6 py-3 shadow-md w-[380px]">
        <FaRegEnvelope className="text-[#77A08D] mr-3 text-5xl" />
        <input
          type="email"
          placeholder="Email address"
          className="w-full focus:outline-none text-[#3C6156] placeholder-[#93A29E] text-base"
        />
        <button className="bg-[#0EA37F] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#0C8B6E] transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
