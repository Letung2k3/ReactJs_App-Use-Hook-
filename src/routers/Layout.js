import User from '../components/User/User'
import Admin from '../components/Admin/Admin'
import HomePage from '../components/Home/HomePage';
import DashBoard from "../components/Admin/ManageUser/DashBoard"
import ManageUser from "../components/Admin/ManageUser/ManageUser"
import Login from '../components/Auth/Login.';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { ToastContainer } from 'react-toastify';
const Layout = (props) => {
     return (
          <>
               <Routes>
                    <Route path='/' element={<App />} >
                         <Route index element={<HomePage />} />
                         <Route path='Users' element={<User />} />
                    </Route>
                    <Route path='/Admins' element={<Admin />}>
                         <Route index element={<DashBoard />} />
                         <Route path='manage-user' element={<ManageUser />} />
                    </Route>
                    <Route path='login' element={<Login />} />
               </Routes>
               <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
               />
               {/* Same as */}
               <ToastContainer />
          </>
     )
}
export default Layout