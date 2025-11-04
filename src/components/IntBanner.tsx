import Image from "next/image";
import bannerRightImage from "../assets/banner/int_banner_right_side.png";

interface IntBannerProps {
  title: string;
  description: string | React.ReactNode;
}

export default function IntBanner({ title, description }: IntBannerProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/30 h-auto">
      <div className="bg-primary-light  flex flex-col-reverse md:flex-row items-center justify-around px-4 md:px-24 xl:px-40 w-full">
        <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-8 my-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-white font-semibold">
            {title}
          </h1>
          <p className="w-full md:w-[70%] text-white text-sm ">{description}</p>
        </div>
        <div className="w-full md:w-[40%] mt-8 md:mt-2 flex justify-center">
          <Image
            width={1000}
            height={1000}
            src={bannerRightImage}
            alt="banner_right_image"
            className="w-full max-w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
