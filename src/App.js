import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Services from './screens/Services';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Row className='nav'>
        <Col>
          <h2>Archito</h2>
        </Col>
        <Col>
          <Row className='nav-items'>
            <Col>
            <a href='/Services' >hime</a>
            
            
            </Col>
            <Col>Our Work</Col>
            <Col>Services</Col>
            <Col>About</Col>
            <Col>
              <button>Let's Talk</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
