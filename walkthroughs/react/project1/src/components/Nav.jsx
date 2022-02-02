import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="films">Films</Link>
        </li>
        <li className="nav-link">
          <Link to="people">People</Link>
        </li>
        <li className="nav-link">
          <Link to="locations">Locations</Link>
        </li>
        <li className="nav-link">
          <Link to="vehicles">Vehicles</Link>
        </li>
        <li className="nav-link">
          <Link to="species">Species</Link>
        </li>
        <li className="nav-link">
          <Link to="to-do">To Do App</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
