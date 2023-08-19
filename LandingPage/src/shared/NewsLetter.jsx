import React from 'react'
import './NewsLetter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/img/male-tourist.png'


function NewsLetter() {
  return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful travelling information.</h2>
                            <div className="newsletter__input">
                                <input type="email" name="" id="" placeholder='Enter Your Email' />
                                <button className="btn newsletter__btn">Subscribe</button>
                            </div>
                            
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio consectetur tenetur sint, architecto rem. Mollitia dolorem maxime quo similique aut repellat? Nisi excepturi id asperiores similique minima. Saepe unde voluptate quis.</p>

                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewsLetter