import CustomErrorPage from "@/components/CustomErrorPage";
import JobCard from "@/components/JobCard";

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
  {
    id: "5",
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
    id: "6",
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
            jobsData.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
}
