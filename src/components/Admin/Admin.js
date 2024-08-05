import SibeBar from "./SibeBar"
import "./Admin.scss"
import { FaBars } from "react-icons/fa"
import { useState } from "react"
import { Outlet } from "react-router-dom"
const Admin = () => {
     const [faBar, setFaBar] = useState(false)
     return (
          <div className="admin-container">
               <div className="admin-sidebar">
                    <SibeBar collapsed={faBar} />
               </div>
               <div className="admin-content">
                    <div className="admin-header">
                         <FaBars onClick={() => setFaBar(!faBar)} />
                    </div>
                    <div className="admin-main">
                         <Outlet />
                    </div>
               </div>
          </div>

     )
}
export default Admin