import "../App.css";

import axios from "axios";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useQuery } from "react-query";

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

  const { data } = useQuery("posts", () =>
    axios("http://localhost:3001/hazards")
  );

  return (
    <Container className="App">
        {data &&
          data.data.message.map(({ id, title, description, image }) => (
            <Row key={id}>
              <Col>
              <Card >
                <Card.Img src={image} alt={title} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          ))}
      
    </Container>
    
  );
}

