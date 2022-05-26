import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Done from "./pages/Done";
import Hazards from "./pages/Hazards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

let latitude;
let longitude;

export default function App() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }

  console.log(latitude, longitude);
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
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/done" element={<Done />}></Route>
          <Route path="/hazards" element={<Hazards />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}
