import React from "react";
import "./../styles/Home.css";
import SearchBar from "../shared/SearchBar";

import { Container , Row, Col} from "reactstrap";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured tours/FeaturedTourList";
import experienceImg from '../assets/img/experience.png'
import MasonnyImagesGallery from "../Image-gallery/MasonnyImagesGallery";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
    <section className="fir-sec">
    <div className="hero_section">
      <div className="subtitle">
        <div className="sub-a">Discover the Colorful World</div>
        <div className="sub-b">Let us take you away</div>
      </div>
      <SearchBar />
    </div>
    </section>
    {/* ------------------------------- */}
    <section className="sec-sec">
      <Container>
        <Row className="serve">
          <Col lg='3'>
            <h5 id="ser_sub">What we serve</h5>
            <h2  id="ser_title">We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* ----------------------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h6>Explore</h6>
            <h2 className="featured__tour-title">Our Featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ----------------------------------- */}
    
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <h6>Experience</h6>
              <h2>With all our experiences <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus deserunt illo explicabo, iusto excepturi maiores aspernatur accusantium. Ipsa architecto laboriosam adipisci voluptatibus asperiores voluptatum vitae qui est repudiandae nulla?</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>15k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
                <div className="experience__img">
                  <img src={experienceImg} alt="" />
                </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ----------------------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <h6>Gallery</h6>
          <h2 className="gallery__title">Visit our Customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonnyImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ----------------------------------- */}
    <NewsLetter />

    </>
  );
};

export default Home;
