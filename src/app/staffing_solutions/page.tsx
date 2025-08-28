import Image from "next/image";
import {
  FaBrain,
  FaHeart,
  FaPills,
  FaUserCheck,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";

import FAQSection from "@/components/FAQSection";
import IntBanner from "@/components/IntBanner";
import { getStuffData } from "@/utils/getStuffData";
import { Metadata } from "next";
import chooseUsImage from "../../assets/staff/choose_us.svg";
import faqImage from "../../assets/staff/faq.svg";
import subBannerImage from "../../assets/staff/sub_banner_img.svg";

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

const medicalServices = [
  {
    id: 1,
    icon: <FaUserMd className="w-8 h-8 text-blue-600" />,
    title: "Specialty",
    description:
      "Specialized medical professionals for critical care, emergency medicine, and specialized departments.",
    bgColor: "bg-blue-50",
    hoverBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: <FaUserCheck className="w-8 h-8 text-blue-600" />,
    title: "General Physicians",
    description:
      "Primary care physicians and general practitioners for routine care and comprehensive patient management.",
    bgColor: "bg-blue-50",
    hoverBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    icon: <FaBrain className="w-8 h-8 text-blue-600" />,
    title: "Neuro Surgery",
    description:
      "Highly skilled neurosurgeons and specialized surgical staff for complex neurological procedures.",
    bgColor: "bg-blue-50",
    hoverBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    icon: <FaHeart className="w-8 h-8 text-blue-600" />,
    title: "Cardiology",
    description:
      "Cardiovascular specialists and cardiac care teams for heart-related medical conditions and procedures.",
    bgColor: "bg-blue-50",
    hoverBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 5,
    icon: <FaPills className="w-8 h-8 text-blue-600" />,
    title: "Pharmacy",
    description:
      "Licensed pharmacists and pharmacy technicians for medication management and patient counseling.",
    bgColor: "bg-blue-50",
    hoverBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 6,
    icon: <FaUsers className="w-8 h-8 text-blue-600" />,
    title: "Trained Staff",
    description:
      "Certified nursing assistants, medical assistants, and support staff for comprehensive patient care.",
    bgColor: "bg-blue-50",
    hoverBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <IntBanner
        title={singleStuffDetails?.bannerHeading}
        description={singleStuffDetails?.tagline}
      />

      {/* sub banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <Image src={subBannerImage} alt="sub_banner_image" />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {singleStuffDetails?.title}
            </h2>
            <div className="space-y-6">
              <p>{singleStuffDetails?.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialty Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Specialty
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {medicalServices.map((service) => (
              <div
                key={service.id}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 border border-gray-100 rounded-lg shadow-sm p-4 hover:bg-primary hover:text-white"
              >
                <div
                  className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${service.hoverBgColor}`}
                >
                  {service.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 text-gray-800 group-hover:text-white`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <Image src={chooseUsImage} alt="choose_us_image" />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Why choose us?
            </h2>
            <div className="space-y-6">
              <p>{singleStuffDetails?.why_choose}</p>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQSection faqData={faqData} faqImage={faqImage} />
    </div>
  );
}
