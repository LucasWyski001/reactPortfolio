import {useState} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import contactImg from '../assets/img/contactImg.svg'
export const Contact = () =>{
    return(
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact image' />
                    </Col>

                    <Col md={6}>
                        <h2>Get In Touch With Me Here!</h2>
                        <form action='https://getform.io/f/e40e5218-e871-4716-a2fe-eecd106930f8' method='POST'>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' name='name' placeholder='First Name' />
                                </Col>
                                <Col sm={6} className='px-1'>
                                <input type='text' name='name' placeholder='Last Name' />
                                </Col>
                                <Col sm={6} className='px-1'>
                                <input type='email' name='email' placeholder='Email' />
                                </Col>
                                <Col sm={6} className='px-1'>
                                <input type='tel' name='number' placeholder='Phone #' />
                                </Col>

                                <Col>
                                <textarea row="6"  placeholder='Message'></textarea>
                                <button type='submit'><span>Submit</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}