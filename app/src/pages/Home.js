import "../App.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  return (
    <Container className="App">
      <Row key={4}>
        <Col>
          <Card>
            <Card.Body>
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
