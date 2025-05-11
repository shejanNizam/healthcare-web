"use client";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Popover } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Job categories
  const jobCategories = [
    {
      name: "Nursing",
      alt: "Nursing jobs",
    },
    {
      name: "IT",
      alt: "IT jobs",
    },
    {
      name: "Engineering",
      alt: "Engineering jobs",
    },
    {
      name: "Finance",
      alt: "Finance jobs",
    },
    {
      name: "Healthcare",
      alt: "Healthcare jobs",
    },
    {
      name: "Education",
      alt: "Education jobs",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/all-jobs?category=${category}`);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#", label: "Job Seekers", hasDropdown: true }, // Changed href to "#" to make it non-clickable
    { href: "/all-jobs", label: "All Jobs" },
    { href: "/blogs", label: "Blogs" },
    { href: "/saved-jobs", label: "Saved Jobs(6)" },
  ];

  const isActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname?.startsWith(href));
  };

  // Dropdown content for job categories
  const categoriesDropdown = (
    <div className="p-2 w-auto">
      {jobCategories.map((category) => (
        <div
          key={category.name}
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200"
          onClick={() => handleCategoryClick(category.name)}
        >
          <span className="font-medium text-primary">{category.name}</span>
        </div>
      ))}
    </div>
  );

  // Categories for mobile menu
  const mobileCategories = (
    <div className="ml-6 space-y-2">
      {jobCategories.map((category) => (
        <div
          key={category.name}
          className="flex items-center space-x-3 py-2 cursor-pointer"
          onClick={() => handleCategoryClick(category.name)}
        >
          <span className="text-primary">{category.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <nav
      className={`py-4 bg-white bg-gradient-to-r from-primary to-primary/10 z-50 shadow-md sticky top-0 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Clement
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:space-x-4 text-white">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <Popover
                key={link.href}
                content={categoriesDropdown}
                placement="bottom"
                trigger={["hover", "click"]} // Added click trigger for better mobile-like behavior on desktop
                overlayClassName="category-dropdown"
              >
                <div // Changed from Link to div since we don't want it to be clickable
                  className={`hover:text-primary transition-colors duration-200 relative flex items-center cursor-pointer ${
                    isActive(link.href)
                      ? "text-primary after:bg-primary after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px]"
                      : ""
                  }`}
                >
                  {link.label}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </Popover>
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

        <div className="flex space-x-4">
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <Link href="/contact">
            <Button size="large" type="primary" className="hidden md:block">
              Contact
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary focus:outline-none"
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
          },
        }}
        width="80%"
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white"
              onClick={toggleMenu}
            >
              Clement
            </Link>
          </div>

          <div className="flex-1 flex flex-col p-4 space-y-2">
            <div className="mb-4">
              <SearchBar />
            </div>

            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  // For dropdown items in mobile, we'll make the parent non-clickable
                  <div
                    className={`text-primary py-2 px-3 rounded transition-colors duration-200 block ${
                      isActive(link.href) ? "bg-primary/20 font-medium" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    {mobileCategories}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-white py-2 px-3 rounded transition-colors duration-200 block ${
                      isActive(link.href) ? "bg-primary/20 font-medium" : ""
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
            <Link href="/contact" onClick={toggleMenu}>
              <Button type="primary" size="large" className="w-full">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
