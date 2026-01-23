import { NavLink } from "react-router";

const NavItem = ({
  label,
  route,
  onClick,
}: {
  label: string;
  route: string;
  onClick?: () => void;
}) => {
  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) =>
          [
            "rounded-lg transition-all duration-200",
            "p-2 block",
            "hover:bg-neutral-800",
            "cursor-pointer",
            "transition-colors duration-200",
            isActive ? "bg-neutral-800 opacity-100 " : "",
          ].join(" ")
        }
        onClick={onClick}
      >
        <p className="text-white select-none text-2xl md:text-base">{label}</p>
      </NavLink>
    </li>
  );
};

export default NavItem;
