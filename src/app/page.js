import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Hero from "./components/Hero";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Hero/>
    </div>
  );
}
