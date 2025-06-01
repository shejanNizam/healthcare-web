// "use client";

// import CustomErrorPage from "@/components/CustomErrorPage";
// import JobCard from "@/components/JobCard";
// import { useSavedJobs } from "@/context/SavedJobsContext";
// import { useGetJobsQuery } from "@/redux/features/jobs/jobsApi";

// // // Example job data, replace with your actual data or API fetch
// // const jobsData: Job[] = [
// //   // your job objects here with at least _id, hospitalName, etc.
// // ];

// export default function SavedJobs() {
//   const { savedJobIds } = useSavedJobs();

//   const { data } = useGetJobsQuery(savedJobIds);

//   const jobsData = data?.data?.allJobs;

//   const savedJobs = jobsData.filter((job) => savedJobIds.includes(job._id));

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold text-primary mb-6">
//         Saved jobs: <span className="text-2xl">{savedJobs.length}</span>
//       </h2>

//       {savedJobs.length === 0 ? (
//         <div className="bg-white rounded-lg shadow-sm p-8 text-center">
//           <CustomErrorPage />
//           <p>No saved jobs found.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {savedJobs.map((job) => (
//             <JobCard key={job._id} job={job} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import CustomErrorPage from "@/components/CustomErrorPage";
import JobCard from "@/components/JobCard";
import { useSavedJobs } from "@/context/SavedJobsContext";

export default function SavedJobs() {
  const { savedJobs } = useSavedJobs();

  return (
    <div className="py-10 container mx-auto">
      <h2 className="text-xl font-bold text-primary mb-6">
        Saved jobs: <span className="text-2xl">{savedJobs.length}</span>
      </h2>
      <div className="">
        {savedJobs.length === 0 ? (
          <div className="bg-white rounded-lg  p-8 w-full flex flex-col items-center justify-center">
            <div className="flex justify-center items-center h-80 w-80">
              <CustomErrorPage />
            </div>
            <p>No saved jobs found.</p>
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
