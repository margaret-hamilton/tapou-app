import "../App.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="App">
      <Row key={4}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Registro Enviado!</Card.Title>
              <Card.Text>
                Obrigado por seu envio. Ele estará disponível para os outros
                usuários!
              </Card.Text>
              <Row>
                <Col>
                  <Button variant="primary">
                    <Link to="/">Voltar ao início</Link>
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
