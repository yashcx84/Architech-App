import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Main2() {
    return (
        <Container className='main2' fluid>
            <Row>
                <Col>
                    <Image fluid className='w-100' src={require("../Images/arc1.jpg")} />
                </Col>
                <Col>
                    <Row>
                        <h2>We Provide best quality services for you.</h2>
                    </Row>
                    <Row>
                        <p>As we most popular architech agency, it's not any secret about the quality that we deliver to you and we have made, you feel like premium.</p>
                    </Row>
                    <Row>
                        <Col>
                            <button>Explore Now ↗</button>
                        </Col>
                        <Row className='py-4'>
                            <Col>
                                <Image fluid className='img w-100' src={require('../Images/arc2.jpg')} />
                            </Col>
                            <Col>
                                <Image fluid className='img w-100' src={require('../Images/arc3.jpg')} />
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
