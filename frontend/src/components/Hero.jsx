import React from "react";

const Hero = () => {
  return (
    <section className="bg-green-50 flex flex-col justify-center items-center text-center px-6">
      <header className="w-full flex justify-between items-center p-6 max-w-6xl">
        <h1 className="text-xl font-bold text-green-900">Riverlytics</h1>
        <nav className="hidden md:flex space-x-6 text-green-900">
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-green-900 flex items-center space-x-1">
            <span>👤</span>
            <span>Sign in</span>
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg">Start free trial</button>
        </div>
      </header>
      
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
          Innovative analytics solutions <br /> tailored for you.
        </h2>
        <p className="text-green-800 mt-4 max-w-2xl mx-auto">
          Unlock actionable insights and drive strategic decisions with targeted datasets and cutting-edge analytics solutions customized to fuel your success.
        </p>
      </div>
      
      <div className="mt-6 flex items-center w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for datasets, reports, or insights"
          className="w-full px-4 text-green-900 focus:outline-none"
        />
        <button className="bg-green-700 rounded-full text-white px-6 py-3">Search</button>
      </div>
    </section>
  );
};

export default Hero;
