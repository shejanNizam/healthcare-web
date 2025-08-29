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
import { Button, Pagination, Spin } from "antd";
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
  const [currentPage, setCurrentPage] = useState(1);
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

  const categories =
    categoryData?.data?.map((item: ValueItem) => item.type) || [];
  const professions =
    professionData?.data?.map((item: ValueItem) => item.type) || [];
  const jobtypes = jobTypeData?.data?.map((item: ValueItem) => item.type) || [];

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

  useEffect(() => {
    setCurrentPage(1);
  }, [filters.category, filters.profession, filters.jobType]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const applyFilter = (key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [key]: value };
      const query = new URLSearchParams();
      if (updatedFilters.category)
        query.set("category", updatedFilters.category);
      if (updatedFilters.profession)
        query.set("profession", updatedFilters.profession);
      if (updatedFilters.jobType) query.set("jobType", updatedFilters.jobType);

      router.replace(`/all-jobs?${query.toString()}`);
      return updatedFilters;
    });

    if (isMobile) setShowMobileFilters(false);
  };

  const clearAllFilters = () => {
    setFilters({ category: null, profession: null, jobType: null });
    setOpenDropdown(null);
    router.replace("/all-jobs");
  };

  const {
    data: jobsResponse,
    isLoading,
    isError,
  } = useGetJobsQuery({
    page: currentPage,
    limit: 10,
    category: filters.category || undefined,
    profession: filters.profession || undefined,
    jobType: filters.jobType || undefined,
  });

  const allJobs: Job[] = jobsResponse?.data?.allJobs || [];
  const pagination = jobsResponse?.data?.pagination || {
    totalPage: 1,
    currentPage: 1,
    prevPage: 1,
    nextPage: 1,
    totalData: 0,
  };

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
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-600">
        Error loading jobs. Please try again later.
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-20 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="font-bold text-xl text-primary">
            Available jobs:{" "}
            <span className="text-primary text-2xl font-bold">
              {pagination.totalData}
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

      {/* Sidebar Filters */}
      <div
        className={`fixed bg-white md:bg-white/0 md:static w-[70%] md:w-72 lg:w-80 px-4 py-10 h-full z-30 transition-all duration-300 ease-in-out ${
          showMobileFilters ? "left-0" : "-left-[70%]"
        } md:left-0`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-primary text-lg font-semibold gap-1">
            <FilterOutlined size={20} />
            <p>Filters</p>
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

        {/* Filter Sections */}
        {[
          { label: "Category", key: "category", options: categories },
          { label: "Profession", key: "profession", options: professions },
          { label: "Job Type", key: "jobType", options: jobtypes },
        ].map(({ label, key, options }) => (
          <div key={label} className="mb-6">
            <Button
              onClick={() => toggleDropdown(label)}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <span className="font-medium">{label}</span>
              {openDropdown === label ? <UpOutlined /> : <DownOutlined />}
            </Button>

            {openDropdown === label && (
              <div className="mt-2 border border-gray-200 bg-white rounded-lg shadow-sm max-h-60 overflow-auto">
                {options.map((option: string) => {
                  const isSelected = filters[key as keyof Filters] === option;
                  return (
                    <div
                      key={option}
                      onClick={() => applyFilter(key as keyof Filters, option)}
                      className={`px-4 py-3 cursor-pointer hover:bg-primary/10 transition-colors ${
                        isSelected
                          ? "bg-primary/40 text-primary font-medium"
                          : "text-black"
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

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="hidden md:flex items-center justify-between mb-6">
          <div className="font-bold text-xl text-primary">
            Available jobs:{" "}
            <span className="text-primary text-2xl font-bold">
              {pagination.totalData}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {filteredJobs.length === 0 ? (
            <div className="flex justify-center items-center col-span-full min-h-[300px]">
              <CustomErrorPage text={`No jobs yet!!`} />
            </div>
          ) : (
            filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
          )}
        </div>

        {filteredJobs.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              current={pagination.currentPage}
              total={pagination.totalData}
              pageSize={10}
              onChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              showSizeChanger={false}
              showQuickJumper
              className="mt-6"
            />
          </div>
        )}
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 bg-opacity-20 z-20 transition-opacity duration-300 ${
          showMobileFilters ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setShowMobileFilters(false)}
      />
    </div>
  );
};

export default AllJobs;
