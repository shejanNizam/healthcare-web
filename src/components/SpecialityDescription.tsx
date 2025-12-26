import CustomHeading from "./CustomHeading";

interface SpecialityDescriptionProps {
  type?: string;
  specialityDescription: string[];
}

export default function SpecialityDescription({
  type,
  specialityDescription,
}: SpecialityDescriptionProps) {
  return (
    <div>
      <CustomHeading
        text={
          type === "statting_solutions"
            ? "Our Staffing Specialties"
            : "SaaS-Based Automation Solutions for Healthcare Compliance"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {specialityDescription?.map((item: string, index: number) => (
          <div
            key={index}
            className=" border border-gray-200 shadow-sm rounded-lg p-4"
          >
            <div
              // className="no-tailwind md:text-lg opacity-90 px-4"
              className="md:text-md opacity-90"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
