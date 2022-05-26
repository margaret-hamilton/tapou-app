import "../App.css";

import React, { useEffect, useRef, ReactElement } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Wrapper, Map, Marker } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";
let latitude;
let longitude;

export default function Home() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }

  function MapComponent({
    center,
    zoom,
  }) {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} id="map" />;
  }

  const center = { lat: latitude, longitude };
  const zoom = 4;

  console.log(latitude, longitude);

  return (
    <Container className="App">
      <Row key={4}>
        <Col>
          <Card>
            <Card.Body>
            <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
              <MapComponent />
            </Wrapper>
              <div className="d-grid gap-2">
                <Button size="lg" variant="primary">
                  <Link to="/register">Registrar Conformidade</Link>
                </Button>
                <Button size="lg" variant="primary">
                  <Link to="/hazards">Ver Conformidades</Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}