import NavItem from "./NavItem";

const NavBar = () => {
  const navItems = [
    { label: "Home", route: "/" },
    { label: "Experience", route: "/experience" },
    { label: "Projects", route: "/projects" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <>
      <nav className="bg-neutral-900 w-min p-2 m-4 rounded-2xl shadow-neutral-800 shadow-sm border-2 border-neutral-800">
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
