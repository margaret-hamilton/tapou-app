import "../App.css";

import React, { useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

let latitude;
let longitude;

export default function Register() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }

  const center = { lat: latitude, longitude };
  const zoom = 4;

  function MapComponent({ center, zoom }) {
    const ref = useRef();

    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });

    return <div ref={ref} id="map" />;
  }

  return (
    <Container className="App">
      <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <MapComponent />
      </Wrapper>
      <Form>
        <Form.Group className="mb-3" id="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Título da Conformidade" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" id="formPhoto">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            accept="image/*"
            id="icon-button-file"
            type="file"
            capture="environment"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" id="formDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Descreva melhor a conformidade"
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formTitle">
          <Form.Label>Latitude</Form.Label>
          <Form.Control type="text" disabled value={latitude} />
        </Form.Group>

        <Form.Group className="mb-3" id="formTitle">
          <Form.Label>Longitude</Form.Label>
          <Form.Control type="text" disabled value={longitude} />
        </Form.Group>

        <Button variant="primary" type="submit">
          <Link to="/Done">Enviar</Link>
        </Button>
      </Form>
    </Container>
  );
}
