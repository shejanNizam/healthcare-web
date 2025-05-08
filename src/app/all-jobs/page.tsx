"use client";

import CustomErrorPage from "@/components/CustomErrorPage";
import JobCard from "@/components/JobCard";
import {
  CloseOutlined,
  DownOutlined,
  FilterOutlined,
  MenuOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
  hospital: string;
  description: string;
  salary: string;
  deadline: string;
  type: string;
  category: string;
}

interface Filters {
  profession: string | null;
  jobType: string | null;
}

const jobsData: Job[] = [
  {
    id: "1",
    title: "Registered nurse- progressive care",
    hospital: "AB Hospital",
    description:
      "We are seeking a compassionate and dedicated nurse to join our healthcare team. The ideal candidate will have excellent clinical and communication skills with a strong...",
    salary: "$ 1500 - $ 1800",
    deadline: "12 May 2025",
    type: "Permanent",
    category: "Nursing",
  },
  {
    id: "2",
    title: "Registered nurse- progressive care",
    hospital: "AB Hospital",
    description:
      "We are seeking a compassionate and dedicated nurse to join our healthcare team. The ideal candidate will have excellent clinical and communication skills with a strong...",
    salary: "$ 1500 - $ 1800",
    deadline: "12 May 2025",
    type: "Permanent",
    category: "Nursing",
  },
  {
    id: "3",
    title: "Registered nurse- progressive care",
    hospital: "AB Hospital",
    description:
      "We are seeking a compassionate and dedicated nurse to join our healthcare team. The ideal candidate will have excellent clinical and communication skills with a strong...",
    salary: "$ 1500 - $ 1800",
    deadline: "12 May 2025",
    type: "Permanent",
    category: "Nursing",
  },
  {
    id: "4",
    title: "Physician assistant",
    hospital: "AB Hospital",
    description:
      "We are seeking a compassionate and dedicated physician assistant to join our healthcare team. The ideal candidate will have excellent clinical and communication skills with a strong...",
    salary: "$ 2000 - $ 2500",
    deadline: "15 May 2025",
    type: "Contract",
    category: "Physician",
  },
];

const filterCategories = {
  Profession: [
    "Nursing",
    "Allied",
    "Physician",
    "Advance practice",
    "Dentistry",
    "Leadership",
    "Schools",
    "Language Interpreters",
    "Revenue Cycle",
  ],
  "Job type": [
    "Travel",
    "Telehealth",
    "Permanent",
    "Contract",
    "Part-time",
    "Full-time",
  ],
};

const AllJobs = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    profession: null,
    jobType: null,
  });
  const [availableJobs, setAvailableJobs] = useState<Job[]>(jobsData);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const applyFilter = (category: string, value: string) => {
    const newFilters = { ...filters };

    if (category === "Profession") {
      newFilters.profession = value;
    } else if (category === "Job type") {
      newFilters.jobType = value;
    }

    setFilters(newFilters);
    setOpenDropdown(null);
    if (isMobile) setShowMobileFilters(false);
  };

  const clearAllFilters = () => {
    setFilters({
      profession: null,
      jobType: null,
    });
  };

  useEffect(() => {
    let filteredJobs = jobsData;

    if (filters.profession) {
      filteredJobs = filteredJobs.filter(
        (job) => job.category === filters.profession
      );
    }

    if (filters.jobType) {
      filteredJobs = filteredJobs.filter((job) => job.type === filters.jobType);
    }

    setAvailableJobs(filteredJobs);
  }, [filters]);

  return (
    <>
      {/* <div className=" text-center ">
        <SearchBar />
      </div> */}
      <div className="flex flex-col md:flex-row min-h-screen relative">
        {/* Mobile header with filter toggle */}
        <div className="md:hidden sticky top-0 z-20 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="font-bold text-xl text-primary">
              Available jobs:{" "}
              <span className="text-primary text-2xl font-bold">
                {availableJobs.length}
              </span>
            </div>
            <Button
              type="text"
              icon={showMobileFilters ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="text-gray-600"
            />
          </div>
        </div>

        {/* Filters sidebar - Hidden on mobile unless toggled */}
        <div
          className={`fixed bg-white md:bg-white/0 md:static w-[70%] md:w-72 lg:w-80 px-4 py-10 h-full z-30 transition-all duration-300 ease-in-out ${
            showMobileFilters ? "left-0" : "-left-[70%]"
          } md:left-0`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-primary text-lg font-semibold gap-1">
              <FilterOutlined size={20} />
              <p className="">Filters</p>
            </div>
            {(filters.profession || filters.jobType) && (
              <button
                onClick={clearAllFilters}
                className="text-red-500 hover:text-red-700 text-sm font-semibold cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Filter sections */}
          {Object.keys(filterCategories).map((category) => (
            <div key={category} className="mb-6">
              <Button
                onClick={() => toggleDropdown(category)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg"
              >
                <span className="font-medium">{category}</span>
                {openDropdown === category ? <UpOutlined /> : <DownOutlined />}
              </Button>

              {openDropdown === category && (
                <div className="mt-2 border border-gray-200 bg-white rounded-lg shadow-sm">
                  {filterCategories[
                    category as keyof typeof filterCategories
                  ].map((option) => (
                    <div
                      key={option}
                      onClick={() => applyFilter(category, option)}
                      className={`px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors ${
                        (category === "Profession" &&
                          filters.profession === option) ||
                        (category === "Job type" && filters.jobType === option)
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main content area */}
        <div className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Desktop header */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <div className="font-bold text-xl text-primary">
              Available jobs:{" "}
              <span className="text-primary text-2xl font-bold">
                {availableJobs.length}
              </span>
            </div>
          </div>
          {/* Job cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {availableJobs?.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <CustomErrorPage />
                <Button type="primary" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              </div>
            ) : (
              availableJobs.map((job) => <JobCard key={job.id} job={job} />)
            )}
          </div>
        </div>

        {/* Overlay for mobile filters */}
        <div
          className={`fixed inset-0 bg-black/70 bg-opacity-20 z-20 transition-opacity duration-300 ${
            showMobileFilters ? "opacity-100" : "opacity-0 pointer-events-none"
          } md:hidden`}
          onClick={() => setShowMobileFilters(false)}
        />
      </div>
    </>
  );
};

export default AllJobs;
