// export default function StaffingSolutions() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <h3>StaffingSolutions</h3>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaBrain,
  FaChevronDown,
  FaChevronUp,
  FaHeart,
  FaPills,
  FaUserCheck,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";

import IntBanner from "@/components/IntBanner";
import chooseUsImage from "../../assets/staff/choose_us.svg";
import faqImage from "../../assets/staff/faq.svg";
import subBannerImage from "../../assets/staff/sub_banner_img.svg";

export default function StaffingSolutions() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const FAQ = [
    {
      question: "How quickly can you provide staff?",
      ans: "We can typically provide qualified healthcare professionals within 24-48 hours for urgent needs, with comprehensive placement services available.",
      _id: "68ad37dd2fc8672f0478c35b",
    },
    {
      question: "Are all staff fully credentialed?",
      ans: "Yes, all our healthcare professionals are fully licensed, credentialed, and background-checked before placement.",
      _id: "68ad37de2fc8672f0478c35f",
    },
    {
      question: "Do you offer permanent placements?",
      ans: "We offer both temporary and permanent staffing solutions tailored to your facility's specific needs and requirements.",
      _id: "68ad58302fc8672f0478c760",
    },
    {
      question: "What specialties do you cover?",
      ans: "We cover all major healthcare specialties including general medicine, surgery, cardiology, neurology, pharmacy, and support staff.",
      _id: "68ad58302fc8672f0478c761",
    },
    {
      question: "How do you ensure quality?",
      ans: "Through rigorous screening, ongoing performance monitoring, client feedback systems, and continuous professional development programs.",
      _id: "68ad58302fc8672f0478c762",
    },
  ];

  const toggleFAQ = (id: any) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <IntBanner
        title={"Empowering Healthcare Careers, One Connection at a Time"}
        description={`We are a dedicated platform for treatment-related job opportunities, connecting healthcare providers with skilled professionals like nurses and caregivers. Our mission is to support compassionate care by making it easier to find, apply, and hire for essential healthcare roles across the globe.`}
      />

      {/* sub banned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <Image src={subBannerImage} alt="choose_us_image" />
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
                can fill the gaps to support your core staff in the
                interim.We’ll make staffing more effective and cost-efficien
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
                can fill the gaps to support your core staff in the
                interim.We’ll make staffing more effective and cost-efficien
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Common questions, clear answers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="text-center">
              <Image src={faqImage} alt="faq_image" />
            </div>

            <div className="space-y-4">
              {FAQ.map((faq) => (
                <div
                  key={faq._id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFAQ(faq._id)}
                  >
                    <h3 className="font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    {openFAQ === faq._id ? (
                      <FaChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === faq._id && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 pt-3">{faq.ans}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
