import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 py-3 px-3 gap-6">
      <h1 className="bg-[#D72050] text-white py-2 px-4">Latest</h1>
      <Marquee className="flex gap-2" pauseOnHover={true}>
        <p className="teext-[#403F3F] font-semibold text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius
          aspernatur pariatur optio sint repellat, saepe blanditiis commodi
          nobis tempora?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
