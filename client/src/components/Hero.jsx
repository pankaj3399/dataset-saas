import React from 'react';
// import dashboardImage from './assets/dashboard.png';
import isolationModeImage from '../assets/frame.svg';

const HeroSection = () => {
  return (
    <div className="bg-primary-soft pt-10 md:pt-24 relative overflow-hidden">
      <div className="absolute -left-28 bottom-60 hidden md:block">
        <img src={isolationModeImage} alt="" />
      </div>
      <div className="absolute -right-28 top-20">
        <img src={isolationModeImage} alt="" />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-screen-xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-primary-strong max-w-4xl mx-auto">
            Innovative analytics solutions tailored for you.
          </h1>
          <p className="text-center text-primary-strong text-xl leading-normal max-w-3xl mx-auto py-6">
            Unlock actionable insights and drive strategic decisions with targeted datasets and cutting-edge analytics solutions customized to fuel your success.
          </p>
          <form className="flex items-center justify-center mt-8 relative" action="/search" method="GET">
            <div className="relative w-full max-w-2xl">
              <input 
                type="text" 
                name="query" 
                placeholder="Search for datasets, reports, or insights" 
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-strong"
              />
              <button 
                type="submit" 
                className="absolute inset-y-0 right-0 bg-primary text-white px-6 text-lg font-medium rounded-full hover:bg-primary-strong focus:outline-none flex items-center justify-center"
              >
                Search
              </button>
            </div>
          </form>
          {/* Commented out in original:
          <div className="mx-auto flex flex-wrap gap-4 text-center justify-center">
            <a
              href="/auth/signup"
              className="bg-primary text-lg w-full sm:w-auto font-medium rounded-lg py-5 px-8 text-white transition hover:bg-primary-strong"
            >
              Start free trial
            </a>
            <a
              href="#"
              className="bg-white text-lg w-full sm:w-auto font-medium rounded-lg py-5 px-8 text-primary-strong transition hover:bg-primary hover:text-white"
            >
              Watch video
            </a>
          </div>
          <div
            className="flex justify-center max-w-5xl mx-auto mt-16 sm:mt-20 sm:px-10"
          >
            <img src={heroImage} alt="" quality="high" />
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;