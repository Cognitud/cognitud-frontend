"use client";

import React from "react";
import Image from "next/image";

const Customers = () => {
  // Array of customer data
  const customerImages = [
    { src: "/assets/customers/accenture.png", alt: "Accenture" },
    { src: "/assets/customers/american-express.png", alt: "American express" },
    { src: "/assets/customers/exl.png", alt: "exl" },
    { src: "/assets/customers/hcl.png", alt: "hcl" },
    { src: "/assets/customers/ibm.png", alt: "ibm" },
    { src: "/assets/customers/kpmg.png", alt: "kpmg" },
    { src: "/assets/customers/mahindra.png", alt: "mahindra" },
    { src: "/assets/customers/pwc.png", alt: "pwc" },
    { src: "/assets/customers/tcs.png", alt: "tcs" },
    { src: "/assets/customers/unilever.png", alt: "unilever" },
    { src: "/assets/customers/wipro.png", alt: "wipro" },
  ];

  return (
    <div className="customers py-20 bg-[#e5ebf1]">
      <div className="container">
        <div className="heading">
        <h4 className="custom-h4 font-semibold text-bluePrimary font-mont">
        Our Customers & Partnerships
          </h4>
        </div>

        {/* Dynamically rendering customers */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-12">
          {customerImages.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white py-[1rem] px-[3.5rem]"
            >
              <Image
                src={customer.src}
                alt={customer.alt}
                width={1000}
                height={600}
                className="w-[5rem] h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
