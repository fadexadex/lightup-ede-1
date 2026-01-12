import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FormsSection from "@/components/FormsSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className={`min-h-screen bg-background ${showSplash ? "opacity-0" : "animate-fade-in"}`}>
        <HeroSection />
        <FormsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
