import image from "@/assets/banner/apply_int_img.png";
import IntBanner from "@/components/IntBanner";
import Image from "next/image";
import Link from "next/link";

export default function International() {
  return (
    <div className="min-h-screen">
      <IntBanner />
      {/* Apply now part */}

      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-24 xl:px-40 w-full py-8 ">
        <div className="w-full md:w-[40%] hidden md:block md:ml-24 2xl:ml-48">
          <Image
            width={1000}
            height={1000}
            src={image}
            alt="banner_right_image"
            className="w-full max-w-[500px] h-auto"
            priority
          />
        </div>
        <div className="w-full md:w-[60%]  lg:pl-12">
          <h1 className="text-2xl xl:text-3xl text-primary font-bold">
            Apply Now to Start Your Journey to the USA
          </h1>
          <p className="mt-4 text-base xl:w-[80%]">
            &quot;Apply now to begin your journey toward a rewarding nursing
            career in the USA. Access job opportunities, visa assistance, and
            professional growth in the healthcare system. Start your application
            today!&quot;
          </p>
          <Link href={`/apply-jobs`}>
            <button className="mt-6 px-6 py-2 bg-primary hover:bg-primary/80 text-white rounded cursor-pointer hover:bg-primary-dark transition-colors">
              Apply Now
            </button>
          </Link>
        </div>
      </div>

      {/* Why USA part */}
      <div className="max-w-5xl mx-auto p-6 px-4 md:px-24 xl:px-24 w-full py-8">
        <h2 className="text-center text-2xl xl:text-3xll text-primary font-bold mb-2">
          Why USA
        </h2>
        <p className="text-center text-sm max-w-xl mx-auto mb-8">
          The USA offers competitive salaries, advanced healthcare systems,
          career growth opportunities, and cultural diversity for international
          nurses seeking professional advancement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-primary text-white p-5 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2 text-white">
              Competitive Salaries
            </h3>
            <p className="text-xs leading-relaxed">
              Nurses in the USA earn some of the highest salaries globally,
              offering financial stability, benefits, and career growth
              opportunities across various healthcare settings.
            </p>
          </div>
          <div className="bg-primary text-white p-5 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2 text-white">
              Advanced Healthcare System
            </h3>
            <p className="text-xs leading-relaxed">
              The USA boasts cutting-edge medical technology and world-class
              healthcare institutions, providing nurses with an opportunity to
              work in a highly advanced and supportive environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary text-white p-5 rounded-lg shadow-md md:col-span-2">
            <h3 className="font-semibold mb-2 text-white">
              Cultural Diversity
            </h3>
            <p className="text-xs leading-relaxed">
              Working in the USA allows international nurses to experience a
              diverse cultural environment, gaining exposure to different
              practices, patient care approaches, and enhancing their global
              nursing experience.
            </p>
          </div>
          <div className="bg-primary text-white p-5 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2 text-white">
              Career Growth Opportunities
            </h3>
            <p className="text-xs leading-relaxed">
              With abundant continuing education programs and professional
              development options, nurses in the USA can expand their skills,
              specialize in various fields, and advance within their careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
