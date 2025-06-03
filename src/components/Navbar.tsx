"use client";

import { useSavedJobs } from "@/context/SavedJobsContext";
import { useGetValueQuery } from "@/redux/features/value/valueApi";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
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
    { href: "/about", label: "About" },
    { href: "#", label: "Job Seekers", hasDropdown: true },
    { href: "/all-jobs", label: "All Jobs" },
    { href: "/blogs", label: "Blogs" },
    {
      href: "/saved-jobs",
      label: `Saved Jobs${savedJobs.length > 0 ? ` (${savedJobs.length})` : "(0)"
        }`,
    },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <nav
      className={`py-4 bg-white bg-gradient-to-r from-primary to-primary/10 z-50 shadow-md sticky top-0 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Clement
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:space-x-4 text-white text-md font-semibold">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative group">
                <div
                  className={`hover:text-primary transition-colors duration-200 relative flex items-center cursor-pointer ${isActive(link.href)
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
                    {jobCategories.map((category) => (
                      <div
                        key={category._id}
                        className="px-4 py-2 hover:bg-gray-100 hover:rounded-md cursor-pointer"
                        onClick={() => handleCategoryClick(category.type)}
                      >
                        <span className="text-primary">{category.type}</span>
                      </div>
                    ))}
                    <Link
                      className="block px-4 py-2 text-primary hover:bg-gray-100 hover:rounded-md cursor-pointer"
                      href="/international?international=international"
                    >
                      International
                    </Link>
                  </div>
                </div>

                {/* Mobile dropdown (click) - shown only on mobile */}
                {isMobile && openDropdown === link.label && (
                  <div className="absolute bg-white rounded-md shadow-lg w-full min-w-[200px] left-0 z-10">
                    {jobCategories.map((category) => (
                      <div
                        key={category._id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCategoryClick(category.type)}
                      >
                        <span className="text-primary">{category.type}</span>
                      </div>
                    ))}
                    <Link
                      className="block px-4 py-2 text-primary hover:bg-gray-100 cursor-pointer"
                      href="/international"
                      onClick={() => setOpenDropdown(null)}
                    >
                      International
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors duration-200 relative ${isActive(link.href)
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

          <button
            className="md:hidden text-primary focus:outline-none cursor-pointer"
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
        closable={true}
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
                  <div>
                    <div
                      className={`text-primary text-semibold cursor-pointer py-2 px-3 rounded transition-colors duration-200 block ${isActive(link.href)
                        ? "text-primary after:bg-primary after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px]"
                        : ""
                        }`}
                      onClick={() => toggleDropdown(link.label)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.label}</span>
                        <div
                          className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""
                            }`}
                        >
                          <TiArrowSortedDown />
                        </div>
                      </div>
                    </div>
                    {openDropdown === link.label && (
                      <div className="bg-primary/20 rounded-md shadow-lg w-full">
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
                          href="/international?international=international"
                          onClick={() => {
                            toggleMenu();
                            setOpenDropdown(null);
                          }}
                        >
                          International
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-white py-2 px-3 rounded transition-colors duration-200 block ${isActive(link.href)
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
