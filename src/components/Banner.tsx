import Image from "next/image";
import bannerRightImage from "../assets/banner/banner_right_side.png";
import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/10 h-auto">
      <div className="bg-primary-light  flex flex-col md:flex-row items-center justify-around px-4 md:px-24 xl:px-40 w-full">
        <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-8 my-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-white font-semibold">
            Find a job that aligns with your interests and skills
          </h1>
          <p className="w-full md:w-[90%] text-white text-sm ">
            Our platform connects qualified nurses with reputable employers,
            making it easy to search and apply for nursing jobs. Explore
            opportunities that match your skills and career goals in a
            professional, efficient way.
          </p>
          <div className="w-full mb-8">
            <SearchBar />
          </div>
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
