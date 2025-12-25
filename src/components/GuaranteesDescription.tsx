// import Image from "next/image";
// import image from "../assets/banner/apply_int_img.png";
import CustomHeading from "./CustomHeading";

interface GuaranteesDescriptionProps {
  type?: string;
  guaranteesDescription: string[];
}

export default function GuaranteesDescription({
  type,
  guaranteesDescription,
}: GuaranteesDescriptionProps) {
  return (
    <div>
      <CustomHeading
        text={
          type === "statting_solutions"
            ? "Outcome-Based Guarantees"
            : "Predictive Staffing Healthcare Guarantees Results"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto px-4">
        {guaranteesDescription?.map((item: string, index: number) => (
          <div
            key={index}
            className="border border-gray-200 shadow-sm rounded-lg p-4 flex justify-center items-center gap-4"
          >
            {/* <Image
              className="rounded-full w-12 h-12"
              src={image}
              alt="stants_image"
            /> */}
            <div
              className="no-tailwind md:text-lg opacity-90"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
