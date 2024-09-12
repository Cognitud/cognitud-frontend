// components/Footer.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // State for showing success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      if (data.msg && data.msg.length > 0) {
        // Check for error messages from the API
        setMessage(data.msg.join(". "));
      } else if (data.success) {
        setMessage(data.msg.join(". "));
        setEmail(""); // Clear email input on successful subscription
        setShowSuccess(true); // Show success message
        setTimeout(() => setShowSuccess(false), 5000); // Hide message after 5 seconds
      } else {
        setMessage("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  const onClose = () => {
    setShowSuccess(false); // Close the success message popup
  };

  return (
    <div className="mt-20 footer-section w-full">
      <div className="grid grid-cols-1 pb-2">
        {/* <div className="footer-logo">
          <Link href="/">
            <Image
              src="/assets/see-logo.png"
              alt="Logo"
              width={90}
              height={90}
              className="w-auto cursor-pointer h-auto"
            />
          </Link>
        </div> */}
        <div className="bg-[#919191] mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 container py-16 lg:gap-20">
            <div className=" newsletter flex-1 text-center lg:text-left">
              <h4 className="custom-h6 text-white font-light font-sans">
                Subscribe to our Newsletter
              </h4>

              <h5 className="custom-h5 font-regular font-sans text-white pt-4">
                By subscribing, you consent to allow Cognitud to store and process your information as per our
                privacy policy.
              </h5>
            </div>
            <div className="flex flex-col gap-4  items-center  w-full">
              <form onSubmit={handleSubmit} className="flex-1">
                <div className=" input-box border-b-2 border-white flex flex-row gap-4 justify-between items-center py-2  mt-10">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="custom-h6   p-0 placeholder-white outline-none w-[80%] text-white shadow-none bg-transparent border-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    className="rounded-full w-[38px] h-[38px] bg-white flex justify-center items-center"
                  >
                    <Image
                      src="/assets/icon/green-right-arrow.png"
                      alt="Subscribe"
                      width={32}
                      height={32}
                      className="w-[16px] h-[16px] object-cover cursor-pointer"
                    />
                  </button>
                </div>
              </form>
              {message && (
                <p className="p-4 text-white bg-red items-center text-center pl-4">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col justify-end">
          <h5 className="custom-h6 font-sans">
            COPYRIGHT @ 2010 SOUTHERN ENGINEERING ERECTORS
          </h5>
        </div> */}
      </div>

      <div className="container flex justify-between gap-12 flex-col lg:flex-row">
        <div className="  pages-list my-2 w-full  flex flex-wrap flex-col lg:flex-row gap-12">
          <Link href="/">
            <h5 className="  text-p font-sans hover:scale-105 hover:font-bold hover:text-green">
              Home
            </h5>
          </Link>
          <Link href="/about">
            <h5 className="text-p font-sans hover:scale-105 hover:font-bold hover:text-green">
              About Us
            </h5>
          </Link>
          <Link href="/services">
            <h5 className="text-p font-sans hover:scale-105 hover:font-bold hover:text-green">
              Services
            </h5>
          </Link>
          <Link href="/projects">
            <h5 className="text-p font-sans hover:scale-105 hover:font-bold hover:text-green">
              Projects
            </h5>
          </Link>

          <Link href="/careers">
            <h5 className="text-p font-sans hover:scale-105 hover:font-bold hover:text-green">
              Careers
            </h5>
          </Link>


          <Link href="/contact">
            <h5 className="text-p font-sans hover:scale-105 hover:font-bold hover:text-green">
              Contact Us
            </h5>
          </Link>

          {/* <h5 className="custom-h5 font-sans">Privacy Policy</h5>
        <Link href="/terms-and-conditions">
          <h5 className="custom-h5 font-sans">Terms & Conditions</h5>
        </Link> */}
        </div>
{/* 
        <div className="social flex items-center justify-center w-[2rem] h-[2rem] rounded-full border order-[-1] lg:order-[2]">
          <Link href="https://www.linkedin.com/company/southern-engineering-erectors/posts/?feedView=all">
            <Image
              src="/assets/linkedin.png"
              alt="Subscribe"
              width={32}
              height={32}
              className="w-[16px] h-[16px] object-cover cursor-pointer"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
