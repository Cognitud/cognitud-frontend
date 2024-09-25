"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { jobsData } from "@/data/data"; // Adjust the path as per your folder structure

const Job = () => {
  return (
    <>
      <div className="relative w-full h-[70svh]">
        {/* Background Image with Overlay */}
        <div className="relative w-full h-full">
          <Image
            src="/assets/career/company_banner.jpg"
            alt="Careers Banner"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-24 z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-mont text-4xl">
              Career At Cognitud
            </h1>
          </div>
        </div>
      </div>

      <div className="job-list my-20">
        <div className="container">
          {/* Dynamically render job data */}
          <div className="job-item w-full h-auto flex flex-col gap-12">
            {jobsData.map((job) => (
              <div
                className="border border-greyPrimary w-full h-auto p-6 flex flex-col gap-8"
                key={job.id}
              >
                <button className="py-2 px-4 border border-bluePrimary text-sm w-[10rem] flex justify-center items-center ">
                  {job.category}
                </button>

                {/* Wrap the job title with Link */}
                <Link href={`/job/${job.slug}`}>
                  <h4 className="custom-h6 font-mont text-bluePrimary cursor-pointer">
                    {job.title}
                  </h4>
                </Link>

                <h6 className="text-sm font-mont">{job.jobOverview}</h6>

                <div className="flex gap-6 items-center">
                  <Image
                    src="/assets/icon/location.svg"
                    alt="Location Icon"
                    width={30}
                    height={30}
                    className="w-auto h-auto"
                  />
                  <h6 className="text-sm font-mont text-bluePrimary font-semibold">
                    {job.locations.join(" | ")}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
