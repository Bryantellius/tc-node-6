import PageTemplate from "../views/PageTemplate";
import Films from "../views/Films";
import People from "../views/People";
import Locations from "../views/Locations";
import Vehicles from "../views/Vehicles";
import Species from "../views/Species";
import IndividualView from "../views/IndividualView";
import Tasks from "../views/Tasks";

class Route {
  constructor(path, title, element, isNavLink = false) {
    this.routeProps = {
      path,
      element,
    };
    this.isNavLink = isNavLink;
    this.title = title;
  }
}

export const routes = [
  new Route("/", "Home", <PageTemplate title="Home" />, true),
  new Route("about", "About", <PageTemplate title="About" />, true),
  new Route("films", "Films", <Films />, true),
  new Route("people", "People", <People />, true),
  new Route("people/:id", "Individual View", <IndividualView />),
  new Route("locations", "Locations", <Locations />, true),
  new Route("locations/:id", "Individual View", <IndividualView />),
  new Route("vehicles", "Vehicles", <Vehicles />, true),
  new Route("vehicles/:id", "Individual View", <IndividualView />),
  new Route("species", "Species", <Species />, true),
  new Route("species/:id", "Individual View", <IndividualView />),
  new Route("to-do", "To-Do", <Tasks />, true),
];
