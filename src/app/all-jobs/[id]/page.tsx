"use client";

import { useGetJobDetailsQuery } from "@/redux/features/jobs/jobsApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaHospital,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";
import { FiBookmark, FiChevronLeft } from "react-icons/fi";

export default function JobDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { id } = params;

  const { data, isLoading, isError } = useGetJobDetailsQuery(id);
  const job = data?.data;

  // Format ISO date strings to readable format
  const formatDate = (isoDate?: string) => {
    if (!isoDate) return "";
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(isoDate).toLocaleDateString(undefined, options);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleApplyJob = () => {
    if (!job?._id) return;
    router.push(`/apply-jobs?jobId=${job._id}`);
  };

  if (isLoading)
    return <div className="text-center py-10">Loading job details...</div>;

  if (isError || !job)
    return (
      <div className="text-center py-10 text-red-600">
        Failed to load job details.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm p-4 flex items-center">
        <button
          onClick={handleBack}
          className="text-primary mr-2 cursor-pointer"
          aria-label="Go back"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-bold text-primary">Details of this Job</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 relative">
              {/* Bookmark Button */}
              <button
                onClick={toggleBookmark}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10 cursor-pointer"
                aria-label="Bookmark job"
              >
                <FiBookmark
                  className={`w-5 h-5 ${
                    isBookmarked ? "text-primary fill-primary" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Hospital Info */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-50 rounded-full text-primary mr-4">
                  <FaHospital className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{job.hospitalName}</h2>
                  <p className="text-gray-500 flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    {job.address}
                  </p>
                </div>
              </div>

              {/* Job Title and Description */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-primary mb-4">
                  {job.title}
                </h1>
                <div
                  className="text-gray-700 mb-6"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Key Responsibilities:
                </h2>
                <ul className="space-y-2 pl-5 list-disc">
                  {job.responsibilities?.map((item: string, index: number) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Requirements:
                </h2>
                <ul className="space-y-2 pl-5 list-disc">
                  {job.requirements?.map((item: string, index: number) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Benefits:
                </h2>
                <ul className="space-y-2 pl-5 list-disc">
                  {job.benefits?.map((item: string, index: number) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Summary */}
              {job.summary && (
                <div className="mb-6">
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: job.summary }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white lg:sticky lg:top-20 rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h3 className="text-xl font-bold text-center">Job Overview</h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="text-gray-700">{job.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCalendarAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Start Date
                    </p>
                    <p className="text-gray-700">{formatDate(job.startDate)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCalendarAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Deadline
                    </p>
                    <p className="text-gray-700">{formatDate(job.deadline)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaUser className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Vacancy</p>
                    <p className="text-gray-700">{job.vacancy}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Hours per week
                    </p>
                    <p className="text-gray-700">{job.hoursPerWeek}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaMoneyBillWave className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Monthly Pay
                    </p>
                    <p className="text-gray-700">${job?.salary}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <button
                  onClick={handleApplyJob}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
