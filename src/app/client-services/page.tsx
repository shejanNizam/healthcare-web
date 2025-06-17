import staffingImage from "@/assets/tab-image/total-talent-management.png";
import techImage from "@/assets/tab-image/workforce-staffing.png";
import workforceImage from "@/assets/tab-image/workforce-technology.png";
import { Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function ClientServices() {
  const items = [
    {
      key: "1",
      label: <p className="text-3xl">Integrated Technology</p>,
      children: (
        <div className="flex justify-center">
          <Image
            src={workforceImage}
            alt="Integrated Technology"
            width={1000}
            height={400}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      key: "2",
      label: <p className="text-3xl">Workforce Management</p>,
      children: (
        <div className="flex justify-center">
          <Image
            src={staffingImage}
            alt="Workforce Management"
            width={1000}
            height={400}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      key: "3",
      label: <p className="text-3xl">Comprehensive Staffing</p>,
      children: (
        <div className="flex justify-center">
          <Image
            src={techImage}
            alt="Comprehensive Staffing"
            width={1000}
            height={400}
            className="object-contain"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 ">
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
          <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            Learn More {"->"}
          </button>
        </Link>
      </div>
    </>
  );
}
