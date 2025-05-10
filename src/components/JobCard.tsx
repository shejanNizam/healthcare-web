// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FaHospital } from "react-icons/fa";
// import { FiBookmark } from "react-icons/fi";

// interface Job {
//   id: string;
//   hospital: string;
//   title: string;
//   description: string;
//   salary: string;
//   deadline: string;
//   type: string;
// }

// export default function JobCard({ job }: { job: Job }) {
//   const router = useRouter();
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   const toggleBookmark = (e: React.MouseEvent) => {
//     // Stop event propagation to prevent card click
//     e.stopPropagation();
//     setIsBookmarked(!isBookmarked);
//   };

//   const handleCardDetails = () => {
//     // Handle card click to show job details
//     router.push(`/all-jobs/${job.id}`);
//     // console.log(`Job ID: ${job.id}`);
//   };

//   return (
//     <>
//       <div
//         onClick={handleCardDetails}
//         className="relative w-full p-4 md:p-6 lg:px-12 lg:py-8 bg-[#E7F1F8] rounded-lg shadow-md border border-gray-200 cursor-pointer"
//       >
//         {/* Bookmark Button */}
//         <button
//           onClick={toggleBookmark}
//           className="absolute top-2 md:top-4 right-2 md:right-4 p-1 md:p-2 rounded-full bg-gray-300 hover:bg-gray-200 transition-colors z-10 cursor-pointer"
//           aria-label="Bookmark job"
//         >
//           <FiBookmark
//             className={`w-4 h-4 md:w-5 md:h-5 ${
//               isBookmarked ? "text-primary fill-primary" : "text-gray-400"
//             }`}
//           />
//         </button>

//         <div className="mb-3 md:mb-4 flex items-start">
//           {/* Hospital Logo */}
//           <div className="mr-2 md:mr-3 p-1 md:p-2 bg-blue-50 rounded-full text-blue-600">
//             <FaHospital className="w-4 h-4 md:w-6 md:h-6" />
//           </div>

//           <div>
//             <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
//               {job.hospital}
//             </h1>
//             <p className="text-sm md:text-base text-gray-600">New York, USA</p>
//           </div>
//         </div>

//         <div className="mb-3 md:mb-4">
//           <h2 className="text-base md:text-lg lg:text-xl text-primary font-semibold">
//             {job.title}
//           </h2>
//           <p className="text-sm md:text-base text-gray-700 mt-1 md:mt-2 line-clamp-3">
//             {job.description}
//           </p>
//         </div>

//         <div className="flex justify-between items-center ">
//           <span className="text-sm md:text-base font-medium text-primary">
//             Monthly: {job.salary}
//           </span>
//           <div className="flex items-center space-x-1 md:space-x-2">
//             <span className="text-primary">👍</span>
//             <span className="text-xs md:text-sm text-primary">
//               Deadline: {job.deadline}
//             </span>
//           </div>
//           <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 text-primary text-xs md:text-sm font-medium rounded-full">
//             {job.type}
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHospital } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";

interface Job {
  id: string;
  hospital: string;
  title: string;
  description: string;
  salary: string;
  deadline: string;
  type: string;
}

export default function JobCard({ job }: { job: Job }) {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleCardDetails = () => {
    router.push(`/all-jobs/${job.id}`);
  };

  return (
    <div
      onClick={handleCardDetails}
      className="relative w-full p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 bg-[#E7F1F8] rounded-lg shadow-sm hover:shadow-md border border-gray-200 cursor-pointer transition-shadow duration-200"
    >
      {/* Bookmark Button */}
      <button
        onClick={toggleBookmark}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-white hover:bg-gray-50 transition-colors z-10 cursor-pointer shadow-sm"
        aria-label={isBookmarked ? "Unbookmark job" : "Bookmark job"}
      >
        <FiBookmark
          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
            isBookmarked ? "text-primary fill-primary" : "text-gray-400"
          } transition-colors`}
        />
      </button>

      <div className="mb-3 sm:mb-4 flex items-start gap-3">
        {/* Hospital Logo */}
        <div className="flex-shrink-0 p-2 sm:p-2.5 bg-blue-50 rounded-full text-blue-600">
          <FaHospital className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">
            {job.hospital}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">New York, USA</p>
        </div>
      </div>

      <div className="mb-3 sm:mb-4">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-primary">
          {job.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-1.5 line-clamp-2 sm:line-clamp-3">
          {job.description}
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-3">
        <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">
          Monthly: {job.salary}
        </span>

        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-primary hidden xs:inline">👍</span>
          <span className="text-xs text-primary whitespace-nowrap">
            Deadline: {job.deadline}
          </span>
        </div>

        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-primary text-xs font-medium rounded-full whitespace-nowrap">
          {job.type}
        </span>
      </div>
    </div>
  );
}
