// "use client";

// import { Carousel } from "antd";
// import { CarouselRef } from "antd/es/carousel";
// import Link from "next/link";
// import { useRef } from "react";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
// import {
//   FaBriefcaseMedical,
//   FaChalkboardTeacher,
//   FaClipboardList,
//   FaHospitalUser,
//   FaLanguage,
//   FaStethoscope,
//   FaTools,
//   FaUsers,
// } from "react-icons/fa"; // Example of other icons for categories
// import FeatureJobsTwo from "./FeatureJobsTwo";

// // Updated categories array with both icon and name
// const categories = [
//   { name: "Nursing", icon: <FaStethoscope /> },
//   { name: "Allied", icon: <FaBriefcaseMedical /> },
//   { name: "Advance practice", icon: <FaChalkboardTeacher /> },
//   { name: "Leadership", icon: <FaUsers /> },
//   { name: "Language interpreters", icon: <FaLanguage /> },
//   { name: "Physicians", icon: <FaHospitalUser /> },
//   { name: "Technicians", icon: <FaTools /> },
//   { name: "Administrative", icon: <FaClipboardList /> },
// ];

// export default function FeatureJobs() {
//   const sliderRef = useRef<CarouselRef | null>(null);

//   const responsiveSettings = [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h2 className="text-3xl text-primary font-bold text-center">
//         Featured Jobs
//       </h2>
//       <p className="text-md text-center mb-4">
//         Choose jobs from the top employers and apply for the same.
//       </p>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Right Navigation Button */}
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
//           onClick={() => sliderRef.current?.prev()}
//         >
//           <BiSolidLeftArrow className="text-4xl" />
//         </button>

//         <div className="mb-12">
//           <Carousel
//             dots={false}
//             slidesToShow={4}
//             slidesToScroll={4}
//             ref={sliderRef}
//             className="overflow-hidden px-8 md:px-12"
//             responsive={responsiveSettings}
//           >
//             {categories.map((category, index) => (
//               <div key={index} className="p-4">
//                 <Link href={`/all-jobs?category=${category.name}`}>
//                   <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg text-center cursor-pointer">
//                     <div className="flex flex-col items-center justify-center w-32 mx-auto h-32 text-primary gap-2">
//                       <div className="text-4xl">{category.icon}</div>
//                       <div className="text-xl font-bold">{category.name}</div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </Carousel>
//         </div>

//         {/* Right Navigation Button */}
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
//           onClick={() => sliderRef.current?.next()}
//         >
//           <BiSolidRightArrow className="text-4xl" />
//         </button>
//       </div>

//       {/* second card */}
//       <>
//         <FeatureJobsTwo />
//       </>
//     </div>
//   );
// }

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
} from "react-icons/fa";
import FeatureJobsTwo from "./FeatureJobsTwo";

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
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
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
      breakpoint: 640,
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
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-2xl md:text-3xl text-primary font-bold text-center">
        Featured Jobs
      </h2>
      <p className="text-sm md:text-md text-center mb-6 md:mb-8">
        Choose jobs from the top employers and apply for the same.
      </p>

      <div className="relative max-w-7xl mx-auto">
        <button
          className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition"
          onClick={() => sliderRef.current?.prev()}
          aria-label="Previous slide"
        >
          <BiSolidLeftArrow className="text-2xl md:text-3xl text-primary" />
        </button>

        <div className="mb-8 md:mb-12">
          <Carousel
            dots={false}
            slidesToShow={4}
            slidesToScroll={4}
            ref={sliderRef}
            className="overflow-hidden px-2 sm:px-4 md:px-8"
            responsive={responsiveSettings}
            infinite={true}
          >
            {categories.map((category, index) => (
              <div key={index} className="px-2 sm:px-4">
                <Link href={`/all-jobs?category=${category.name}`} passHref>
                  <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer h-full">
                    <div className="flex flex-col items-center justify-center w-full aspect-square mx-auto text-primary gap-2">
                      <div className="text-3xl sm:text-4xl">
                        {category.icon}
                      </div>
                      <div className="text-sm sm:text-base md:text-lg font-semibold text-center">
                        {category.name}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        <button
          className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition"
          onClick={() => sliderRef.current?.next()}
          aria-label="Next slide"
        >
          <BiSolidRightArrow className="text-2xl md:text-3xl text-primary" />
        </button>
      </div>

      <div className="mt-8 md:mt-12">
        <FeatureJobsTwo />
      </div>
    </div>
  );
}
