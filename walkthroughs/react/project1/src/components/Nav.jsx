import { Link } from "react-router-dom";
import Theme from "./Theme";
import { routes } from "../data/routes";

const Nav = (props) => {
  return (
    <nav>
      <ul className="nav-list">
        {routes.map((route, index) => {
          if (route.isNavLink) {
            return (
              <li key={index} className="nav-link">
                <Link to={route.routeProps.path}>{route.title}</Link>
              </li>
            );
          } else return null;
        })}
        <li className="nav-link">
          <Theme {...props} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
