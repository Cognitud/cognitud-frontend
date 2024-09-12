'use client'

import React from "react";

const Shimmer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-200 h-[240px] w-full flex flex-col gap-4 p-4 rounded-md my-20"
          >
            <div className="bg-gray-300 h-[200px] w-full rounded-md"></div>
            <div className="bg-gray-300 h-[200] w-3/4 rounded-md"></div>
            <div className="bg-gray-300 h-[200px] w-1/2 rounded-md"></div>
          </div>
        ))}
      </div>
    );
  };

  
  export default Shimmer;