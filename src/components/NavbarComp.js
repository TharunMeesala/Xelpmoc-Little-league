import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavbarComp() {
  return (
    <div > 
<Navbar collapseOnSelect expand="md" variant="dark" style={{backgroundColor:'#191970'}}> 
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Resources For : Parents" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Parents</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Coaches
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Umpires</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               League Officials
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
               District Admins
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Play Little League</Nav.Link>
            <Nav.Link href="#pricing">Playing Rules</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Player Safety</Nav.Link>
            <Nav.Link href="#deets">League Finder</Nav.Link>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Event Calender
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Who We Are</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Media Center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
              Partnerships
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
               Shop
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
