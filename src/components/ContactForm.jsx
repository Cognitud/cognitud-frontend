"use client";

import { useState } from "react";
import SuccessPopup from "./SuccessPopup";
import { toast, Toaster } from "react-hot-toast";
import Loader from "./Loader"; // Import the Loader component

const initialFormState = {
  fullname: "",
  email: "",
  companyName: "",
  phoneNumber: "",
  comments: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setShowSuccessPopup(true);
        setFormData(initialFormState); // Reset form data
      } else {
        throw new Error(data.msg.join(", ") || "Something went wrong.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  const renderInputField = (id, label, type = "text", placeholder) => (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium font-mont">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="shadow-sm bg-gray-50 border border-gray-300 text-sm font-sans focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        placeholder={placeholder}
        value={formData[id]}
        onChange={handleChange}
        required
      />
    </div>
  );

  return (
    <section className="bg-white">
      <Toaster />
      {showSuccessPopup && <SuccessPopup onClose={handleClosePopup} />}
      <div>
        <h2 className="mb-4 font-mont custom-h2 font-semibold">
          Let&#39;s Collaborate!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8 mt-8">
          {renderInputField("fullname", "Full Name")}
          {renderInputField("email", "Email", "email", "name@flowbite.com")}
          {renderInputField("companyName", "Company Name")}
          {renderInputField("phoneNumber", "Phone Number", "tel", "Phone Number")}
          <div className="sm:col-span-2">
            <label htmlFor="comments" className="block mb-2 text-sm font-medium font-mont">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="6"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm font-sans focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
              value={formData.comments}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 font-bold  rounded-lg bg-green hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
