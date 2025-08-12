import { useEffect, useState } from "react";

const Projects = () => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(true);
  }, []);

  return (
    <>
      <main
        className={[
          "flex flex-col items-center justify-center min-h-screen w-full transition-all duration-400",
          entered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-5 pointer-events-none",
        ].join(" ")}
      ></main>
    </>
  );
};

export default Projects;
