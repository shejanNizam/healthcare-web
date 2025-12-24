import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import FAQSection from "@/components/FAQSection";
import GuaranteesDescription from "@/components/GuaranteesDescription";
import IntBanner from "@/components/IntBanner";
import PatientCareDescription from "@/components/PatientCareDescription";
import ServiceSuccessDescription from "@/components/ServiceSuccessDescription";
import SpecialityDescription from "@/components/SpecialityDescription";
import StandsDescription from "@/components/StandsDescription";
import { Metadata } from "next";
import Link from "next/link";
import Contact from "../contact/page";
import { getStuffData } from "@/services";

// const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

const CONTACT_SECTION_ID = "contact-us-section";

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const stuffDetails = await getStuffData();
  const singleStuff = await stuffDetails[1];
  // console.log(singleStuff);

  if (!singleStuff) {
    return {
      title: "Workeforce Not Found",
      description: "The requested workforce post could not be found.",
    };
  }

  return {
    title: singleStuff.pageTitle || singleStuff.title,
    description: singleStuff.meteDescription || singleStuff.description,
    openGraph: {
      title: singleStuff.pageTitle || singleStuff.title,
      description: singleStuff.meteDescription || singleStuff.description,
      // images: [imageBaseURL + singleStuff.banner],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: singleStuff.pageTitle || singleStuff.title,
      description: singleStuff.meteDescription || singleStuff.description,
      // images: [imageBaseURL + singleStuff.banner],
    },
  };
}

export default async function WorkforceManagement() {
  const stuffDetails = await getStuffData();

  const singleStuffDetails = await stuffDetails[1];
  // console.log(singleStuffDetails);

  const FAQ = stuffDetails && singleStuffDetails ? singleStuffDetails?.FAQ : [];
  const faqData = FAQ.length > 0 ? FAQ : [];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <IntBanner
          type={singleStuffDetails?.type}
          title={singleStuffDetails?.bannerTitle}
          description={singleStuffDetails?.bannerSubTitle}
          CONTACT_SECTION_ID={CONTACT_SECTION_ID}
        />

        {/*  Why C.E.N.M. Stands Apart / Why C.E.N.M. Leads in Healthcare Workforce Management */}
        <StandsDescription
          type={singleStuffDetails?.type}
          standsDescription={singleStuffDetails?.standsDescription}
        />

        {/* Our Staffing Specialties / SaaS-Based Automation Solutions for Healthcare Compliance */}
        <SpecialityDescription
          type={singleStuffDetails?.type}
          specialityDescription={singleStuffDetails?.specialityDescription}
        />

        {/* Automated Employee Scheduling for Healthcare to Improve Patient Care */}
        <PatientCareDescription
          patientCareDescription={singleStuffDetails?.patientCareDescription}
        />

        <div className="text-center my-8 bg-primary py-12">
          {/* <Link href={`/contact`}> */}
          <Link href={`#${CONTACT_SECTION_ID}`}>
            <div className="w-fit mx-auto">
              <CustomButton text="Schedule Your Workforce Consultation" />
            </div>
          </Link>
          {/* </Link> */}
        </div>

        {/* Outcome-Based Guarantees / Predictive Staffing Healthcare Guarantees Results */}
        <GuaranteesDescription
          type={singleStuffDetails?.type}
          guaranteesDescription={singleStuffDetails?.guaranteesDescription}
        />

        {/* Service Area & Compliance Standards / Success Story: Healthcare Staffing Optimization in Action */}
        <ServiceSuccessDescription
          type={singleStuffDetails?.type}
          serviceSuccessDescription={
            singleStuffDetails?.serviceSuccessDescription
          }
        />

        {/* Ready to Elevate Your Care Team? / Ready to Transform Your Workforce? */}
        <div className="my-12 bg-primary">
          <CustomHeading
            text={
              <span className="text-white mt-12">
                {" "}
                Ready to Transform Your Workforce?{" "}
              </span>
            }
          />
          <Link href={`#${CONTACT_SECTION_ID}`} className="block text-center">
            <div className="w-fit mx-auto pb-12">
              <CustomButton text="Schedule Your Workforce Consultation Today" />
            </div>
          </Link>
        </div>

        {/* FAQ Section - Now using Client Component */}
        <FAQSection faqData={faqData} />

        {/* contact us */}
        <div id={CONTACT_SECTION_ID}>
          <Contact />
        </div>
      </div>
    </>
  );
}
