import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./views/PageTemplate";
import Tasks from "./views/Tasks";
import Nav from "./components/Nav";
import Films from "./views/Films";
import People from "./views/People";
import Locations from "./views/Locations";
import Species from "./views/Species";
import Vehicles from "./views/Vehicles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<PageTemplate title="Home" />} />
          <Route path="films" element={<Films />} />
          <Route path="people" element={<People />} />
          <Route path="locations" element={<Locations />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="species" element={<Species />} />
          <Route path="to-do" element={<Tasks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
