import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Services() {
  return (
   <Container>

    <h1 className='my-3' style={{fontFamily:'var(--font-head)'}}>Our services</h1>
    <h5 className='my2'>Let’s grow your business together.</h5>
    <Row className='mt-5'>
        <Row className='mx-5 p-5 d-flex align-item-center' style={{borderTop:"2px solid"}}>
            <Col className='d-flex justify-content-end'>
            logo
            </Col>
            
            <Col className='text-center'><h5>this is trial text</h5>
            <p>this sis snoth</p>
            </Col>
            <Col className='text-center'>
            <strong>$ 80</strong>
            </Col>
            <Col className='text-left'>
            <button className='rounded '>get service</button>
            </Col>

        </Row>
        <Row className='mx-5 p-5 d-flex align-item-center' style={{borderTop:"2px solid"}}>
            <Col className='d-flex justify-content-end'>
            logo
            </Col>
            
            <Col className='text-center'><h5>this is trial text</h5>
            <p>this sis snoth</p>
            </Col>
            <Col className='text-center'>
            <strong>$ 80</strong>
            </Col>
            <Col className='text-left'>
            <button className='rounded '>get service</button>
            </Col>

        </Row>
        <Row className='mx-5 p-5 d-flex align-item-center' style={{borderTop:"2px solid"}}>
            <Col className='d-flex justify-content-end'>
            logo
            </Col>
            
            <Col className='text-center'><h5>this is trial text</h5>
            <p>this sis snoth</p>
            </Col>
            <Col className='text-center'>
            <strong>$ 80</strong>
            </Col>
            <Col className='text-left'>
            <button className='rounded '>get service</button>
            </Col>

        </Row>
       


       
    </Row>







   </Container>
  )
}
