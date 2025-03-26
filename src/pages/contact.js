import React from 'react'
import { Form, button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import Head from '../components/Head/head.js';
import Nav from '../components/nav/nav.js';

function Contact() {
    
    return (
        <Container>
            <Row>
                <Head />
                <Col md={4}></Col>
                <Col md={4} className="d-none d-md-block">
                    <hr></hr>
                </Col>
                <Col md={4}></Col>
            </Row>
            <h1 className="Title">Comment nous contacter ?</h1>

            <div className="mainText">
                <Row>
                    <Col md={5}>
                    <h1 className='titleContact'>Formulaire</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Ecrivez votre nom" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                                
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" placeholder="Ecrivez votre prénom" />
                                <Form.Text className="text-muted">
                                </Form.Text>

                                <Form.Label>Mail</Form.Label>
                                <Form.Control type="text" placeholder="Ecrivez votre mail" />
                                <Form.Text className="text-muted">
                                </Form.Text>

                                <Form.Label>Téléphone</Form.Label>
                                <Form.Control type="text" placeholder="Ecrivez votre Téléphone" />
                                <Form.Text className="text-muted ">
                                </Form.Text>

                            </Form.Group>

                            <Form.Group>
                                
                            <Form.Label>Votre message</Form.Label>
                                <Form.Control as={'textarea'} type="text" placeholder="Ecrivez votre message" rows={4} />
                                
                                <Form.Text className="text-muted message">
                                </Form.Text>
                            </Form.Group>

                            <button variant="primary" type="submit">
                                Submit
                            </button>
                        </Form>
                    </Col>

                    <Col md={2}>
                        <br></br>
                    </Col>

                    <Col md={5}>
                    <h1 className='titleContact'>Informations</h1>
            <div className='manualContact'>
                    <p>123 rue de la route 75000 Paris</p>
                    <p>assistance@roadtrip.fr</p>
                    <p>02 43 23 97 54</p>
                    </div>
                    </Col>

                </Row>
            </div>

            <Nav />
        </Container>
    );
}

export default Contact;