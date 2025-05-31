"use client";

import CustomErrorPage from "@/components/CustomErrorPage";
import JobCard from "@/components/JobCard";
import { useGetJobsQuery } from "@/redux/features/jobs/jobsApi";
import { useGetValueQuery } from "@/redux/features/value/valueApi";
import {
  CloseOutlined,
  DownOutlined,
  FilterOutlined,
  MenuOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Job {
  _id: string;
  hospitalName: string;
  title: string;
  address: string;
  deadline: string;
  category: string;
  profession: string;
  jobType: string;
  salary: number;
  vacancy: number;
  startDate: string;
  hoursPerWeek: number;
  description: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  companyLogo: string;
  createdAt: string;
  updatedAt: string;
  totalApply: number;
}

interface Filters {
  profession: string | null;
  jobType: string | null;
  category: string | null;
}

const AllJobs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    profession: null,
    jobType: null,
    category: null,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { data: categoryData, isLoading: loadingCategory } =
    useGetValueQuery("Category");
  const { data: professionData, isLoading: loadingProfession } =
    useGetValueQuery("Profession");
  const { data: jobTypeData, isLoading: loadingJobType } =
    useGetValueQuery("job-type");

  interface ValueItem {
    type: string;
    [key: string]: unknown;
  }

  // Extract string arrays for filters from dynamic API data
  const categories =
    categoryData?.data?.map((item: ValueItem) => item.type) || [];
  const professions =
    professionData?.data?.map((item: ValueItem) => item.type) || [];
  const jobtypes = jobTypeData?.data?.map((item: ValueItem) => item.type) || [];

  // Sync filters from URL on mount and when URL changes
  useEffect(() => {
    setFilters({
      category: searchParams?.get("category") ?? null,
      profession: searchParams?.get("profession") ?? null,
      jobType: searchParams?.get("jobType") ?? null,
    });
  }, [searchParams]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const applyFilter = (categoryKey: keyof Filters, value: string) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [categoryKey]: value };
      const query = new URLSearchParams();

      if (updatedFilters.category)
        query.set("category", updatedFilters.category);
      if (updatedFilters.profession)
        query.set("profession", updatedFilters.profession);
      if (updatedFilters.jobType) query.set("jobType", updatedFilters.jobType);

      router.replace(`/all-jobs?${query.toString()}`);

      return updatedFilters;
    });

    setOpenDropdown(null);
    if (isMobile) setShowMobileFilters(false);
  };

  const clearAllFilters = () => {
    setFilters({ category: null, profession: null, jobType: null });
    router.replace("/all-jobs");
  };

  // Fetch jobs with applied filters
  const {
    data: jobsResponse,
    isLoading,
    isError,
  } = useGetJobsQuery({
    page: 1,
    limit: 10,
    category: filters.category || undefined,
    profession: filters.profession || undefined,
    jobType: filters.jobType || undefined,
  });

  const allJobs: Job[] = jobsResponse?.data?.allJobs || [];

  // Client side filtering fallback (case insensitive)
  const filteredJobs = allJobs.filter((job) => {
    if (
      filters.profession &&
      job.profession.toLowerCase() !== filters.profession.toLowerCase()
    )
      return false;
    if (
      filters.jobType &&
      job.jobType.toLowerCase() !== filters.jobType.toLowerCase()
    )
      return false;
    if (
      filters.category &&
      job.category.toLowerCase() !== filters.category.toLowerCase()
    )
      return false;
    return true;
  });

  if (isLoading || loadingCategory || loadingProfession || loadingJobType) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-600">
        Error loading jobs. Please try again later.
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen relative">
        {/* Mobile header */}
        <div className="md:hidden sticky top-0 z-20 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="font-bold text-xl text-primary">
              Available jobs:{" "}
              <span className="text-primary text-2xl font-bold">
                {filteredJobs.length}
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

        {/* Filters sidebar */}
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
            {(filters.profession || filters.jobType || filters.category) && (
              <button
                onClick={clearAllFilters}
                className="text-red-500 hover:text-red-700 text-sm font-semibold cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Filter sections */}
          {[
            { label: "Category", options: categories },
            { label: "Profession", options: professions },
            { label: "JobType", options: jobtypes },
          ].map(({ label, options }) => (
            <div key={label} className="mb-6">
              <Button
                onClick={() => toggleDropdown(label)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg"
              >
                <span className="font-medium">{label}</span>
                {openDropdown === label ? <UpOutlined /> : <DownOutlined />}
              </Button>

              {openDropdown === label && (
                <div className="mt-2 border border-gray-200 bg-white rounded-lg shadow-sm max-h-60 overflow-auto">
                  {options.map((option: string) => {
                    const isSelected =
                      (label === "Profession" &&
                        filters.profession === option) ||
                      (label === "JobType" && filters.jobType === option) ||
                      (label === "Category" && filters.category === option);

                    return (
                      <div
                        key={option}
                        onClick={() =>
                          applyFilter(
                            label.toLowerCase() as keyof Filters,
                            option
                          )
                        }
                        className={`px-4 py-3 cursor-pointer hover:bg-primary/10 transition-colors ${
                          isSelected
                            ? "bg-blue-50 text-primary font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Desktop header */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <div className="font-bold text-xl text-primary">
              Available jobs:{" "}
              <span className="text-primary text-2xl font-bold">
                {filteredJobs.length}
              </span>
            </div>
          </div>

          {/* Job cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <CustomErrorPage />
                <Button type="primary" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              </div>
            ) : (
              filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
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
