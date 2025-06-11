// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";

// type SavedJobsContextType = {
//   savedJobIds: string[];
//   addJob: (id: string) => void;
//   removeJob: (id: string) => void;
//   isJobSaved: (id: string) => boolean;
// };

// const SavedJobsContext = createContext<SavedJobsContextType | undefined>(
//   undefined
// );

// export const SavedJobsProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [savedJobIds, setSavedJobIds] = useState<string[]>([]);

//   useEffect(() => {
//     const saved = localStorage.getItem("savedJobs");
//     if (saved) {
//       setSavedJobIds(JSON.parse(saved));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("savedJobs", JSON.stringify(savedJobIds));
//   }, [savedJobIds]);

//   const addJob = (id: string) => {
//     setSavedJobIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
//   };

//   const removeJob = (id: string) => {
//     setSavedJobIds((prev) => prev.filter((jobId) => jobId !== id));
//   };

//   const isJobSaved = (id: string) => savedJobIds.includes(id);

//   return (
//     <SavedJobsContext.Provider
//       value={{ savedJobIds, addJob, removeJob, isJobSaved }}
//     >
//       {children}
//     </SavedJobsContext.Provider>
//   );
// };

// export const useSavedJobs = () => {
//   const context = useContext(SavedJobsContext);
//   if (!context)
//     throw new Error("useSavedJobs must be used within a SavedJobsProvider");
//   return context;
// };

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface Job {
  companyLogo?: string;
  _id: string;
  hospitalName: string;
  title: string;
  address: string;
  deadline: string;
  description: string;
  salary: number;
  jobType: string;
}

type SavedJobsContextType = {
  savedJobs: Job[];
  addJob: (job: Job) => void;
  removeJob: (id: string) => void;
  isJobSaved: (id: string) => boolean;
};

const SavedJobsContext = createContext<SavedJobsContextType | undefined>(
  undefined
);

export const SavedJobsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  // Load saved jobs from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("savedJobs");
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, []);

  // Update localStorage whenever savedJobs change
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  // Add job only if not already saved (by _id)
  const addJob = (job: Job) => {
    setSavedJobs((prev) => {
      if (prev.find((j) => j._id === job._id)) return prev;
      return [...prev, job];
    });
  };

  // Remove job by _id
  const removeJob = (id: string) => {
    setSavedJobs((prev) => prev.filter((job) => job._id !== id));
  };

  const isJobSaved = (id: string) => savedJobs.some((job) => job._id === id);

  return (
    <SavedJobsContext.Provider
      value={{ savedJobs, addJob, removeJob, isJobSaved }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
};

export const useSavedJobs = () => {
  const context = useContext(SavedJobsContext);
  if (!context)
    throw new Error("useSavedJobs must be used within a SavedJobsProvider");
  return context;
};
