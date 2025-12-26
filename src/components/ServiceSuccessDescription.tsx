import CustomHeading from "./CustomHeading";

interface ServiceSuccessDescriptionProps {
  type?: string;
  serviceSuccessDescription: string[];
}

export default function ServiceSuccessDescription({
  type,
  serviceSuccessDescription,
}: ServiceSuccessDescriptionProps) {
  return (
    <div>
      <CustomHeading
        text={
          type === "statting_solutions"
            ? "Service Area & Compliance Standards"
            : "Success Story: Healthcare Staffing Optimization in Action"
        }
      />

      <div className="max-w-7xl mx-auto px-4">
        {serviceSuccessDescription?.map((item: string, index: number) => (
          <div key={index}>
            <div
              className="text-center md:text-md opacity-90 px-4"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
