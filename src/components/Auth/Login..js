import './Login.scss'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { postUserLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { FaSpinner } from "react-icons/fa";
const Login = (props) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [isLoading, setIsLoading] = useState(false)
     const navigate = useNavigate();
     const dispatch = useDispatch()
     const validateEmail = (email) => {
          return String(email)
               .toLowerCase()
               .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               );
     };
     const handleLogin = async () => {

          const isValidEmail = validateEmail(email);
          if (!isValidEmail) {
               toast.error("Invalid email!");
               return;
          }
          if (!password) {
               toast.error('Invalid password!');
               return;
          }
          setIsLoading(true)
          let res = await postUserLogin(email, password)
          if (res.EC === 0) {
               dispatch(
                    doLogin(res)
               )
               await toast.success(res.EM);
               setIsLoading(false)
               // navigate('/')
          }
          else if (res.EC !== 0) {
               await toast.error(res.EM)
               setIsLoading(false)
               return;
          }
     }
     return (
          <div className="login-container">
               <div className="login-header">
                    Don't have an account yet?
                    <button className='btn-signup' onClick={() => navigate('/signup')}>Sign up</button>
               </div>
               <div className="login-tilte col-3 mx-auto">
                    My Website
               </div>
               <div className="login-welcome col-3 mx-auto">
                    hello, Who's this?
               </div>
               <div className="login-content-form col-3 mx-auto">
                    <div className="form-group">
                         <label className='form-label'>Email</label>
                         <input
                              type={"email"}
                              className="form-control"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                         />
                    </div>
                    <div className="form-group">
                         <label className='form-label'>Password</label>
                         <input
                              type={"password"}
                              className="form-control"
                              value={password}
                              onChange={(event) => setPassword(event.target.value)}
                         />
                    </div>
                    <span className='forgot-password'>Forgot password?</span>

                    <button className='form-btn-login'
                         onClick={() => handleLogin()}
                         disabled={isLoading}
                    >

                         {isLoading === true && <FaSpinner className="icon-spin" />}
                         <span>Login with TypeForm</span>
                    </button>
                    <span className='text-center' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                         &#62;&#62; Go to homepage
                    </span>
               </div>
          </div>
     )
}
export default Login