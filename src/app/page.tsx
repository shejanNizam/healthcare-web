// app/page.tsx
import AppliedProcess from "@/components/AppliedProcess";
import Banner from "@/components/Banner";
import BannerForServices from "@/components/BannerForServices";
import FeatureJobs from "@/components/FeatureJobs";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <main className="">
        <Banner />
        <FeatureJobs />
        <BannerForServices />
        <AppliedProcess />
      </main>
    </div>
  );
}
