import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-sm"></span>
          </>
        }
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
