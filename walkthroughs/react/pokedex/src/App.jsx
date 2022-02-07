import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import Single from "./views/Single";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path=":name" element={<Single />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
