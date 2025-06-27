import Link from "next/link";

export default function BannerForServices() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/bg-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
        className="my-12 flex-col md:flex justify-center items-center relative"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 md:flex justify-around w-full">
          <h1 className="flex-1"></h1>
          <div className="flex-1 pt-40 md:pt-0 pl-10">
            <h1 className="text-2xl md:text-4xl xl:text-5xl text-white font-bold w-[90%] md:w-[90%]">
              <span className="bg-primary rounded p-1">Solving</span> The
              Biggest Healthcare Workforce Challenges
            </h1>
            <p className="text-lg sm:text-xl text-white my-6 sm:my-8 w-[90%] md:w-[80%] ">
              We provide tech-enabled, proven solutions that enhance operating
              margins and financial performance, increase workforce flexibility,
              and improve the patient experience.
            </p>
            <Link href="/client-services">
              <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                Discover Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
