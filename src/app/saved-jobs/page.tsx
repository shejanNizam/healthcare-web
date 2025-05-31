import CustomErrorPage from "@/components/CustomErrorPage";
import JobCard from "@/components/JobCard";

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

const jobsData: Job[] = [
  {
    _id: "1",
    hospitalName: "AB Hospital",
    title: "Registered nurse - progressive care",
    address: "123 Main St, Cityville",
    deadline: "2025-05-12T23:59:59.000Z",
    category: "Nursing",
    profession: "Nurse",
    jobType: "permanent",
    salary: 50000,
    vacancy: 3,
    startDate: "2025-06-01T00:00:00.000Z",
    hoursPerWeek: 40,
    description:
      "<p>We are seeking a compassionate and dedicated nurse to join our healthcare team. The ideal candidate will have excellent clinical and communication skills.</p>",
    summary:
      "<p>Join a team dedicated to providing high-quality patient care in a progressive care unit.</p>",
    responsibilities: [
      "Monitor patient vital signs.",
      "Administer medications as prescribed.",
      "Collaborate with interdisciplinary healthcare team.",
    ],
    requirements: [
      "Valid nursing license.",
      "Minimum 2 years progressive care experience.",
    ],
    benefits: [
      "Health insurance.",
      "Paid time off.",
      "Retirement savings plan.",
    ],
    companyLogo: "/images/ab-hospital-logo.svg",
    createdAt: "2025-04-10T10:00:00.000Z",
    updatedAt: "2025-04-20T12:00:00.000Z",
    totalApply: 5,
  },
  {
    _id: "2",
    hospitalName: "City General Hospital",
    title: "Physician Assistant",
    address: "555 Downtown Ave, Cityville",
    deadline: "2025-05-15T23:59:59.000Z",
    category: "Physician",
    profession: "Physician Assistant",
    jobType: "contract",
    salary: 65000,
    vacancy: 2,
    startDate: "2025-06-15T00:00:00.000Z",
    hoursPerWeek: 35,
    description:
      "<p>Join our team as a Physician Assistant supporting clinical care and patient management.</p>",
    summary:
      "<p>Work alongside experienced physicians in a collaborative environment.</p>",
    responsibilities: [
      "Perform physical exams and diagnose illnesses.",
      "Prescribe medications under physician supervision.",
      "Maintain detailed patient records.",
    ],
    requirements: [
      "Certified Physician Assistant.",
      "3+ years clinical experience preferred.",
    ],
    benefits: [
      "Flexible scheduling.",
      "Competitive pay.",
      "Professional development opportunities.",
    ],
    companyLogo: "/images/city-general-logo.svg",
    createdAt: "2025-04-15T09:00:00.000Z",
    updatedAt: "2025-04-18T11:30:00.000Z",
    totalApply: 8,
  },
  {
    _id: "3",
    hospitalName: "Metro Health Center",
    title: "Emergency Room Nurse",
    address: "789 Elm St, Metropolis",
    deadline: "2025-06-01T23:59:59.000Z",
    category: "Nursing",
    profession: "Nurse",
    jobType: "full-time",
    salary: 62000,
    vacancy: 4,
    startDate: "2025-07-01T00:00:00.000Z",
    hoursPerWeek: 40,
    description:
      "<p>Provide care in a fast-paced ER environment with shift differentials.</p>",
    summary:
      "<p>Be part of an emergency team dedicated to quality patient care.</p>",
    responsibilities: [
      "Provide emergency care.",
      "Respond to critical situations.",
    ],
    requirements: ["Valid nursing license.", "ER experience preferred."],
    benefits: ["Shift differential pay.", "Health benefits."],
    companyLogo: "/images/metro-health-logo.svg",
    createdAt: "2025-04-20T08:00:00.000Z",
    updatedAt: "2025-04-25T10:00:00.000Z",
    totalApply: 3,
  },
  {
    _id: "4",
    hospitalName: "Suburban Medical Center",
    title: "Licensed Practical Nurse",
    address: "321 Oak St, Suburbia",
    deadline: "2025-06-15T23:59:59.000Z",
    category: "Nursing",
    profession: "Licensed Practical Nurse",
    jobType: "part-time",
    salary: 42000,
    vacancy: 2,
    startDate: "2025-07-10T00:00:00.000Z",
    hoursPerWeek: 20,
    description:
      "<p>Support nursing staff in various patient care activities.</p>",
    summary: "<p>Part-time opportunity with flexible hours.</p>",
    responsibilities: ["Assist in patient care.", "Maintain patient records."],
    requirements: ["Valid LPN license.", "Strong communication skills."],
    benefits: ["Flexible scheduling.", "Health benefits."],
    companyLogo: "/images/suburban-medical-logo.svg",
    createdAt: "2025-04-22T09:00:00.000Z",
    updatedAt: "2025-04-26T11:00:00.000Z",
    totalApply: 6,
  },
];

export default function SavedJobs() {
  return (
    <div>
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Desktop header */}
        <div className="text-center mb-6">
          <div className="font-bold text-xl text-primary ">
            Saved jobs:{" "}
            <span className="text-primary text-2xl font-bold">
              {jobsData.length}
            </span>
          </div>
        </div>
        {/* Job cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {jobsData?.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <CustomErrorPage />
            </div>
          ) : (
            jobsData.map((job) => <JobCard key={job._id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
}
