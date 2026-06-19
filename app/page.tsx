import HeroSection from "@/components/sections/HeroSection";
import About from "@/components/sections/About";
import MouseGlow from "../components/ui/MouseGlow";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <>
    <Navbar/>
      <main>
        <HeroSection/>
        <About/>
        <SkillSection/>
      </main>
      <MouseGlow/>
      <ThemeSwitcher/>
    </>
  );
}
