import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
