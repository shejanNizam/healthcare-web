// "use client";

// import { useSavedJobs } from "@/context/SavedJobsContext";
// import { useRouter } from "next/navigation";
// import { FaHospital } from "react-icons/fa";
// import { FiBookmark } from "react-icons/fi";

// interface Job {
//   _id: string;
//   hospitalName: string;
//   title: string;
//   address: string;
//   deadline: string;
//   description: string;
//   salary: number;
//   jobType: string;
// }

// export default function JobCard({ job }: { job: Job }) {
//   const router = useRouter();
//   const { addJob, removeJob, isJobSaved } = useSavedJobs();

//   const bookmarked = isJobSaved(job._id);

//   const toggleBookmark = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (bookmarked) {
//       removeJob(job._id);
//     } else {
//       addJob(job._id);
//     }
//   };

//   const handleCardDetails = () => {
//     router.push(`/all-jobs/${job._id}`);
//   };

//   const formattedDeadline = new Date(job.deadline).toLocaleDateString(
//     undefined,
//     {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     }
//   );

//   return (
//     <div
//       onClick={handleCardDetails}
//       className="relative w-full p-4 bg-[#E7F1F8] rounded-lg shadow-sm hover:shadow-md border border-gray-200 cursor-pointer transition-shadow duration-200"
//     >
//       <button
//         onClick={toggleBookmark}
//         className="absolute top-3 right-3 p-1.5 rounded-full bg-white hover:bg-gray-50 z-10 cursor-pointer shadow-sm"
//         aria-label={bookmarked ? "Unbookmark job" : "Bookmark job"}
//       >
//         <FiBookmark
//           className={`w-5 h-5 ${
//             bookmarked ? "text-primary fill-primary" : "text-gray-400"
//           }`}
//         />
//       </button>

//       <div className="mb-3 flex items-start gap-3">
//         <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full text-blue-600">
//           <FaHospital className="w-5 h-5" />
//         </div>
//         <div className="flex-1 min-w-0">
//           <h1 className="text-lg font-bold text-gray-800 truncate">
//             {job.hospitalName}
//           </h1>
//           <p className="text-sm text-gray-600 truncate">{job.address}</p>
//         </div>
//       </div>

//       <h2 className="text-md font-semibold text-primary">{job.title}</h2>

//       <div
//         className="text-sm text-gray-700 mt-1 line-clamp-2"
//         dangerouslySetInnerHTML={{ __html: job.description.slice(0, 170) }}
//       />

//       <div className="flex flex-wrap justify-between items-center gap-2 mt-3">
//         <span className="text-primary font-medium whitespace-nowrap">
//           Monthly: {job.salary}
//         </span>
//         <span className="text-xs text-primary whitespace-nowrap">
//           Deadline: {formattedDeadline}
//         </span>
//         <span className="px-2 py-0.5 bg-blue-100 text-primary text-xs font-medium rounded-full whitespace-nowrap">
//           {job.jobType}
//         </span>
//       </div>
//     </div>
//   );
// }

"use client";

import { Job, useSavedJobs } from "@/context/SavedJobsContext";
import { useRouter } from "next/navigation";
import { FaHospital } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";

export default function JobCard({ job }: { job: Job }) {
  const router = useRouter();
  const { addJob, removeJob, isJobSaved } = useSavedJobs();

  const bookmarked = isJobSaved(job._id);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarked) {
      removeJob(job._id);
    } else {
      addJob(job);
    }
  };

  const handleCardDetails = () => {
    router.push(`/all-jobs/${job._id}`);
  };

  const formattedDeadline = new Date(job.deadline).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div
      onClick={handleCardDetails}
      className="relative w-full p-4 bg-[#E7F1F8] rounded-lg shadow-sm hover:shadow-md border border-gray-200 cursor-pointer transition-shadow duration-200"
    >
      <button
        onClick={toggleBookmark}
        className="absolute top-3 right-3 p-1.5 rounded-full bg-white hover:bg-gray-50 z-10 cursor-pointer shadow-sm"
        aria-label={bookmarked ? "Unbookmark job" : "Bookmark job"}
      >
        <FiBookmark
          className={`w-5 h-5 ${
            bookmarked ? "text-primary fill-primary" : "text-gray-400"
          }`}
        />
      </button>

      <div className="mb-3 flex items-start gap-3">
        <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full text-blue-600">
          <FaHospital className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold text-gray-800 truncate">
            {job.hospitalName}
          </h1>
          <p className="text-sm text-gray-600 truncate">{job.address}</p>
        </div>
      </div>

      <h2 className="text-md font-semibold text-primary">{job.title}</h2>

      <div
        className="text-sm text-gray-700 mt-1 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 170) }}
      />

      <div className="flex flex-wrap justify-between items-center gap-2 mt-3">
        <span className="text-primary font-medium whitespace-nowrap">
          Monthly: {job.salary}
        </span>
        <span className="text-xs text-primary whitespace-nowrap">
          Deadline: {formattedDeadline}
        </span>
        <span className="px-2 py-0.5 bg-blue-100 text-primary text-xs font-medium rounded-full whitespace-nowrap">
          {job.jobType}
        </span>
      </div>
    </div>
  );
}
