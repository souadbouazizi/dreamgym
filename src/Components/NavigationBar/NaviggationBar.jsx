import React, { useState, useEffect } from 'react';
import './NavigationBar.css';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Assets/images/logo.png';
import PurpleBtn from '../PurpleBtn/PurbleBtn'

function NavigationBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Le seuil peut être ajusté
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${
        isSticky ? 'sticky-top navbar-dark bg-dark shadow' : 'position-absolute navbar-light bg-transparent'
      } w-100 py-3`}
    >
      <Container>
        <motion.a
          className="navbar-brand"
          href="/"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={Logo} alt="Logo" className="logo-img" />
        </motion.a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <motion.ul
            className="navbar-nav me-auto justify-content-end w-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Nav.Link href="#" className="text-light text-uppercase">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-light text-uppercase">
              About
            </Nav.Link>
            <Nav.Link href="#features" className="text-light text-uppercase">
              Features
            </Nav.Link>
            <Nav.Link href="#plans" className="text-light text-uppercase">
              Plans
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light text-uppercase">
              Contact
            </Nav.Link>
          </motion.ul>
          <motion.div
            className="ms-0 ms-lg-2 mt-lg-0 col-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >

            <PurpleBtn btnTitle="join now" />
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
