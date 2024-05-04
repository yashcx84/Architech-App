import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Nav({ toggleLightMode }) {
  return (
    <Container >
      <Row className="nav">
        <Col>
          <h2>Archi<span>Tech</span></h2>
        </Col>
        <Col>
          <div className='nav-items'>
            <Col className='nav-item'>
              <NavLink to="/" activeClassname="active">Home</NavLink>
            </Col>
            <Col className='nav-item'>
              <NavLink to="/Work" activeClassname="active">Our Work</NavLink>
            </Col>
            <Col className='nav-item'>
              <NavLink to="/Services" activeClassname="active">Services</NavLink>
            </Col>
            <Col className='nav-item'>
              <NavLink to="/About" activeClassname="active">About</NavLink>
            </Col>
          </div>
        </Col>
        <Col className='nav-buttons'>
          <button onClick={toggleLightMode}>◐</button>
          <button className='button-black'>Let's Talk</button>
        </Col>
      </Row>
    </Container>  
  );
}
