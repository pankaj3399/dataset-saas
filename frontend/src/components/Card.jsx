import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex items-center space-x-4 p-6 max-w-md">
      <div className="bg-green-100 p-4 rounded-full flex items-center justify-center w-16 h-16">
        {icon}
      </div>
      <div>
        <h3 className="text-green-900 font-semibold text-lg">{title}</h3>
        <p className="text-green-800 max-w-md">{description}</p>
      </div>
    </div>
  );
};

export default Card;
