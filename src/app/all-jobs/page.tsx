// export default function AllJobs() {
//   return (
//     <div>
//       <h3>AllJobs</h3>
//     </div>
//   );
// }

"use client";

import {
  ClockCircleOutlined,
  DownOutlined,
  FilterOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, Card, Space, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";

const { Text, Paragraph } = Typography;
// const { Option } = Select;

// Define TypeScript interfaces
interface Job {
  id: number;
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

// Sample job data
const jobsData: Job[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

// Define filter categories
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

const AllJobs: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    profession: null,
    jobType: null,
  });
  const [availableJobs, setAvailableJobs] = useState<Job[]>(jobsData);

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Apply filter when option selected
  const applyFilter = (category: string, value: string) => {
    const newFilters = { ...filters };

    if (category === "Profession") {
      newFilters.profession = value;
    } else if (category === "Job type") {
      newFilters.jobType = value;
    }

    setFilters(newFilters);
    setOpenDropdown(null);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      profession: null,
      jobType: null,
    });
  };

  // Filter jobs based on selected filters
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Left sidebar - Filters */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        {/* Filter dropdowns */}
        {Object.keys(filterCategories).map((category) => (
          <div key={category} className="mb-4">
            <Button
              onClick={() => toggleDropdown(category)}
              className="w-full flex justify-between items-center"
              style={{ textAlign: "left", height: "auto", padding: "8px 12px" }}
            >
              <span>{category}</span>
              {openDropdown === category ? <UpOutlined /> : <DownOutlined />}
            </Button>

            {openDropdown === category && (
              <div className="mt-1 border border-gray-200 bg-white">
                {filterCategories[
                  category as keyof typeof filterCategories
                ].map((option) => (
                  <div
                    key={option}
                    onClick={() => applyFilter(category, option)}
                    className={`p-2 cursor-pointer hover:bg-blue-50 ${
                      (category === "Profession" &&
                        filters.profession === option) ||
                      (category === "Job type" && filters.jobType === option)
                        ? "bg-blue-100"
                        : ""
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

      {/* Right content - Jobs listing */}
      <div className="w-3/4 p-6">
        {/* Header with filter info and clear button */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FilterOutlined className="mr-2 text-gray-500" />
            <Text className="mr-2 text-gray-600">Filters</Text>
            {(filters.profession || filters.jobType) && (
              <Button
                type="link"
                onClick={clearAllFilters}
                className="text-red-500 p-0"
                style={{ height: "auto" }}
              >
                Clear all
              </Button>
            )}
          </div>
          <div className="font-medium">
            Available jobs :{" "}
            <span className="text-blue-600">{availableJobs.length}</span>
          </div>
        </div>

        {/* Job cards */}
        {availableJobs.map((job) => (
          <Card
            key={job.id}
            className="mb-4 shadow-sm"
            styles={{ body: { padding: "16px" } }}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 p-2 rounded-md">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="2"
                      y="14"
                      width="20"
                      height="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
              </div>

              <div className="flex-grow">
                <Text strong className="text-primary">
                  {job.hospital}
                </Text>
                <div className="mt-1">
                  <Text className="text-primary">{job.title}</Text>
                </div>
                <Paragraph className="text-primary mt-2">
                  {job.description}
                </Paragraph>

                <div className="flex items-center justify-between text-sm mt-4">
                  <Space size="large">
                    <div>
                      <Text type="secondary">Monthly : </Text>
                      <Text>{job.salary}</Text>
                    </div>

                    <div className="flex items-center">
                      <ClockCircleOutlined className="mr-1 text-gray-500" />
                      <Text type="secondary">Deadline: </Text>
                      <Text className="ml-1">{job.deadline}</Text>
                    </div>
                  </Space>

                  <Tag color="blue">{job.type}</Tag>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
