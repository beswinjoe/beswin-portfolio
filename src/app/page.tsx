import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Speaking from "@/components/Speaking";
import Notes from "@/components/Notes";
import SkillsAndChronicle from "@/components/SkillsAndChronicle";
import Correspondence from "@/components/Correspondence";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-16 space-y-32">
      <Hero />
      
      {/* Sections with dividers */}
      <hr className="w-full border-t border-border-beige" />
      
      <About />
      <hr className="w-full border-t border-border-beige" />
      
      <SelectedWork />
      <hr className="w-full border-t border-border-beige" />
      
      <Speaking />
      <hr className="w-full border-t border-border-beige" />
      
      <Notes />
      <hr className="w-full border-t border-border-beige" />
      
      <SkillsAndChronicle />
      <hr className="w-full border-t border-border-beige" />
      
      <Correspondence />
      
      <Footer />
    </div>
  );
}
