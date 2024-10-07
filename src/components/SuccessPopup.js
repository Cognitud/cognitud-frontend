import React from "react";
import Image from "next/image"; // Import next/image component

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-greyPrimary opacity-50"></div>{" "}
      {/* Semi-transparent backdrop */}
      <div className="relative bg-white shadow-2xl rounded-lg p-8 z-50 w-[90%] lg:w-[40%] flex justify-center items-center flex-col">
        <div className="w-[90px] h-[90px] bg-bluePrimary rounded-full flex justify-center items-center text-center">
          <Image
            src="/assets/icon/right-tick.png"
            alt="Logo"
            width={90}
            height={90}
            className="w-auto cursor-pointer flex items-center justify-center w-[32px] h-[32px]" // Ensure the image maintains its aspect ratio
          />
        </div>
        <h4 className="text-center custom-h4 font-sans font-bold my-10">
          Your message has been sent successfully.
        </h4>
        <button
          onClick={onClose}
          className="block mx-auto  px-4 py-2 bg-bluePrimary text-white rounded-lg hover:bg-green-dark"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
