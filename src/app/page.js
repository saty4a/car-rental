"use client"
import BenifitSection from "@/components/Benifits";
import HomePage from "@/components/Home";
import NavBarWrapper from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    // <Navb
    <div className="contentbody mx-0 lg:mx-8 flex flex-col gap-5">
      <NavBarWrapper />
      <HomePage />
      <BenifitSection />
    </div>
  );
}
