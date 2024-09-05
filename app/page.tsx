"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import TrustedAndFeatured from "@/components/TrustedAndFeatured";
import IntegrateSection from "@/components/IntegrateSection";
import SecureSection from "@/components/SecureSection";
import SearchSection from "@/components/SearchSection";
import CodeSection from "@/components/CodeSection";
import PointSection from "@/components/PointSection";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col">
      <Navbar />
      <Hero />
      <Cards />
      <TrustedAndFeatured />
      <IntegrateSection />
      <SecureSection />
      <SearchSection />
      <CodeSection />
      <PointSection />
      <GetStarted />
      <Footer />
    </div>
  );
}
