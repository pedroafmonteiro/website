import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import InformationCard from "../components/InformationCard";

const Experience = () => {
  const [entered, setEntered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setEntered(false);
    const timeout = setTimeout(() => setEntered(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const experiences = [
    {
      title: "Frontend Engineer Intern at Robotair",
      date: "July 2025 - August 2025",
      description:
        "Contributed to the platform's major redesign to align with 2025 standards, enhancing user experience and interface aesthetics.",
      websiteLink: "https://robotair.io",
      websiteLabel: "robotair.io",
      color: "purple",
    },
    {
      title: "Project Manager at NIAEFEUP",
      date: "July 2025 - Present",
      description:
        "Leading the development of uni, a cross-platform mobile application designed to streamline academic life for university students.",
      websiteLink: "https://niaefeup.pt",
      websiteLabel: "niaefeup.pt",
      color: "red",
    },
    {
      title: "Co-Head of Image & Communication at SINF 2025",
      date: "June 2025 - October 2025",
      description:
        "Managed the visual identity and communication strategies for SINF 2025, ensuring cohesive branding across all of the event.",
      websiteLink: "https://sinf.pt",
      websiteLabel: "sinf.pt",
      color: "blue",
    },
  ];

  return (
    <>
      <main
        className={[
          "flex flex-col gap-4 items-center justify-center min-h-screen w-full transition-all duration-400",
          entered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-5 pointer-events-none",
        ].join(" ")}
      >
        <div className="p-4 md:w-3xl space-y-4">
          <header className="flex flex-col gap-2">
            <h1 className="text-neutral-200 text-4xl">Experience</h1>
            <p className="text-neutral-400 text-base">
              A summary of my professional experience and internships.
            </p>
          </header>
          {experiences.map((exp, index) => (
            <InformationCard
              key={index}
              title={exp.title}
              subtitle={exp.date}
              description={exp.description}
              websiteLink={exp.websiteLink}
              websiteLabel={exp.websiteLabel}
              color={exp.color}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Experience;
