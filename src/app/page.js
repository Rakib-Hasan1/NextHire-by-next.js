import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Hero from "./components/Hero";
import TrendingCategories from "./components/TrendingCategories";
import LatestJobs from "./components/LatestJobs";
import WorkingProcess from "./components/WorkingProcess";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Hero/>
      <TrendingCategories/>
      <LatestJobs/>
      <WorkingProcess/>
    </div>
  );
}
