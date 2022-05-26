import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Done from "./pages/Done";
import Hazards from "./pages/Hazards";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function App() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Tapou</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Início</Nav.Link>
              <Nav.Link href="/hazards">Conformidades</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
            <Route path="/register" element={<Register />}></Route>
            <Route path="/done" element={<Done />}></Route>
            <Route path="/hazards" element={<Hazards />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </Container>
  );
}
