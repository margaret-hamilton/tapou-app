import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Done from "./pages/Done";
import Hazards from "./pages/Hazards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={<Register />}>
            
          </Route>
          <Route path="/done" element={<Done />}>
            
          </Route>
          <Route path="/hazards" element={<Hazards />}>
            
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}