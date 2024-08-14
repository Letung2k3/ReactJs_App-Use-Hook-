import './Login.scss'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { postUserRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import './Login.scss'
const Register = (props) => {
     const [email, setEmail] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [confirm, setConfirm] = useState("");
     const navigate = useNavigate();
     const [isShowPassword, setIsShowPassword] = useState(false)
     const validateEmail = (email) => {
          return String(email)
               .toLowerCase()
               .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               );
     };
     const handleRegister = async (e) => {
          e.preventDefault();
          if (password !== confirm) {
               toast.error('Passwords do not match!');
               return;
          }
          try {
               const isValidEmail = validateEmail(email);
               if (!isValidEmail) {
                    toast.error("Invalid email!");
                    return;
               }
               if (!password) {
                    toast.error('Invalid password!');
                    return;
               }
               // Make API call
               let data = await postUserRegister(email, password, username);

               if (data.EC === 0) {
                    toast.success(data.EM);
                    navigate('/login'); // Navigate to login on success
               } else {
                    toast.error(data.EM); // Show error toast if registration fails
               }
          } catch (error) {
               toast.error('An error occurred during registration.');
               console.error('Registration error:', error);
          }
     }
     return (
          <div className="Register-container">
               <div className="Register-tilte col-3 mx-auto">
                    My Website
               </div>
               <div className="Register-welcome col-3 mx-auto">
                    hello, Who's this?
               </div>
               <div className="Register-content-form col-3 mx-auto">
                    <div className="form-group">
                         <label className='form-label'>Email (*)</label>
                         <input
                              type={"email"}
                              className="form-control"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                         />
                    </div>
                    <div className="form-group">
                         <label className='form-label'>Username (*)</label>
                         <input
                              type={"email"}
                              className="form-control"
                              value={username}
                              onChange={(event) => setUsername(event.target.value)}
                         />
                    </div>
                    <div className="form-group pass-group">
                         <label className='form-label'>Password (*)</label>
                         <input
                              type={isShowPassword ? 'text' : 'password'}
                              className="form-control"
                              value={password}
                              onChange={(event) => setPassword(event.target.value)}
                         />
                         {isShowPassword ?
                              <spam className='icons-eye' onClick={() => setIsShowPassword(false)}>
                                   <VscEye />
                              </spam>
                              :
                              <spam className='icons-eye' onClick={() => setIsShowPassword(true)}>
                                   <VscEyeClosed />
                              </spam>

                         }
                    </div>
                    <div className="form-group">
                         <label className='form-label'>Confirm</label>
                         <input
                              type={"password"}
                              className="form-control"
                              value={confirm}
                              onChange={(event) => setConfirm(event.target.value)}
                         />
                    </div>

                    <button type="submit" className='form-btn-Register' onClick={(e) => handleRegister(e)}>Register with TypeForm</button>
                    <span className='text-center' style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>
                         &#62;&#62; Go to Login
                    </span>
               </div>
          </div>
     )
}
export default Register