// app/page.tsx
import AppliedProcess from "@/components/AppliedProcess";
import Banner from "@/components/Banner";
import BannerForServices from "@/components/BannerForServices";
import FeatureJobs from "@/components/FeatureJobs";
import StructuredData from "@/components/StructuredData";

// export const metadata = {
//   title: "Home | CENM Healthcare",
//   description:
//     "Learn about our mission to provide top-tier nursing staff in Southern California.",
// };

export const metadata = {
  title:
    "Trusted Nurse Staffing Agency in Southern California | CENM Healthcare",
  description:
    "CENM Healthcare provides top-tier nurse staffing solutions for hospitals, SNFs & clinics across Southern California. Find reliable RNs, LVNs & CNAs today.",
  keywords: [
    "nurse staffing agency",
    "healthcare staffing California",
    "travel nurse agency",
    "CNA staffing",
    "LVN staffing",
    "Southern California nurse staffing",
    "hospital staffing solutions",
    "skilled nursing facility staffing",
    "per diem nurses",
    "nurse staffing services",
  ],
  alternates: {
    canonical: "https://cenmhealthcare.com",
  },
};

<StructuredData
  data={{
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "CENM Healthcare",
    url: "https://cenmhealthcare.com",
    logo: "https://api.cenmhealthcare.com/images/12b2a2a6-1518-4e20-a3df-80d78b3f8277.svg",
    description:
      "Trusted nurse staffing agency providing healthcare professionals to Southern California facilities",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Southern California",
      addressRegion: "CA",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Staffing Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Nursing Staff",
          itemListElement: [
            { "@type": "Offer", name: "Registered Nurses (RNs)" },
            { "@type": "Offer", name: "Licensed Vocational Nurses (LVNs)" },
            { "@type": "Offer", name: "Certified Nursing Assistants (CNAs)" },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Allied Health Professionals",
          itemListElement: [
            { "@type": "Offer", name: "Medical Assistants" },
            { "@type": "Offer", name: "Phlebotomists" },
            { "@type": "Offer", name: "Respiratory Therapists" },
          ],
        },
      ],
    },
  }}
/>;

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="">
        <Banner />
        <FeatureJobs />
        <BannerForServices />
        <AppliedProcess />
      </main>
    </div>
  );
}
