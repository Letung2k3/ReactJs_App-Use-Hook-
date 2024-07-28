import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const Header = () => {
     return (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
               <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="me-auto">
                              <NavLink to="/" className="nav-link">Home</NavLink>
                              <NavLink to="/Users" className="nav-link">User</NavLink>
                              <NavLink to="/Admins" className="nav-link">Admin</NavLink>
                         </Nav>
                         <Nav>
                              <NavDropdown title="Setttings " id="collapsible-nav-dropdown">
                                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.2">
                                        Another action
                                   </NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                   <NavDropdown.Divider />
                                   <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                   </NavDropdown.Item>
                              </NavDropdown>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
}

export default Header;