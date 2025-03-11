import React from 'react';
import Marketing from '../assets/icon-1.svg';
import Strategic from '../assets/icon-2.svg';
import Analysing from '../assets/icon-3.svg';
import Financial from '../assets/icon-4.svg';
import Executive from '../assets/icon-5.svg';
import Speedup from '../assets/icon-6.svg';

const FeaturesCol = () => {
  const features = [
    {
      icon: Analysing,
      title: "Custom Datasets",
      description:
        "Tailored datasets designed to meet your unique business needs and deliver actionable insights.",
    },
    {
      icon: Speedup,
      title: "Real-Time Analytics",
      description:
        "Up-to-date data streams to help you respond quickly to market changes and customer demands",
    },
    {
      icon: Strategic,
      title: "API Integration",
      description:
        "Seamless access to datasets through easy-to-use APIs, enhancing productivity and simplifying workflows.",
    },
    {
      icon: Executive,
      title: "Compliance and Anonymization",
      description:
        "Ensure data privacy with solutions that comply with regulations like GDPR, HIPAA, and CCPA.",
    },
    {
      icon: Marketing,
      title: "Expert Consultation",
      description:
        "Guidance and support to maximize the value of your data and achieve your business goals.",
    },
    {
      icon: Financial,
      title: "Data Visualization:",
      description:
        "Transform raw data into compelling dashboards and reports for better decision-making.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-4 sm:gap-8">
          <div>
            <div className="bg-primary-soft rounded-full h-28 w-28 flex justify-center items-center">
              <img src={feature.icon} alt="" />
            </div>
          </div>
          <div className="text-center sm:text-start">
            <h3 className="text-primary-strong text-2xl font-semibold max-w-20">
              {feature.title}
            </h3>
            <p className="pt-2 text-primary-strong">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesCol;
