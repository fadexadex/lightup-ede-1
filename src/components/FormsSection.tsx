import { FileText, Users, ClipboardList, BookOpen, UserPlus, Heart } from "lucide-react";
import FormCard from "./FormCard";

const FormsSection = () => {
  const googleForms = [
    {
      title: "Converts Form 1",
      description: "Register your attendance for the LightUp Ede event. Secure your spot now!",
      link: "#google-form-1",
      icon: <UserPlus className="h-6 w-6" />,
    },
    {
      title: "Converts Form 2",
      description: "Join our team of dedicated volunteers and serve at the event.",
      link: "#google-form-2",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Prayer Request",
      description: "Share your prayer requests with us. We believe in the power of prayer.",
      link: "#google-form-3",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ];

  const microsoftForms = [
    {
      title: "Converts Form 3",
      description: "Help us improve by sharing your experience and suggestions.",
      link: "#microsoft-form-1",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Converts Form 4",
      description: "Register as a group or church delegation for the event.",
      link: "#microsoft-form-2",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Testimony Submission",
      description: "Share your testimony of God's goodness in your life.",
      link: "#microsoft-form-3",
      icon: <ClipboardList className="h-6 w-6" />,
    },
  ];

  return (
    <section className="relative px-4 py-20">
      {/* Section background glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Data Collection <span className="gradient-text">Forms</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Complete the forms below to register, volunteer, or share your details with us. 
            Your participation helps us serve you better.
          </p>
        </div>

        {/* Google Forms */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <h3 className="font-display text-xl font-semibold text-primary">
              Google Forms
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Microsoft Forms */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <h3 className="font-display text-xl font-semibold text-accent">
              Microsoft Forms
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {microsoftForms.map((form, index) => (
              <FormCard
                key={index}
                title={form.title}
                description={form.description}
                link={form.link}
                icon={form.icon}
                variant="microsoft"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormsSection;
