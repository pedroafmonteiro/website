import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import InformationCard from "../components/InformationCard";

const Projects = () => {
  const [entered, setEntered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setEntered(false);
    const timeout = setTimeout(() => setEntered(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const projects = [
    {
      title: "In Porto",
      description:
        "A cross-platform mobile application that provides users with information about public transportation in Porto, Portugal, enhancing the experience of both residents and tourists.",
      websiteLink: "https://github.com/niaefeup/in-porto",
      websiteLabel: "github.com",
      color: "white",
    },
    {
      title: "uni",
      description:
        "A cross-platform mobile application designed to streamline academic life for university students, offering features like schedule management, grade tracking, and campus navigation.",
      websiteLink: "https://github.com/niaefeup/uni",
      websiteLabel: "github.com",
      color: "white",
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS, showcasing my projects, experience, and skills in a clean and responsive design.",
      websiteLink: "https://pedroafmonteiro.pages.dev",
      websiteLabel: "pedroafmonteiro.pages.dev",
      color: "white",
    },
    {
      title: "Qnect",
      description:
        "A web application designed for people to ask questions about various topics, fostering a collaborative environment and facilitating knowledge sharing.",
      websiteLink: "https://github.com/pedroafmonteiro/qnect",
      websiteLabel: "github.com",
      color: "white",
    },
    {
      title: "EcoTracker",
      description:
        "A cross-platform mobile application designed to help users track their environmental impact and adopt more sustainable practices in their daily lives.",
      websiteLink: "https://github.com/pedroafmonteiro/ecotracker",
      websiteLabel: "github.com",
      color: "white",
    },
    {
      title: "Hyrio",
      description:
        "A web application for freelancers to manage their projects, clients, and invoices, providing a streamlined workflow and efficient project management tools.",
      websiteLink: "https://github.com/pedroafmonteiro/hyrio",
      websiteLabel: "github.com",
      color: "white",
    },
    {
      title: "Space Wars",
      description:
        "A space-themed arcade game built with Java, following Design Patterns principles, where players navigate through space, avoiding obstacles and battling enemies in an engaging and dynamic environment.",
      websiteLink: "https://github.com/pedroafmonteiro/project-ldts-leic",
      websiteLabel: "github.com",
      color: "white",
    },
    {
      title: "LCOM Project",
      description:
        "A software project developed as part of the LCOM course unit, focusing on hardware communication and low-level programming, demonstrating proficiency in C and embedded systems.",
      websiteLink: "https://github.com/pedroafmonteiro/project-lcom-leic",
      websiteLabel: "github.com",
      color: "white",
    }
  ];

  return (
    <>
      <main
        className={[
          "flex flex-col items-center justify-center min-h-screen w-full transition-all duration-400 md:pt-24",
          entered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-5 pointer-events-none",
        ].join(" ")}
      >
        <div className="p-4 md:w-3xl space-y-4">
          <header className="flex flex-col gap-2">
            <h1 className="text-neutral-200 text-4xl">Projects</h1>
            <p className="text-neutral-400 text-base">
              A collection of my personal and academic projects.
            </p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <InformationCard
                key={index}
                title={project.title}
                description={project.description}
                websiteLink={project.websiteLink}
                websiteLabel={project.websiteLabel}
                color={project.color}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Projects;
