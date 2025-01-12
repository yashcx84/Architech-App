import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Main2 from '../View/Main2'

export default function Home() {
    return (
        <>

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
                        <button className='button-colored'>Get a Quote</button>
                    </Col>
                </Row>
            </Container>
            <Main2 />
            <Container className='my-5 numberContainer'>
                <Row  >
                    <Row className='my-4'>
                        <h2 className='text-center'>We Take Pride in Our Numbers</h2>
                    </Row>

                    <Row className='d-flex gap-4'>
                        <Col className='d-flex justify-content-center flex-column align-items number-card'>
                            <h3>25 K</h3>
                            <p className="text-nowrap">World world client</p>
                        </Col>
                        <Col className='d-flex justify-content-center flex-column align-items number-card'>
                            <h3>25 K</h3>
                            <p className="text-nowrap">World world client</p>
                        </Col>
                        <Col className='d-flex justify-content-center flex-column align-items number-card'>
                            <h3>25 K</h3>
                            <p className="text-nowrap">World world client</p>
                        </Col>
                    </Row>

                </Row>

            </Container >
        </>

    )
}
