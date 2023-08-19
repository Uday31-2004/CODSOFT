import React from 'react';
import './Header.css'
import {Container, Row, Col, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom';

const nav__links=[
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/',
    display: 'About'
  },
  {
    path: '/',
    display: 'Tours'
  },
]


const Header = () => {
  return (
    <header className='header'>
     <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2>Destino</h2>
          </div>
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item,index)=>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active__link' : ""}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="nav__right d-flex align-items-center gap-10">
            <div className="nav__btns d-flex align-items-center gap-5">
              <Button className='btn secondary__btn'><Link to="/">Login</Link></Button>
              <Button className='btn primary__btn'><Link to="/">Register</Link></Button>
            </div>
            <span className='mobile__menu '>
              <i className='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </Row>
     </Container>
    </header>

  )
}

export default Header