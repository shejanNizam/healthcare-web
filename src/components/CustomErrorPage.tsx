import Image from "next/image";
import error_image from "../assets/error/error_image.png";

export default function CustomErrorPage() {
  return (
    <div>
      <Image
        className="w-full h-auto mx-auto p-4 "
        src={error_image}
        alt="error_image"
      />
    </div>
  );
}
