import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react"
import { getUser } from "../../../services/apiService"
import TableListUser from "../Table/TableListUser";
const ManageUser = (props) => {
     const [showModalCreateUser, setShowModalCreateUser] = useState(false);
     const handleShowHide = (value) => {
          setShowModalCreateUser(value);
     }
     const [listUser, setListUser] = useState([])
     useEffect(() => {
          fetchData()
     }, [])

     const fetchData = async () => {
          let res = await getUser();
          console.log(res);
          if (res && res.EC === 0) {
               setListUser(res.DT)
          }
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
                              <TableListUser listUser={listUser} />
                         </div>
                    </div>
                    <ModelCreateUser
                         show={showModalCreateUser}
                         setShow={handleShowHide}
                         fetchData={fetchData}
                    />
               </div>
          </div>
     )
}
export default ManageUser;