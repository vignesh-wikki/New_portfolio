import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import App from "./App";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default Routers;
