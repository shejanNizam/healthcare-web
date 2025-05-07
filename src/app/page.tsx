// app/page.tsx
import AppliedProcess from "@/components/AppliedProcess";
import Banner from "@/components/Banner";
import FeatureJobs from "@/components/FeatureJobs";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <main className="">
        <Banner />
        <FeatureJobs />
        <AppliedProcess />
      </main>
    </div>
  );
}
