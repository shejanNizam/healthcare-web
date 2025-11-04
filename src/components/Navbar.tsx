"use client";

import { useSavedJobs } from "@/context/SavedJobsContext";
import { useGetValueQuery } from "@/redux/features/value/valueApi";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import main_logo from "../assets/healthcare_main_logo.svg";
import SearchBar from "./SearchBar";

interface JobCategory {
  _id: string;
  type: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // const { savedJobIds } = useSavedJobs();
  const { savedJobs } = useSavedJobs();

  const { data } = useGetValueQuery("Category");

  const jobCategories: JobCategory[] = data?.data || [];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);

    checkIfMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCategoryClick = (category: string) => {
    router.push(`/all-jobs?category=${category}`);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "#", label: "Job Seekers", hasDropdown: true },
    { href: "/all-jobs", label: "All Jobs" },
    // {
    //   href: "/international?international=international",
    //   label: "International",
    // },
    { href: "/blogs", label: "Blogs" },
    {
      href: "*",
      label: "Staff Solutions",
      hasDropdown: true,
      // Add static dropdown options
      dropdownItems: [
        { href: "/staffing_solutions", label: "Staffing Solutions" },
        { href: "/workforce_solutions", label: "Workforce Management" },
      ],
    },
    {
      href: "/saved-jobs",
      label: `Saved Jobs${
        savedJobs.length > 0 ? ` (${savedJobs.length})` : "(0)"
      }`,
    },
    { href: "/about", label: "About us" },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <nav
      className={`py-2 bg-white  z-50 shadow-md sticky top-0 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
      // bg-gradient-to-r from-primary/80 to-primary/10
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-24 h-20 lg:w-32 lg:h-24"
            width={1000}
            height={1000}
            src={main_logo}
            alt="main_logo"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:space-x-2 xl:space-x-4 text-primary text-md font-semibold">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative group">
                <div
                  className={`hover:text-primary transition-colors duration-200 relative flex items-center cursor-pointer ${
                    isActive(link.href)
                      ? "text-primary after:bg-primary after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px]"
                      : ""
                  }`}
                  onClick={() => isMobile && toggleDropdown(link.label)}
                >
                  {link.label}
                  <TiArrowSortedDown />
                </div>

                {/* Desktop dropdown (hover) */}
                <div className="absolute hidden group-hover:block pt-2 left-0 z-10 w-full min-w-[250px]">
                  <div className="bg-white rounded-md shadow-lg w-full">
                    {/* Conditionally render dropdown content based on which menu item it is */}
                    {link.label === "Job Seekers" ? (
                      <>
                        {jobCategories.map((category) => (
                          <div
                            key={category._id}
                            className="px-4 py-2 hover:bg-gray-100 hover:rounded-md cursor-pointer"
                            onClick={() => handleCategoryClick(category.type)}
                          >
                            <span className="text-primary">
                              {category.type}
                            </span>
                          </div>
                        ))}
                        <Link
                          className="block px-4 py-2 text-primary hover:bg-gray-100 hover:rounded-md cursor-pointer"
                          href="/international?international=international"
                        >
                          International
                        </Link>
                      </>
                    ) : link.label === "Staff Solutions" &&
                      link.dropdownItems ? (
                      <>
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-primary hover:bg-gray-100 hover:rounded-md cursor-pointer"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </>
                    ) : null}
                  </div>
                </div>

                {/* Mobile dropdown (click) - shown only on mobile */}
                {isMobile && openDropdown === link.label && (
                  <div className="absolute bg-white rounded-md shadow-lg w-full min-w-[200px] left-0 z-10">
                    {/* Conditionally render dropdown content based on which menu item it is */}
                    {link.label === "Job Seekers" ? (
                      <>
                        {jobCategories.map((category) => (
                          <div
                            key={category._id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleCategoryClick(category.type)}
                          >
                            <span className="text-primary">
                              {category.type}
                            </span>
                          </div>
                        ))}
                        <Link
                          className="block px-4 py-2 text-primary hover:bg-gray-100 cursor-pointer"
                          href="/international"
                          onClick={() => setOpenDropdown(null)}
                        >
                          International
                        </Link>
                      </>
                    ) : link.label === "Staff Solutions" &&
                      link.dropdownItems ? (
                      <>
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-primary hover:bg-gray-100 cursor-pointer"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </>
                    ) : null}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors duration-200 relative ${
                  isActive(link.href)
                    ? "text-primary after:bg-primary after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:block">{/* <SearchBar /> */}</div>
          <Link href="/apply-jobs">
            <Button
              size="large"
              type="default"
              className="hidden md:block h-16"
            >
              Apply Now
            </Button>
          </Link>

          <button
            className="md:hidden text-primary focus:outline-none cursor-pointer"
            // className="text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary w-8 h-8"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <CloseOutlined className="text-2xl" />
            ) : (
              <MenuOutlined className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        closable={false}
        onClose={toggleMenu}
        open={isMenuOpen}
        styles={{
          body: {
            padding: 0,
            backgroundColor: "#ffffff",
            color: "var(--primary)",
          },
        }}
        width="60%"
      >
        {" "}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-2 border-b border-white">
            <Link href="/" onClick={toggleMenu}>
              <Image
                className="w-20 h-16"
                width={1000}
                height={1000}
                src={main_logo}
                alt="Healthcare workforce management solutions in Southern California"
                priority
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary w-8 h-8"
              aria-label="Close menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col p-4 space-y-2">
            <div className="mb-4">
              <SearchBar />
            </div>

            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    <div
                      className={`text-primary text-semibold cursor-pointer py-2 px-3 rounded transition-colors duration-200 block ${
                        isActive(link.href)
                          ? "text-primary after:bg-primary after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px]"
                          : ""
                      }`}
                      onClick={() => toggleDropdown(link.label)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.label}</span>
                        <div
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        >
                          <TiArrowSortedDown />
                        </div>
                      </div>
                    </div>
                    {openDropdown === link.label && (
                      <div className="bg-primary/20 rounded-md shadow-lg w-full">
                        {/* Conditionally render dropdown content based on which menu item it is */}
                        {link.label === "Job Seekers" ? (
                          <>
                            {jobCategories.map((category) => (
                              <div
                                key={category._id}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleCategoryClick(category.type)
                                }
                              >
                                <span className="text-primary">
                                  {category.type}
                                </span>
                              </div>
                            ))}
                            <Link
                              className="block px-4 py-2 text-primary hover:bg-gray-100 cursor-pointer"
                              href="/international?international=international"
                              onClick={() => {
                                toggleMenu();
                                setOpenDropdown(null);
                              }}
                            >
                              International
                            </Link>
                          </>
                        ) : link.label === "Staff Solutions" &&
                          link.dropdownItems ? (
                          <>
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-primary hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  toggleMenu();
                                  setOpenDropdown(null);
                                }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </>
                        ) : null}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-white py-2 px-3 rounded transition-colors duration-200 block ${
                      isActive(link.href)
                        ? "bg-primary/20 font-bold underline"
                        : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/20">
            <Link href="/apply-jobs" onClick={toggleMenu}>
              <Button type="primary" size="large" className="w-full">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
