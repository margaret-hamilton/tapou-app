import "../App.css";

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

