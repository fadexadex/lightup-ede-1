import { ExternalLink } from "lucide-react";

interface FormCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  variant: "google" | "microsoft";
}

const FormCard = ({ title, description, link, icon, variant }: FormCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:scale-[1.02] box-glow box-glow-hover"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
            variant === "google" 
              ? "bg-primary/20 text-primary" 
              : "bg-accent/20 text-accent"
          }`}>
            {icon}
          </div>
          <ExternalLink className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
        </div>
        
        <h3 className="mb-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        
        {/* Platform badge */}
        <div className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
          variant === "google"
            ? "bg-primary/10 text-primary"
            : "bg-accent/10 text-accent"
        }`}>
          {variant === "google" ? "Google Forms" : "Microsoft Forms"}
        </div>
      </div>
    </a>
  );
};

export default FormCard;
