import staffingImage from "@/assets/tab-image/two.png";
import techImage from "@/assets/tab-image/three.png";
import workforceImage from "@/assets/tab-image/one.png";
import BannerForService from "@/components/BannerForService";
import { Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Client Services | CENM Healthcare",
  description:
    "Learn about our mission to provide top-tier nursing staff in Southern California.",
};

export default function ClientServices() {
  const items = [
    {
      key: "1",
      label: <p className="text-2xl sm:text-3xl">Integrated Technology</p>,
      children: (
        <div className="flex justify-center">
          <Image
            src={workforceImage}
            alt="Integrated Technology"
            width={1000}
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>
      ),
    },
    {
      key: "2",
      label: <p className="text-2xl sm:text-3xl">Workforce Management</p>,
      children: (
        <div className="flex justify-center">
          <Image
            src={staffingImage}
            alt="Workforce Management"
            width={1000}
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>
      ),
    },
    {
      key: "3",
      label: <p className="text-2xl sm:text-3xl">Comprehensive Staffing</p>,
      children: (
        <div className="flex justify-center">
          <Image
            src={techImage}
            alt="Comprehensive Staffing"
            width={1000}
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <BannerForService />

      <div className="text-center w-full sm:w-[80%] md:w-[60%] mx-auto my-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
          Empowering the Future of Care
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          The premier talent partner and solutions provider in healthcare,
          leveraging integrated technologies to drive efficient, quality care
          for patients in your community.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <Tabs
          defaultActiveKey="1"
          items={items}
          tabPosition="top"
          className="custom-tabs text-center"
          centered
        />
      </div>

      <div className="text-center my-8">
        <Link href="/contact">
          <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-2 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            Learn More
          </button>
        </Link>
      </div>
    </>
  );
}
