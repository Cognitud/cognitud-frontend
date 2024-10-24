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
            <h1 className="text-white custom-h1 font-regular font-mont">
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
                  className="border border-borderGrey w-full h-auto p-6 flex flex-col gap-6"
                  key={job.id}
                >
                  <div className="flex">
                    <button className="py-1 px-2 rounded-xl border border-bluePrimary text-sm w-auto font-pops flex justify-center items-center ">
                      {job.category}
                    </button>
                  </div>
                  {/* Wrap the job title with Link */}
                  <Link href={`/open-jobs/${job.slug}`}>
                    <h4 className="custom-h5 font-pops font-semibold text-bluePrimary cursor-pointer">
                      {job.title}
                    </h4>
                  </Link>

                  <p className="text-p font-pops news-title">{job.jobOverview}</p>
                  <div className="optional-detail flex flex-col gap-4">
                    <div className="flex items-center">
                      <Image
                        src="/assets/icon/job_experience.svg"
                        alt="Experience Icon"
                        width={30}
                        height={30}
                        className="w-auto h-auto"
                      />
                      <h6 className="pl-4 text-sm font-pops text-bluePrimary font-medium">
                        Experience: {job.experience}
                      </h6>
                    </div>

                    <div className="flex items-center">
                      <Image
                        src="/assets/icon/location.svg"
                        alt="Location Icon"
                        width={30}
                        height={30}
                        className="w-auto h-auto"
                      />
                      <h6 className="pl-4 text-sm font-pops text-bluePrimary font-medium">
                        {job.locations.join(" | ")}
                      </h6>
                    </div>
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
