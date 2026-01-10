import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import bannerRightImage from "../assets/banner/banner_right_side.png";

export default function Banner() {
  return (
    // <div className="bg-gradient-to-r from-primary to-primary/40 md:to-primary/20 h-auto">
    <div className="bg-linear-to-r from-primary to-primary/40 md:to-primary/20 h-auto">
      <div className="bg-primary-light  flex flex-col md:flex-row items-center justify-around px-4 md:px-24 xl:px-40 w-full">
        <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-6 my-4">
          <h1 className="text-2xl md:text-2xl xl:text-4xl text-white font-bold w-[90%]">
            {/* Empowering healthcare facilities with dependable, compassionate
            staffing-whenever and wherever care is needed. */}
            “Trusted, Veteran-Led Staffing — Now Serving California and
            Tennessee Healthcare Facilities.”
          </h1>
          <p className="w-full md:w-[80%] text-white text-sm ">
            {
              "From Southern California to beyond, CENM Healthcare delivers top-tier nurses, allied health professionals, and specialized support tailored to your facility's needs."
            }
            <br />
            {
              "Now serving healthcare facilities in California and Tennessee. Ohio coming soon."
            }
          </p>

          <Link href="/services">
            <button className="bg-[#E7F1F8] text-primary text-xl font-semibold cursor-pointer rounded-t-lg px-10 py-4 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out flex items-center gap-2">
              Request Staffing Now <FaArrowRight />
            </button>
          </Link>
          {/* <div className="w-full mb-8">
            <SearchBar />
          </div> */}
        </div>
        <div className="  w-full md:w-[40%] mt-8 md:mt-2 flex justify-center">
          <Image
            width={1000}
            height={1000}
            src={bannerRightImage}
            alt="banner_right_image"
            className="w-full max-w-125 h-auto hidden md:block"
            priority
          />
        </div>
      </div>
    </div>
  );
}
