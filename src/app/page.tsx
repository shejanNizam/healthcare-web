import AppliedProcess from "@/components/AppliedProcess";
import Banner from "@/components/Banner";
import FeatureJobs from "@/components/FeatureJobs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <h3 className="text-primary"> Hello World from home! </h3>
      <Navbar />
      <Banner />
      <FeatureJobs />
      <AppliedProcess />
      <Footer />
    </>
  );
}
