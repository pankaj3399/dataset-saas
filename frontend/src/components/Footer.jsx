import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-[#115E59] text-white mt-5">
      {/* Newsletter Section */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-14 w-full px-6">
          <Newsletter />
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 pt-32 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <h3 className="text-2xl font-bold">Riverlytics</h3>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <p className="cursor-pointer hover:text-green-300">About</p>
            <p className="cursor-pointer hover:text-green-300">Pricing</p>
            <p className="cursor-pointer hover:text-green-300">Contact</p>
            <p className="cursor-pointer hover:text-green-300">Careers</p>
            <p className="cursor-pointer hover:text-green-300">Blog</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-green-300" />
            <FaTwitter className="cursor-pointer hover:text-green-300" />
            <FaLinkedin className="cursor-pointer hover:text-green-300" />
            <FaYoutube className="cursor-pointer hover:text-green-300" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-green-800 py-4 text-center text-sm">
        <p>Copyright &copy; 2025 Riverlytics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
