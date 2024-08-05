
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
     return (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
               <Container>
                    <NavLink to="/" expand="lg" className="navbar-brand">React-Bootstrap</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="me-auto">
                              <NavLink to="/" className="nav-link">Home</NavLink>
                              <NavLink to="/Users" className="nav-link">User</NavLink>
                              <NavLink to="/Admins" className="nav-link">Admin</NavLink>
                         </Nav>
                         <Nav>
                              <button className='btn-login'>Log in</button>
                              {/* <NavDropdown title="Setttings " id="collapsible-nav-dropdown">
                                   <NavDropdown.Item >Log in</NavDropdown.Item>
                                   <NavDropdown.Item > Log out</NavDropdown.Item>
                                   <NavDropdown.Item >Another</NavDropdown.Item>
                              </NavDropdown> */}
                              <button className='btn-signup'>Sign up</button>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
}

export default Header;