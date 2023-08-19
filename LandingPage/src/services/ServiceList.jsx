import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

/* */
import WeatherImg from './../assets/img/Weather.png'
import GuideImg from './../assets/img/GuideImg.jpg'
import CustomizationImg from './../assets/img/Customization.png'


const servicesData =[
   
    {
        imgUrl: WeatherImg,
        title: 'Calculate Weather',
        desc: 'abc'
    }, {
        imgUrl: GuideImg,
        title: 'Best Tour Guides',
        desc: 'abc'
    }, {
        imgUrl: CustomizationImg,
        title: 'Customization',
        desc: 'abc'
    }
]


const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item,index)=> <Col lg='3' key={index}><ServiceCard item={item} /></Col>)
    }
    </>
    )
}

export default ServiceList