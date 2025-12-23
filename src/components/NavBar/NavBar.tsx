import NavItem from "./NavItem";

import { useState, useEffect } from "react";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    window.history.pushState({ mobileNav: true }, "");
    const onPopState = () => {
      if (mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", route: "/" },
    { label: "Experience", route: "/experience" },
    { label: "Projects", route: "/projects" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <>
      {/* Small screens */}
      <button
        className={[
          "fixed top-4 right-4 z-2",
          "md:hidden",
          "flex items-center justify-center",
          "bg-neutral-900 border-2 border-neutral-800 shadow-sm shadow-neutral-800",
          "p-2 rounded-lg",
          "cursor-pointer",
          "transition-all duration-300",
          "w-10",
        ].join(" ")}
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span
          className={[
            "text-white text-xl select-none",
            "transition-transform duration-300",
            "flex items-center justify-center",
            "relative w-6 h-6",
          ].join(" ")}
          aria-hidden="true"
        >
          <span
            className={[
              "absolute inset-0 flex items-center justify-center",
              "transition-all duration-300",
              mobileOpen
                ? "opacity-0 scale-90 rotate-12"
                : "opacity-100 scale-100 rotate-0",
            ].join(" ")}
          >
            ☰
          </span>
          <span
            className={[
              "absolute inset-0 flex items-center justify-center",
              "transition-all duration-300",
              mobileOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-90 -rotate-12",
            ].join(" ")}
          >
            ✕
          </span>
        </span>
      </button>

      <nav
        className={[
          "fixed inset-0 z-1",
          "md:hidden",
          "flex items-center justify-center",
          "bg-background/80 backdrop-blur-sm min-h-screen",
          "transition-all duration-400",
          mobileOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-5 pointer-events-none",
        ].join(" ")}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              route={item.route}
              onClick={() => setMobileOpen(false)}
            />
          ))}

          <hr className="w-1/2 border-t border-neutral-800" />

          <li className="rounded-lg transition-all duration-200 p-2 hover:bg-neutral-800 cursor-pointer">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-white select-none text-2xl md:text-base"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Larger screens */}
      <div className="flex flex-row">
        <nav
          className={[
            "hidden md:block",
            "bg-neutral-900 border-2 border-neutral-800 shadow-sm shadow-neutral-800",
            "w-min p-2 m-4 rounded-2xl",
          ].join(" ")}
        >
          <ul className="flex flex-row justify-between space-x-2">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} route={item.route} />
            ))}
          </ul>
        </nav>
        <div
          className={[
            "hidden md:block",
            "bg-neutral-900 border-2 border-neutral-800 shadow-sm shadow-neutral-800",
            "w-min p-2 my-4 rounded-2xl",
          ].join(" ")}
        >
          <div className="rounded-lg transition-all duration-200 p-2 hover:bg-neutral-800 cursor-pointer">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white select-none text-2xl md:text-base"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
