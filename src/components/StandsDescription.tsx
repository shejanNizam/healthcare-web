import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import image from "../assets/banner/apply_int_img.png";
import CustomHeading from "./CustomHeading";

interface StandsDescriptionProps {
  type?: string;
  standsDescription: string[];
}

export default function StandsDescription({
  type,
  standsDescription,
}: StandsDescriptionProps) {
  return (
    <div>
      <CustomHeading
        text={
          type === "statting_solutions"
            ? "Why C.E.N.M. Stands Apart"
            : "Why C.E.N.M. Leads in Healthcare Workforce Management"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto px-4">
        {standsDescription?.map((item: string, index: number) => (
          <div
            key={index}
            className="text-center border border-gray-200 shadow-sm rounded-lg p-4"
          >
            <Image
              className="rounded-full w-12 h-12 mx-auto"
              src={image}
              alt="stants_image"
            />
            <div
              className="no-tailwind md:text-lg opacity-90 text-center px-4"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
