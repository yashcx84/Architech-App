import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <Container>
      <Row className='nav'>
        <Col>
          <h2>ArchiTech</h2>
        </Col>
        <Col>
          <Row className='nav-items'>
            <Col>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </Col>
            <Col>
              <NavLink to="/Work" activeClassName="active">Our Work</NavLink>
            </Col>
            <Col>
              <NavLink to="/Services" activeClassName="active">Services</NavLink>
            </Col>
            <Col>
              <NavLink to="/About" activeClassName="active">About</NavLink>
            </Col>
            <Col>
              <button>Let's Talk</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
