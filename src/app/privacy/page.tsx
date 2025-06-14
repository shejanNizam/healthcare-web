"use client";

import IntBanner from "@/components/IntBanner";
import { useGetPrivacyQuery } from "@/redux/features/setting/settingApi";
import { Spin } from "antd";

export default function Privacy() {
  const { data, isLoading } = useGetPrivacyQuery({});
  // console.log(data?.data[0]?.description);

  return (
    <div className=" min-h-screen">
      <IntBanner
        title={" Privacy "}
        description={`Our privacy policy ensures the protection of your personal information. We collect data solely to enhance your experience and improve our services. Your information is never shared with third parties without your consent. We prioritize confidentiality, security, and transparency to maintain your trust while using our platform.`}
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
