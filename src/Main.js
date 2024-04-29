import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Main() {
    return (
        <Container className='main'>
            <Row>
                <Col>
                    <h1>We Build Incredible Architecture</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Experience Architectural agency that will help you <span>designing a mordern dream house.</span></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>Get a Quote</button>
                </Col>
            </Row>
        </Container>
    )
}
