export default function FeatureJobs() {
  return (
    <div>
      <h3>FeatureJobs</h3>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// const categories = [
//   { name: "Nursing", logo: "/nursing-logo.png" },
//   { name: "Physician", logo: "/physician-logo.png" },
//   { name: "Dentistry", logo: "/dentistry-logo.png" },
//   { name: "Allied", logo: "/allied-logo.png" },
// ];

// const jobs = [
//   {
//     id: 1,
//     title: "Registered Nurse",
//     location: "AB Hospital",
//     salary: "$1500",
//     deadline: "12 May 2025",
//   },
//   {
//     id: 2,
//     title: "Physician Assistant",
//     location: "XYZ Hospital",
//     salary: "$2000",
//     deadline: "15 May 2025",
//   },
// ];

// export default function FeatureJobs() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-semibold mb-8">Featured Jobs</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
//           {categories.map((category) => (
//             <Link
//               key={category.name}
//               href={`/all-jobs?category=${category.name}`}
//               className="text-center p-4 bg-blue-200 rounded-lg hover:bg-blue-300"
//             >
//               <Image
//                 width={100}
//                 height={100}
//                 src={category.logo}
//                 alt={category.name}
//                 className="mx-auto mb-4"
//               />
//               <h3>{category.name}</h3>
//             </Link>
//           ))}
//         </div>
//         <div>
//           {jobs.map((job) => (
//             <div key={job.id} className="border p-4 mb-4 rounded-lg">
//               <h4 className="text-xl font-semibold">{job.title}</h4>
//               <p>{job.location}</p>
//               <p>Salary: {job.salary}</p>
//               <p>Deadline: {job.deadline}</p>
//               <div className="flex justify-between mt-4">
//                 <Link href={`/job-details/${job.id}`} className="text-blue-600">
//                   View Details
//                 </Link>
//                 <button className="text-blue-600">Bookmark</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Link href="/all-jobs" className="text-blue-600">
//           View All Jobs
//         </Link>
//       </div>
//     </section>
//   );
// }
