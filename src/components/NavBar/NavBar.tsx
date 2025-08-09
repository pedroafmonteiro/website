import NavItem from "./NavItem";

const NavBar = () => {
  const navItems = ["Home", "Experience", "Projects", "Contact"];
  return (
    <>
      <nav className="bg-neutral-900 w-min p-2 m-4 rounded-2xl shadow-xl">
        <ul className="flex flex-row justify-between space-x-2">
          {navItems.map((item) => (
            <NavItem key={item} label={item} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
