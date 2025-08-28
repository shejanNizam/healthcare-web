import Image from "next/image";

import FAQSection from "@/components/FAQSection";
import IntBanner from "@/components/IntBanner";
import { getStuffData } from "@/utils/getStuffData";
import { Metadata } from "next";
import faqImage from "../../assets/staff/faq.svg";
import subBannerImage from "../../assets/staff/sub_banner_img.svg";
import chooseUsImage from "../../assets/staff/why_choose_two.svg";

// const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface TWeDo {
  _id: string;
  type: string;
}

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

  // console.log(singleStuffDetails);
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

  const singleStuffDetails = await stuffDetails[1];
  const FAQ = stuffDetails && singleStuffDetails ? singleStuffDetails?.FAQ : [];
  const whatWeDo =
    stuffDetails && singleStuffDetails ? singleStuffDetails?.what_we_do : [];
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
            What we do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDo?.map((weDo: TWeDo) => (
              <div
                key={weDo._id}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 border border-gray-100 rounded-lg shadow-sm p-4 hover:bg-primary hover:text-white"
              >
                {/* <div
                  className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${service.hoverBgColor}`}
                >
                  {service.icon}
                </div> */}
                <h3
                  className={`text-xl font-semibold mb-3 text-gray-800 group-hover:text-white`}
                >
                  {weDo.type}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white">
                  We build customizable solutions to address your needs – no
                  matter the challenge. This includes leveraging internal and
                  external resource pool management (IRP and
                  ERP), vendor-neutral solutions, workforce analytics, and
                  managed services.  You’ll have access to a diverse range of
                  specialties and flexible assignment durations, catering to
                  both short-term needs and long-term placements. 
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

      {/* FAQ Section - Now using Client Component */}
      <FAQSection faqData={faqData} faqImage={faqImage} />
    </div>
  );
}
