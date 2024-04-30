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
                        <button>Get a Quote</button>
                    </Col>
                </Row>
            </Container>
            <Main2 />
            <Container className='my-5'>
                <Row  >
                    <Row className='my-4'>               
                             <h2 className='text-center'>We Take Pride in Our Numbers</h2>
                    </Row>

                    <Row className='d-flex justify-content-space'>
                        <Col style={{ display: 'grid', 'justify-items': 'center', whiteSpace: "nowrap" }}>
                            <h3>25 K</h3>
                            <p className="border-bottom border-dark text-nowrap">Wirld wide clinte</p>
                        </Col>
                        <Col style={{ display: 'grid', 'justify-items': 'center', whiteSpace: "nowrap" }}>
                            <h3>25 K</h3>
                            <p className="border-bottom border-dark text-nowrap">Wirld wide clinte</p>
                        </Col>
                        <Col style={{ display: 'grid', 'justify-items': 'center', whiteSpace: "nowrap" }}>
                            <h3>25 K</h3>
                            <p className="border-bottom border-dark text-nowrap">Wirld wide clinte</p>
                        </Col>
                        <Col style={{ display: 'grid', 'justify-items': 'center', whiteSpace: "nowrap" }}>
                            <h3>25 K</h3>
                            <p className="border-bottom border-dark text-nowrap">Wirld wide clinte</p>
                        </Col>
                        <Col style={{ display: 'grid', 'justify-items': 'center', whiteSpace: "nowrap" }}>
                            <h3>25 K</h3>
                            <p className="border-bottom border-dark text-nowrap">Wirld wide clinte</p>
                        </Col></Row>

                </Row>

            </Container >
        </>

    )
}
