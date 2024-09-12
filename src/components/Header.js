'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrolled(scrollPosition > windowHeight * 0.1);

      if (isMobile) {
        setMobileScrolled(scrollPosition > 0);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    handleScroll(); // Initial check on mount
    handleResize(); // Initial check on mount

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const links = [
    { id: 1, link: "home", url: "/" },
    { id: 2, link: "solutions", url: "/" },
    { id: 3, link: "insights", url: "/insights" },
    { id: 4, link: "careers", url: "/careers" },
    { id: 5, link: "about us", url: "/about-us" },
    { id: 6, link: "contact", url: "/contact" },
  ];

  const toggleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const isInsightsPage = pathname === "/insights" || pathname.startsWith("/insights/");

  return (
    <div
      className={`header z-50 fixed top-0 left-0 w-full transition-all duration-300 ${
        isInsightsPage
          ? "bg-white shadow-lg"
          : scrolled
          ? "bg-white shadow-xl"
          : "bg-none"
      }`}
    >
      <div className="container flex justify-between items-center h-[100px]">
        <div className="w-[130px] custom-h1 font-bold">
          <Link href="/">
            <Image
              src={
                isInsightsPage
                  ? "/assets/logo/cognitud-logo-blue.png"
                  : scrolled
                  ? "/assets/logo/cognitud-logo.png"
                  : "/assets/logo/cognitud-white-logo.png"
              }
              alt="Logo"
              width={1000}
              height={600}
              className="w-full cursor-pointer h-auto"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex space-x-6 xl:space-x-12">
          {links.map(({ id, link, url }) => (
            <Link key={id} href={url} passHref>
              <li
                className={`font-sans text-p font-regular nav-links px-4 cursor-pointer capitalize hover:scale-105 hover:font-bold duration-200 link-underline ${
                  isInsightsPage
                    ? "text-black"
                    : scrolled
                    ? "text-black"
                    : "text-white hover:text-white"
                }`}
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>

        <div
          onClick={toggleNav}
          className="cursor-pointer pr-4 z-10 lg:hidden flex items-center gap-4"
        >
          {nav ? (
            <Image
              src="/assets/icon/close-icon.png"
              alt="Close Icon"
              width={30}
              height={30}
              className="w-auto h-auto"
            />
          ) : (
            <Image
              src={
                isInsightsPage
                  ? "/assets/icon/icon-bar.png"
                  : mobileScrolled
                  ? "/assets/icon/icon-bar.png"
                  : "/assets/icon/white-bar.png"
              }
              alt="Menu Icon"
              width={30}
              height={30}
              className="w-auto h-auto"
            />
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col items-center absolute top-0 left-0 w-full h-[100vh] bg-white text-black transition-transform duration-300 ${
            nav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        >
          <div className="flex justify-between h-[100px] items-center w-full px-6">
            <Image
              src="/assets/logo/cognitud-logo-blue.png"
              alt="Logo"
              width={90}
              height={90}
              className="w-auto h-auto"
            />
          </div>
          <div className="flex items-center flex-col justify-center h-full">
            {links.map(({ id, link, url }) => (
              <Link key={id} href={url} passHref>
                <li
                  className="font-sans lg:px-4 cursor-pointer capitalize py-6 custom-h4"
                  onClick={toggleNav}
                >
                  {link}
                </li>
              </Link>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
