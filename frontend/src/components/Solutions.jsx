import React from "react";
import { FaFileAlt, FaSearch, FaClock, FaHandshake, FaChartBar } from "react-icons/fa";
import Card from "./Card";



const SolutionsSection = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold text-green-900">Our Solutions</h2>
      <p className="text-green-800 max-w-3xl mx-auto mt-4">
        Our solutions are designed to empower your business with actionable insights and tailored tools. From custom datasets and real-time analytics to seamless API integrations and data visualization, we provide everything you need to make informed decisions and drive success. With scalable, compliant, and expert-backed services, we help your business grow efficiently and confidently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mx-auto max-w-4xl">
        <Card 
          icon={<><FaFileAlt className="text-green-600 text-2xl" /><FaSearch className="text-green-600 text-xl -ml-2" /></>} 
          title="Custom Datasets" 
          description="Tailored datasets designed to meet your unique business needs and deliver actionable insights." 
        />
        <Card 
          icon={<FaClock className="text-green-600 text-2xl" />} 
          title="Real-Time Analytics" 
          description="Up-to-date data streams to help you respond quickly to market changes and customer demands." 
        />
        <Card 
          icon={<FaHandshake className="text-green-600 text-2xl" />} 
          title="API Integration" 
          description="Seamless access to datasets through easy-to-use APIs, enhancing productivity and simplifying workflows." 
        />
        <Card 
          icon={<FaChartBar className="text-green-600 text-2xl" />} 
          title="Compliance and Anonymization" 
          description="Ensure data privacy with solutions that comply with regulations like GDPR, HIPAA, and CCPA." 
        />
        <Card 
          icon={<><FaFileAlt className="text-green-600 text-2xl" /><FaSearch className="text-green-600 text-xl -ml-2" /></>} 
          title="Custom Datasets" 
          description="Tailored datasets designed to meet your unique business needs and deliver actionable insights." 
        />
        <Card 
          icon={<FaClock className="text-green-600 text-2xl" />} 
          title="Real-Time Analytics" 
          description="Up-to-date data streams to help you respond quickly to market changes and customer demands." 
        />
        <Card 
          icon={<FaHandshake className="text-green-600 text-2xl" />} 
          title="API Integration" 
          description="Seamless access to datasets through easy-to-use APIs, enhancing productivity and simplifying workflows." 
        />
        <Card 
          icon={<FaChartBar className="text-green-600 text-2xl" />} 
          title="Compliance and Anonymization" 
          description="Ensure data privacy with solutions that comply with regulations like GDPR, HIPAA, and CCPA." 
        />
      </div>
    </div>
  );
};

export default SolutionsSection;
