import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./data/routes";
import Nav from "./components/Nav";
import AppProvider from "./data/context";

const App = () => {
  const [theme, setTheme] = useState("primary");
  let themeProps = {
    theme,
    setTheme,
  };

  return (
    <BrowserRouter>
      <AppProvider>
        <div className={`App theme-${theme}`}>
          <Nav {...themeProps} />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route.routeProps} />
            ))}
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
