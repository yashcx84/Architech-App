import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Home from './View/Home'
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';


export default function Footer() {
    return (
        <>
            <Container className='my-3'>
                <Row sm={2} xs={2} md={4}>
                    <Col>
                        <h2>ArchiTech</h2>
                        <div>
                            1234-322-344 <br />
                            info@mysite.Com<br />
                            12 patel nagar,jaipur<br />rajasthan(302015)

                        </div>

                    </Col>
                    <Col className='d-grid'>
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>

                    </Col>
                    <Col>
                        <strong>Subscribe for more updates</strong>
                        <form>
                            <label>Email :</label><br />
                            <input type='text' /><br />
                            <button className='btn btn-primary my-2'>submit</button>
                        </form>
                    </Col>
                    <Col>

                        <strong>follow us on </strong>
                        <div className='d-flex'>
                            <a className='m-1' href='#'><FiTwitter /></a>
                            <a className='m-1' href='#'><FiFacebook /></a>
                            <a className='m-1' href='#'><FiInstagram /></a>
                            <a className='m-1' href='#'><FiLinkedin /></a>

                        </div>



                        <div className='mt-3'>
                            @2024 by ArchiTech
                            powered and secured by wetech
                        </div>

                    </Col>

                </Row>



            </Container>


        </>
    )
}
