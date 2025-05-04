import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  const buttons = [
    {
      icon: <FaFacebookF className="text-blue-600" />,
      label: "Facebook",
    },
    {
      icon: <FaTwitter className="text-sky-500" />,
      label: "Twitter",
    },
    {
      icon: <FaInstagram className="text-pink-500" />,
      label: "Instagram",
    },
  ];

  return (
    <div className="w-full rounded-lg border-1 border-gray-400 overflow-hidden">
      {buttons.map((btn, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 px-5 py-3 bg-white hover:bg-gray-100 cursor-pointer ${
            index !== buttons.length - 1 ? "border-b-1 border-gray-400" : ""
          }`}
        >
          <div className="bg-gray-100 p-2 rounded-full text-xl">{btn.icon}</div>
          <span className="font-medium text-gray-800">{btn.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FindUs;
