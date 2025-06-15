"use client";

import IntBanner from "@/components/IntBanner";
import { useGetAboutQuery } from "@/redux/features/setting/settingApi";
import { Spin } from "antd";

export default function About() {
  const { data, isLoading } = useGetAboutQuery({});

  return (
    <div className=" min-h-screen">
      <IntBanner
        title={" Empowering Healthcare Careers, One Connection at a Time "}
        description={` We are a dedicated platform for treatment-related job opportunities, connecting healthcare providers with skilled professionals like nurses and caregivers. Our mission is to support compassionate care by making it easier to find, apply, and hire for essential healthcare roles across the globe.`}
      />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Render the HTML content from the API */}
        {isLoading ? (
          <div className="h-[60vh] w-full flex justify-center items-center">
            <Spin size="large" />
          </div>
        ) : (
          <div
            className="no-tailwind"
            // dangerouslySetInnerHTML={{ __html: data?.data?.description }}
            dangerouslySetInnerHTML={{ __html: data?.data[0]?.description }}
          />
        )}
      </div>
    </div>
  );
}
