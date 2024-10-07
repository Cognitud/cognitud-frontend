import ContactForm from "@/components/ContactForm";
import React from "react";
import Image from "next/image";

const OfficeLocation = ({
  title,
  subtitle,
  address,
  phoneNumbers,
  imageSrc,
  altText,
}) => (
  <div className="office grid grid-cols-1 gap-20">
    <div className="heading flex gap-12 flex-col">
      <div className="item">
        <h3 className="text-sm font-mont font-medium tracking-custom-wide">
          {title}
        </h3>
        <h4 className="custom-h6 font-mont font-semibold">{subtitle}</h4>
      </div>
      <div className="flex gap-10 lg:gap-20 flex-col lg:flex-row">
        <Image
          src={imageSrc}
          alt={altText}
          width={1000}
          height={600}
          priority
          className="object-cover w-[350px] h-[250px]"
        />
        <div className="flex flex-col gap-10">
          <div className="address-text">
            {address.map((line, index) => (
              <h3 key={index} className="custom-h6 font-mont font-medium">
                {line}
              </h3>
            ))}
          </div>

          <div className="number">
            {phoneNumbers.map((number, index) => (
              <h3 key={index} className="custom-h6 font-sans font-medium">
                {number}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const officeLocations = [
    {
      title: "Office",
      subtitle: "New York, USA",
      address: [
        "Cognitud Inc. 2nd floor,",
        "33 West 60th street.",
        "New York 10023",
      ],
      phoneNumbers: ["+91-44-48513505", "+91-44-24349107"],
      imageSrc: "/assets/contact/chennai-office.jpg",
      altText: "Chennai office",
    },
    {
      title: "Office",
      subtitle: "London, UK",
      address: [
        "Cognitud ltd",
        "167-169 Great Portland Street",
        "5th Floor, London, W1W 5PF",
      ],
      phoneNumbers: ["+91-9910267209"],
      imageSrc: "/assets/contact/gurgaon-office.png",
      altText: "Gurgaon office",
    },

    {
      title: "Office",
      subtitle: "Dubai, UAE",
      address: [
        "Dubai Silicon Oasis,",
        "IFZA Freezone",
      ],
      phoneNumbers: ["+91-9910267209"],
      imageSrc: "/assets/contact/gurgaon-office.png",
      altText: "Gurgaon office",
    },

    {
      title: "Office",
      subtitle: "Gurugram, India",
      address: [
        "Cognitud Pvt. Ltd. 2nd Floor, MPD",
        "Tower, Golf Course Rd, Sector 43,",
        "Gurugram, Haryana 122002, India",
      ],
      phoneNumbers: ["+91-9910267209"],
      imageSrc: "/assets/contact/gurgaon-office.png",
      altText: "Gurgaon office",
    },
  ];


  return (
    <div className="w-full mt-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 p-10">
        <div className="py-4">
          <ContactForm />
        </div>
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

      <div className="w-full h-auto py-20">
        <div className="flex flex-col gap-20 container">
          {officeLocations.map((location, index) => (
            <OfficeLocation key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
