// import { InfinitCard } from "@/components/component/infinitCard";
import AboutSection from "@/components/try/AboutSection";
import Companies from "@/components/try/Companies";
import CoursesSection from "@/components/try/CoursesSection";
import Footer from "@/components/try/Footer";
import HeroSection from "@/components/try/HeroSection";
import { NavbarDemo } from "@/components/try/NavBar";
import Testimonial from "@/components/try/Testimonial";
// import { ThreeDCard } from "@/components/try/ThreeDCardDemo";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavbarDemo/>
      <HeroSection/>
      <Companies/>
      <AboutSection/>
      <CoursesSection/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
