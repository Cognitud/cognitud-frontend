"use client";

import React, { useState } from "react";

const JobApplicationPopup = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pdf, setPDF] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  if (!isOpen) return null; // Don't render if not open

  const handlePDFUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        setPDF(result.secure_url);
        setError(""); // Reset any previous errors
      } else {
        throw new Error(result.error.message || "Failed to upload PDF");
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
      setError("Failed to upload PDF");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: JSON.stringify({
          fullName,
          email,
          phone,
          pdf,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit the application");
      }
  
      setSuccess("Thanks for applying, HR will contact you soon!"); // Updated success message
      setFullName("");
      setEmail("");
      setPhone("");
      setPDF(null);
      setError("");
      onClose(); // Close the popup after successful submission
    } catch (error) {
      setError(error.message);
    }
  };
  
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Job Application</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm mb-1">Full Name</label>
            <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="border w-full p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm mb-1">Phone Number</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border w-full p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="resume" className="block text-sm mb-1">Upload Resume</label>
            <input type="file" id="resume" onChange={handlePDFUpload} className="border w-full p-2" required />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 text-sm border p-2">Cancel</button>
            <button type="submit" className="text-sm bg-bluePrimary text-white p-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPopup;
