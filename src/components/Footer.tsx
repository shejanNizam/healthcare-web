"use client";
import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import main_logo from "../assets/healthcare_main_logo.svg";

const Footer = () => (
  <footer className="bg-[#E7F1F8] text-primary py-8 w-full mx-auto">
    <div className="px-4 w-full mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-4">
          {/* Logo & text & Social icon here */}
          <div className="w-full md:w-2/5 flex flex-col gap-4 items-center md:items-start">
            <Link href="/">
              <Image
                className="w-28 h-20"
                width={1000}
                height={1000}
                src={main_logo}
                alt="main_logo"
                priority
              />
            </Link>

            <p className="text-sm text-center md:text-left">
              Empowering job seekers with resources, guidance, and opportunities
              to connect with top employers. Find your perfect career match and
              take the next step toward your future success.
            </p>

            <div className="flex gap-4">
              <Link
                target="_blank"
                href="https://facebook.com"
                className="hover:text-primary"
              >
                <FaFacebook size={32} />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/cenmhealthcare?igsh=ZnZibjhwcXJyYWRm"
                className="hover:text-primary"
              >
                <FaInstagram size={32} />
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com"
                className="hover:text-primary"
              >
                <FaTwitter size={32} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/cenm-healthcare/"
                className="hover:text-primary"
              >
                <FaLinkedinIn size={32} />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-3/5 flex flex-col md:flex-row justify-evenly mt-8 md:mt-0 gap-4">
            {/* Explore */}
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-primary text-xl mb-2 text-center md:text-left">
                Explore
              </h3>
              <ul className="text-center md:text-left">
                <li className="mb-1">
                  <Link href="/" className="text-sm hover:text-primary">
                    Home
                  </Link>
                </li>

                <li className="mb-1">
                  <Link href="/blogs" className="text-sm hover:text-primary">
                    Blogs
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/contact" className="text-sm hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-primary text-xl mb-2 text-center md:text-left">
                Utility Pages
              </h3>
              <ul className="text-center md:text-left">
                <li className="mb-1">
                  <Link href="/about" className="text-sm hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/privacy" className="text-sm hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/terms" className="text-sm hover:text-primary">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="font-semibold text-primary text-xl mb-2 text-center md:text-left">
                Get In Touch
              </h3>
              <ul className="text-center md:text-left">
                {/* Address with Google Maps Link */}
                <div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=41877+Enterprise+Circle+North+Temecula,+CA-92590"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mb-2 justify-center md:justify-start text-sm hover:text-primary transition"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    41877 Enterprise Circle North Temecula, CA-92590
                  </a>
                </div>

                {/* Email with mailto Link */}
                <div className="">
                  <a
                    href="mailto:info@cenmhealthcare.com"
                    className="flex items-center mb-2 justify-center md:justify-start text-sm hover:text-primary transition"
                  >
                    <FaEnvelope className="mr-2" />
                    info@cenmhealthcare.com
                  </a>
                </div>

                {/* Phone Number with tel Link */}
                <div className="">
                  <a
                    href="tel:+15622738746"
                    className="flex items-center justify-center md:justify-start text-sm hover:text-primary transition"
                  >
                    <FaPhoneAlt className="mr-2" />
                    (562) 273-8746
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* border here */}
        <div className="my-4 border-t border-gray-500" />

        {/* copyright part */}
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} CENM HEALTHCARE. All rights
          reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
