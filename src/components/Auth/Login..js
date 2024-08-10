import './Login.scss'
import { useState } from 'react';
const Login = (props) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     return (
          <div className="login-container">
               <div className="login-header">
                    Don't have an account yet?
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

                    <button className='form-btn-login'>Login with TypeForm</button>
               </div>
          </div>
     )
}
export default Login