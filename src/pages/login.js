import React from 'react'
import { button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import Head from '../components/Head/head.js';
import Nav from '../components/nav/nav.js';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Login() {

  const [toggled, setToggled] = useState(false);
  
  return (<Container className="Header">



    <Head />

    <Row>

      <Col md={4}></Col>
      <Col md={4} className="d-none d-md-block">
        <hr></hr>
      </Col>
      <Col md={4}></Col>
    </Row>
    <div className="mainText d-none d-md-block">
      <Row>
        <Col md={6}>
          <h1>Se connecter</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Adresse Mail</Form.Label>
              <Form.Control type="email" placeholder="abcdefg@xyz.com" />
              <Form.Text className="text-muted">
              </Form.Text>

              <Form.Label>Mot de Passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" />
              <Form.Text className="text-muted ">
              </Form.Text>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Se souvenir de moi" />
              </Form.Group>

            </Form.Group>

            <button className='Btn' variant="primary" type="submit">
              Se connecter
            </button>
          </Form>
        </Col>
        <Col md={6}>
          <h1>S'enregistrer</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Ecrivez votre nom" />
              <Form.Text className="text-muted">
              </Form.Text>

              <Form.Label>Adresse Mail</Form.Label>
              <Form.Control type="email" placeholder="abcdefg@xyz.com" />
              <Form.Text className="text-muted">
              </Form.Text>


              <Form.Label>Mot de Passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" />
              <Form.Text className="text-muted ">
              </Form.Text>


              <Form.Label>Repetez votre Mot de Passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" />
              <Form.Text className="text-muted ">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="J'accepte les conditions" />
            </Form.Group>

            <button className='Btn' variant="primary" type="submit">
              S'enregistrer
            </button>
          </Form>
        </Col>
      </Row>
    </div>

    <div className='d-md-none d-block'>

      <div className="mainTextMobile">
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
      <button className={`toggleBtn ${toggled ? 'toggled' : ''}`} onClick={() => setToggled(!toggled)}>

            <div className="thumb">

            </div>
          </button>
      </Col>
      <Col md={4}></Col>
       
      </Row>

        <Row>

        {toggled ? (
            <Col md={6}>
              <h1 className='titleLog'>S'enregistrer</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Ecrivez votre nom" />
                  <Form.Label>Adresse Mail</Form.Label>
                  <Form.Control type="email" placeholder="abcdefg@xyz.com" />
                  <Form.Label>Mot de Passe</Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe" />
                  <Form.Label>Repetez votre Mot de Passe</Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe" />
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="J'accepte les conditions" />
                  </Form.Group>
                  <button className='Btn' variant="primary" type="submit">
                    S'enregistrer
                  </button>
                </Form.Group>
              </Form>
            </Col>
          ) : (
            <Col md={6}>
              <h1 className='titleLog'>Se connecter</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Adresse Mail</Form.Label>
                  <Form.Control type="email" placeholder="abcdefg@xyz.com" />
                  <Form.Label>Mot de Passe</Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe" />
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Se souvenir de moi" />
                  </Form.Group>
                  <button className='Btn' variant="primary" type="submit">
                    Se connecter
                  </button>
                </Form.Group>
              </Form>
            </Col>
          )}

        </Row>
      </div>
    </div>

    <Nav />
  </Container>);
}

export default Login;