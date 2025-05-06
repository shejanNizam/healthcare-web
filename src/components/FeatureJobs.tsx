"use client";

import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import Link from "next/link";
import { useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import {
  FaBriefcaseMedical,
  FaChalkboardTeacher,
  FaClipboardList,
  FaHospitalUser,
  FaLanguage,
  FaStethoscope,
  FaTools,
  FaUsers,
} from "react-icons/fa"; // Example of other icons for categories
import FeatureJobsTwo from "./FeatureJobsTwo";

// Updated categories array with both icon and name
const categories = [
  { name: "Nursing", icon: <FaStethoscope /> },
  { name: "Allied", icon: <FaBriefcaseMedical /> },
  { name: "Advance practice", icon: <FaChalkboardTeacher /> },
  { name: "Leadership", icon: <FaUsers /> },
  { name: "Language interpreters", icon: <FaLanguage /> },
  { name: "Physicians", icon: <FaHospitalUser /> },
  { name: "Technicians", icon: <FaTools /> },
  { name: "Administrative", icon: <FaClipboardList /> },
];

export default function FeatureJobs() {
  const sliderRef = useRef<CarouselRef | null>(null);

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl text-primary font-bold text-center">
        Featured Jobs
      </h2>
      <p className="text-md text-center mb-4">
        Choose jobs from the top employers and apply for the same.
      </p>

      <div className="relative max-w-7xl mx-auto">
        {/* Right Navigation Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={() => sliderRef.current?.prev()}
        >
          <BiSolidLeftArrow className="text-4xl" />
        </button>

        <div className="mb-12">
          <Carousel
            dots={false}
            slidesToShow={4}
            slidesToScroll={4}
            ref={sliderRef}
            className="overflow-hidden px-8 md:px-12"
            responsive={responsiveSettings}
          >
            {categories.map((category, index) => (
              <div key={index} className="p-4">
                <Link href={`/all-jobs?category=${category.name}`}>
                  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg text-center cursor-pointer">
                    <div className="flex flex-col items-center justify-center w-32 mx-auto h-32 text-primary gap-2">
                      <div className="text-4xl">{category.icon}</div>
                      <div className="text-xl font-bold">{category.name}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right Navigation Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={() => sliderRef.current?.next()}
        >
          <BiSolidRightArrow className="text-4xl" />
        </button>
      </div>

      {/* second card */}
      <>
        <FeatureJobsTwo />
      </>
    </div>
  );
}
