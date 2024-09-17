"use client";

import React from "react";

const Shimmer = () => {
  return (


        <div
          className="flex flex-col gap-4 mb-12 animate-pulse"
        >
          <div className="relative bg-gray-200 h-[240px] w-full rounded-md">
            {/* Shimmer effect for image */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-300 h-6 w-3/4 rounded-md"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
          </div>
        </div>


  );
};

export default Shimmer;
