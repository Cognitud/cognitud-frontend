'use client';

import ContactForm from "@/components/ContactForm";
import React from "react";
import Image from "next/image";
import { locations } from "@/data/locations";

// src/app/contact/page.js
import dynamic from 'next/dynamic';

// Dynamically import the Map component with SSR set to false
const Map = dynamic(() => import('@/components/Map'), { ssr:false });

const Contact = () => {
  return (
    <div className="w-full mt-48">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex-1">
            <h2 className="mb-4 font-pops custom-h2 font-semibold">Contact Us</h2>
          </div>
          <div className="flex-1">
            <h4 className="mb-4 font-pops custom-h6 font-regular">
              For any questions or support needs, we encourage you to submit the
              form below. A Cognitud representative will be in touch to discuss
              your request further.
            </h4>
          </div>
        </div>

        <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-20 p-10">
          <ContactForm />
          <div className="flex flex-col items-center min-w-full pt-4 lg:pt-20">
            <Image
              src="/assets/contact/contact-banner.jpeg"
              alt="Contact Us"
              width={580}
              height={580}
              priority
            />
          </div>
        </div>
      </div>

      <div className="z-0 relative w-full h-[100svh] overflow-hidden">
        <Map locations={locations} />
      </div>
    </div>
  );
};

export default Contact;
