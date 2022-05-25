import "./App.css";

import axios from "axios";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useQuery } from "react-query";

let latitude = 1;
let longitude = 1;

export default function App() {

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
        <Form.Control accept="image/*" id="icon-button-file" type="file" capture="environment"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" id="formDescription">
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" placeholder="Descreva melhor a conformidade" />
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
      Enviar
    </Button>
    </Form>
    <hr></hr>
      <h1>Conformidades</h1>
        {data &&
          data.data.map(({ id, title, description, image }) => (
            <Row key={id}>
              <Col>
              <Card >
                <Card.Img src={image} alt={title} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Row>
                  <Col>
                    <Button variant="primary">Curtir</Button>
                  </Col>
                  <Col>
                    <Button variant="danger">Negativar</Button>
                  </Col>
                  </Row>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          ))}
      
    </Container>
    
  );
}

