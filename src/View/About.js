import React from 'react'
import { Container,Row, Col, Image } from 'react-bootstrap'

export default function About() {
  return (
   <>
   <Container>

    <h2>Who we are</h2>

    <Row xs={1} md={2}>
      <Col>Welcome to our architectural realm, where innovation meets aesthetics and functionality intertwines with creativity. At ArchiTech, we craft spaces that transcend mere structures, embodying stories, dreams, and aspirations. With a commitment to excellence, our team of seasoned architects, designers, and visionaries collaborates seamlessly to bring your ideas to life. From conceptualization to realization, we thrive on transforming visions into tangible marvels, harmonizing form and function to redefine spatial experiences</Col>
      <Col><Image src={require('../Images/arc1.jpg')} width={'100%'}></Image></Col>
    </Row>





   </Container>
   
   
   
   
   </>
  )
}
