import { Button, Card } from "antd";
import Link from "next/link";

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

export default function FeatureJobsTwo() {
  return (
    <div>
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
