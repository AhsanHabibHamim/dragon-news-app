import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mx-auto mt-80">
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loading;
