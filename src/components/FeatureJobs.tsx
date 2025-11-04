"use client";

// import { useGetValueQuery } from "@/redux/features/value/valueApi";
// import { Spin } from "antd";
// import { CarouselRef } from "antd/es/carousel";
import { motion } from "framer-motion";
// import { useRef } from "react";
import FeatureJobsTwo from "./FeatureJobsTwo";

// const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function FeatureJobs() {
  // const sliderRef = useRef<CarouselRef | null>(null);

  // const { data, isLoading, isError } = useGetValueQuery("Category");

  // const responsiveSettings = [
  //   {
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 5,
  //       slidesToScroll: 5,
  //     },
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 4,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 640,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  // ];

  // if (isLoading) {
  //   return (
  //     <div className="container mx-auto px-8 py-12 text-center">
  //       <Spin size="large" className="text-primary" />
  //     </div>
  //   );
  // }

  // if (isError || !data?.data) {
  //   return (
  //     <div className="container mx-auto px-8 py-12 text-center text-red-600">
  //       <p>Failed to load categories.</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="container mx-auto px-8 py-12">
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-2">
          Find a job that aligns with your interests and skills
        </h2>
        <p className=" w-full mx-auto md:w-[50%] text-sm md:text-md text-center mb-6 md:mb-8">
          Our platform connects qualified nurses with reputable employers,
          making it easy to search and apply for nursing jobs. Explore
          opportunities that match your skills and career goals in a
          professional, efficient way.
        </p>

        {/* <div className="relative max-w-7xl mx-auto">
          <button
            className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition"
            onClick={() => sliderRef.current?.prev()}
            aria-label="Previous slide"
          >
            <BiSolidLeftArrow className="text-2xl md:text-3xl text-primary" />
          </button>

          <div className="mb-8 md:mb-12">
            <Carousel
              dots={false}
              slidesToShow={4}
              slidesToScroll={4}
              ref={sliderRef}
              className="overflow-hidden px-2 sm:px-4 md:px-8"
              responsive={responsiveSettings}
              infinite={true}
            >
              {data?.data?.map(
                (categoryItem: { _id: string; type: string; logo: string }) => {
                  // Ensure type fallback
                  const categoryType = categoryItem.type || "Unknown Category";

                  // Ensure logo path is properly prefixed if needed
                  const logoSrc = categoryItem.logo.startsWith("/")
                    ? categoryItem.logo
                    : `/${categoryItem.logo}`;

                  return (
                    <div key={categoryItem._id} className="px-2 sm:px-4">
                      <Link
                        href={`/all-jobs?category=${encodeURIComponent(
                          categoryType
                        )}`}
                        passHref
                      >
                        <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer h-full">
                          <div className="flex flex-col items-center justify-center w-full aspect-square mx-auto text-primary gap-2">
                            <div className="relative w-16 h-16">
                              <Image
                                src={baseImageUrl + logoSrc}
                                alt={categoryType}
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                              />
                            </div>
                            <div className="text-sm sm:text-base md:text-lg font-semibold text-center">
                              {categoryType}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              )}
            </Carousel>
          </div>

          <button
            className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition"
            onClick={() => sliderRef.current?.next()}
            aria-label="Next slide"
          >
            <BiSolidRightArrow className="text-2xl md:text-3xl text-primary" />
          </button>
        </div> */}

        <div className="mt-8 md:mt-12">
          <FeatureJobsTwo />
        </div>
      </div>

      {/* Testimonial */}
      <motion.section
        className="mt-12 mx-4 xl:mx-60 bg-gradient-to-r from-primary/70 to-primary p-10 rounded-2xl shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white opacity-50 mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p className="text-2xl md:text-3xl font-semibold text-white italic">
            {
              "“C.E.N.M. Healthcare continues its growth — officially expanding services into Tennessee, with Ohio next on the horizon. Our mission remains constant: Integrity in Care, Accountability in Action.” "
            }
          </p>
          <p className="text-lg text-white mt-6 ml-16 opacity-90">
            - C.E.N.M. Healthcare Team
          </p>
        </div>
      </motion.section>
    </>
  );
}
