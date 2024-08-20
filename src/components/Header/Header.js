
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { persistor } from '../../redux/store';
import { doLogout } from '../../redux/action/userAction';
const Header = (props) => {
     const isAuthenticated = useSelector(state => state.user.isAuthenticated);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const handleBtnLogin = () => {
          navigate('/login')
     }
     const handleBtnRegister = () => {
          navigate('/signup')
     }
     const handleLogout = () => {
          // Xóa dữ liệu đã lưu từ redux-persist
          persistor.purge().then(() => {
               // Gọi hành động đăng xuất Redux
               dispatch(doLogout());

               // Chuyển hướng đến trang chính
               navigate('/');
          });
     };
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
                                        <NavDropdown.Item onClick={handleLogout} > Log out</NavDropdown.Item>
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