// export default function FeatureJobs() {
//   return (
//     <div>
//       <h3>FeatureJobs</h3>
//     </div>
//   );
// }

// components/FeatureJobs.tsx
import { Button, Card, Carousel } from "antd";
import Link from "next/link";

const categories = [
  "Nursing",
  "Allied",
  "Advance practice",
  "Leadership",
  "Language interpreters",
  "Physicians",
  "Technicians",
  "Administrative",
];

const featuredJobs = [
  {
    id: 1,
    title: "Registered Nurse",
    location: "New York, NY",
    type: "Full-time",
    description: "We are looking for a skilled nurse to join our team...",
  },
  {
    id: 2,
    title: "Medical Interpreter",
    location: "Remote",
    type: "Part-time",
    description: "Spanish/English medical interpreter needed...",
  },
  {
    id: 3,
    title: "Healthcare Administrator",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Manage operations for our healthcare facility...",
  },
];

export default function FeatureJobs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Jobs</h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Browse Categories</h3>
        <Carousel
          dots={{ className: "custom-dots" }}
          slidesToShow={5}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
          ]}
        >
          {categories.map((category, index) => (
            <div key={index} className="px-2">
              <Link href={`/all-jobs?category=${category}`}>
                <div className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-primary-light hover:text-white cursor-pointer transition-colors">
                  {category}
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job) => (
          <Card
            key={job.id}
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600 mb-2">
              {job.location} • {job.type}
            </p>
            <p className="mb-4">{job.description.substring(0, 100)}...</p>
            <div className="flex space-x-2">
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
