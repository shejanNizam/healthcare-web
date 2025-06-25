"use client";

import { useGetValueQuery } from "@/redux/features/value/valueApi";
import { Carousel, Spin } from "antd";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import FeatureJobsTwo from "./FeatureJobsTwo";

const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function FeatureJobs() {
  const sliderRef = useRef<CarouselRef | null>(null);

  const { data, isLoading, isError } = useGetValueQuery("Category");

  const responsiveSettings = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto px-8 py-12 text-center">
        <Spin size="large" className="text-primary" />
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="container mx-auto px-8 py-12 text-center text-red-600">
        <p>Failed to load categories.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-2">
        Find a job that aligns with your interests and skills
      </h2>
      <p className=" w-full mx-auto md:w-[50%] text-sm md:text-md text-center mb-6 md:mb-8">
        Our platform connects qualified nurses with reputable employers, making
        it easy to search and apply for nursing jobs. Explore opportunities that
        match your skills and career goals in a professional, efficient way.
      </p>

      <div className="relative max-w-7xl mx-auto">
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
                              priority={true}
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
      </div>

      <div className="mt-8 md:mt-12">
        <FeatureJobsTwo />
      </div>
    </div>
  );
}
