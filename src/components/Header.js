"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [nav, setNav] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

  const headerRef = useRef(null);

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
      setIsMobile(window.innerWidth <= 1024);
    };

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowSubMenu(false);
        setShowMobileSubMenu(false);
        setNav(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMobile]);

  const links = [
    { id: 1, link: "solutions", url: "/solutions", hasSubMenu: true },
    { id: 2, link: "about us", url: "/about" },
    { id: 3, link: "insights", url: "/insights" },
    { id: 4, link: "news", url: "/news" },
    { id: 5, link: "careers", url: "/careers" },
    { id: 6, link: "contact us", url: "/contact" },
  ];

  const solutionsSubMenu = [
    {
      id: 1,
      title: "ESG Strategy & Transformation",
      url: "/solutions/sub-solution-1",
    },
    {
      id: 2,
      title: "Climate Action & Net Zero",
      url: "/solutions/sub-solution-2",
    },
    // Add more solutions here...
  ];

  const toggleNav = () => {
    setNav(!nav);
    setShowMobileSubMenu(false);
  };

  const toggleSubMenu = () => {
    setShowSubMenu((prev) => !prev);
  };

  const toggleMobileSubMenu = () => {
    setShowMobileSubMenu((prev) => !prev);
  };

  const isInsightsOrNewsPage =
    pathname === "/insights" ||
    pathname === "/about" ||
    pathname === "/solutions" ||
    pathname === "/contact" ||
    pathname === "/news" ||
    pathname.startsWith("/job/") ||
    pathname.startsWith("/insights/") ||
    pathname.startsWith("/news/") ||
    pathname.startsWith("/solutions/");

  const isSubMenuOpen = showSubMenu || showMobileSubMenu;

  const hamburgerIconSrc = nav
    ? "/assets/icon/close-icon.png"
    : scrolled || isInsightsOrNewsPage || isSubMenuOpen
    ? "/assets/icon/icon-bar.png"
    : "/assets/icon/white-bar.png";

  const logoSrc =
    isInsightsOrNewsPage || scrolled || isSubMenuOpen
      ? "/assets/logo/cognitud-logo-blue.png"
      : "/assets/logo/cognitud-white-logo.png";

  const linkColor =
    isSubMenuOpen || isInsightsOrNewsPage || scrolled
      ? "text-black"
      : "text-white";

  const isLogoBlack = isInsightsOrNewsPage || scrolled || isSubMenuOpen;
  const arrowSrc = isLogoBlack
    ? "/assets/icon/right-arrow.svg"
    : "/assets/icon/right-arrow-white.svg";

  return (
    <div
      className={`header z-50 fixed top-0 left-0 w-full transition-all duration-0 ${
        isSubMenuOpen
          ? "bg-white shadow-lg"
          : scrolled || isInsightsOrNewsPage
          ? "bg-white border-b-2 border-[#d3dfd4]"
          : "bg-none"
      }`}
      ref={headerRef}
    >
      <div className="container flex justify-between items-center h-[100px]">
        {/* Logo */}
        <div className="w-[130px] custom-h1 font-bold">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Logo"
              width={1000}
              height={600}
              className="w-full cursor-pointer h-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-12">
          {links.map(({ id, link, url, hasSubMenu }) => (
            <div key={id} className="relative">
              {hasSubMenu ? (
                <div
                  className={`font-pops text-p font-medium nav-links px-4 cursor-pointer capitalize hover:scale-105 hover:font-bold duration-200 link-underline ${linkColor}`}
                  onClick={toggleSubMenu}
                >
                  {link}
                  <Image
                    src={
                      showSubMenu
                        ? isLogoBlack
                          ? "/assets/icon/up-arrow-black.png"
                          : "/assets/icon/up-arrow-white.png"
                        : isLogoBlack
                        ? "/assets/icon/down-arrow-black.png"
                        : "/assets/icon/down-arrow-white.png"
                    }
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="inline ml-3 w-[16px] h-auto"
                  />
                </div>
              ) : (
                <Link href={url} passHref>
                  <li
                    className={`font-pops text-p font-medium nav-links px-4 cursor-pointer capitalize hover:scale-105 hover:font-bold duration-200 link-underline ${linkColor}`}
                  >
                    {link}
                  </li>
                </Link>
              )}
            </div>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className=" lg:hidden">
          {/* Hamburger/Close Icon */}
          <button onClick={toggleNav} className="text-3xl">
            <Image
              src={hamburgerIconSrc}
              alt="Menu Icon"
              width={24}
              height={24}
              className="w-[1.5rem] h-auto"
            />
          </button>

          {nav && (
            <ul className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center">
              {/* Add Logo and Close Button at the Top */}
              <div className="flex justify-between items-center w-full container h-[100px]">
                <Link href="/">
                  <Image
                    src="/assets/logo/cognitud-logo-blue.png" // Update with the correct path for the blue logo
                    alt="Logo"
                    width={100}
                    height={60}
                  />
                </Link>
                <button onClick={toggleNav}>
                  <Image
                    src="/assets/icon/close-icon.png" // Update with the correct path for the close icon
                    alt="Close Icon"
                    width={24}
                    height={24}
                    className="w-[1.5rem] h-auto"
                  />
                </button>
              </div>

              {/* Navigation Links in Mobile Menu */}
              {links.map(({ id, link, url, hasSubMenu }) => (
                <div key={id} className="relative">
                  {hasSubMenu ? (
                    <div
                      className="font-pops font-regular text-p capitalize px-4 py-4 cursor-pointer"
                      onClick={toggleMobileSubMenu}
                    >
                      {link}
                      <Image
                        src={
                          showMobileSubMenu
                            ? "/assets/icon/up-arrow-black.png"
                            : "/assets/icon/down-arrow-black.png"
                        }
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="inline ml-3 w-[16px] h-auto"
                      />
                    </div>
                  ) : (
                    <Link href={url} passHref>
                      <li className="font-pops text-p font-medium px-4 py-4 cursor-pointer capitalize hover:scale-105 hover:font-bold duration-200 link-underline">
                        {link}
                      </li>
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Submenu for Solutions */}
      {showSubMenu && (
        <ul className="fixed top-[100px] left-0 w-full h-auto bg-white shadow-lg">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 pt-12 pb-20">
              {/* Submenu content */}
              <div className="lg:col-span-1 flex flex-col gap-12">
                <div className="heading">
                  <p className="text-sm font-pops font-regular text-bluePrimary">
                    SOLUTIONS
                  </p>
                  <h4 className="font-pops font-regular custom-h4 text-black pt-4">
                    Offering unparalleled depth and breadth of expertise.
                  </h4>
                </div>
                <div className="read-more-btn flex items-center gap-4 border rounded-lg border-bluePrimary w-[8rem] flex items-center justify-center p-2">
                  <button className="font-medium text-bluePrimary font-pops text-sm ">
                    Explore
                  </button>
                  <div className="image">
                    <Image
                      src="/assets/icon/arrow-blue-link.svg"
                      alt="Read More"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {solutionsSubMenu.map(({ id, title, url }) => (
                  <Link key={id} href={url} passHref>
                    <li className="font-pops font-regular text-p capitalize hover:scale-105 duration-200 transition-transform">
                      {title}
                    </li>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
