import "./App.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


import axios from "axios";
import { useQuery } from "react-query";

export default function App() {
  const { data } = useQuery("posts", () =>
    axios("https://628d4fd9a339dfef8798e164.mockapi.io/Hazard")
  );
  return (
    <Container fluid className="App">
    <form>
      <Row>
        <Col>
          <label>
            <input accept="image/*" id="icon-button-file" type="file" capture="environment"/>
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>
            <input type="text" name="name" />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </Col>
      </Row>
    </form>
      <h1>API Posts</h1>
        {data &&
          data.data.map(({ id, title, description, image }) => (
            <Row>
              <Col>
              <Card>
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
                <div key={id}>
                  <img ></img>
                  <h3></h3>
                </div>
              </Col>
            </Row>
          ))}
      
    </Container>
    
  );
}
