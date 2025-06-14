"use client";

import IntBanner from "@/components/IntBanner";
import { useGetTermsQuery } from "@/redux/features/setting/settingApi";
import { Spin } from "antd";

export default function Terms() {
  const { data, isLoading } = useGetTermsQuery({});
  return (
    <div className=" min-h-screen">
      <IntBanner
        title={" Terms "}
        description={`"By using this website, you agree to comply with our terms and conditions. These include respecting intellectual property rights, maintaining confidentiality, and adhering to appropriate usage. We reserve the right to modify these terms at any time. Users must ensure compliance with all applicable laws while accessing the site."`}
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
