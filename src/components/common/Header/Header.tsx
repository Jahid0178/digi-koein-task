// import Logo from "../Logo/Logo";

import Logo from "../Logo/Logo";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="nav-wrapper">
            <div>
              <Logo />
            </div>
            <HeaderLinks />
          </div>
          <div>
            <select
              name="lang"
              id="lang"
            >
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
