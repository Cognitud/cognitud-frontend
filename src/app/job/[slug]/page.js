"use client"; // Ensure this is at the very top of your file

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { jobsData } from "@/data/data"; // Adjust the path as per your folder structure
import JobApplicationPopup from "@/components/JobApplicationForm";

const JobDetail = ({ params }) => {
  const { slug } = params;
  const [job, setJob] = useState(null); // State to hold job data
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Effect to find the job based on the slug
  useEffect(() => {
    const foundJob = jobsData.find((job) => job.slug === slug);
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
            <div className="flex gap-12 flex items-center">
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

          <div className="my-12 flex flex-col gap-6">
            <h4 className="custom-h4 font-medium font-pops text-bluePrimary cursor-pointer">
              About {job.aboutCompany.name}
            </h4>

            <h6 className="text-p font-regular font-pops text-bluePrimary cursor-pointer">
              {job.aboutCompany.overview}
            </h6>

            <div className="services mt-6">
              {job.aboutCompany.services.map((service, index) => (
                <div key={index} className="service-item my-12">
                  <h5 className="custom-h5 font-medium font-pops text-bluePrimary text-center cursor-pointer">
                    {service.name}
                  </h5>
                  <h6 className="text-p font-regular font-pops text-bluePrimary cursor-pointer pt-6">
                    {service.description}
                  </h6>
                </div>
              ))}
            </div>
          </div>

          <div className="my-12 flex flex-col">
            <h4 className="custom-h4 font-medium font-pops text-bluePrimary cursor-pointer text-center">
              Overview:
            </h4>

            <h6 className="custom-h6 font-regular font-pops text-bluePrimary cursor-pointer pt-6">
              {job.jobOverview}
            </h6>
          </div>

          <div className="my-12 flex flex-col">
            <h4 className="custom-h4 font-medium font-pops text-bluePrimary text-center">
              Key Responsibilities:
            </h4>

            <div className="responsibility pt-6">
              {Object.keys(job.responsibilities).map((key, index) => {
                const responsibility = job.responsibilities[key];
                return (
                  <div key={index} className="responsibility-item my-12">
                    <h5 className="custom-h5 font-medium font-pops text-bluePrimary cursor-pointer">
                      {responsibility.title}
                    </h5>
                    <ul className="custom-list mt-4">
                      {responsibility.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center custom-h6 custom-list-item font-regular font-pops text-bluePrimary my-6 pl-12"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-12 flex flex-col">
            <h4 className="custom-h4 font-medium font-pops text-bluePrimary text-center">
              {job.qualifications.title}
            </h4>

            <ul className="custom-list mt-4">
              {job.qualifications.details.map((detail, index) => (
                <li key={index} className="flex items-center custom-h6 custom-list-item font-regular font-mont text-bluePrimary my-6 pl-12">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Include the JobApplicationPopup component */}
      <JobApplicationPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default JobDetail;
