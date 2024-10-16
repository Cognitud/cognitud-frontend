"use client";

import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import FeaturedInsights from "./featuredInsights/page";
import ParallaxComponent from "@/components/ParallaxComponent";
import HomeAboutUs from "@/components/HomeAboutUs";
import LatestNews from "./latestNews/page";
import HomeCareer from "@/components/HomeCareer";
import Footer from "@/components/Footer";
import HomeServices from "@/components/HomeServices";
import Customers from "@/components/Customers";

const images = [
  {
    url: "/assets/banners/cognitud-slider-1.jpg",
    heading: `Making Businesses Transparent with ESG Reporting`,
    redirectUrl: "/projects",
    buttonText: "Read More", // Button text for the first image
  },
  {
    url: "/assets/banners/cognitud-slider-2.jpg",
    heading: "Seeking Leadership Excellence through Precision Search",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the second image
  },
  {
    url: "/assets/banners/cognitud-slider-3.jpg",
    heading: "Clean Energy Solutions for a Greener Tomorrow",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the third image
  },
  {
    url: "/assets/banners/cognitud-slider-4.jpg",
    heading: "Taking the Climate Charge with the Net Zero Path",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the third image
  },
  {
    url: "/assets/banners/cognitud-slider-5.jpg",
    heading: "Promoting circular economy principles",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the third image
  },
];

export default function Home() {
  return (
    <main className="">
      <ImageSlider images={images} />
      <HomeAboutUs />
      <FeaturedInsights />
      <HomeServices />
      <LatestNews />

      <Customers />
      <HomeCareer />
    </main>
  );
}
