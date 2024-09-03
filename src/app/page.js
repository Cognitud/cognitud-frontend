"use client";

import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import FeaturedInsights from "./featuredInsights/page";
import ParallaxComponent from "@/components/ParallaxComponent";
import HomeAboutUs from "@/components/HomeAboutUs";
import LatestNews from "./latestNews/page";
import HomeCareer from "@/components/HomeCareer";

const images = [
  {
    url: "/assets/banners/cognitud-slider-1.jpg",
    heading: `Responsible growth and 
environmental excellence`,
    redirectUrl: "/projects",
    buttonText: "Read More", // Button text for the first image
  },
  {
    url: "/assets/banners/cognitud-slider-2.jpg",
    heading: "",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the second image
  },
  {
    url: "/assets/banners/cognitud-slider-3.jpg",
    heading: "",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the third image
  },
  {
    url: "/assets/banners/cognitud-slider-4.jpg",
    heading: "",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the third image
  },
  {
    url: "/assets/banners/cognitud-slider-5.jpg",
    heading: "",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the third image
  },
];

export default function Home() {
  return (
    <main className="">
      <ImageSlider images={images} />
      <FeaturedInsights />
      <ParallaxComponent />
      <HomeAboutUs />
      <LatestNews />
      <HomeCareer />
    </main>
  );
}
  