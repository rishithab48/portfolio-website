import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      </div>
    </div>
  );
}
