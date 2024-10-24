'use client';

// src/app/contact/page.js
import React from "react";
import ContactForm from "@/components/ContactForm";

import Image from "next/image";
import { locations } from "@/data/locations";
import dynamic from 'next/dynamic';

// Dynamically import the Map component with SSR set to false
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const Contact = () => {
  return (
    <div className="w-full mt-48">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex-1">
            <h2 className="mb-4 font-pops custom-h1 font-semibold">Contact Us</h2>
          </div>
          <div className="flex-1">
            <p className="mb-4 font-pops text-p font-regular">
              For any questions or support needs, we encourage you to submit the
              form below. A Cognitud representative will be in touch to discuss
              your request further.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-2 lg:px-8 py-4">
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

      <div className="z-0 relative w-full h-[100svh] overflow-hidden my-20">
        <Map locations={locations} />
      </div>
    </div>
  );
};

export default Contact;

