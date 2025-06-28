import { useGetJobsQuery } from "@/redux/features/jobs/jobsApi";
import Link from "next/link";
import CustomErrorPage from "./CustomErrorPage";
import JobCard from "./JobCard";

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

export default function FeatureJobsTwo() {
  const { data: jobsResponse } = useGetJobsQuery({});

  const jobsData: Job[] = jobsResponse?.data?.allJobs || [];

  return (
    <div>
      <div className="flex-1  xl:px-12">
        {/* Job cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobsData?.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <CustomErrorPage />
            </div>
          ) : (
            jobsData
              .slice(0, 3)
              .map((job) => <JobCard key={job._id} job={job} />)
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
