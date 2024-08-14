import './Login.scss'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { postUserLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
const Login = (props) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();
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
          let res = await postUserLogin(email, password)
          if (res.EC === 0) {
               await toast.success(res.EM);
               navigate('/Admins')
          }
          else if (res.EC !== 0) {
               await toast.error(res.EM)
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

                    <button className='form-btn-login' onClick={() => handleLogin()}>Login with TypeForm</button>
                    <span className='text-center' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                         &#62;&#62; Go to homepage
                    </span>
               </div>
          </div>
     )
}
export default Login