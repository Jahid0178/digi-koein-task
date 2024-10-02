import { navLinks } from "../../../data/data";
import { NavLinkType } from "../../../typescript/types";

const HeaderLinks = () => {
  return (
    <div className="nav-link-wrapper">
      {navLinks.map((navlink: NavLinkType) => (
        <a
          key={navlink.id}
          href={navlink.href}
          className="nav-link"
        >
          {navlink.title}
        </a>
      ))}
    </div>
  );
};

export default HeaderLinks;
