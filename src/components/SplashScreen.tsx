import { useState, useEffect } from "react";
import rccgLogo from "@/assets/rccg-logo.png";
import runLogo from "@/assets/run-logo.jpg";
import rucLogo from "@/assets/ruc-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const logos = [
    { src: rccgLogo, alt: "RCCG Logo" },
    { src: runLogo, alt: "Redeemer's University Logo" },
    { src: rucLogo, alt: "Redeemer's University Chapel Logo" },
  ];

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogo((prev) => {
        if (prev < logos.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    // After all logos shown (3 seconds), fade out and complete
    const completeTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => {
      clearInterval(logoInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete, logos.length]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      {/* Logo container */}
      <div className="relative flex h-48 w-48 items-center justify-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`absolute max-h-full max-w-full object-contain transition-all duration-300 ${
              index === currentLogo
                ? "scale-100 opacity-100"
                : index < currentLogo
                ? "scale-75 opacity-0"
                : "scale-125 opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-20 flex gap-2">
        {logos.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index <= currentLogo ? "bg-primary scale-125" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
