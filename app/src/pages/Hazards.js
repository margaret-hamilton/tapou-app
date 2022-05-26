import "../App.css";

import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useQuery } from "react-query";

export default function Hazards() {
  const { data } = useQuery("message", () =>
    axios("http://localhost:3001/hazards")
  );

  return (
    <Container className="App">
      {data &&
        data.data.message.map(({ id, title, description, image }) => (
          <Row key={id}>
            <Col>
              <Card>
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
