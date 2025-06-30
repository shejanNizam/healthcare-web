import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import bannerRightImage from "../assets/banner/int_banner_right_side.png";

export default function BannerForService() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/10 h-auto">
      <div className="bg-primary-light  flex flex-col md:flex-row items-center justify-around px-4 md:px-24 xl:px-40 w-full">
        <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-8 my-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-white font-semibold">
            Your Workforce Partner in the Mission of Care
          </h1>
          <p className="w-full md:w-[90%] text-white text-lg ">
            Providing proven talent strategies, comprehensive staffing
            solutions, and integrated technology products to solve workforce
            challenges.
          </p>

          <Link href="/services">
            <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out flex items-center gap-2">
              Learn More <FaArrowRight />
            </button>
          </Link>
        </div>
        <div className="  w-full md:w-[40%] mt-8 md:mt-2 flex justify-center">
          <Image
            width={1000}
            height={1000}
            src={bannerRightImage}
            alt="banner_right_image"
            className="w-full max-w-[500px] h-auto hidden md:block"
            priority
          />
        </div>
      </div>
    </div>
  );
}
