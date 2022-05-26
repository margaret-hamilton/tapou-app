
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useQuery } from "react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
              <Card >
                <Card.Body>
                  <Card.Title>Registro Enviado!</Card.Title>
                  <Card.Text>Obrigado por seu envio. Ele estará disponível para os outros usuários!</Card.Text>
                  <Row>
                  <Col>
                    <Button variant="primary"><Link to="/">Voltar ao início</Link></Button>
                  </Col>
                  </Row>
                </Card.Body>
              </Card>
              </Col>
            </Row>
    </Container>
    
  );
}

