import HeroSection from "@/components/sections/HeroSection";
import MouseGlow from "../components/ui/MouseGlow";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <main>
        <HeroSection/>
      </main>
      <MouseGlow/>
    </>
  );
}
