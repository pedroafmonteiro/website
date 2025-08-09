const NavItem = ({ label }: { label: string }) => {
  return (
    <li className="p-2 rounded-lg hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
      <p className="text-white select-none">{label}</p>
    </li>
  );
};

export default NavItem;
