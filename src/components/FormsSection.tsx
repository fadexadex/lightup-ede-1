import { BookOpen, UserPlus, Heart } from "lucide-react";
import FormCard from "./FormCard";

const FormsSection = () => {
  const googleForms = [
    {
      title: "Converts Form 1",
      description: "Record new convert details including name, contact, and decision date.",
      link: "https://forms.gle/y3KgJGpvs52x2doq9",
      icon: <UserPlus className="h-6 w-6" />,
    },
    {
      title: "Converts Form 2",
      description: "Record new convert details including name, contact, and decision date.",
      link: "https://forms.gle/6c2LasQbfkemGdYr8",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Converts Form 3",
      description: "Record new convert details including name, contact, and decision date.",
      link: "https://forms.gle/pS7j3aeDi39JQN9Z8",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Section background glow */}
      <div className="absolute left-1/2 top-0 h-64 w-64 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Data Collection <span className="gradient-text">Forms</span>
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground px-2">
            Kindly use this form links to capture New Converts data. Thank you.
          </p>
        </div>

        {/* Google Forms */}
        <div>
          <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-primary whitespace-nowrap">
              Google Forms
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {googleForms.map((form, index) => (
              <FormCard
                key={index}
                title={form.title}
                description={form.description}
                link={form.link}
                icon={form.icon}
                variant="google"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormsSection;
