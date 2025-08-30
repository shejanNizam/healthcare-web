/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from "next/script";

export default function StructuredData({ data }: { data: any }) {
  return (
    <Script
      id="structured-data"
      className="no-tailwind"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
