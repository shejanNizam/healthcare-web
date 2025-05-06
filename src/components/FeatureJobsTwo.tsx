import { Button, Card } from "antd";
import Link from "next/link";
import { BiBookmark } from "react-icons/bi"; // Bookmark icon
import {
  FaBriefcaseMedical,
  FaClinicMedical,
  FaHospital,
} from "react-icons/fa"; // Example hospital icons

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
  return (
    <div className="mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto ">
        {featuredJobs.map((job) => (
          <Card
            key={job.id}
            className="shadow-lg hover:shadow-xl transition-shadow relative w-full mx-auto "
          >
            <button className="cursor-pointer absolute top-2 right-2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-100">
              <BiBookmark className="text-xl text-gray-600" />
            </button>

            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
              {job.logo} {job.jobTitle}
            </h3>
            <p className="text-gray-600 mb-2">
              {job.hospitalName} • {job.location}
            </p>
            <p className="text-gray-600 mb-2">Salary: {job.salaryRange}</p>

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
          <Button size="large">View All Jobs</Button>
        </Link>
      </div>
    </div>
  );
}
