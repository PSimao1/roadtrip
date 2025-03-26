import React from 'react'
import { button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../components/slickcarousel/slick.js';
import Head from '../components/Head/head.js';
import Nav from '../components/nav/nav.js';

function Index() {
  return (


    <Container className="Header">


  
      <Head/>

      <Row>

        <Col md={4}></Col>
        <Col md={4} className="d-none d-md-block">
          <hr></hr>
        </Col>
        <Col md={4}></Col>
      </Row>

      <h1 className="Title">Ils y sont allés, ils nous en parlent </h1>
      <SimpleSlider />

      <div className="mainText">
            <Row >
                <Col>
                    <h1>Bienvenue sur RoadTrip France</h1>
                    <p>le site dédié aux amoureux de la route et de l'aventure en van ! Ici, on partage conseils, itinéraires et bons plans pour explorer la France autrement, en toute liberté.
                        voyager en van, c’est bien plus qu’un simple moyen de transport : c’est un mode de vie ! Ce site a été créé pour :</p>
                </Col>
            </Row>
            <Row className="mainTextElements">
                <Col md={6} className="mainTextTitle">🚐 Inspirer</Col>
                <Col md={6}> Proposer des idées de road trips et des destinations incontournables en France.</Col>
            </Row>
            <Row className='mainTextElements'>
                <Col md={6} className="mainTextTitle">📍 Guider </Col>
                <Col md={6}> Offrir des itinéraires détaillés, des conseils pratiques et des spots où s’arrêter.</Col>
            </Row>
            <Row className='mainTextElements'>
                <Col md={6} className="mainTextTitle">🔧 Préparer</Col>
                <Col md={6}> Aider à organiser son voyage avec des astuces sur l’équipement, le budget et la vie en van.</Col>
            </Row>
            <Row>
                <Col md={12} className='mainTextElements'>Que tu sois un aventurier débutant ou un passionné de vanlife, ce site est là pour t’accompagner sur la route !</Col>
            </Row>
        </div>

        <Nav/>
      
    </Container>

  )
};

export default Index;