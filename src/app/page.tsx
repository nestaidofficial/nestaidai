import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Integrations } from "@/components/sections/Integrations";
import { FAQ } from "@/components/sections/FAQ";
import { LatestPosts } from "@/components/sections/LatestPosts";
import { CallRouting } from "@/components/sections/CallRouting";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HowItWorks />
        <Features />
        <Hero />
        <CallRouting />
        <Integrations />
        <LatestPosts />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
