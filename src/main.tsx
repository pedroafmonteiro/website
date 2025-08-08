import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold h-screen flex items-center justify-center">Hello world!</h1>
  </StrictMode>,
);
