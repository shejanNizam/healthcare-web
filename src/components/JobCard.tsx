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
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <div className="relative w-full p-4 md:p-6 lg:px-12 lg:py-8 bg-[#E7F1F8] rounded-lg shadow-md border border-gray-200">
        {/* Bookmark Button */}
        <button
          onClick={toggleBookmark}
          className="absolute top-2 md:top-4 right-2 md:right-4 p-1 md:p-2 rounded-full bg-gray-300 hover:bg-gray-200 transition-colors"
          aria-label="Bookmark job"
        >
          <FiBookmark
            className={`w-4 h-4 md:w-5 md:h-5 ${
              isBookmarked ? "text-blue-500 fill-blue-500" : "text-gray-400"
            }`}
          />
        </button>

        <div className="mb-3 md:mb-4 flex items-start">
          {/* Hospital Logo */}
          <div className="mr-2 md:mr-3 p-1 md:p-2 bg-blue-50 rounded-full text-blue-600">
            <FaHospital className="w-4 h-4 md:w-6 md:h-6" />
          </div>

          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
              {job.hospital}
            </h1>
            <p className="text-sm md:text-base text-gray-600">New York, USA</p>
          </div>
        </div>

        <div className="mb-3 md:mb-4">
          <h2 className="text-base md:text-lg lg:text-xl text-primary font-semibold">
            {job.title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 mt-1 md:mt-2 line-clamp-3">
            {job.description}
          </p>
        </div>

        <div className="flex justify-between items-center ">
          <span className="text-sm md:text-base font-medium text-primary">
            Monthly: {job.salary}
          </span>
          <div className="flex items-center space-x-1 md:space-x-2">
            <span className="text-primary">👍</span>
            <span className="text-xs md:text-sm text-primary">
              Deadline: {job.deadline}
            </span>
          </div>
          <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 text-primary text-xs md:text-sm font-medium rounded-full">
            {job.type}
          </span>
        </div>
      </div>
    </>
  );
}
