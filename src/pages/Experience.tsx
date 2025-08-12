import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Experience = () => {
  const [entered, setEntered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setEntered(false);
    const timeout = setTimeout(() => setEntered(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <main
        className={[
          "flex flex-col items-center justify-center min-h-screen w-full transition-all duration-400",
          entered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-5 pointer-events-none",
        ].join(" ")}
      >
        <div>
          <h1 className="text-white text-4xl select-none">Work in Progress</h1>
        </div>
      </main>
    </>
  );
};

export default Experience;
