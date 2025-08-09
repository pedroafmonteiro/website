import { NavLink } from "react-router";

const NavItem = ({ label, route }: { label: string; route: string }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive ? "rounded-lg bg-neutral-800 " : ""
      }
    >
      <li className="p-2 rounded-lg hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
        <p className="text-white select-none">{label}</p>
      </li>
    </NavLink>
  );
};

export default NavItem;
