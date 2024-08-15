
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = (props) => {
     const isAuthenticated = useSelector(state => state.user.isAuthenticated)
     console.log(`>>Check state from redux isAuthenticated:${isAuthenticated}`)
     const navigate = useNavigate();
     const handleBtnLogin = () => {
          navigate('/login')
     }
     const handleBtnRegister = () => {
          navigate('/signup')
     }
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
                              {isAuthenticated === false
                                   ?
                                   <>
                                        <button className='btn-login' onClick={handleBtnLogin}>Log in</button>
                                        <button className='btn-signup' onClick={handleBtnRegister} >Sign up</button>
                                   </>
                                   :
                                   <NavDropdown title="Setttings " id="collapsible-nav-dropdown">
                                        <NavDropdown.Item > Log out</NavDropdown.Item>
                                        <NavDropdown.Item >Another</NavDropdown.Item>
                                   </NavDropdown>
                              }
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
}

export default Header;