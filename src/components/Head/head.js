import React from 'react'
import { button, Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Head() {
    return (
        <div>
                  <Row>
        <Col md={4} className="d-none d-md-block" >
          <input type="text" placeholder="Search" className="search"></input>
        </Col>
        <Col sm={12} md={4} className='Logo'><img className="Logoimg" src="./assets/logo.png" ></img></Col>
        <Col md={4} className="d-none d-md-block">
          <a className="HeaderRight"><button className="Btn" onClick={() => { window.location.href = "/login" }}>Login Register</button></a>
          <a className="HeaderRight"><FontAwesomeIcon className="svg" icon={faFacebook} /></a>
          <a className="HeaderRight"><FontAwesomeIcon className="svg" icon={faInstagram} /></a>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="d-none d-md-block" ><button className='btnNav leftBtn Btn'>Nos Voyages</button> </Col>
        <Col md={3} className="d-none d-md-block" ><button className='btnNav leftBtn Btn'>Nos Services</button> </Col>
        <Col md={3} className="d-none d-md-block" ><button className='btnNav rightBtn Btn'>Nous Contacter</button> </Col>
        <Col md={3} className="d-none d-md-block" ><button className='btnNav rightBtn Btn'>Bien se préparer</button> </Col>
      </Row>
        </div>
    )
}
export default Head;