import CustomButton from "./CustomButton";

interface IntBannerProps {
  title: string;
  description: string | React.ReactNode;
}

export default function IntBanner({ title, description }: IntBannerProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/30 w-full">
      <div
        className="bg-primary-light flex flex-col-reverse md:flex-row items-center justify-center 
                   px-4 sm:px-8 md:px-8 lg:px-10 xl:px-20 2xl:px-24 
                    text-center w-full"
      >
        <div
          className="w-full md:w-[80%] lg:w-[60%] flex flex-col gap-3 sm:gap-4 md:gap-6 
                     my-4 mx-auto py-10 md:py-16 lg:py-20"
        >
          <h1 className="text-2xl sm:text-3xl  lg:text-5xl text-white font-extrabold leading-tight">
            {title}
          </h1>
          {typeof description === "string" ? (
            <div
              className="no-tailwind text-white text-base md:text-lg opacity-90"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <p className="w-full md:w-[90%] text-white text-base md:text-lg opacity-90">
              {description}
            </p>
          )}

          <CustomButton text="Request Your Personalized Nursing Staffing Solution" />
        </div>
      </div>
    </div>
  );
}
