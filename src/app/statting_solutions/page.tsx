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
import { BASE_URL } from "@/redux/api/baseApi/baseApi";
import chooseUsImage from "../../assets/staff/choose_us.svg";
import faqImage from "../../assets/staff/faq.svg";
import subBannerImage from "../../assets/staff/sub_banner_img.svg";

async function getStuffData() {
  try {
    const response = await fetch(`${BASE_URL}/staffing/all`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export default async function StaffingSolutions() {
  const stuffDetails = await getStuffData();
  // console.log(stuffDetails);

  const FAQ = stuffDetails && stuffDetails[0] ? stuffDetails[0].FAQ : [];

  const faqData = FAQ.length > 0 ? FAQ : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <IntBanner
        title={"Empowering Healthcare Careers, One Connection at a Time"}
        description={`We are a dedicated platform for treatment-related job opportunities, connecting healthcare providers with skilled professionals like nurses and caregivers. Our mission is to support compassionate care by making it easier to find, apply, and hire for essential healthcare roles across the globe.`}
      />

      {/* sub banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <Image src={subBannerImage} alt="sub_banner_image" />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              A New Solution for a New Healthcare Reality
            </h2>
            <div className="space-y-6">
              <p>
                At Health Carousel, weve adapted to the evolving healthcare
                industry by creating an all-in-one talent management solution.
                We offer a wide range of specialties and flexible assignment
                durations to meet both short and long-term needs. With our
                integrated approach, your requirements shape the staffing
                strategy. Our goal is to deeply understand your challenges,
                allowing us to provide a seamless workforce strategy without
                involving multiple providers. As you work towards stability, we
                can fill the gaps to support your core staff in the interim.
                Well make staffing more effective and cost-efficient.
              </p>
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
            {/* Specialty */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100">
                <FaUserMd className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Specialty
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized medical professionals for critical care, emergency
                medicine, and specialized departments.
              </p>
            </div>

            {/* General Physicians */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700">
                <FaUserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                General Physicians
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Primary care physicians and general practitioners for routine
                care and comprehensive patient management.
              </p>
            </div>

            {/* Neuro Surgery */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100">
                <FaBrain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Neuro Surgery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Highly skilled neurosurgeons and specialized surgical staff for
                complex neurological procedures.
              </p>
            </div>

            {/* Cardiology */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100">
                <FaHeart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cardiology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cardiovascular specialists and cardiac care teams for
                heart-related medical conditions and procedures.
              </p>
            </div>

            {/* Pharmacy */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100">
                <FaPills className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Pharmacy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Licensed pharmacists and pharmacy technicians for medication
                management and patient counseling.
              </p>
            </div>

            {/* Trained Staff */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100">
                <FaUsers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Trained Staff
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Certified nursing assistants, medical assistants, and support
                staff for comprehensive patient care.
              </p>
            </div>
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
              <p>
                At Health Carousel, weve adapted to the evolving healthcare
                industry by creating an all-in-one talent management solution.
                We offer a wide range of specialties and flexible assignment
                durations to meet both short and long-term needs. With our
                integrated approach, your requirements shape the staffing
                strategy. Our goal is to deeply understand your challenges,
                allowing us to provide a seamless workforce strategy without
                involving multiple providers. As you work towards stability, we
                can fill the gaps to support your core staff in the interim.
                Well make staffing more effective and cost-efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using Client Component */}
      <FAQSection faqData={faqData} faqImage={faqImage} />
    </div>
  );
}
