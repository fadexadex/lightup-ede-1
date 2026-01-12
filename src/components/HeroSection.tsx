import heroImage from "@/assets/lightup-ede-hero.jpg";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden">
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
      <div className="relative z-10 flex min-h-[60vh] sm:min-h-[70vh] flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 text-center">
        <div className="animate-float">
          <h1 className="font-display text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-glow">Light Up</span>
            <span className="gradient-text block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Ede
            </span>
          </h1>
        </div>

        <p className="mt-4 sm:mt-6 font-display text-lg font-semibold uppercase tracking-widest text-primary text-glow-accent sm:text-xl md:text-2xl">
          Arise and Shine
        </p>

        <p className="mt-2 text-base sm:text-lg text-muted-foreground">
          Isaiah 60:1
        </p>

        {/* Event details */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-foreground w-full max-w-md sm:max-w-none">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2.5 backdrop-blur-sm w-full sm:w-auto justify-center">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base">15th January 2026</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2.5 backdrop-blur-sm w-full sm:w-auto justify-center">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base">Redeemer's University</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
