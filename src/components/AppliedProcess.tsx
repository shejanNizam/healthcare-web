// export default function AppliedProcess() {
//   return (
//     <div className="text-center">
//       <h3>AppliedProcess</h3>
//     </div>
//   );
// }

import Image from "next/image";
import applied_process_image from "../assets/applied-process/applied_process_image.png";

export default function AppliedProcess() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      {/* <CustomHeading>WHY CHOOSE US</CustomHeading> */}
      <h2 className="text-lg md:text-3xl text-primary font-bold text-center mb-4">
        Your Healthcare Job Search Made Easy!
      </h2>
      <p className="text-md text-center mb-12 md:w-[50%] mx-auto ">
        {
          "Discover a world of opportunities with our user-friendly platform. Whether you're a seasoned professional or just starting your career, we have the perfect job for you."
        }
      </p>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 xl:px-40">
        {/* Image on the left (or top on smaller screens) */}
        <div className="w-full lg:w-1/2">
          <Image
            src={applied_process_image}
            alt="applied_process_image"
            width={1000}
            height={1000}
            className="rounded-xl w-full h-auto md:w-3/4 md:mx-auto"
          />
        </div>

        {/* Content on the right (or bottom on smaller screens) */}
        <div className="w-full lg:w-1/2  relative">
          {/* Vertical Line */}
          <div className=" absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

          {/* List of Features */}
          <ul className="space-y-8 ml-4 md:ml-0">
            <li className="flex items-start">
              <div className=" absolute left-0 w-5 h-5 bg-primary rounded-full -ml-2 mt-3"></div>
              <div className="lg:ml-8">
                <p className="text-sm sm:text-base">
                  Simplified Job Search Process: Easily find healthcare job
                  opportunities without the hassle of complex searches.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className=" absolute left-0 w-5 h-5 bg-primary rounded-full -ml-2 mt-3"></div>
              <div className="lg:ml-8">
                <p className="text-sm sm:text-base">
                  User-Friendly Platform: A straightforward interface designed
                  to streamline the job search experience.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className=" absolute left-0 w-5 h-5 bg-primary rounded-full -ml-2 mt-3"></div>
              <div className="lg:ml-8">
                <p className="text-sm sm:text-base">
                  Efficient Results: Quickly access the most relevant job
                  listings tailored to your skills and preferences.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className=" absolute left-0 w-5 h-5 bg-primary rounded-full -ml-2 mt-3"></div>
              <div className="lg:ml-8">
                <p className="text-sm sm:text-base">
                  Time-Saving Features: Save time with advanced filters and easy
                  navigation to find the right job faster.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className=" absolute left-0 w-5 h-5 bg-primary rounded-full -ml-2 mt-3"></div>
              <div className="lg:ml-8">
                <p className="text-sm sm:text-base">
                  Stress-Free Job Hunting: Enjoy a seamless and stress-free
                  approach to landing your next healthcare position.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
