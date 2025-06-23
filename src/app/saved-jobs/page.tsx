"use client";

import CustomErrorPage from "@/components/CustomErrorPage";
import JobCard from "@/components/JobCard";
import { useSavedJobs } from "@/context/SavedJobsContext";

export default function SavedJobs() {
  const { savedJobs } = useSavedJobs();

  return (
    <div className="py-10 container mx-auto">
      <h2 className="text-xl font-bold text-primary mb-6 px-2">
        Saved jobs: <span className="text-2xl">{savedJobs.length}</span>
      </h2>
      <div className="px-4 md:px-6 lg:px-8">
        {savedJobs.length === 0 ? (
          <div className="bg-white rounded-lg  p-8 w-full flex flex-col items-center justify-center">
            <div className="flex justify-center items-center h-80 w-80">
              <CustomErrorPage />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
