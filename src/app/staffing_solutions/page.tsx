import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import FAQSection from "@/components/FAQSection";
import GuaranteesDescription from "@/components/GuaranteesDescription";
import IntBanner from "@/components/IntBanner";
import ServiceSuccessDescription from "@/components/ServiceSuccessDescription";
import SpecialityDescription from "@/components/SpecialityDescription";
import StandsDescription from "@/components/StandsDescription";
import { getStuffData } from "@/utils/getStuffData";
import { Metadata } from "next";
import Link from "next/link"; // Import Link for navigation
import Contact from "../contact/page";

// const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

export async function generateMetadata(): Promise<Metadata> {
  const stuffDetails = await getStuffData();
  const singleStuff = await stuffDetails[0];
  // console.log(singleStuff);

  if (!singleStuff) {
    return {
      title: "Staff Not Found",
      description: "The requested stuff post could not be found.",
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

const CONTACT_SECTION_ID = "contact-us-section";

export default async function StaffingSolutions() {
  const stuffDetails = await getStuffData();
  // console.log(stuffDetails);

  if (!stuffDetails || stuffDetails.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Data not available
          </h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  const singleStuffDetails = stuffDetails[0];
  const FAQ = stuffDetails && singleStuffDetails ? singleStuffDetails?.FAQ : [];
  const faqData = FAQ.length > 0 ? FAQ : [];
  // console.log(singleStuffDetails);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <IntBanner
        type={singleStuffDetails?.type}
        title={singleStuffDetails?.bannerTitle}
        description={singleStuffDetails?.bannerSubTitle}
        CONTACT_SECTION_ID={CONTACT_SECTION_ID}
      />

      {/* Why C.E.N.M. Stands Apart / Why C.E.N.M. Leads in Healthcare Workforce Management */}
      <StandsDescription
        type={singleStuffDetails?.type}
        standsDescription={singleStuffDetails?.standsDescription}
      />

      {/* Our Staffing Specialties / SaaS-Based Automation Solutions for Healthcare Compliance */}
      <SpecialityDescription
        type={singleStuffDetails?.type}
        specialityDescription={singleStuffDetails?.specialityDescription}
      />

      {/* Button 1: Scrolls to Contact */}
      <div className="text-center my-8 bg-primary py-12">
        <Link href={`#${CONTACT_SECTION_ID}`} className="w-fit mx-auto block">
          <CustomButton text="Request Your Personalized Nursing Staffing Solution" />
        </Link>
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
      {/* Button 2: Scrolls to Contact */}
      <div className="my-12 bg-primary">
        <CustomHeading
          text={
            <span className="text-white mt-12">
              {" "}
              Ready to Elevate Your Care Team?{" "}
            </span>
          }
        />
        <div className="w-fit mx-auto pb-12">
          <Link href={`#${CONTACT_SECTION_ID}`} className="block">
            <CustomButton text="Request Your Personalized Nursing Staffing Solution" />
          </Link>
        </div>
      </div>

      {/* faqs */}
      <FAQSection faqData={faqData} />

      {/* contact us */}
      {/* Add the ID to the container of the Contact component */}
      <div id={CONTACT_SECTION_ID}>
        <Contact />
      </div>
    </div>
  );
}
