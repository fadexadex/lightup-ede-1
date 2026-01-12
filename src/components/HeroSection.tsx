import heroImage from "@/assets/lightup-ede-hero.jpg";
import rccgLogo from "@/assets/rccg-logo.png";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="LightUp Ede Event"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(145_70%_50%_/_0.15)_0%,_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
        {/* RCCG Logo */}
        <img
          src={rccgLogo}
          alt="RCCG Logo"
          className="mb-6 h-24 w-24 object-contain sm:h-28 sm:w-28"
        />
        
        <div className="animate-float">
          <h1 className="font-display text-5xl font-black uppercase tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-glow">Light Up</span>
            <span className="gradient-text block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              Ede
            </span>
          </h1>
        </div>

        <p className="mt-6 font-display text-xl font-semibold uppercase tracking-widest text-primary text-glow-accent sm:text-2xl">
          Arise and Shine
        </p>

        <p className="mt-2 text-lg text-muted-foreground">
          Isaiah 60:1
        </p>

        {/* Event details */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-foreground">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium">15th January 2026</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-medium">Redeemer's University</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
