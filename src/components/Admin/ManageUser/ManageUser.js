import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableListUser from "../Table/TableListUser";
const ManageUser = (props) => {
     const [showModalCreateUser, setShowModalCreateUser] = useState(false);
     const handleShowHide = (value) => {
          setShowModalCreateUser(value);
     }
     return (
          <div className="manage-user-container">
               <div className="title">
                    Manage User
               </div>
               <div className="user-content">
                    <div className="btn-add-new">
                         <button className="btn btn-warning" onClick={() => setShowModalCreateUser(true)}><FcPlus />Create new user</button>
                    </div>
                    <div className="table-user-container">
                         <div className="table">
                              <TableListUser />
                         </div>
                    </div>
                    <ModelCreateUser
                         show={showModalCreateUser}
                         setShow={handleShowHide}
                    />
               </div>
          </div>
     )
}
export default ManageUser;