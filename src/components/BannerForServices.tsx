import Link from "next/link";

export default function BannerForServices() {
  return (
    <div className="text-center my-12">
      <h3>BannerForServices</h3>
      <div className="text-center mt-8">
        <Link href="/client-services">
          <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            Client Services
          </button>
        </Link>
      </div>
    </div>
  );
}
