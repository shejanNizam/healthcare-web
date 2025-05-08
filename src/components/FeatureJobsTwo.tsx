import { Button, Card } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  FaBriefcaseMedical,
  FaClinicMedical,
  FaHospital,
} from "react-icons/fa"; // Example hospital icons
import { FiBookmark } from "react-icons/fi";

const featuredJobs = [
  {
    id: 1,
    jobTitle: "Registered Nurse",
    salaryRange: "$20,000 - $25,000",
    logo: <FaHospital className="text-4xl text-blue-600" />, // React icon used as logo
    hospitalName: "AB Hospital",
    location: "New York, USA",
    jobType: "Full-time",
    totalApplicants: 10,
    description: "We are looking for a skilled nurse to join our team...",
  },
  {
    id: 2,
    jobTitle: "Medical Interpreter",
    salaryRange: "$18,000 - $22,000",
    logo: <FaClinicMedical className="text-4xl text-green-600" />, // React icon used as logo
    hospitalName: "MedCare Services",
    location: "Remote",
    jobType: "Part-time",
    totalApplicants: 5,
    description: "Spanish/English medical interpreter needed...",
  },
  {
    id: 3,
    jobTitle: "Healthcare Administrator",
    salaryRange: "$80,000 - $100,000",
    logo: <FaBriefcaseMedical className="text-4xl text-purple-600" />, // React icon used as logo
    hospitalName: "HealthCare Inc.",
    location: "Chicago, IL",
    jobType: "Full-time",
    totalApplicants: 50,
    description: "Lead the administration of healthcare services...",
  },
  {
    id: 4,
    jobTitle: "Registered Nurse",
    salaryRange: "$20,000 - $25,000",
    logo: <FaHospital className="text-4xl text-blue-600" />, // React icon used as logo
    hospitalName: "AB Hospital",
    location: "New York, USA",
    jobType: "Full-time",
    totalApplicants: 10,
    description: "We are looking for a skilled nurse to join our team...",
  },
];

export default function FeatureJobsTwo() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mx-auto ">
        {featuredJobs.map((job) => (
          <Card
            key={job.id}
            className="bg-red-500 shadow-lg hover:shadow-xl transition-shadow relative w-full mx-auto "
          >
            <button
              onClick={toggleBookmark}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10 cursor-pointer"
              aria-label="Bookmark job"
            >
              <FiBookmark
                className={`w-5 h-5 ${
                  isBookmarked ? "text-primary fill-primary" : "text-gray-400"
                }`}
              />
            </button>

            <h3 className="text-xl font-semibold ">
              {job.jobTitle}
              <p className="text-gray-600 text-sm">Salary: {job.salaryRange}</p>
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <p className=" flex gap-2 items-center text-2xl">{job.logo}</p>
              <div>
                <p className="font-semibold text-xl">{job.hospitalName}</p>
                <p className="text-sm text-gray-400">{job.location}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500">
                Applicants: {job.totalApplicants}+{" "}
              </p>
            </div>

            <div className="mt-4 flex justify-around">
              <Link href={`/jobs/${job.id}`}>
                <Button type="primary" ghost>
                  View Details
                </Button>
              </Link>
              <Link href={`/apply-jobs?jobId=${job.id}`}>
                <Button type="primary">Apply Now</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/all-jobs">
          <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}
