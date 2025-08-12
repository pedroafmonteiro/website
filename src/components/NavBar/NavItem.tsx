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
    <NavLink
      to={route}
      className={({ isActive }) =>
        ["rounded-lg", isActive ? "bg-neutral-800" : ""].join(" ")
      }
      onClick={onClick}
    >
      <li
        className={[
          "p-2 rounded-lg",
          "hover:bg-neutral-800",
          "cursor-pointer",
          "transition-colors duration-200",
        ].join(" ")}
      >
        <p className="text-white select-none text-2xl md:text-base">{label}</p>
      </li>
    </NavLink>
  );
};

export default NavItem;
