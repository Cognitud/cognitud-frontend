"use client";

import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative w-[10rem] h-[10rem]">
        <Image
          src="/assets/loader.png"
          alt="loader"
          width={1000}
          height={600}
          priority
          className="w-[5rem] h-auto"
        />
      </div>
    </div>
  );
};

export default Loader;
