import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useQuery } from "react-query";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
let latitude = 1;
let longitude = 1;

export default function Home() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }

  console.log(latitude, longitude);

  const { data } = useQuery("posts", () =>
    axios("https://628d4fd9a339dfef8798e164.mockapi.io/Hazard")
  );
  return (
    <Container className="App">
      <Row key={4}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>Mostre os problemas no seu caminho</Card.Text>
              <Row>
                <Col>
                  <Button variant="primary">
                    <Link to="/register">Registrar Conformidade</Link>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary">
                    <Link to="/hazards">Ver Conformidades</Link>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
