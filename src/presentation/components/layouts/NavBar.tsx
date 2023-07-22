import { FC } from "react";
import styles from "../../styles/styles";
import { navItems } from "../../../static/data";
import { Link } from "react-router-dom";

interface NavBarProps {
  active: number;
}

const NavBar: FC<NavBarProps> = ({ active }) => {
  return (
    <nav className={`${styles.noramlFlex}`}>
      {navItems.map((item, ind) => (
        <div key={ind} className="flex">
          <Link
            to={item.url}
            className={`${
              active === ind + 1 ? "text-green-400" : "text-white"
            } font-medium px-6 cursor-pointer`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
