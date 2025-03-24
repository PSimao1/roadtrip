import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from 'react-bootstrap';
import StarRate from '../starRating/starRating.js'; 
import '../../App.css';


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className="mt-5">
      <div >
        <h3 className="cardslot"><Card>
          <Card.Img className="card_img" src="/assets/villes/collioure.jpg" />
          <Card.Title>Collioure</Card.Title>
          <Card.Text className='etoiles'><StarRate starNumber={5} /></Card.Text>
        </Card></h3>
      </div>
      <div>
        <h3 className="cardslot"><Card>
          <Card.Img className="card_img resize" src="./assets/villes/mimizan.webp" />
          <Card.Title>Mimizan</Card.Title>
          <Card.Text className='etoiles'><StarRate starNumber={3} /></Card.Text>
        </Card></h3>
      </div>
      <div>
        <h3 className="cardslot"><Card>
          <Card.Img className="card_img" src="./assets/villes/saint-malo.jpg" />
          <Card.Title>Saint-Malo</Card.Title>
          <Card.Text className='etoiles'><StarRate starNumber={3} /></Card.Text>
        </Card></h3>
      </div>
      <div>
        <h3 className="cardslot"><Card>
          <Card.Img className="card_img" src="./assets/villes/marseille.jpg" />
          <Card.Title>Marseille</Card.Title>
          <Card.Text className='etoiles'><StarRate starNumber={2} /></Card.Text>
        </Card></h3>
      </div>
      <div>
        <h3 className="cardslot"><Card>
          <Card.Img className="card_img resize" src="./assets/villes/pornic.jpg" />
          <Card.Title>Pornic</Card.Title>
          <Card.Text className='etoiles'><StarRate starNumber={5} /></Card.Text>
        </Card></h3>
      </div>
    </Slider>
  );
}