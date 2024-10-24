"use client"; // Ensure this is at the very top of your file

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ExecutiveJobs } from "@/data/CareerData";
import JobApplicationPopup from "@/components/JobApplicationForm";

const OpenJobDetail = ({ params }) => {
  const { slug } = params;
  const [job, setJob] = useState(null); // State to hold job data
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Effect to find the job based on the slug
  useEffect(() => {
    const foundJob = ExecutiveJobs.find((job) => job.slug === slug);
    setJob(foundJob);
  }, [slug]);

  if (!job) {
    return <h1>Job not found</h1>; // Handle case where job is not found
  }

  return (
    <>
      <div className="job-detail mt-40">
        <div className="container">
          <div className="flex justify-between gap-12 items-center border-b pb-4 border-greyPrimary">
            <div className="flex flex-col gap-8">
              <button className="py-2 px-4 font-pops border border-bluePrimary rounded-2xl text-sm w-[10rem] flex justify-center items-center">
                {job.category}
              </button>

              <h4 className="custom-h2 font-medium font-pops text-bluePrimary cursor-pointer">
                {job.title}
              </h4>
            </div>

            <div className="apply-button">
              <button
                className="p-4 text-white font-pops bg-bluePrimary text-p w-[10rem] flex justify-center items-center"
                onClick={() => setPopupOpen(true)} // Open the popup on click
              >
                Apply
              </button>
            </div>
          </div>

          <div className="my-12 flex flex-col gap-6">
            <div className="flex gap-6 flex items-center">
              <Image
                src="/assets/icon/job_experience.svg"
                alt="Experience Icon"
                width={30}
                height={30}
                className="w-auto h-auto"
              />
              <h6 className="text-sm font-pops text-bluePrimary font-medium">
                Experience: {job.experience}
              </h6>
            </div>
            <div className="flex gap-6 items-center">
              <Image
                src="/assets/icon/location.svg"
                alt="Location Icon"
                width={30}
                height={30}
                className="w-auto h-auto"
              />
              <h6 className="text-sm font-pops text-bluePrimary font-medium">
                {job.locations.join(" | ")}
              </h6>
            </div>
          </div>

          <div className=" capabilities my-12 flex flex-col">
            <h4 className="custom-h4 font-medium font-pops text-bluePrimary cursor-pointer">
              Capabilities
            </h4>

            <div className="capabilities pt-6">
              <ul className="custom-list flex flex-col gap-8">
                {job.capabilities.map((capability, index) => (
                  <li
                    key={index}
                    className="flex items-center custom-h6 custom-list-item font-regular font-pops text-bluePrimary pl-12"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="qualification my-12 flex flex-col">
            <h4 className="custom-h4 font-medium font-pops text-bluePrimary cursor-pointer">
              Qualifications
            </h4>

            <div className="qualifications-para pt-6">
              <h6>{job.qualifications}</h6>
            </div>
          </div>

          <div className="your-team my-12 flex flex-col">
            <h4 className="custom-h4 font-medium font-pops text-bluePrimary cursor-pointer">
              Your Team
            </h4>

            <div className="team-list pt-6">
              {job.yourJob.map((jobResponsibility, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <h4>{jobResponsibility.title}</h4>{" "}
                  {/* Displaying each title */}
                  <ul className="flex flex-col gap-6">
                    {jobResponsibility.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex flex-col gap-2 custom-list-item pl-6"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Include the JobApplicationPopup component */}
      <JobApplicationPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
};

export default OpenJobDetail;
