import HeroSection from "@/components/sections/HeroSection";
import MouseGlow from "../components/ui/MouseGlow";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function Home() {
  return (
    <>
    <Navbar/>
      <main>
        <HeroSection/>
      </main>
      <MouseGlow/>
      <ThemeSwitcher/>
    </>
  );
}
