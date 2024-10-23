import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
// import ImagesSwiper from "./components/ImagesSwiper";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <Achievements />
      <AboutSection />
      <WorkExperience />
      <ProjectSection />
      {/* <ImagesSwiper /> */}
      <EmailSection />
      </div>
      <Footer/>
    </div>
  );
}
