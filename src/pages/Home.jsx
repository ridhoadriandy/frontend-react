//import component Bootstrap React
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Home(props) {
  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>EXPRESS.JS + VUE.JS</h1>
              <p className="lead">
                Tutorial FullStack Express.js dan React.js oleh <strong>SantriKoding.com</strong>
              </p>
              <Button href="http://santrikoding.com" target="_blank" variant="primary" size="lg">
                SELENGKAPNYA
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
