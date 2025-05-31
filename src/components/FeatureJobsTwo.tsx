import Link from "next/link";
import CustomErrorPage from "./CustomErrorPage";
import JobCard from "./JobCard";

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
];

export default function FeatureJobsTwo() {
  return (
    <div>
      <div className="flex-1 p-4 xl:px-12">
        {/* Job cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobsData?.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <CustomErrorPage />
            </div>
          ) : (
            jobsData.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
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
