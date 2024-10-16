import ContactForm from "@/components/ContactForm";
import React from "react";
import Image from "next/image";

// OfficeLocation component
const OfficeLocation = ({
  title,
  subtitle,
  address,
  phoneNumbers,
  imageSrc,
  altText,
}) => (
  <div className="item border-greyLight border flex flex-col gap-6 p-6 h-[260px]">
    <Image src={imageSrc} alt={altText} width={32} height={32} />

    <h4 className="custom-h5 font-pops text-bluePrimary font-medium">
      {title}
    </h4>

    <p className="custom-h6 font-pops">
      {address.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>

    {phoneNumbers && (
      <div className="number">
        {phoneNumbers.map((number, index) => (
          <h3 key={index} className="custom-h6 font-sans font-medium">
            {number}
          </h3>
        ))}
      </div>
    )}
  </div>
);

const Contact = () => {
  // Array of office locations
  const officeLocations = [
    {
      title: "New York, USA",
      address: [
        "Cognitud Inc. 2nd floor,",
        "33 West 60th street",
        "New York 10023",
      ],
      imageSrc: "/assets/icon/usa-flag.png",
      altText: "USA Flag",
    },
    {
      title: "London, UK",
      address: [
        "Cognitud ltd",
        "167-169 Great Portland Street",
        "5th Floor, London, W1W 5PF",
      ],
      imageSrc: "/assets/icon/uk_flag.jpg",
      altText: "UK Flag",
    },
    {
      title: "Dubai, UAE",
      address: ["Dubai Silicon Oasis,", "IFZA Freezone"],
      imageSrc: "/assets/icon/Flag_of_the_United_Arab_Emirates.svg",
      altText: "Dubai, UAE",
    },
    {
      title: "Gurugram, India",
      address: [
        "Cognitud Pvt. Ltd. 2nd Floor, MPD",
        "Tower, Golf Course Rd, Sector 43,",
        "Gurugram, Haryana 122002, India",
      ],
      imageSrc: "/assets/icon/india-flag.png",
      altText: "Gurugram, India Flag",
    },
    {
      title: "Bangalore, India",
      address: [
        "Cognitud Pvt. Ltd.",
        "3rd Floor, No.1302/37, 25th Main",
        "Road, Jayanagar 9th Block,",
        "Bangalore 560069",
      ],
      imageSrc: "/assets/icon/india-flag.png",
      altText: "Bangalore, India Flag",
    },
  ];

  return (
    <div className="w-full mt-48">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex-1">
            <h2 className="mb-4 font-pops custom-h2 font-semibold">
              Contact Us
            </h2>
          </div>
          <div className="flex-1">
            <h4 className="mb-4 font-pops custom-h6 font-regular">
              For any questions or support needs, we encourage you to submit the
              form below. A Cognitud representative will be in touch to discuss
              your request further.
            </h4>
          </div>
        </div>

        <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-20 p-10">
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

      <div className="office-locations my-28">
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full m-auto lg:w-[80%]">
            {/* Map over officeLocations array to render OfficeLocation components */}
            {officeLocations.map((location, index) => (
              <div
                key={index}
                className={`${
                  officeLocations.length % 2 !== 0 &&
                  index === officeLocations.length - 1
                    ? "lg:col-span-2 flex justify-center"
                    : ""
                }`}
              >
                <OfficeLocation
                  title={location.title}
                  subtitle={location.subtitle}
                  address={location.address}
                  phoneNumbers={location.phoneNumbers}
                  imageSrc={location.imageSrc}
                  altText={location.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
