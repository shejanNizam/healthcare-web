import CustomHeading from "./CustomHeading";

interface PatientCareDescriptionProps {
  type?: string;
  patientCareDescription: string[];
}

export default function PatientCareDescription({
  patientCareDescription,
}: PatientCareDescriptionProps) {
  return (
    <div>
      <CustomHeading text="Automated Employee Scheduling for Healthcare to Improve Patient Care" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {patientCareDescription?.map((item: string, index: number) => (
          <div
            key={index}
            className=" border border-gray-200 shadow-sm rounded-lg p-4"
          >
            <div
              className="md:text-md opacity-90 px-4"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
