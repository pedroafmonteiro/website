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
          mobileOpen ? "w-10" : "w-18",
          "min-w-10",
        ].join(" ")}
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span className="text-white text-md transition-all duration-300 select-none">
          {mobileOpen ? "✕" : "Menu"}
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
        </ul>
      </nav>

      {/* Larger screens */}
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
    </>
  );
};

export default NavBar;
