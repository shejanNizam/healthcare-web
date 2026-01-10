import workforceImage from "@/assets/tab-image/one.png";
import techImage from "@/assets/tab-image/three.png";
import staffingImage from "@/assets/tab-image/two.png";
import BannerForService from "@/components/BannerForService";
import StructuredData from "@/components/StructuredData";
import { Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// export const metadata = {
//   title: "Client Services | CENM Healthcare",
//   description:
//     "Learn about our mission to provide top-tier nursing staff in Southern California.",
// };

export const metadata = {
  title: "Healthcare Staffing Solutions for Hospitals & SNFs | CENM Healthcare",
  description:
    "Comprehensive staffing solutions for healthcare facilities in Southern California. We provide RNs, LVNs, CNAs, and allied health professionals tailored to your needs.",
  keywords: [
    "healthcare staffing solutions",
    "hospital staffing agency",
    "SNF staffing California",
    "nurse staffing services",
    "allied health staffing",
    "per diem staffing",
    "contract nurse staffing",
    "temporary healthcare staffing",
    "medical staffing agency",
    "California healthcare staffing",
  ],
  alternates: {
    canonical: "https://cenmhealthcare.com/client-services",
  },
};

<StructuredData
  data={{
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Healthcare Staffing",
    provider: {
      "@type": "MedicalOrganization",
      name: "CENM Healthcare",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Staffing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Registered Nurse Staffing",
            description:
              "Temporary and permanent placement of RNs for hospitals and healthcare facilities",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LVN/LPN Staffing",
            description:
              "Licensed vocational nurses for skilled nursing facilities and clinics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CNA Staffing",
            description:
              "Certified nursing assistants for daily patient care support",
          },
        },
      ],
    },
  }}
/>;

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
            priority
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
            priority
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
            priority
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <BannerForService />

      {/*  */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-5xl text-primary font-bold text-center mb-8">
            Serving Southern California Healthcare Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Los Angeles",
              "Orange County",
              "San Diego",
              "Riverside",
              "San Bernardino",
              "Ventura",
              "Santa Barbara",
              "Imperial",
            ].map((city) => (
              <div key={city} className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-primary text-lg">{city}</h3>
                <p className="text-sm mt-2">RNs • LVNs • CNAs • Allied Staff</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}

      {/*  */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-5xl text-primary font-bold text-center mb-8">
            We also serve Middle Tennessee.
            <br />
            Locations we are providing services in Middle Tennessee are,
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "CLARKSVILLE",
              "GALLATIN",
              "PARIS",
              "LIVINGSTON",
              "WAVERLY",
              "NASHVILLE",
              "COOKEVILLE",
              "CENTERVILLE",
              "MURFREESBORO",
              "DECATURVILLE",
              "SHELBYVILLE",
              "McMINNVILLE",
              "LAWRENCEBURG",
            ].map((city) => (
              <div key={city} className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-primary text-lg">{city}</h3>
                <p className="text-sm mt-2">RNs • LVNs • CNAs • Allied Staff</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}

      {/*  */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold text-center mb-8">
            Our Healthcare Staffing Specialties
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Acute Care Staffing",
                desc: "RNs for ER, ICU, Med-Surg, OR, and other hospital departments",
                keywords: ["hospital staffing", "acute care nurses"],
              },
              {
                title: "Long-Term Care Staffing",
                desc: "LVNs and CNAs for skilled nursing facilities and rehab centers",
                keywords: ["SNF staffing", "long-term care nurses"],
              },
              {
                title: "Allied Health Staffing",
                desc: "Medical assistants, techs, and therapists for clinics and specialty centers",
                keywords: ["allied health staffing", "medical technicians"],
              },
            ].map((service, i) => (
              <div key={i} className="p-6 border border-primary/20 rounded-lg">
                <h3 className="text-xl text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="mb-4">{service.desc}</p>
                <div className="text-sm text-gray-600">
                  Keywords: {service.keywords.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}

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
        <Link href="/services">
          <button className="bg-[#E7F1F8] mx-auto text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-2 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out flex items-center gap-2">
            Learn More <FaArrowRight />
          </button>
        </Link>
      </div>
    </>
  );
}
