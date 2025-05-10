"use client";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/job-seekers", label: "Job Seekers" },
    { href: "/all-jobs", label: "All Jobs" },
    { href: "/blogs", label: "Blogs" },
    { href: "/saved-jobs", label: "Saved Jobs(6)" },
  ];

  const isActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname?.startsWith(href));
  };

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
          {navLinks.map((link) => (
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
          ))}
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
        width="60%"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 ">
            <Link
              href="/"
              className="text-2xl font-bold text-white"
              onClick={toggleMenu}
            >
              Clement
            </Link>
          </div>

          <div className="flex-1 flex flex-col p-4 space-y-4">
            <div className="mb-4">
              <SearchBar />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white py-2 px-3 rounded transition-colors duration-200 ${
                  isActive(link.href) ? "bg-primary/20 font-medium" : ""
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
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
