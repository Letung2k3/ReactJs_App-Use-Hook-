import SibeBar from "./SibeBar"
import "./Admin.scss"
import { FaBars } from "react-icons/fa"
import { useState } from "react"
const Admin = () => {
     const [faBar, setFaBar] = useState(false)
     return (
          <div className="admin-container">
               <div className="admin-sidebar">
                    <SibeBar collapsed={faBar} />
               </div>
               <div className="admin-content">
                    <FaBars onClick={() => setFaBar(!faBar)} />
               </div>
          </div>

     )
}
export default Admin