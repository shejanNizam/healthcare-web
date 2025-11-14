import React from "react";
import CustomButton from "./CustomButton";

interface IntBannerProps {
  type?: string;
  title: string;
  description: string | React.ReactNode;
}

const getBackgroundStyles = (type?: string) => {
  let imageUrl = "";
  switch (type) {
    case "statting_solutions":
      imageUrl = "url('/images/staffing_solution.svg')";
      break;
    case "workforce_solutions":
      imageUrl = "url('/images/workforce_management.svg')";
      break;
    default:
      return {
        style: {},
        overlay: false,
        className: "bg-gradient-to-r from-primary to-primary/30",
      };
  }

  return {
    style: {
      backgroundImage: imageUrl,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    overlay: true,
    className: "relative",
  };
};

export default function IntBanner({
  type,
  title,
  description,
}: IntBannerProps) {
  const { style, overlay, className } = getBackgroundStyles(type);

  return (
    <div style={style} className={`w-full ${className}`}>
      {overlay && <div className="absolute inset-0 bg-black opacity-50"></div>}

      <div
        className="
          flex flex-col-reverse md:flex-row items-center justify-center w-full 
          relative z-10 
        "
      >
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-extrabold leading-tight md:max-w-[70%]">
            {title}
          </h1>
          {typeof description === "string" ? (
            <div
              className="no-tailwind text-white text-base md:text-lg opacity-90 md:max-w-[60%]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <p className="w-full text-white text-base md:text-lg opacity-90 md:max-w-[70%]">
              {description}
            </p>
          )}
          {type && (
            <div className="mt-4">
              <CustomButton
                text={type === "statting_solutions" ? "Request " : "Schedule "}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
