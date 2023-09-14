import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { ResourceList } from './Resourceliast';
import { ResourceInstance } from './ResourceInstance';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import  { About, Home,Version }  from './index';  
import './compo_styles.css'; 
import Footer from '../coman/footer';

export const Parentcomponent = () => {

// https://stackoverflow.com/a/73069241/2132002
const ResourceListWrapper = () => {
  const { resource: resourceName } = useParams();
  return (<ResourceList key={resourceName} />)
}
  

  return (
    <>
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav">
        <Container>
          <Navbar.Brand as={Link} to="/">
            MovieZilla
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='navfontcolor' as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/people">
                People
              </Nav.Link>
              <Nav.Link as={Link} to="/planets">
                Planets
              </Nav.Link>
              <Nav.Link as={Link} to="/species">
              Species
              </Nav.Link>
              <Nav.Link as={Link} to="/vehicles">
                Vehicles
              </Nav.Link>
              <Nav.Link as={Link} to="/starships">
                Starships
              </Nav.Link> 
              <Nav.Link as={Link} to="/films">
                Films
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/version">
                V - 2.1.1 (Stable)
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <div id="CommunityContainer">
        <div className="tabComponent">
          <Routes>
          <Route path="/:resource" element={<ResourceListWrapper />} />
            <Route path="/:resource/:id" element={<ResourceInstance />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/version" element={<Version />} />
            <Route path="/about" element={<About />} />


      
          </Routes>
        </div>
      </div>
    </div>
          <Footer />
</>
  );
}
