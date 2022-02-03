import { useState } from "react";
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
import IndividualView from "./views/IndividualView";

const App = () => {
  const [theme, setTheme] = useState("primary");

  return (
    <BrowserRouter>
      <div className={`App theme-${theme}`}>
        <Nav theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<PageTemplate title="Home" />} />
          <Route path="films" element={<Films />} />
          <Route path="people" element={<People />} />
          <Route path="people/:id" element={<IndividualView />} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:id" element={<IndividualView />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="vehicles/:id" element={<IndividualView />} />
          <Route path="species" element={<Species />} />
          <Route path="species/:id" element={<IndividualView />} />
          <Route path="to-do" element={<Tasks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
