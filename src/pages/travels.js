import React from 'react'
import { button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../components/slickcarousel/slick.js';
import Head from '../components/Head/head.js';
import Nav from '../components/nav/nav.js';

function Travels() {
    return (
        <div>
            <h1>Travels</h1>
        </div>
    );
}

export default Travels;